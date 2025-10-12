export interface Chapter {
  id: string;
  number: number;
  title: string;
  content: string;
  publishDate: string;
}

export interface Novel {
  title: string;
  author: string;
  description: string;
  genre: string;
  status: string;
  lastUpdated: string;
  chapters: Chapter[];
}
