import React from 'react';
import { Search } from 'lucide-react';

interface HeroProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onQuickSearch: (query: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  searchQuery,
  onSearchChange,
  onQuickSearch,
}) => {
  const quickTags = ['Dal bhat tarkari', 'Momo', 'Chowmein', 'Keema noodles'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="relative overflow-hidden rounded-3xl bg-[#1A2840] text-white shadow-xl my-6 border border-[#273B5B]">
      {/* Decorative background arcs and gradient */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none opacity-20 overflow-hidden hidden md:block">
        <svg
          viewBox="0 0 500 500"
          fill="none"
          className="w-[140%] h-[140%] -top-20 -right-20 absolute stroke-white/30"
          strokeWidth="1.5"
        >
          <circle cx="400" cy="150" r="160" />
          <circle cx="400" cy="150" r="240" />
          <circle cx="400" cy="150" r="320" />
          <circle cx="400" cy="150" r="400" />
        </svg>
      </div>

      <div className="relative z-10 px-6 py-12 sm:px-12 sm:py-16 lg:py-20 max-w-4xl">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest text-[#94A3B8] uppercase mb-4">
          <span className="inline-block w-5 h-px bg-[#94A3B8]"></span>
          <span>The kitchen starts here</span>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-[1.15] mb-5">
          Everyday food, <br />
          <span className="italic font-normal">the Nepali way.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-[#CBD5E1] max-w-2xl font-light leading-relaxed mb-8">
          Find the dishes that taste like home — from a basket of momos to the next
          recipe you cannot wait to try.
        </p>

        {/* Search Bar Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/95 rounded-2xl p-1.5 sm:p-2 flex items-center shadow-lg border border-white/20 transition-all focus-within:ring-2 focus-within:ring-amber-400"
        >
          <div className="pl-3 sm:pl-4 text-[#64748B]">
            <Search className="w-5 h-5" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search a dish or ingredient..."
            className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base text-[#1E293B] placeholder-[#94A3B8] bg-transparent focus:outline-none"
          />
          <button
            type="submit"
            className="bg-[#C45A2C] hover:bg-[#B34E24] text-white px-5 sm:px-7 py-3 rounded-xl font-medium text-sm sm:text-base whitespace-nowrap shadow-sm transition-all hover:shadow active:scale-98"
          >
            Search recipes
          </button>
        </form>

        {/* Quick query pills */}
        <div className="flex flex-wrap items-center gap-2 pt-4">
          {quickTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => onQuickSearch(tag)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all ${
                searchQuery.toLowerCase() === tag.toLowerCase()
                  ? 'bg-white/20 border-white text-white shadow-xs'
                  : 'bg-white/10 hover:bg-white/15 border-white/15 text-[#E2E8F0] hover:text-white'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Decorative devanagari watermark bottom right */}
      <div className="absolute right-6 bottom-5 sm:right-10 sm:bottom-8 pointer-events-none text-right font-devanagari select-none">
        <span className="text-[#64748B]/40 text-base sm:text-lg font-light tracking-wide italic">
          मोमो चोमिन अचार चिया
        </span>
      </div>
    </section>
  );
};
