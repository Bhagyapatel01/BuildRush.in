import React from 'react';
import { CheckCircle, Clock, Tag } from 'lucide-react';

export default function SolvedChallenges() {
  const challenges = [
    {
      id: 1,
      title: 'Binary Search Implementation',
      difficulty: 'Medium',
      solvedDate: '2024-03-20',
      score: 150
    },
    {
      id: 2,
      title: 'Dynamic Programming Challenge',
      difficulty: 'Hard',
      solvedDate: '2024-03-19',
      score: 300
    },
    {
      id: 3,
      title: 'Array Manipulation',
      difficulty: 'Easy',
      solvedDate: '2024-03-18',
      score: 100
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'text-green-500';
      case 'medium': return 'text-yellow-500';
      case 'hard': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <div className="bg-gray-900 rounded-lg p-6">
      <h3 className="text-xl font-semibold text-white mb-4">Recently Solved Challenges</h3>
      <div className="space-y-4">
        {challenges.map((challenge) => (
          <div key={challenge.id} className="border border-gray-800 rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-white font-medium">{challenge.title}</h4>
                <div className="flex items-center space-x-4 mt-2">
                  <div className="flex items-center">
                    <Tag className={`h-4 w-4 mr-1 ${getDifficultyColor(challenge.difficulty)}`} />
                    <span className={getDifficultyColor(challenge.difficulty)}>{challenge.difficulty}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{challenge.solvedDate}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-white font-medium">+{challenge.score}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}