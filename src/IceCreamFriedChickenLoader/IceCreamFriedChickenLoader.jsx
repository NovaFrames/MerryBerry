import { useEffect, useState } from 'react';

const IceCreamPreloader = () => {
  const [loading, setLoading] = useState(true);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
      {/* Loading text with infinite wave animation */}
      <div className="text-2xl font-bold text-gray-800 mb-4 flex space-x-1">
        {['L', 'o', 'a', 'd', 'i', 'n', 'g', '.', '.', '.'].map((letter, index) => (
          <span
            key={index}
            className="inline-block animate-bounce"
            style={{ animationDelay: `${index * 0.1}s`, animationIterationCount: 'infinite' }}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
};

export default IceCreamPreloader;
