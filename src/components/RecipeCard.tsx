import React from 'react';
import { Heart, ArrowRight } from 'lucide-react';
import { Recipe } from '../types';

interface RecipeCardProps {
  recipe: Recipe;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
  onOpenRecipe: (recipe: Recipe) => void;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({
  recipe,
  isSaved,
  onToggleSave,
  onOpenRecipe,
}) => {
  return (
    <article
      onClick={() => onOpenRecipe(recipe)}
      className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-[#E9E2D5] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col hover:-translate-y-1"
    >
      {/* Image container */}
      <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#EAE3D4]">
        <img
          src={recipe.image}
          alt={recipe.name}
          loading="lazy"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Origin Badge (bottom-left) */}
        <div className="absolute left-3 bottom-3 z-10">
          <span className="inline-block px-2.5 py-1 text-[10px] font-bold tracking-widest uppercase bg-[#1A2840]/90 text-white backdrop-blur-xs rounded-md shadow-xs">
            {recipe.originTag}
          </span>
        </div>

        {/* Save to Notebook Button (top-right) */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onToggleSave(recipe.id);
          }}
          aria-label={isSaved ? 'Remove from saved' : 'Save recipe'}
          className={`absolute top-3 right-3 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all shadow-md ${
            isSaved
              ? 'bg-[#1A2840] text-rose-400 hover:scale-110'
              : 'bg-black/35 hover:bg-black/60 text-white backdrop-blur-xs hover:scale-110'
          }`}
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              isSaved ? 'fill-rose-500 text-rose-500' : 'text-white'
            }`}
          />
        </button>
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-1">
        {/* Category & Time */}
        <div className="flex items-center gap-2 text-[11px] font-bold tracking-wider text-[#A85A32] uppercase mb-1.5">
          <span>{recipe.categoryTag}</span>
        </div>

        {/* Tagline if exists (e.g. dal bhat power 24 hours) */}
        {recipe.tagline && (
          <div className="text-[11px] font-medium text-[#78716C] italic mb-1">
            {recipe.tagline}
          </div>
        )}

        {/* Title */}
        <h3 className="font-serif text-2xl font-bold text-[#1C1917] tracking-tight group-hover:text-[#C45A2C] transition-colors mb-2.5">
          {recipe.name}
        </h3>

        {/* Description Excerpt */}
        <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed line-clamp-3 mb-4">
          {recipe.description}
        </p>

        {/* Action Link */}
        <div className="mt-auto pt-2 border-t border-[#F2ECE1] flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#1C1917] group-hover:text-[#C45A2C] transition-colors">
            <span>Open recipe</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </div>
    </article>
  );
};
