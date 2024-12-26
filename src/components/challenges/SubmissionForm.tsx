import React from 'react';
import { Upload, FileText, X } from 'lucide-react';

interface SubmissionFormProps {
  isOpen: boolean;
  onClose: () => void;
  challengeId: string;
}

export default function SubmissionForm({ isOpen, onClose, challengeId }: SubmissionFormProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-900 rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold text-white">Submit Solution</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="h-6 w-6" />
          </button>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-gray-400 mb-2">Solution File (PDF)</label>
            <div className="relative">
              <FileText className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
              <input
                type="file"
                accept=".pdf"
                className="w-full bg-black border border-gray-800 rounded-md p-2 pl-10 text-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-400 mb-2">Comments</label>
            <textarea
              className="w-full bg-black border border-gray-800 rounded-md p-2 text-white h-32"
              placeholder="Add any comments about your solution..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 flex items-center justify-center space-x-2"
          >
            <Upload className="h-5 w-5" />
            <span>Submit Solution</span>
          </button>
        </form>
      </div>
    </div>
  );
}