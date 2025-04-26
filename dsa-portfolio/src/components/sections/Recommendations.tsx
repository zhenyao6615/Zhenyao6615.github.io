import React from 'react';
import RecommendationCard from '@/components/ui/RecommendationCard';
import { Recommendation } from '@/lib/types';

export default function Recommendations({ recommendations }: { recommendations: Recommendation[] }) {
  // Add a safety check to ensure recommendations is defined and is an array
  const recommendationsToRender = Array.isArray(recommendations) ? recommendations : [];
  
  return (
    <section id="recommendations" className="py-20 px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-16 text-center">What Others Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {recommendationsToRender.map(recommendation => (
            <RecommendationCard key={recommendation.id} recommendation={recommendation} />
          ))}
          {recommendationsToRender.length === 0 && (
            <p className="text-center text-gray-500">No recommendations to display yet.</p>
          )}
        </div>
      </div>
    </section>
  );
}