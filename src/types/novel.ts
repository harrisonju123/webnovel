export type Language = "en" | "ko";

export interface LocalizedText {
  en: string;
  ko?: string;
}

export interface Chapter {
  id: string;
  number: number;
  title: LocalizedText;
  content: LocalizedText;
  publishDate: string;
}

export interface Novel {
  id: string;
  title: LocalizedText;
  author: string;
  description: LocalizedText;
  genre: LocalizedText;
  status: LocalizedText;
  lastUpdated: string;
  chapters: Chapter[];
}
