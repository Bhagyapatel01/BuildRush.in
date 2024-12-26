import React from 'react';
import TaskForm from '../components/client/TaskForm';
import TaskHistory from '../components/client/TaskHistory';

export default function ClientPage() {
  return (
    <div className="bg-black mb-20 min-h-screen pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Client Dashboard</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <TaskForm />
          <TaskHistory />
        </div>
      </div>
    </div>
  );
}