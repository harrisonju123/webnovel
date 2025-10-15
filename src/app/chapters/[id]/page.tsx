'use client';

import Link from 'next/link';
import { novels } from '@/data/novel';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { LocalizedText } from '@/types/novel';

function getText(text: LocalizedText | string, lang: 'en' | 'ko'): string {
  if (typeof text === 'string') return text;
  return text[lang] || text.en;
}

function parseMarkdown(text: string) {
  const parts: (string | JSX.Element)[] = [];
  let lastIndex = 0;
  const regex = /\*([^*]+)\*/g;
  let match;
  let key = 0;

  while ((match = regex.exec(text)) !== null) {
    // Add text before the match
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    // Add the italic text
    parts.push(<em key={key++}>{match[1]}</em>);
    lastIndex = regex.lastIndex;
  }

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}

export default function ChapterPage({ params }: { params: { id: string } }) {
  const { language } = useLanguage();
  // For backward compatibility, default to first novel (chamomile-tea)
  const novel = novels[0];
  const chapter = novel.chapters.find((ch) => ch.id === params.id);

  if (!chapter) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold mb-4">
          {language === 'ko' ? '챕터를 찾을 수 없습니다' : 'Chapter not found'}
        </h1>
        <Link href="/" className="text-blue-600 hover:text-blue-800">
          {language === 'ko' ? '홈으로 돌아가기' : 'Return to home'}
        </Link>
      </div>
    );
  }

  const currentIndex = novel.chapters.findIndex((ch) => ch.id === params.id);
  const previousChapter = currentIndex > 0 ? novel.chapters[currentIndex - 1] : null;
  const nextChapter =
    currentIndex < novel.chapters.length - 1 ? novel.chapters[currentIndex + 1] : null;

  const labels = {
    backToContents: language === 'ko' ? '← 목차로 돌아가기' : '← Back to Table of Contents',
    chapter: language === 'ko' ? '챕터' : 'Chapter',
    publishedOn: language === 'ko' ? '출간일' : 'Published on',
    previousChapter: language === 'ko' ? '이전 챕터' : 'Previous Chapter',
    nextChapter: language === 'ko' ? '다음 챕터' : 'Next Chapter',
    noPreviousChapter: language === 'ko' ? '이전 챕터 없음' : 'No previous chapter',
    noNextChapter: language === 'ko' ? '다음 챕터 없음' : 'No next chapter',
    returnToContents: language === 'ko' ? '목차로 돌아가기' : 'Return to Table of Contents',
  };

  return (
    <article>
      <div className="mb-8">
        <Link
          href="/"
          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 mb-4 inline-block"
        >
          {labels.backToContents}
        </Link>
        <h1 className="text-3xl font-bold mb-2">
          {labels.chapter} {chapter.number}: {getText(chapter.title, language)}
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          {labels.publishedOn} {chapter.publishDate}
        </p>
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
        {getText(chapter.content, language)
          .split('\n\n')
          .map((paragraph, index) => (
            <p key={index} className="mb-4 leading-relaxed">
              {parseMarkdown(paragraph)}
            </p>
          ))}
      </div>

      <div className="flex justify-between items-center pt-8 border-t border-gray-200 dark:border-gray-800">
        <div>
          {previousChapter ? (
            <Link
              href={`/chapters/${previousChapter.id}`}
              className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              {labels.previousChapter}
            </Link>
          ) : (
            <span className="text-gray-400">{labels.noPreviousChapter}</span>
          )}
        </div>
        <div>
          {nextChapter ? (
            <Link
              href={`/chapters/${nextChapter.id}`}
              className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              {labels.nextChapter}
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          ) : (
            <span className="text-gray-400">{labels.noNextChapter}</span>
          )}
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/"
          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
        >
          {labels.returnToContents}
        </Link>
      </div>
    </article>
  );
}
