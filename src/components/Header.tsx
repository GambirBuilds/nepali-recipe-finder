import React from 'react';
import { Compass, Heart, Soup } from 'lucide-react';

interface HeaderProps {
  activeView: 'discover' | 'saved' | 'detail';
  onNavigate: (view: 'discover' | 'saved') => void;
  savedCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeView,
  onNavigate,
  savedCount,
}) => {
  return (
    <header className="w-full border-b border-[#EAE3D2]/70 bg-[#FAF7F2]/90 backdrop-blur-md sticky top-0 z-30 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand / Logo */}
        <button
          onClick={() => onNavigate('discover')}
          className="flex items-center gap-3 text-left group transition-transform focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-[#1A2840] flex items-center justify-center text-amber-300 shadow-sm group-hover:scale-105 transition-transform">
            <Soup className="w-5 h-5" />
          </div>
          <div>
            <div className="font-serif font-bold text-lg text-[#1C1917] tracking-tight group-hover:text-[#C45A2C] transition-colors">
              Nepali Recipe Finder
            </div>
            <div className="text-[11px] text-[#78716C] tracking-wider font-devanagari flex items-center gap-1.5 font-medium">
              <span>घरको स्वाद</span>
              <span className="w-1 h-1 rounded-full bg-[#A8A29E]"></span>
              <span>जहिले पनि</span>
            </div>
          </div>
        </button>

        {/* Navigation */}
        <nav className="flex items-center gap-2 sm:gap-4">
          <button
            onClick={() => onNavigate('discover')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
              activeView === 'discover'
                ? 'bg-[#1A2840] text-white shadow-xs'
                : 'text-[#44403C] hover:text-[#1C1917] hover:bg-[#EFE9DF]'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>Discover</span>
          </button>

          <button
            onClick={() => onNavigate('saved')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
              activeView === 'saved'
                ? 'bg-[#1A2840] text-white shadow-xs'
                : 'text-[#44403C] hover:text-[#1C1917] hover:bg-[#EFE9DF]'
            }`}
          >
            <Heart
              className={`w-4 h-4 ${
                savedCount > 0
                  ? activeView === 'saved'
                    ? 'fill-white text-white'
                    : 'fill-rose-500 text-rose-500'
                  : ''
              }`}
            />
            <span>Saved</span>
            <span
              className={`ml-0.5 px-2 py-0.5 text-xs rounded-full font-bold leading-none ${
                activeView === 'saved'
                  ? 'bg-amber-400 text-[#1A2840]'
                  : 'bg-[#E3DCce] text-[#44403C]'
              }`}
            >
              {savedCount}
            </span>
          </button>
        </nav>
      </div>
    </header>
  );
};
