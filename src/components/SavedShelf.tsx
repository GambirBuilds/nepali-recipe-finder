import React from 'react';
import { Recipe } from '../types';
import { RecipeCard } from './RecipeCard';
import { Bookmark, Compass } from 'lucide-react';

interface SavedShelfProps {
  recipes: Recipe[];
  savedRecipeIds: Set<string>;
  onToggleSave: (id: string) => void;
  onOpenRecipe: (recipe: Recipe) => void;
  onExplore: () => void;
}

export const SavedShelf: React.FC<SavedShelfProps> = ({
  recipes,
  savedRecipeIds,
  onToggleSave,
  onOpenRecipe,
  onExplore,
}) => {
  const savedRecipes = recipes.filter((r) => savedRecipeIds.has(r.id));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fadeIn">
      {/* Header section */}
      <div className="mb-10">
        <div className="text-xs font-bold tracking-widest text-[#78716C] uppercase mb-2">
          Your personal shelf
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1C1917] tracking-tight mb-3">
          Saved for later.
        </h1>
        <p className="text-sm sm:text-base text-[#57534E] max-w-2xl font-light">
          Recipes worth keeping close, from your kitchen to the next one you cook for.
        </p>
      </div>

      {/* Grid or Empty state */}
      {savedRecipes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {savedRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              isSaved={true}
              onToggleSave={onToggleSave}
              onOpenRecipe={onOpenRecipe}
            />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center bg-white/60 rounded-3xl border border-[#EBE4D8] p-8 max-w-lg mx-auto">
          <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-[#F0E9DC] flex items-center justify-center text-[#78716C]">
            <Bookmark className="w-7 h-7" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-[#1C1917] mb-2">
            No recipes saved yet
          </h3>
          <p className="text-sm text-[#78716C] leading-relaxed mb-6">
            Click the heart icon on any recipe to save it to your personal shelf for easy access anytime.
          </p>
          <button
            type="button"
            onClick={onExplore}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1A2840] text-white text-sm font-semibold hover:bg-[#25395A] transition-all shadow-xs"
          >
            <Compass className="w-4 h-4" />
            <span>Discover recipes</span>
          </button>
        </div>
      )}
    </div>
  );
};
