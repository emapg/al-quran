'use client';

import { useEffect, useState } from 'react';
import { Skeleton } from "@/components/ui/skeleton";
import { type Ayah, type Surah } from "@/lib/types";
import { QURAN_API_BASE } from "@/lib/constants";
import { SurahNavigation } from "@/components/surah/surah-navigation";
import { SurahHeader } from "@/components/surah/surah-header";
import { AyahCard } from "@/components/surah/ayah-card";

export default function SurahPage({ params }: { params: { id: string } }) {
  const [surah, setSurah] = useState<Surah | null>(null);
  const [ayahs, setAyahs] = useState<Ayah[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSurah = async () => {
      try {
        const [surahRes, ayahsRes] = await Promise.all([
          fetch(`${QURAN_API_BASE}/surah/${params.id}`),
          fetch(`${QURAN_API_BASE}/surah/${params.id}/en.asad`)
        ]);
        
        const surahData = await surahRes.json();
        const ayahsData = await ayahsRes.json();
        
        setSurah(surahData.data);
        setAyahs(ayahsData.data.ayahs);
      } catch (error) {
        console.error('Error fetching surah:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSurah();
  }, [params.id]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 space-y-4">
        <Skeleton className="h-8 w-64" />
        <Skeleton className="h-4 w-32" />
        <div className="space-y-4 mt-8">
          {[1, 2, 3].map((n) => (
            <Skeleton key={n} className="h-32" />
          ))}
        </div>
      </div>
    );
  }

  if (!surah) return <div>Surah not found</div>;

  return (
    <main className="container mx-auto px-4 py-8">
      <SurahNavigation currentId={params.id} />
      <SurahHeader surah={surah} />
      <div className="space-y-4">
        {ayahs.map((ayah) => (
          <AyahCard key={ayah.number} ayah={ayah} />
        ))}
      </div>
    </main>
  );
}