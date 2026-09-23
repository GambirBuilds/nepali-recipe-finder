import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-[#EAE3D2]/80 mt-20 py-10 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left: Devanagari */}
        <div className="font-devanagari text-2xl font-bold text-[#1C1917] tracking-wide">
          घरको स्वाद
        </div>

        {/* Right: Tagline */}
        <div className="text-xs sm:text-sm text-[#78716C] font-light">
          Made for everyday cooking, wherever your kitchen is.
        </div>
      </div>
    </footer>
  );
};
