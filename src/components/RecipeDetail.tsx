import React from 'react';
import { ArrowLeft, Heart, Video, ExternalLink } from 'lucide-react';
import { Recipe } from '../types';

interface RecipeDetailProps {
  recipe: Recipe;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
  onBack: () => void;
}

export const RecipeDetail: React.FC<RecipeDetailProps> = ({
  recipe,
  isSaved,
  onToggleSave,
  onBack,
}) => {
  const handleWatchVideo = () => {
    const youtubeUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(
      recipe.videoQuery || `Nepali ${recipe.name} recipe`
    )}`;
    window.open(youtubeUrl, '_blank', 'noopener,noreferrer');
  };

  const handleOpenSource = () => {
    if (recipe.sourceUrl) {
      window.open(recipe.sourceUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fadeIn">
      {/* Back to recipes */}
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-2 text-sm font-semibold text-[#57534E] hover:text-[#1C1917] mb-8 transition-colors group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span>Back to recipes</span>
      </button>

      {/* Main 2-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left Column: Framed Image Card */}
        <div className="lg:col-span-5">
          <div className="bg-white p-4 sm:p-5 rounded-3xl border border-[#E8E1D4] shadow-md">
            <div className="aspect-[4/5] sm:aspect-square lg:aspect-[4/5] w-full rounded-2xl overflow-hidden bg-[#E7E0D3]">
              <img
                src={recipe.image}
                alt={recipe.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Shelf note footer caption */}
            <div className="pt-4 pb-1 text-center">
              <span className="text-[10px] sm:text-[11px] font-bold tracking-widest text-[#78716C] uppercase font-mono">
                {recipe.shelfNote}
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Recipe Details */}
        <div className="lg:col-span-7 flex flex-col">
          {/* Category eyebrow */}
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#A85A32] uppercase mb-2">
            <span className="w-4 h-px bg-[#A85A32]"></span>
            <span>{recipe.categoryTag.split('•')[0].trim()}</span>
          </div>

          {/* Recipe Title */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1C1917] tracking-tight leading-tight mb-2">
            {recipe.name}
          </h1>

          {/* Tagline if available */}
          {recipe.tagline && (
            <div className="text-sm sm:text-base font-medium text-[#78716C] italic mb-4">
              {recipe.tagline}
            </div>
          )}

          {/* Story paragraph */}
          <p className="text-sm sm:text-base text-[#57534E] leading-relaxed mb-6 font-light">
            {recipe.story}
          </p>

          {/* Action buttons row */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pb-8 mb-8 border-b border-[#EAE3D4]">
            <button
              type="button"
              onClick={() => onToggleSave(recipe.id)}
              className={`inline-flex items-center gap-2.5 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all shadow-xs ${
                isSaved
                  ? 'bg-[#1A2840] text-white hover:bg-[#25395A]'
                  : 'bg-[#1A2840] text-white hover:bg-[#25395A]'
              }`}
            >
              <Heart
                className={`w-4 h-4 ${
                  isSaved ? 'fill-rose-500 text-rose-500' : 'text-white'
                }`}
              />
              <span>{isSaved ? 'Saved to your notebook' : 'Save to notebook'}</span>
            </button>

            <button
              type="button"
              onClick={handleWatchVideo}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-full text-xs sm:text-sm font-semibold text-[#1C1917] hover:text-[#C45A2C] hover:bg-[#F2ECE1] transition-all"
            >
              <Video className="w-4 h-4 text-[#A85A32]" />
              <span>Watch recipe video</span>
            </button>

            {recipe.sourceUrl && (
              <button
                type="button"
                onClick={handleOpenSource}
                className="inline-flex items-center gap-1.5 px-3 py-3 rounded-full text-xs sm:text-sm font-medium text-[#78716C] hover:text-[#1C1917] transition-all"
              >
                <span>Original source</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Ingredients Section */}
          <div className="mb-10">
            <h2 className="text-xs font-bold tracking-widest text-[#78716C] uppercase mb-4">
              What you will need
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 bg-white/70 rounded-2xl p-5 sm:p-6 border border-[#EFE8DC]">
              {recipe.ingredients.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between py-2 border-b border-[#F4EFE6] text-xs sm:text-sm"
                >
                  <span className="text-[#1C1917] font-medium">{item.name}</span>
                  <span className="text-[#78716C] font-mono text-xs">{item.amount}</span>
                </div>
              ))}
            </div>
          </div>

          {/* How It Comes Together Section */}
          <div>
            <h2 className="text-xs font-bold tracking-widest text-[#78716C] uppercase mb-4">
              How it comes together
            </h2>

            <div className="prose prose-stone max-w-none text-sm sm:text-base text-[#44403C] leading-relaxed whitespace-pre-line space-y-4">
              <p>{recipe.instructions}</p>

              {recipe.safetyNote && (
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm mt-4">
                  {recipe.safetyNote}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
