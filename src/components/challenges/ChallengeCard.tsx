import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Trophy, Star, Users } from 'lucide-react';

interface ChallengeCardProps {
  title: string;
  difficulty: string;
  startTime: string;
  duration: string;
  participants: number;
  imageUrl: string;
  delay: number;
}

export default function ChallengeCard({
  title,
  difficulty,
  startTime,
  duration,
  participants,
  imageUrl,
  delay
}: ChallengeCardProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'text-green-500';
      case 'medium': return 'text-yellow-500';
      case 'hard': return 'text-red-500';
      default: return 'text-purple-500';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-gray-900 rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
    >
      <div className="h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-gray-400" />
              <span className="text-gray-400">{startTime}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Trophy className="h-4 w-4 text-gray-400" />
              <span className="text-gray-400">{duration}</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Star className="h-4 w-4 text-gray-400" />
              <span className={getDifficultyColor(difficulty)}>{difficulty}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4 text-gray-400" />
              <span className="text-gray-400">{participants.toLocaleString()} joined</span>
            </div>
          </div>
        </div>

        <button className="mt-4 w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition-colors">
          Register Now
        </button>
      </div>
    </motion.div>
  );
}