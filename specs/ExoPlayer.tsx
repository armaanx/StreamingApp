/* eslint-disable react-native/no-inline-styles */

import Slider from '@react-native-community/slider';
import {
  ChevronLeft,
  Pause,
  Play,
  Volume,
  VolumeOff,
} from 'lucide-react-native';
import { useState } from 'react';
import {
  ActivityIndicator,
  Animated,
  NativeSyntheticEvent,
  Pressable,
  requireNativeComponent,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import useAutoHideControls from '../hooks/useAutoHideControls';
import useVideoProgress from '../hooks/useVideoProgress';

interface ExoPlayerProps {
  source: string;
  title: string;
  handleClose: () => void;
  itemId: string;
  startTime?: number;
}
type PlaybackState = 'idle' | 'buffering' | 'ready' | 'ended' | 'unknown';
type ProgressEventData = { currentTime: number; duration: number };
type PlaybackStateChangeEventData = { state: PlaybackState };
type IsPlayingChangeEventData = { isPlaying: boolean };
type ProgressEvent = NativeSyntheticEvent<ProgressEventData>;
type PlaybackStateChangeEvent =
  NativeSyntheticEvent<PlaybackStateChangeEventData>;
type IsPlayingChangeEvent = NativeSyntheticEvent<IsPlayingChangeEventData>;

interface ExoPlayerViewProps {
  style: StyleProp<ViewStyle>;
  source: string;
  paused: boolean;
  autoPlay: boolean;
  mute: boolean;
  seekTime: number;
  startTime?: number;
  onProgress: (event: ProgressEvent) => void;
  onPlaybackStateChanged: (event: PlaybackStateChangeEvent) => void;
  onIsPlayingChanged: (event: IsPlayingChangeEvent) => void;
  onLoad: () => void;
}

const ExoPlayerView =
  requireNativeComponent<ExoPlayerViewProps>('ExoPlayerView');

export default function ExoPlayer({
  source,
  title,
  handleClose,
  itemId,
  startTime,
}: ExoPlayerProps) {
  const [paused, setPaused] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackState, setPlaybackState] = useState<PlaybackState>('idle');
  const [mute, setMute] = useState(false);
  const [seekTime, setSeekTime] = useState(-1);
  const [isSeeking, setIsSeeking] = useState(false);
  const [seekValue, setSeekValue] = useState(0);
  const [wasPlayingBeforeSeek, setWasPlayingBeforeSeek] = useState(false);

  const { controlsVisible, opacity, onInteraction, onScrubStart, onScrubEnd } =
    useAutoHideControls({ paused });

  const { saveProgress, clearProgress, saveProgressImmediately } =
    useVideoProgress(itemId);

  const onProgress = (e: ProgressEvent) => {
    if (playbackState === 'ended') return;
    const { currentTime: timeStamp, duration: durationStamp } = e.nativeEvent;
    if (!isSeeking) setCurrentTime(timeStamp);
    setDuration(durationStamp);
    saveProgress(timeStamp, durationStamp);
  };

  const onPlaybackStateChanged = (event: PlaybackStateChangeEvent) => {
    const { state } = event.nativeEvent;
    console.log('Playback state changed:', state);
    setPlaybackState(state);
    if (state === 'ended') {
      clearProgress();
      setCurrentTime(0);
      setSeekTime(-1);
      setSeekValue(0);
      setPaused(true);
      console.log('Clearing progress');
    }
  };

  const onIsPlayingChanged = (event: IsPlayingChangeEvent) => {
    if (playbackState === 'ended') return;
    const { isPlaying } = event.nativeEvent;
    if (isPlaying === false) saveProgressImmediately(currentTime, duration);
  };

  const togglePlayPause = () => {
    if (playbackState === 'ended') {
      setSeekTime(0);
      setPaused(false);
      setPlaybackState('ready');
    } else {
      setPaused(!paused);
    }
  };

  const toggleMute = () => {
    setMute(!mute);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleScrubStart = (value: number) => {
    setIsSeeking(true);
    setSeekValue(value);
    setWasPlayingBeforeSeek(!paused);
    onScrubStart();
    setPaused(true);
  };

  const handleScrubComplete = (value: number) => {
    setIsSeeking(false);
    onScrubEnd();
    setCurrentTime(value);
    setSeekTime(value);
    if (wasPlayingBeforeSeek) {
      setPaused(false);
    }
    saveProgressImmediately(value, duration);
  };

  return (
    <View className=" flex-1 w-full h-full">
      <ExoPlayerView
        source={source}
        style={StyleSheet.absoluteFillObject}
        paused={paused}
        autoPlay={true}
        onLoad={() => console.log('Video loaded')}
        onProgress={onProgress}
        onPlaybackStateChanged={onPlaybackStateChanged}
        onIsPlayingChanged={onIsPlayingChanged}
        mute={mute}
        startTime={startTime}
        seekTime={seekTime}
      />
      {playbackState === 'buffering' && (
        <ActivityIndicator
          size="large"
          color={'white'}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
          }}
        />
      )}
      <Pressable
        style={StyleSheet.absoluteFillObject}
        onPress={onInteraction}
      />
      <Animated.View
        style={{
          backgroundColor: 'rgba(0,0,0,0.2)',
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          padding: 15,
          opacity,
        }}
        pointerEvents={controlsVisible ? 'auto' : 'none'}
      >
        <View
          className="flex-row items-center justify-start"
          style={{ paddingLeft: 15, gap: 15 }}
        >
          <TouchableOpacity
            onPress={() => {
              setPaused(true);
              if (playbackState !== 'ended') {
                saveProgressImmediately(currentTime, duration);
              }
              handleClose();
            }}
            activeOpacity={0.8}
          >
            <ChevronLeft size={24} color={'white'} />
          </TouchableOpacity>
          <Text className="text-white text-lg font-semibold">{title}</Text>
        </View>
      </Animated.View>

      <Animated.View
        pointerEvents={controlsVisible ? 'auto' : 'none'}
        style={{
          backgroundColor: 'rgba(0,0,0,0.2)',
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          padding: 20,
          opacity,
        }}
      >
        <View className="flex-row items-center justify-center">
          <TouchableOpacity
            style={{
              backgroundColor: 'rgba(0,0,0,0.5)',
              borderRadius: 8,
              paddingVertical: 6,
              paddingHorizontal: 6,
              marginRight: 10,
            }}
            activeOpacity={0.7}
            onPress={toggleMute}
          >
            {mute ? (
              <VolumeOff size={24} color="white" />
            ) : (
              <Volume size={24} color="white" />
            )}
          </TouchableOpacity>
          <Text className="text-white text-xs w-10">
            {isSeeking ? formatTime(seekValue) : formatTime(currentTime)}
          </Text>

          <View className="" style={{ width: '75%' }}>
            <Slider
              pointerEvents={playbackState === 'buffering' ? 'none' : 'auto'}
              onSlidingStart={handleScrubStart}
              onSlidingComplete={handleScrubComplete}
              onValueChange={val => {
                setSeekValue(val);
              }}
              value={isSeeking ? seekValue : currentTime}
              minimumValue={0}
              maximumValue={duration}
              minimumTrackTintColor="#FF4747"
              maximumTrackTintColor="#ffffff"
              thumbTintColor="#FF4747"
            />
          </View>

          <Text className="text-white text-xs w-10 text-right">
            {formatTime(duration)}
          </Text>

          <TouchableOpacity
            style={{
              backgroundColor: 'rgba(0,0,0,0.5)',
              borderRadius: 8,
              paddingVertical: 6,
              paddingHorizontal: 9,
              marginLeft: 10,
            }}
            activeOpacity={0.7}
          >
            <Text className="text-white text-xs font-semibold">CC</Text>
          </TouchableOpacity>
        </View>

        <View className="items-center ">
          <TouchableOpacity
            disabled={playbackState === 'buffering'}
            className="rounded-full p-2"
            style={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              borderRadius: 18,
            }}
            onPress={togglePlayPause}
            activeOpacity={0.8}
          >
            {paused ? (
              <Play size={40} color="white" />
            ) : (
              <Pause size={40} color="white" />
            )}
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
}
