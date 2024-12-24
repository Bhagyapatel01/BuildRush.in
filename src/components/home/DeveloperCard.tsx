import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Star, Trophy, Award, GitBranch, Timer } from 'lucide-react';

interface DeveloperCardProps {
  name: string;
  role: string;
  rating: number;
  challenges: number;
  imageUrl: string;
  delay: number;
  streak: number;
  contributions: number;
  badges: string[];
}

export default function DeveloperCard({ 
  name, 
  role, 
  rating, 
  challenges, 
  imageUrl, 
  delay,
  streak,
  contributions,
  badges 
}: DeveloperCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
    >
      <div className="flex items-center space-x-4">
        <motion.img
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: delay + 0.2, type: "spring", stiffness: 200 }}
          src={imageUrl}
          alt={name}
          className="w-20 h-20 rounded-full border-2 border-purple-500 p-1"
        />
        <div>
          <motion.h3 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delay + 0.3 }}
            className="text-xl font-semibold text-white"
          >
            {name}
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delay + 0.4 }}
            className="text-purple-400"
          >
            {role}
          </motion.p>
        </div>
      </div>
      
      <div className="mt-6 grid grid-cols-2 gap-4">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: delay + 0.5 }}
          className="bg-gray-800/50 p-3 rounded-lg"
        >
          <div className="flex items-center space-x-2 mb-2">
            <Star className="h-5 w-5 text-yellow-500" />
            <span className="text-gray-300">Rating</span>
          </div>
          <span className="text-2xl font-bold text-white">{rating}</span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: delay + 0.5 }}
          className="bg-gray-800/50 p-3 rounded-lg"
        >
          <div className="flex items-center space-x-2 mb-2">
            <Code2 className="h-5 w-5 text-purple-500" />
            <span className="text-gray-300">Solved</span>
          </div>
          <span className="text-2xl font-bold text-white">{challenges}</span>
        </motion.div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: delay + 0.6 }}
          className="flex items-center space-x-2"
        >
          <Timer className="h-4 w-4 text-green-500" />
          <span className="text-gray-300">{streak}d streak</span>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: delay + 0.7 }}
          className="flex items-center space-x-2"
        >
          <GitBranch className="h-4 w-4 text-blue-500" />
          <span className="text-gray-300">{contributions}</span>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: delay + 0.8 }}
          className="flex items-center space-x-2"
        >
          <Trophy className="h-4 w-4 text-yellow-500" />
          <span className="text-gray-300">Top 1%</span>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + 0.9 }}
        className="mt-4 flex space-x-2"
      >
        {badges.map((badge, index) => (
          <div 
            key={index}
            className="bg-purple-500/10 text-purple-400 text-sm px-3 py-1 rounded-full"
          >
            {badge}
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}


