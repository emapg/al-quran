'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, Pause, BookmarkPlus } from "lucide-react";
import { type Ayah } from "@/lib/types";
import { useAudioPlayer } from "@/hooks/use-audio-player";

interface AyahCardProps {
  ayah: Ayah;
}

export function AyahCard({ ayah }: AyahCardProps) {
  const { isPlaying, togglePlay } = useAudioPlayer(ayah.number);

  return (
    <Card className="p-6">
      <div className="flex justify-between items-start mb-4">
        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
          {ayah.numberInSurah}
        </span>
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => togglePlay()}
          >
            {isPlaying ? (
              <Pause className="h-4 w-4" />
            ) : (
              <Play className="h-4 w-4" />
            )}
          </Button>
          <Button variant="ghost" size="icon">
            <BookmarkPlus className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <p className="text-xl mb-4 leading-relaxed text-right font-arabic">
        {ayah.text}
      </p>
      <p className="text-muted-foreground">
        {ayah.translation}
      </p>
    </Card>
  );
}