import React from 'react';
import { Calendar, Clock, Tag, CheckCircle, XCircle } from 'lucide-react';

export default function TaskHistory() {
  const tasks = [
    {
      id: 1,
      title: 'Full Stack Web Application',
      status: 'completed',
      deadline: '2024-03-25',
      duration: '2 weeks',
      difficulty: 'Hard',
      submissions: 5
    },
    {
      id: 2,
      title: 'API Integration Task',
      status: 'in-progress',
      deadline: '2024-03-30',
      duration: '1 week',
      difficulty: 'Medium',
      submissions: 2
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'text-green-500';
      case 'medium': return 'text-yellow-500';
      case 'hard': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  const getStatusIcon = (status: string) => {
    return status === 'completed' ? 
      <CheckCircle className="h-5 w-5 text-green-500" /> : 
      <Clock className="h-5 w-5 text-yellow-500" />;
  };

  return (
    <div className="bg-gray-900 rounded-lg p-6">
      <h2 className="text-2xl font-semibold text-white mb-6">Task History</h2>
      <div className="space-y-4">
        {tasks.map((task) => (
          <div key={task.id} className="border border-gray-800 rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center space-x-2">
                  {getStatusIcon(task.status)}
                  <h3 className="text-white font-medium">{task.title}</h3>
                </div>
                <div className="flex items-center space-x-4 mt-2">
                  <div className="flex items-center text-gray-400">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{task.deadline}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{task.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Tag className={`h-4 w-4 mr-1 ${getDifficultyColor(task.difficulty)}`} />
                    <span className={getDifficultyColor(task.difficulty)}>{task.difficulty}</span>
                  </div>
                </div>
              </div>
              <div className="text-gray-400">
                {task.submissions} submissions
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}