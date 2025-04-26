import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Created with Next.js and Tailwind CSS
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            © {currentYear} My STEM Portfolio
          </p>
        </div>
      </div>
    </footer>
  );
}