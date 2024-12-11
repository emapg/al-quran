import { SurahGrid } from '@/components/surah-grid';
import { Book, Bookmark, Search } from 'lucide-react';

async function getSurahs() {
  const res = await fetch('https://api.alquran.cloud/v1/surah');
  const data = await res.json();
  return data.data;
}

export default async function Home() {
  const surahs = await getSurahs();

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4">The Noble Quran</h1>
        <p className="text-muted-foreground">
          Read, study, and listen to the Holy Quran
        </p>
      </div>

      <div className="grid gap-6 mb-8 md:grid-cols-3">
        <div className="flex items-center gap-4 p-4 rounded-lg bg-card">
          <div className="p-2 rounded-full bg-primary/10">
            <Book className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold">114 Surahs</h3>
            <p className="text-sm text-muted-foreground">Complete Quranic text</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4 p-4 rounded-lg bg-card">
          <div className="p-2 rounded-full bg-primary/10">
            <Search className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold">Search & Study</h3>
            <p className="text-sm text-muted-foreground">Find verses easily</p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-4 rounded-lg bg-card">
          <div className="p-2 rounded-full bg-primary/10">
            <Bookmark className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold">Bookmarks</h3>
            <p className="text-sm text-muted-foreground">Save your progress</p>
          </div>
        </div>
      </div>

      <SurahGrid surahs={surahs} />
    </main>
  );
}