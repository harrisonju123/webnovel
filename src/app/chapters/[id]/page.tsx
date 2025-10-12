import Link from "next/link";
import { notFound } from "next/navigation";
import { novel } from "@/data/novel";

export function generateStaticParams() {
  return novel.chapters.map((chapter) => ({
    id: chapter.id,
  }));
}

export default function ChapterPage({ params }: { params: { id: string } }) {
  const chapter = novel.chapters.find((ch) => ch.id === params.id);

  if (!chapter) {
    notFound();
  }

  const currentIndex = novel.chapters.findIndex((ch) => ch.id === params.id);
  const previousChapter = currentIndex > 0 ? novel.chapters[currentIndex - 1] : null;
  const nextChapter =
    currentIndex < novel.chapters.length - 1
      ? novel.chapters[currentIndex + 1]
      : null;

  return (
    <article>
      <div className="mb-8">
        <Link
          href="/"
          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 mb-4 inline-block"
        >
          ← Back to Table of Contents
        </Link>
        <h1 className="text-3xl font-bold mb-2">
          Chapter {chapter.number}: {chapter.title}
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Published on {chapter.publishDate}
        </p>
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
        {chapter.content.split("\n\n").map((paragraph, index) => (
          <p key={index} className="mb-4 leading-relaxed">
            {paragraph}
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
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Previous Chapter
            </Link>
          ) : (
            <span className="text-gray-400">No previous chapter</span>
          )}
        </div>
        <div>
          {nextChapter ? (
            <Link
              href={`/chapters/${nextChapter.id}`}
              className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Next Chapter
              <svg
                className="w-5 h-5 ml-2"
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
            </Link>
          ) : (
            <span className="text-gray-400">No next chapter</span>
          )}
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/"
          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
        >
          Return to Table of Contents
        </Link>
      </div>
    </article>
  );
}
