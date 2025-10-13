import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "./contexts/LanguageContext";
import LanguageSwitcher from "./components/LanguageSwitcher";

export const metadata: Metadata = {
  title: "Midnightly1's Stories",
  description: "A collection of stories by Midnightly1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <LanguageProvider>
          <nav className="border-b border-gray-200 dark:border-gray-800">
            <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
              <a href="/" className="text-xl font-bold hover:text-blue-600">
                Midnightly1
              </a>
              <LanguageSwitcher />
            </div>
          </nav>
          <main className="max-w-4xl mx-auto px-4 py-8">
            {children}
          </main>
          <footer className="border-t border-gray-200 dark:border-gray-800 mt-16">
            <div className="max-w-4xl mx-auto px-4 py-8 text-center text-gray-600 dark:text-gray-400">
              <p>© 2025 Midnightly1. All rights reserved.</p>
            </div>
          </footer>
        </LanguageProvider>
      </body>
    </html>
  );
}
