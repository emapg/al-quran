'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Bookmark as BookmarkIcon, ChevronLeft, Trash2 } from "lucide-react";
import { type Bookmark as BookmarkType } from "@/lib/types";

export default function BookmarksPage() {
  const [bookmarks, setBookmarks] = useState<BookmarkType[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('quran-bookmarks');
    if (stored) {
      setBookmarks(JSON.parse(stored));
    }
  }, []);

  const removeBookmark = (surah: number, ayah: number) => {
    const updated = bookmarks.filter(
      b => !(b.surah === surah && b.ayah === ayah)
    );
    setBookmarks(updated);
    localStorage.setItem('quran-bookmarks', JSON.stringify(updated));
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
          </Link>
          <h1 className="text-2xl font-bold">Your Bookmarks</h1>
        </div>
      </div>

      {bookmarks.length === 0 ? (
        <Card className="p-8 text-center">
          <BookmarkIcon className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
          <h2 className="text-xl font-semibold mb-2">No bookmarks yet</h2>
          <p className="text-muted-foreground mb-4">
            Start adding bookmarks while reading to keep track of your progress
          </p>
          <Button asChild>
            <Link href="/">Browse Surahs</Link>
          </Button>
        </Card>
      ) : (
        <div className="grid gap-4">
          {bookmarks.map((bookmark) => (
            <Card key={`${bookmark.surah}-${bookmark.ayah}`} className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <Link
                    href={`/surah/${bookmark.surah}#ayah-${bookmark.ayah}`}
                    className="text-lg font-semibold hover:underline"
                  >
                    Surah {bookmark.surah}, Verse {bookmark.ayah}
                  </Link>
                  {bookmark.note && (
                    <p className="text-sm text-muted-foreground mt-1">
                      {bookmark.note}
                    </p>
                  )}
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeBookmark(bookmark.surah, bookmark.ayah)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}
    </main>
  );
}
