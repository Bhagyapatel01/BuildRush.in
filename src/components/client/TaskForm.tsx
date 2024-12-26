import React from 'react';
import { Calendar, Clock, Tag, FileText } from 'lucide-react';

export default function TaskForm() {
  return (
    <div className="bg-gray-900 mb-15 rounded-lg p-6">
      <h2 className="text-2xl font-semibold text-white mb-6">Post New Task</h2>
      
      <form className="space-y-6">
        <div>
          <label className="block text-gray-400 mb-2">Task Title</label>
          <input
            type="text"
            className="w-full bg-black border border-gray-800 rounded-md p-2 text-white"
            placeholder="Enter task title"
          />
        </div>

        <div>
          <label className="block text-gray-400 mb-2">Description</label>
          <textarea
            className="w-full bg-black border border-gray-800 rounded-md p-2 text-white h-32"
            placeholder="Enter task description"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-400 mb-2">Deadline</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
              <input
                type="date"
                className="w-full bg-black border border-gray-800 rounded-md p-2 pl-10 text-white"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-gray-400 mb-2">Duration</label>
            <div className="relative">
              <Clock className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
              <input
                type="text"
                className="w-full bg-black border border-gray-800 rounded-md p-2 pl-10 text-white"
                placeholder="e.g., 2 hours"
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-gray-400 mb-2">Difficulty Level</label>
          <div className="relative">
            <Tag className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
            <select className="w-full bg-black border border-gray-800 rounded-md p-2 pl-10 text-white">
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-gray-400 mb-2">Attachments</label>
          <div className="relative">
            <FileText className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
            <input
              type="file"
              className="w-full bg-black border border-gray-800 rounded-md p-2 pl-10 text-white"
              accept=".pdf,.doc,.docx"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700"
        >
          Post Task
        </button>
      </form>
    </div>
  );
}