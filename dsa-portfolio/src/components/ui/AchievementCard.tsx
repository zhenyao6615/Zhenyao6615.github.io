'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Achievement } from '@/lib/types';
import ImageModal from './ImageModal';

export default function AchievementCard({ achievement }: { achievement: Achievement }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  const openModal = () => {
    console.log("OPENING MODAL");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    console.log("CLOSING MODAL");
    setIsModalOpen(false);
  };

  const handleImageError = () => {
    console.error(`Failed to load image: ${achievement.image}`);
    setImageError(true);
  };

  return (
    <>
      <div 
        className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden flex flex-col h-full
          hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 cursor-pointer"
        onClick={openModal}
      >
        {/* Image container with square aspect ratio */}
        <div className="relative w-full pt-[100%] bg-gray-100 dark:bg-gray-700">
          {!imageError ? (
            <Image
              src={achievement.image}
              alt={achievement.title}
              fill
              className="object-cover absolute inset-0"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
              onError={handleImageError}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          )}
          
          {/* Subtle overlay effect on hover */}
          <div className="absolute inset-0 bg-blue-500 opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
        </div>
        
        {/* Content section */}
        <div className="p-4 flex-1 flex flex-col">
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">{achievement.date}</div>
          <h3 className="text-lg font-bold mb-2 group-hover:text-blue-500 transition-colors duration-300">{achievement.title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 flex-1">{achievement.description}</p>
        </div>
      </div>
      
      {/* Modal */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        imageUrl={achievement.image}
        title={achievement.title}
      />
    </>
  );
}