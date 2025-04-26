'use client';

import React from 'react';
import AchievementCard from '@/components/ui/AchievementCard';
import { Achievement } from '@/lib/types';

export default function Achievements({ achievements }: { achievements: Achievement[] }) {
  // Add a safety check to ensure achievements is defined and is an array
  const achievementsToRender = Array.isArray(achievements) ? achievements : [];
  
  return (
    <section id="achievements" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">My Achievements</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsToRender.map(achievement => (
            <AchievementCard key={achievement.id} achievement={achievement} />
          ))}
          {achievementsToRender.length === 0 && (
            <p className="text-center text-gray-500 col-span-full">No achievements to display yet.</p>
          )}
        </div>
      </div>
    </section>
  );
}