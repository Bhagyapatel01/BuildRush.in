import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export default function TeamMember({ name, role, imageUrl, bio, social }: TeamMemberProps) {
  return (
    <div className="bg-gray-900 rounded-lg p-6">
      <div className="flex flex-col items-center text-center">
        <img
          src={imageUrl}
          alt={name}
          className="w-24 h-24 rounded-full mb-4"
        />
        <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
        <p className="text-purple-500 mb-4">{role}</p>
        <p className="text-gray-400 mb-6">{bio}</p>
        
        <div className="flex space-x-4">
          {social.github && (
            <a href={social.github} className="text-gray-400 hover:text-white">
              <Github className="h-5 w-5" />
            </a>
          )}
          {social.linkedin && (
            <a href={social.linkedin} className="text-gray-400 hover:text-white">
              <Linkedin className="h-5 w-5" />
            </a>
          )}
          {social.twitter && (
            <a href={social.twitter} className="text-gray-400 hover:text-white">
              <Twitter className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}