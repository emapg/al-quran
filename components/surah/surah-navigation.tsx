import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

interface SurahNavigationProps {
  currentId: string;
}

export function SurahNavigation({ currentId }: SurahNavigationProps) {
  return (
    <div className="flex justify-between items-center mb-8">
      <Link href="/">
        <Button variant="ghost">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Surahs
        </Button>
      </Link>
      <div className="flex gap-4">
        {currentId !== "1" && (
          <Link href={`/surah/${parseInt(currentId) - 1}`}>
            <Button variant="outline">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Previous Surah
            </Button>
          </Link>
        )}
        {parseInt(currentId) < 114 && (
          <Link href={`/surah/${parseInt(currentId) + 1}`}>
            <Button variant="outline">
              Next Surah
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}