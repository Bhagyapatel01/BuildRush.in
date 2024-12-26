import React from 'react';
import { Trophy, Star, Award, TrendingUp } from 'lucide-react';

export default function LeaderboardPage() {
  const leaders = [
    {
      rank: 1,
      name: "Sarah Chen",
      score: 2850,
      solved: 425,
      streak: 85,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"
    },
    {
      rank: 2,
      name: "Alex Kumar",
      score: 2750,
      solved: 410,
      streak: 62,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
    },
    // Add more leaders...
  ];

  return (
    <div className="bg-black min-h-screen pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-white">Global Leaderboard</h1>
          <div className="flex space-x-4">
            <select className="bg-gray-900 text-white rounded-md px-4 py-2 border border-gray-800">
              <option value="global">Global</option>
              <option value="monthly">Monthly</option>
              <option value="weekly">Weekly</option>
            </select>
          </div>
        </div>

        <div className="bg-gray-900 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-800">
                <th className="px-6 py-4 text-left text-gray-400">Rank</th>
                <th className="px-6 py-4 text-left text-gray-400">Developer</th>
                <th className="px-6 py-4 text-left text-gray-400">Rating</th>
                <th className="px-6 py-4 text-left text-gray-400">Solved</th>
                <th className="px-6 py-4 text-left text-gray-400">Streak</th>
              </tr>
            </thead>
            <tbody>
              {leaders.map((leader) => (
                <tr key={leader.rank} className="border-t border-gray-800">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      {leader.rank === 1 && <Trophy className="h-5 w-5 text-yellow-500 mr-2" />}
                      {leader.rank === 2 && <Trophy className="h-5 w-5 text-gray-400 mr-2" />}
                      {leader.rank === 3 && <Trophy className="h-5 w-5 text-orange-500 mr-2" />}
                      <span className="text-white">{leader.rank}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <img
                        src={leader.avatar}
                        alt={leader.name}
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <span className="text-white">{leader.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center text-white">
                      <Star className="h-5 w-5 text-yellow-500 mr-2" />
                      {leader.score}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center text-white">
                      <Award className="h-5 w-5 text-purple-500 mr-2" />
                      {leader.solved}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center text-white">
                      <TrendingUp className="h-5 w-5 text-green-500 mr-2" />
                      {leader.streak} days
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}