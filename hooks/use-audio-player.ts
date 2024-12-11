'use client';

import { useState, useEffect } from 'react';
import { AUDIO_BASE } from '@/lib/constants';

export function useAudioPlayer(ayahNumber: number) {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    return () => {
      if (audio) {
        audio.pause();
        audio.remove();
      }
    };
  }, [audio]);

  const togglePlay = () => {
    if (isPlaying && audio) {
      audio.pause();
      setAudio(null);
      setIsPlaying(false);
    } else {
      const newAudio = new Audio(`${AUDIO_BASE}/${ayahNumber}.mp3`);
      newAudio.play();
      setAudio(newAudio);
      setIsPlaying(true);

      newAudio.addEventListener('ended', () => {
        setIsPlaying(false);
        setAudio(null);
      });
    }
  };

  return { isPlaying, togglePlay };
}