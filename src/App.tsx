import { useState, useEffect, useMemo } from 'react';
import { RECIPES } from './data/recipes';
import { Recipe, FilterCategory } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { RecipeCard } from './components/RecipeCard';
import { RecipeDetail } from './components/RecipeDetail';
import { SavedShelf } from './components/SavedShelf';
import { Footer } from './components/Footer';

export default function App() {
  const [activeView, setActiveView] = useState<'discover' | 'detail' | 'saved'>('discover');
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Persist saved recipe IDs in localStorage
  const [savedRecipeIds, setSavedRecipeIds] = useState<Set<string>>(() => {
    try {
      const stored = localStorage.getItem('nepali_saved_recipes');
      if (stored) {
        return new Set(JSON.parse(stored));
      }
    } catch {
      // fallback
    }
    return new Set<string>();
  });

  useEffect(() => {
    try {
      localStorage.setItem(
        'nepali_saved_recipes',
        JSON.stringify(Array.from(savedRecipeIds))
      );
    } catch {
      // ignore
    }
  }, [savedRecipeIds]);

  const toggleSave = (id: string) => {
    setSavedRecipeIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const handleOpenRecipe = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setActiveView('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToRecipes = () => {
    setActiveView('discover');
    setSelectedRecipe(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (view: 'discover' | 'saved') => {
    setActiveView(view);
    setSelectedRecipe(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleQuickSearch = (tag: string) => {
    setSearchQuery(tag);
    setActiveView('discover');
    setSelectedRecipe(null);
  };

  // Filter recipes based on category and search query
  const filteredRecipes = useMemo(() => {
    return RECIPES.filter((recipe) => {
      // Category filter
      if (selectedCategory === 'nepali') {
        const isNepali = recipe.category === 'nepali' || recipe.originTag === 'NEPALI TABLE';
        if (!isNepali) return false;
      } else if (selectedCategory === 'vegetarian') {
        const isVeg = recipe.tags.includes('vegetarian');
        if (!isVeg) return false;
      } else if (selectedCategory === 'quick') {
        const isQuick = recipe.timeMinutes <= 30;
        if (!isQuick) return false;
      } else if (selectedCategory === 'global') {
        const isGlobal = recipe.category === 'global';
        if (!isGlobal) return false;
      }

      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = recipe.name.toLowerCase().includes(q);
        const matchesNepali = recipe.nepaliName?.toLowerCase().includes(q);
        const matchesOrigin = recipe.originTag.toLowerCase().includes(q);
        const matchesDesc = recipe.description.toLowerCase().includes(q);
        const matchesIngredient = recipe.ingredients.some((i) =>
          i.name.toLowerCase().includes(q)
        );
        const matchesTag = recipe.tags.some((t) => t.toLowerCase().includes(q));

        return matchesName || matchesNepali || matchesOrigin || matchesDesc || matchesIngredient || matchesTag;
      }

      return true;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#221F1B]">
      {/* Top Navigation */}
      <Header
        activeView={activeView}
        onNavigate={handleNavigate}
        savedCount={savedRecipeIds.size}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeView === 'detail' && selectedRecipe ? (
          <RecipeDetail
            recipe={selectedRecipe}
            isSaved={savedRecipeIds.has(selectedRecipe.id)}
            onToggleSave={toggleSave}
            onBack={handleBackToRecipes}
          />
        ) : activeView === 'saved' ? (
          <SavedShelf
            recipes={RECIPES}
            savedRecipeIds={savedRecipeIds}
            onToggleSave={toggleSave}
            onOpenRecipe={handleOpenRecipe}
            onExplore={() => handleNavigate('discover')}
          />
        ) : (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 animate-fadeIn">
            {/* Hero Section */}
            <Hero
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              onQuickSearch={handleQuickSearch}
            />

            {/* Catalog Section Header */}
            <div className="pt-6 sm:pt-10 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#EAE3D2] mb-8">
              <div>
                <div className="text-[11px] font-bold tracking-widest text-[#78716C] uppercase mb-1.5 flex items-center gap-2">
                  <span className="w-4 h-px bg-[#A8A29E]"></span>
                  <span>A good place to begin</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] tracking-tight">
                  From our Nepali table
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[#78716C] max-w-sm md:text-right font-light leading-relaxed">
                Start with the dishes that hold a little warmth, spice, and memory.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-8 scrollbar-none">
              {(
                [
                  { id: 'all', label: 'All' },
                  { id: 'nepali', label: 'Nepali first' },
                  { id: 'vegetarian', label: 'Vegetarian' },
                  { id: 'quick', label: 'Quick meals' },
                  { id: 'global', label: 'Global table' },
                ] as const
              ).map((tab) => {
                const isActive = selectedCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setSelectedCategory(tab.id)}
                    className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${
                      isActive
                        ? 'bg-[#1A2840] text-white shadow-xs'
                        : 'bg-white hover:bg-[#EFE9DF] text-[#57534E] border border-[#E7DFD3]'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}

              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="ml-auto text-xs font-semibold text-[#A85A32] hover:underline whitespace-nowrap"
                >
                  Clear search ({searchQuery})
                </button>
              )}
            </div>

            {/* Recipe Cards Grid */}
            {filteredRecipes.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {filteredRecipes.map((recipe) => (
                  <RecipeCard
                    key={recipe.id}
                    recipe={recipe}
                    isSaved={savedRecipeIds.has(recipe.id)}
                    onToggleSave={toggleSave}
                    onOpenRecipe={handleOpenRecipe}
                  />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center bg-white/60 rounded-3xl border border-[#EBE4D8] p-8 max-w-md mx-auto">
                <h3 className="font-serif text-2xl font-bold text-[#1C1917] mb-2">
                  No dishes found
                </h3>
                <p className="text-sm text-[#78716C] mb-6">
                  We couldn't find any recipes matching your search. Try another ingredient or dish name.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="px-5 py-2.5 rounded-full bg-[#1A2840] text-white text-xs sm:text-sm font-semibold hover:bg-[#25395A] transition-colors"
                >
                  Reset filters
                </button>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
