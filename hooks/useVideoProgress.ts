import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCallback, useEffect, useRef, useState } from 'react';

export default function useVideoProgress(itemId: string) {
  const [progress, setProgress] = useState<number | null>(0);
  const [loading, setloading] = useState<boolean>(true);
  const lastSavedRef = useRef<number>(0);

  useEffect(() => {
    async function fetchProgress() {
      try {
        const storedProgress = await AsyncStorage.getItem(`progress-${itemId}`);
        if (storedProgress) {
          setProgress(Number(storedProgress));
        }
      } catch (e) {
        console.log('Failed to fetch progress', e);
      } finally {
        setloading(false);
      }
    }
    fetchProgress();
  }, [itemId]);

  const saveProgress = useCallback(
    async (timeStamp: number, durationStamp?: number) => {
      if (durationStamp && timeStamp >= durationStamp * 0.99) {
        console.log('Skipping save: near end of video');
        return;
      }
      const now = Date.now();

      if (progress !== null && timeStamp < progress) {
        lastSavedRef.current = now;
        setProgress(timeStamp);
        await AsyncStorage.setItem(`progress-${itemId}`, String(timeStamp));
        return;
      }

      if (now - lastSavedRef.current < 5000) return;
      lastSavedRef.current = now;
      try {
        setProgress(timeStamp);
        await AsyncStorage.setItem(`progress-${itemId}`, timeStamp.toString());
      } catch (e) {
        console.log('Failed to save progress', e);
      }
    },
    [itemId, progress],
  );

  const saveProgressImmediately = useCallback(
    async (timestamp: number, durationStamp?: number) => {
      if (durationStamp && timestamp >= durationStamp * 0.99) {
        console.log('Skipping save: near end of video');
        return;
      }
      lastSavedRef.current = Date.now();
      try {
        await AsyncStorage.setItem(`progress-${itemId}`, String(timestamp));
      } catch (err) {
        console.warn('Failed to save progress', err);
      }
    },
    [itemId],
  );

  const clearProgress = useCallback(async () => {
    try {
      setProgress(null);
      await AsyncStorage.removeItem(`progress-${itemId}`);
    } catch (e) {
      console.log('Failed to clear progress', e);
    }
  }, [itemId]);

  const refreshProgress = useCallback(async () => {
    const value = await AsyncStorage.getItem(`progress-${itemId}`);
    setProgress(value ? parseFloat(value) : 0);
  }, [itemId]);

  return {
    progress,
    loading,
    saveProgress,
    clearProgress,
    saveProgressImmediately,
    refreshProgress,
  };
}
