import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-white/80 dark:bg-black/80 backdrop-blur-md py-4 px-8 shadow-sm">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <Link href="/" className="text-xl font-bold mb-4 sm:mb-0">My STEM Portfolio</Link>
        <nav>
          <ul className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <li><a href="#about" className="hover:text-blue-500 transition-colors">About Me</a></li>
            <li><a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a></li>
            <li><a href="#achievements" className="hover:text-blue-500 transition-colors">Achievements</a></li>
            <li><a href="#recommendations" className="hover:text-blue-500 transition-colors">Recommendations</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}