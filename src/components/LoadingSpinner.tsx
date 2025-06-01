import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="relative">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-600 dark:border-indigo-400"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-8 w-8 bg-white dark:bg-gray-900 rounded-full"></div>
        </div>
      </div>
      <p className="ml-4 text-lg text-gray-600 dark:text-gray-300">Loading...</p>
    </div>
  );
};

export default LoadingSpinner;