import React from 'react';
import { Calendar } from 'lucide-react';

export default function ContributionGraph() {
  // Generate contribution data for the last 52 weeks
  const generateContributions = () => {
    const weeks = [];
    for (let i = 0; i < 52; i++) {
      const days = [];
      for (let j = 0; j < 7; j++) {
        days.push(Math.floor(Math.random() * 4));
      }
      weeks.push(days);
    }
    return weeks;
  };

  const weeks = generateContributions();
  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <div className="bg-gray-900 rounded-lg p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Calendar className="h-5 w-5 text-purple-500" />
        <h3 className="text-xl font-semibold text-white">Contribution Graph</h3>
      </div>

      <div className="flex">
        {/* Days labels */}
        <div className="flex flex-col justify-between pr-2 py-1">
          {weekDays.map((day) => (
            <div key={day} className="text-xs text-gray-400 h-3">
              {day}
            </div>
          ))}
        </div>

        {/* Graph */}
        <div className="flex-1 overflow-x-auto">
          <div className="flex space-x-1">
            {weeks.map((week, weekIndex) => (
              <div key={weekIndex} className="flex flex-col space-y-1">
                {week.map((count, dayIndex) => (
                  <div
                    key={`${weekIndex}-${dayIndex}`}
                    className={`w-3 h-3 rounded-sm ${
                      count === 0
                        ? 'bg-gray-800'
                        : count === 1
                        ? 'bg-purple-900'
                        : count === 2
                        ? 'bg-purple-700'
                        : 'bg-purple-500'
                    }`}
                    title={`${count} contributions`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center space-x-4 mt-6 justify-end">
        <div className="text-xs text-gray-400">Less</div>
        {[0, 1, 2, 3].map((level) => (
          <div
            key={level}
            className={`w-3 h-3 rounded-sm ${
              level === 0
                ? 'bg-gray-800'
                : level === 1
                ? 'bg-purple-900'
                : level === 2
                ? 'bg-purple-700'
                : 'bg-purple-500'
            }`}
          />
        ))}
        <div className="text-xs text-gray-400">More</div>
      </div>
    </div>
  );
}