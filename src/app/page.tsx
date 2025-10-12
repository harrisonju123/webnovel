import Link from "next/link";
import { novel } from "@/data/novel";

export default function Home() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{novel.title}</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
          by {novel.author}
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {novel.description}
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Novel Information</h2>
        <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Genre</p>
            <p className="font-medium">{novel.genre}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Status</p>
            <p className="font-medium">{novel.status}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Chapters</p>
            <p className="font-medium">{novel.chapters.length}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Last Updated</p>
            <p className="font-medium">{novel.lastUpdated}</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Table of Contents</h2>
        <div className="space-y-2">
          {novel.chapters.map((chapter) => (
            <Link
              key={chapter.id}
              href={`/chapters/${chapter.id}`}
              className="block p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">
                    Chapter {chapter.number}: {chapter.title}
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
