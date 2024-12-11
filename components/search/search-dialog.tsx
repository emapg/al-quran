'use client';

import { useState } from 'react';
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

export function SearchDialog() {
  const [query, setQuery] = useState("");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          <Search className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>Search Quran</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <Input
            placeholder="Search verses, chapters..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full"
          />
          <ScrollArea className="h-[300px]">
            {/* Search results will go here */}
            <div className="space-y-2">
              {query && (
                <p className="text-sm text-muted-foreground">
                  Searching for "{query}"...
                </p>
              )}
            </div>
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  );
}