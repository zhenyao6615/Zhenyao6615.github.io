import React from 'react';
import Image from 'next/image';
import { Recommendation } from '@/lib/types';

export default function RecommendationCard({ recommendation }: { recommendation: Recommendation }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all hover:shadow-lg">
      <div className="flex items-center mb-4">
        <div className="h-14 w-14 relative rounded-full overflow-hidden mr-4">
          <Image
            src={recommendation.image}
            alt={recommendation.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="font-bold">{recommendation.name}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{recommendation.role}</p>
        </div>
      </div>
      <div className="italic text-gray-600 dark:text-gray-300">
        &quot;{recommendation.content}&quot;
      </div>
    </div>
  );
}