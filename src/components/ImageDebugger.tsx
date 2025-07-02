import React, { useState, useEffect } from 'react';
import { debugCheckAllImages } from '../utils/imageUtils';

interface ImageCheckResult {
  path: string;
  exists: boolean;
}

export const ImageDebugger: React.FC = () => {
  const [results, setResults] = useState<ImageCheckResult[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkImages = async () => {
      try {
        setLoading(true);
        const imageResults = await debugCheckAllImages();
        setResults(imageResults);
      } catch (err) {
        setError('Failed to check images');
        console.error('Image check error:', err);
      } finally {
        setLoading(false);
      }
    };

    checkImages();
  }, []);

  if (loading) {
    return (
      <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg z-50 max-w-md">
        <h3 className="text-lg font-semibold mb-2">Checking Images...</h3>
        <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-indigo-600 mx-auto"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="fixed bottom-4 right-4 bg-red-100 dark:bg-red-900 p-4 rounded-lg shadow-lg z-50 max-w-md">
        <h3 className="text-lg font-semibold mb-2 text-red-800 dark:text-red-200">Error</h3>
        <p className="text-red-700 dark:text-red-300">{error}</p>
      </div>
    );
  }

  const missingImages = results.filter(r => !r.exists);
  
  if (missingImages.length === 0) {
    return null; // Don't show anything if all images are loading correctly
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg z-50 max-w-md max-h-96 overflow-auto">
      <h3 className="text-lg font-semibold mb-2">Image Issues Detected</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
        {missingImages.length} of {results.length} images failed to load
      </p>
      <ul className="space-y-2 text-sm">
        {missingImages.map((result, index) => (
          <li key={index} className="text-red-600 dark:text-red-400">
            ❌ {result.path}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageDebugger;