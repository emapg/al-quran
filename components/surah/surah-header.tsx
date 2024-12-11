import { type Surah } from "@/lib/types";

interface SurahHeaderProps {
  surah: Surah;
}

export function SurahHeader({ surah }: SurahHeaderProps) {
  return (
    <div className="text-center mb-8">
      <h1 className="text-3xl font-bold mb-2">
        {surah.englishName} ({surah.name})
      </h1>
      <p className="text-muted-foreground">
        {surah.englishNameTranslation} • {surah.revelationType} • {surah.numberOfAyahs} verses
      </p>
    </div>
  );
}