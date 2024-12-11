'use client';

import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { SurahCard } from "@/components/ui/surah-card";
import { type Surah } from "@/lib/types";
import { Search } from "lucide-react";

interface SurahGridProps {
  surahs: Surah[];
}

export function SurahGrid({ surahs }: SurahGridProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSurahs = surahs.filter(surah => 
    surah.englishName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    surah.englishNameTranslation.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search surahs..."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredSurahs.map((surah) => (
          <SurahCard key={surah.number} surah={surah} />
        ))}
      </div>
    </div>
  );
}