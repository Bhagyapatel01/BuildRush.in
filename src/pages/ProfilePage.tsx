import React from 'react';
import { Calendar, Award, GitBranch, Star } from 'lucide-react';
import ContributionGraph from '../components/profile/ContributionGraph';
import ProfileStats from '../components/profile/ProfileStats';
import SolvedChallenges from '../components/profile/SolvedChallenges';

export default function ProfilePage() {
  return (
    <div className="bg-black mb-20 min-h-screen pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Info */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900 rounded-lg p-6">
              <div className="flex items-center space-x-4">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400"
                  alt="Profile"
                  className="w-20 h-20 rounded-full"
                />
                <div>
                  <h2 className="text-xl font-bold text-white">John Doe</h2>
                  <p className="text-purple-500">Senior Developer</p>
                </div>
              </div>
              
              <div className="mt-6 space-y-4">
                <div className="flex items-center text-gray-400">
                  <Award className="w-5 h-5 mr-2" />
                  <span>Rank: #125 Global</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <Star className="w-5 h-5 mr-2" />
                  <span>2350 Rating</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <GitBranch className="w-5 h-5 mr-2" />
                  <span>450 Problems Solved</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <ProfileStats />
            <ContributionGraph />
            <SolvedChallenges />
          </div>
        </div>
      </div>
    </div>
  );
}