/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react';
import { Animated } from 'react-native';

const HIDE_DELAY = 3000;
const FADE_DURATION = 180;

export default function useAutoHideControls({ paused }: { paused: boolean }) {
  const [controlsVisible, setControlsVisible] = useState(true);
  const opacity = useRef(new Animated.Value(1)).current;
  const hideTimeoutRef = useRef<null | ReturnType<typeof setTimeout>>(null);
  const isScrubbingRef = useRef(false);

  const clearTimer = () => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
  };

  const hideControls = () => {
    clearTimer();
    Animated.timing(opacity, {
      toValue: 0,
      duration: FADE_DURATION,
      useNativeDriver: true,
    }).start(() => {
      setControlsVisible(false);
    });
  };

  const startTimer = () => {
    clearTimer();
    if (paused || isScrubbingRef.current) return;
    hideTimeoutRef.current = setTimeout(() => {
      hideControls();
    }, HIDE_DELAY);
  };

  const showControls = ({ skipAutoHide = false } = {}) => {
    clearTimer();
    setControlsVisible(true);
    Animated.timing(opacity, {
      toValue: 1,
      duration: FADE_DURATION,
      useNativeDriver: true,
    }).start(() => {
      if (!skipAutoHide) {
        startTimer();
      }
    });
  };

  const onInteraction = () => {
    if (controlsVisible) {
      hideControls();
    } else {
      showControls();
    }
  };

  const onScrubStart = () => {
    isScrubbingRef.current = true;
    clearTimer();
    showControls({ skipAutoHide: true });
  };

  const onScrubEnd = () => {
    isScrubbingRef.current = false;
    if (!paused) startTimer();
  };

  useEffect(() => {
    if (paused) {
      clearTimer();
      showControls({ skipAutoHide: true });
    } else {
      startTimer();
    }
  }, [paused]);

  useEffect(() => {
    if (!paused) startTimer();
    return () => {
      clearTimer();
    };
  }, []);

  return {
    controlsVisible,
    opacity,
    onInteraction,
    onScrubStart,
    onScrubEnd,
    showControls,
    hideControls,
  };
}
