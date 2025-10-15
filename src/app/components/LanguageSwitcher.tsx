'use client';

import { useLanguage } from '@/app/contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2 p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded transition-colors ${
          language === 'en'
            ? 'bg-white dark:bg-gray-900 font-semibold'
            : 'hover:bg-gray-200 dark:hover:bg-gray-700'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('ko')}
        className={`px-3 py-1 rounded transition-colors ${
          language === 'ko'
            ? 'bg-white dark:bg-gray-900 font-semibold'
            : 'hover:bg-gray-200 dark:hover:bg-gray-700'
        }`}
        aria-label="Switch to Korean"
      >
        한국어
      </button>
    </div>
  );
}
