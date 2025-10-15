'use client';

import Link from 'next/link';
import { novels } from '@/data/novel';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { LocalizedText } from '@/types/novel';

function getText(text: LocalizedText | string, lang: 'en' | 'ko'): string {
  if (typeof text === 'string') return text;
  return text[lang] || text.en;
}

export default function Home() {
  const { language } = useLanguage();

  const labels = {
    myStories: language === 'ko' ? '내 이야기들' : 'My Stories',
    by: language === 'ko' ? '작가' : 'by',
    chapters: language === 'ko' ? '챕터' : 'chapters',
    readNow: language === 'ko' ? '읽기' : 'Read Now',
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{labels.myStories}</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          {language === 'ko' ? '다양한 이야기를 만나보세요' : 'Explore different stories'}
        </p>
      </div>

      <div className="space-y-6">
        {novels.map((novel) => (
          <Link
            key={novel.id}
            href={`/novels/${novel.id}`}
            className="block p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2">{getText(novel.title, language)}</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  {labels.by} {novel.author}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  {getText(novel.description, language)}
                </p>
                <div className="flex gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <span>{getText(novel.genre, language)}</span>
                  <span>•</span>
                  <span>
                    {novel.chapters.length} {labels.chapters}
                  </span>
                  <span>•</span>
                  <span>{getText(novel.status, language)}</span>
                </div>
              </div>
              <svg
                className="w-6 h-6 text-gray-400 flex-shrink-0 ml-4"
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
  );
}
