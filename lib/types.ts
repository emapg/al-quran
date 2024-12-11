export interface Surah {
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  numberOfAyahs: number;
  revelationType: string;
}

export interface Ayah {
  number: number;
  text: string;
  translation: string;
  audio: string;
  surah: number;
  numberInSurah: number;
}

export interface Bookmark {
  surah: number;
  ayah: number;
  timestamp: string;
  note?: string;
}