import React from 'react';
import { Search } from 'lucide-react';
import ChallengeCard from '../components/challenges/ChallengeCard';

export default function ChallengesPage() {
  const challenges = [
    {
      id: 1,
      title: "Weekly Contest 389",
      difficulty: "Medium",
      startTime: "Mar 24, 8:00 AM",
      duration: "1.5 hours",
      participants: 12453,
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500",
      delay: 0.1
    },
    {
      id: 2,
      title: "Biweekly Contest 124",
      difficulty: "Hard",
      startTime: "Mar 25, 10:00 AM",
      duration: "2 hours",
      participants: 8762,
      imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500",
      delay: 0.2
    },
    {
      id: 3,
      title: "Beginner's Challenge",
      difficulty: "Easy",
      startTime: "Mar 26, 9:00 AM",
      duration: "1 hour",
      participants: 15678,
      imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500",
      delay: 0.3
    },
    {
      id: 4,
      title: "Data Structures Special",
      difficulty: "Medium",
      startTime: "Mar 27, 11:00 AM",
      duration: "2 hours",
      participants: 10234,
      imageUrl: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=500",
      delay: 0.4
    }
  ];

  return (
    <div className="bg-black min-h-screen mb-20 pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Coding Challenges</h1>
            <p className="text-gray-400">Compete with developers worldwide</p>
          </div>
          
          <div className="mt-4 md:mt-0 relative">
            <input
              type="text"
              placeholder="Search challenges..."
              className="w-full md:w-64 bg-gray-900 text-white rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((challenge) => (
            <ChallengeCard key={challenge.id} {...challenge} />
          ))}
        </div>
      </div>
    </div>
  );
}