export interface Ingredient {
  name: string;
  amount: string;
}

export interface Recipe {
  id: string;
  name: string;
  nepaliName?: string;
  tagline?: string; // e.g. "dal bhat power 24 hours"
  categoryTag: string; // e.g. "NEPALI CLASSIC • 80 MIN"
  originTag: string; // e.g. "NEPALI TABLE", "MALAYSIAN", "THAI", "JAPANESE", "INDIA", "ITALIAN", etc.
  category: 'nepali' | 'vegetarian' | 'quick' | 'global';
  tags: string[]; // for multi-filtering
  timeMinutes: number;
  image: string;
  shelfNote: string; // e.g. "A NOTE FROM THE NEPALI RECIPE SHELF • NEPAL"
  description: string;
  story: string;
  ingredients: Ingredient[];
  instructions: string;
  safetyNote?: string;
  videoQuery: string;
  sourceUrl?: string;
}

export type FilterCategory = 'all' | 'nepali' | 'vegetarian' | 'quick' | 'global';
