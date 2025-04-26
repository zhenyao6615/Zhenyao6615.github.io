import React from 'react';
import Image from 'next/image';
import { Profile } from '@/lib/types';

export default function Introduction({ profile }: { profile: Profile | null }) {
  // Add safety checks to handle undefined profile
  if (!profile) {
    return (
      <section id="about" className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center">About Me</h2>
          <p className="text-center text-gray-500">Profile information not available.</p>
        </div>
      </section>
    );
  }

  // Ensure all array properties exist and have fallbacks
  const interests = Array.isArray(profile.interests) ? profile.interests : [];
  const funFacts = Array.isArray(profile.funFacts) ? profile.funFacts : [];
  
  return (
    <section id="about" className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-16 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-64 h-64 relative rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
            <Image
              src={profile.photo || "/images/default-profile.jpg"}
              alt={profile.name || "Student"}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-2">{profile.name || "Student Name"}</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">
              {profile.age ? `Age: ${profile.age}` : ""} {profile.school ? `• ${profile.school}` : ""}
            </p>
            <p className="text-gray-700 dark:text-gray-200 mb-6 text-lg">
              {profile.introduction || "No introduction available."}
            </p>
            
            {interests.length > 0 && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">My Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {interests.map(interest => (
                    <span 
                      key={interest} 
                      className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 px-3 py-1 rounded-full"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {funFacts.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold mb-2">Fun Facts</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {funFacts.map((fact, index) => (
                    <li key={index} className="text-gray-700 dark:text-gray-200">
                      {fact}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}