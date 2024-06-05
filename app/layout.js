// app/layout.js
import './globals.css';
import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900 flex flex-col min-h-screen">
        <header className="bg-blue-600 text-white p-4">
          <nav className="flex justify-center items-center space-x-4">
            <img src="https://www.nfactorial.live/n17r.png" alt="Logo" className="w-10 h-10" />
            <Link href="/" className="text-white">
              Home
            </Link>
            <Link href="/about" className="text-white">
              About
            </Link>
            <Link href="/blog" className="text-white">
              Blog
            </Link>
          </nav>
        </header>
        <main className="flex-grow p-4">{children}</main>
        <footer className="bg-blue-600 text-white text-center p-4 mt-4 flex flex-col items-center">
          <p>&copy; Copyright 2024, Rakymzhan Zhabagin</p>
        </footer>
      </body>
    </html>
  );
}
