import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Web Novel - Read Your Favorite Stories",
  description: "A platform for hosting and reading web novels",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <nav className="border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <a href="/" className="text-xl font-bold hover:text-blue-600">
              My Web Novel
            </a>
          </div>
        </nav>
        <main className="max-w-4xl mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="border-t border-gray-200 dark:border-gray-800 mt-16">
          <div className="max-w-4xl mx-auto px-4 py-8 text-center text-gray-600 dark:text-gray-400">
            <p>© 2024 My Web Novel. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
