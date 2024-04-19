import React from 'react';

const TiltingCard = () => {
  return (
    <div className="relative w-48 h-64 overflow-hidden shadow-lg bg-white transform hover:rotate-3 transition-transform">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-80 transform scale-150"></div>
      <div className="p-4 relative z-10">
        <h3 className="text-xl font-semibold text-white mb-2">Tilting Card</h3>
        <p className="text-sm text-white">Hover over me!</p>
      </div>
    </div>
  );
};

export default TiltingCard;
