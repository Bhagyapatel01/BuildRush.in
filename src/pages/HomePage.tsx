import React from 'react';
import { ArrowRight, Code, Zap, Shield, Rocket, Users, Trophy } from 'lucide-react';
import { i } from 'framer-motion/client';
import TeamMember from '../components/about/TeamMember';
import BhagyaPhoto from "./../assets/Dev_photo/bhagya.png";
import Hash from "./../assets/Dev_photo/harsh.png";

export default function HomePage() {
  const teamMembers = [
    {
      name: "Bhagya N. Patel",
      role: "Founder & CEO",
      imageUrl: BhagyaPhoto,
      bio: "Former Google engineer with a passion for developer education",
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com"
      }
    },
    {
      name: "Emily Rodriguez",
      role: "Founder & CEO",
      imageUrl: Hash,
      bio: "Tech leader focused on creating innovative learning experiences",
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
      }
    },
   
  ];
 

  return (
    <div className="bg-black min-h-screen pt-16">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Build. Learn. <span className="text-purple-500">Excel.</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Master coding challenges and accelerate your development career
          </p>
          <button className="bg-purple-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-purple-700 flex items-center space-x-2 mx-auto">
            <span>Get Started</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-16 ml-20 mr-20">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {teamMembers.map((member) => (
              <TeamMember key={member.name} {...member} />
            ))}
          </div>
        </div>
      {/* Rest of the sections remain unchanged */}
    </div>
  );
}