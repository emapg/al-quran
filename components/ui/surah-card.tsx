import Link from 'next/link';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { type Surah } from "@/lib/types";
import { REVELATION_TYPES } from "@/lib/constants";
import { ScrollText } from "lucide-react";

interface SurahCardProps {
  surah: Surah;
}

export function SurahCard({ surah }: SurahCardProps) {
  const isRevelationMeccan = surah.revelationType === REVELATION_TYPES.MECCAN;

  return (
    <Link href={`/surah/${surah.number}`}>
      <Card className="p-6 hover:shadow-lg transition-shadow group">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <span className="text-primary font-semibold">{surah.number}</span>
            </div>
            <div>
              <h3 className="font-semibold">{surah.englishName}</h3>
              <p className="text-sm text-muted-foreground">{surah.englishNameTranslation}</p>
            </div>
          </div>
          <Badge variant={isRevelationMeccan ? "default" : "secondary"}>
            {surah.revelationType}
          </Badge>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <ScrollText className="h-4 w-4" />
          <span>{surah.numberOfAyahs} verses</span>
        </div>
        <Progress value={0} className="mt-4" />
      </Card>
    </Link>
  );
}