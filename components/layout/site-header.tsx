import Link from 'next/link';
import { Book } from "lucide-react";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Button } from "@/components/ui/button";
import { SearchDialog } from "@/components/search/search-dialog";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="flex items-center gap-2 mr-6">
          <Book className="h-6 w-6" />
          <span className="font-semibold">Quran App</span>
        </Link>
        <div className="flex-1" />
        <div className="flex items-center gap-2">
          <SearchDialog />
          <ThemeToggle />
          <Button variant="outline" asChild>
            <Link href="/bookmarks">Bookmarks</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}