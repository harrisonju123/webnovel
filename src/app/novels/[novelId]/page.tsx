"use client";

import Link from "next/link";
import { novels } from "@/data/novel";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { LocalizedText } from "@/types/novel";

function getText(text: LocalizedText | string, lang: "en" | "ko"): string {
  if (typeof text === "string") return text;
  return text[lang] || text.en;
}

export default function NovelPage({ params }: { params: { novelId: string } }) {
  const { language } = useLanguage();
  const novel = novels.find((n) => n.id === params.novelId);

  if (!novel) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold mb-4">
          {language === "ko" ? "소설을 찾을 수 없습니다" : "Novel not found"}
        </h1>
        <Link href="/" className="text-blue-600 hover:text-blue-800">
          {language === "ko" ? "홈으로 돌아가기" : "Return to home"}
        </Link>
      </div>
    );
  }

  const labels = {
    novelInfo: language === "ko" ? "소설 정보" : "Novel Information",
    genre: language === "ko" ? "장르" : "Genre",
    status: language === "ko" ? "상태" : "Status",
    chapters: language === "ko" ? "챕터" : "Chapters",
    lastUpdated: language === "ko" ? "마지막 업데이트" : "Last Updated",
    tableOfContents: language === "ko" ? "목차" : "Table of Contents",
    chapter: language === "ko" ? "챕터" : "Chapter",
    backToHome: language === "ko" ? "← 홈으로" : "← Home",
  };

  return (
    <div>
      <div className="mb-4">
        <Link
          href="/"
          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 inline-block"
        >
          {labels.backToHome}
        </Link>
      </div>

      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">
          {getText(novel.title, language)}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
          by {novel.author}
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {getText(novel.description, language)}
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{labels.novelInfo}</h2>
        <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {labels.genre}
            </p>
            <p className="font-medium">{getText(novel.genre, language)}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {labels.status}
            </p>
            <p className="font-medium">{getText(novel.status, language)}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {labels.chapters}
            </p>
            <p className="font-medium">{novel.chapters.length}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {labels.lastUpdated}
            </p>
            <p className="font-medium">{novel.lastUpdated}</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">
          {labels.tableOfContents}
        </h2>
        <div className="space-y-2">
          {novel.chapters.map((chapter) => (
            <Link
              key={chapter.id}
              href={`/novels/${novel.id}/chapters/${chapter.id}`}
              className="block p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">
                    {labels.chapter} {chapter.number}:{" "}
                    {getText(chapter.title, language)}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {chapter.publishDate}
                  </p>
                </div>
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
