import React from 'react';
import { Users, Award, Globe, Code2, Rocket, Heart } from 'lucide-react';
import DeveloperCard from '../components/home/DeveloperCard';

export default function AboutPage() {
  const topDevelopers = [
    {
      name: "Bhagya N. Patel",
      role: "Full Stack Developer",
      rating: 2450,
      challenges: 387,
      imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
      delay: 0.2,
      streak: 45,
      contributions: 892,
      badges: ["", "Contest Winner"]
    },
    {
      name: "Harsh P. Patel",
      role: "Flutter Developer",
      rating: 2380,
      challenges: 412,
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      delay: 0.4,
      streak: 32,
      contributions: 756,
      badges: ["Java Master", "Top Contributor"]
    }
  ];

  return (
    <div className="bg-black min-h-screen mb-5 pt-20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">About BuildRush</h1>
          <p className="text-xl text-gray-400">Empowering developers to reach their full potential</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-900 p-6 rounded-lg text-center">
            <Users className="h-12 w-12 text-purple-500 mx-auto mb-4" />
            <div className="text-3xl font-bold text-white mb-2">100K+</div>
            <div className="text-gray-400">Active Developers</div>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg text-center">
            <Award className="h-12 w-12 text-purple-500 mx-auto mb-4" />
            <div className="text-3xl font-bold text-white mb-2">50K+</div>
            <div className="text-gray-400">Challenges Completed</div>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg text-center">
            <Globe className="h-12 w-12 text-purple-500 mx-auto mb-4" />
            <div className="text-3xl font-bold text-white mb-2">150+</div>
            <div className="text-gray-400">Countries</div>
          </div>
        </div>

        {/* Mission */}
        <div className="bg-gray-900 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
          <p className="text-gray-400 leading-relaxed">
            At BuildRush, we believe in the power of continuous learning and practical experience. 
            Our platform is designed to help developers sharpen their skills through real-world coding 
            challenges, competitive programming, and a supportive community of like-minded individuals.
          </p>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg">
              <Code2 className="h-10 w-10 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Excellence</h3>
              <p className="text-gray-400">We strive for excellence in every challenge we create</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <Rocket className="h-10 w-10 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
              <p className="text-gray-400">Constantly pushing the boundaries of learning</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <Heart className="h-10 w-10 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Community</h3>
              <p className="text-gray-400">Building a supportive environment for growth</p>
            </div>
          </div>
        </div>
     
       {/* Top Developers Section */}
      <div className="bg-gray-900/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Top Participate</h2>
            <p className="text-gray-400">Meet our community's highest achievers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {topDevelopers.map((dev) => (
              <DeveloperCard key={dev.name} {...dev} />
            ))}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}