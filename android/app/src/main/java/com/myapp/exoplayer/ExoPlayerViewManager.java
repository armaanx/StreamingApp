package com.myapp.exoplayer;

import android.os.Handler;
import android.util.Log;


import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.annotation.OptIn;
import androidx.media3.common.MediaItem;
import androidx.media3.common.Player;
import androidx.media3.common.util.UnstableApi;
import androidx.media3.exoplayer.ExoPlayer;
import androidx.media3.ui.AspectRatioFrameLayout;
import androidx.media3.ui.PlayerView;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.uimanager.events.RCTEventEmitter;

import java.util.Map;

public class ExoPlayerViewManager extends SimpleViewManager<PlayerView> {
    public static  final String REACT_CLASS = "ExoPlayerView";
    private static final String TAG = "ExoPlayerViewManager";

    private ExoPlayer player;
    private PlayerView playerView;
    private ReactContext reactContext;
    private boolean isPlaying = false;
    private Handler handler;

    private final Runnable progressRunnable = new Runnable() {
        @Override
        public void run() {
            if (player != null && isPlaying && player.getPlaybackState() == Player.STATE_READY) {
                WritableMap event = Arguments.createMap();
                event.putDouble("currentTime", player.getCurrentPosition() / 1000.0);
                event.putDouble("duration", player.getDuration() > 0 ? player.getDuration() / 1000.0 : 0);
                sendEvent("onProgress", event);
            }
            if (isPlaying){
                handler.postDelayed(this, 1000);
            }
        }
    };

    @NonNull
    @Override
    public String getName(){
        return REACT_CLASS;
    }

    @NonNull
    @OptIn(markerClass = UnstableApi.class)
    @Override
    public PlayerView createViewInstance(@NonNull ThemedReactContext context){
        Log.d(TAG, "Creating ExoPlayer view instance");
        this.reactContext = context;
        playerView = new PlayerView(context);

        player = new ExoPlayer.Builder(context).build();
        playerView.setPlayer(player);
        playerView.setUseController(false);
        playerView.setResizeMode(AspectRatioFrameLayout.RESIZE_MODE_ZOOM);
        handler = new Handler(player.getApplicationLooper());

        player.addListener(new Player.Listener() {
            @Override
            public void onPlaybackStateChanged(int playbackState){
                Log.d(TAG, "Playback state changed: " + playbackState);
                WritableMap event = Arguments.createMap();
                String state = getPlaybackStateString(playbackState);
                event.putString("state",state);
                if (playbackState == Player.STATE_READY) {
                    sendLoadEvent();
                }
                sendEvent("onPlaybackStateChanged", event);
            }

            @Override
            public void onIsPlayingChanged(boolean playing){
                Log.d(TAG, "Is playing changed: " + playing);
                isPlaying = playing;
                WritableMap event = Arguments.createMap();
                event.putBoolean("isPlaying", playing);
                sendEvent("onIsPlayingChanged", event);
                if (playing) {
                    handler.post(progressRunnable);
                } else {
                    handler.removeCallbacks(progressRunnable);
                }
            }
        });
        return  playerView;
    }

    @Override
    public void onDropViewInstance(@NonNull PlayerView view){
        Log.d(TAG, "Dropping ExoPlayer view instance");
        if (handler != null) {
            handler.removeCallbacks(progressRunnable);
        }
        if (player != null) {
            player.stop();
            player.release();
            player = null;
        }
        if (playerView != null) {
            playerView.setPlayer(null);
        }
        super.onDropViewInstance(view);
    }

    @ReactProp(name = "source")
    public void setSource(PlayerView view, @Nullable String source) {
        if (source != null && player != null) {
            Log.d(TAG, "Setting Source: " + source);
            MediaItem mediaItem = MediaItem.fromUri(source);
            player.setMediaItem(mediaItem);
            player.prepare();
        }
    }
    
    @ReactProp(name = "autoPlay", defaultBoolean = false)
    public void setAutoPlay(PlayerView view, boolean autoPlay) {
        if (player != null) {
            player.setPlayWhenReady(autoPlay);
        }
    }

    @ReactProp(name = "paused", defaultBoolean = true)
    public void setPaused(PlayerView view, boolean paused){
        if(player != null){
            Log.d(TAG, "Setting paused: " + paused);
            player.setPlayWhenReady(!paused);
        }
    }

    @ReactProp(name = "seekTime")
    public void setSeekTime(PlayerView view, double seekTime) {
        if (player != null && seekTime >= 0 && player.isCurrentMediaItemSeekable()) {
            Log.d(TAG, "Seeking to: " + seekTime + "seconds");
            player.seekTo((long) (seekTime * 1000));
        }
    }
    
    @ReactProp(name = "startTime")
    public void setStartTime(PlayerView view, double startTime) {
        if (player != null && startTime > 0) {
            Log.d(TAG, "Setting start time to: " + startTime + " seconds");
            player.seekTo((long) (startTime * 1000));
        }
    }

    @ReactProp(name = "mute", defaultBoolean = false)
    public void setMute(PlayerView view, boolean mute) {
        if (player != null) {
            Log.d(TAG, "Setting Mute: " + mute);
            player.setVolume(mute ? 0 : 1);
        }
    }

    @SuppressWarnings("deprecation")
    @Override
    public Map<String, Object> getExportedCustomDirectEventTypeConstants() {
        return MapBuilder.<String, Object>builder()
                .put("onProgress", MapBuilder.of("registrationName", "onProgress"))
                .put("onPlaybackStateChanged", MapBuilder.of("registrationName", "onPlaybackStateChanged"))
                .put("onIsPlayingChanged", MapBuilder.of("registrationName", "onIsPlayingChanged"))
                .put("onLoad", MapBuilder.of("registrationName", "onLoad"))
                .put("onError", MapBuilder.of("registrationName", "onError"))
                .build();
    }


    private void sendEvent(String eventName, WritableMap event){
        if(playerView != null){
            ReactContext reactContext = (ReactContext) playerView.getContext();
            reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(playerView.getId(), eventName, event);
        }
    }

    private void sendLoadEvent() {
        if (player != null) {
            WritableMap event = Arguments.createMap();
            event.putDouble("duration", player.getDuration() > 0 ? player.getDuration() / 1000.0 : 0);
            event.putDouble("currentTime", player.getCurrentPosition() / 1000.0);
            sendEvent("onLoad", event);
        }
    }

    private String getPlaybackStateString(int playbackState) {
        return switch (playbackState) {
            case Player.STATE_IDLE -> "idle";
            case Player.STATE_BUFFERING -> "buffering";
            case Player.STATE_READY -> "ready";
            case Player.STATE_ENDED -> "ended";
            default -> "unknown";
        };
    }
}























