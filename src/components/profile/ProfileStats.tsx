import React from 'react';
import { Target, Zap, Award, Star } from 'lucide-react';

export default function ProfileStats() {
  const stats = [
    {
      label: 'Total Score',
      value: '2350',
      icon: Star,
      color: 'text-yellow-500'
    },
    {
      label: 'Problems Solved',
      value: '450',
      icon: Target,
      color: 'text-green-500'
    },
    {
      label: 'Current Streak',
      value: '15 days',
      icon: Zap,
      color: 'text-orange-500'
    },
    {
      label: 'Global Rank',
      value: '#125',
      icon: Award,
      color: 'text-purple-500'
    }
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-gray-900 p-4 rounded-lg">
          <div className="flex items-center space-x-3">
            <stat.icon className={`h-8 w-8 ${stat.color}`} />
            <div>
              <p className="text-gray-400 text-sm">{stat.label}</p>
              <p className="text-white text-xl font-bold">{stat.value}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}