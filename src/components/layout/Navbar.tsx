import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Home, Users, DollarSign, LogIn, Terminal } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-black border-b border-gray-800 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Code2 className="h-8 w-8 text-purple-500" />
              <span className="text-white text-xl font-bold">BuildRush</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white flex items-center space-x-1">
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
            <Link to="/challenges" className="text-gray-300 hover:text-white flex items-center space-x-1">
              <Terminal className="h-4 w-4" />
              <span>Challenges</span>
            </Link>
            <Link to="/pricing" className="text-gray-300 hover:text-white flex items-center space-x-1">
              <DollarSign className="h-4 w-4" />
              <span>Pricing</span>
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-white flex items-center space-x-1">
              <Users className="h-4 w-4" />
              <span>About</span>
            </Link>
            <Link to="/login" className="bg-purple-600 text-white px-4 py-2 rounded-md flex items-center space-x-1 hover:bg-purple-700">
              <LogIn className="h-4 w-4" />
              <span>Login</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}