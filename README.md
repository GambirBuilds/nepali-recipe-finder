# 🍲 Nepali Recipe Finder (घरको स्वाद)

> *"Everyday food, the Nepali way. Find the dishes that taste like home — from a basket of momos to the next recipe you cannot wait to try."*


**Nepali Recipe Finder** is a curated culinary discovery web application that celebrates authentic Nepali cuisine alongside global kitchen classics. Designed with warm editorial typography, high-definition photography, and an intuitive user interface, this platform allows home cooks to explore, prepare, and bookmark recipes from the Himalayan foothills to the international table.

---
## ✨ Features

### 🇳🇵 Authentic Nepali Heritage Dishes
- **Dal Bhat Tarkari (दाल भात तरकारी)**: The iconic everyday staple complete with dal, tarkari, saag greens, achar, and papad.
- **Momo (म:म:)**: Authentic steamed dumplings pleated and served with homemade tomato sesame achar.
- **Chicken Choila (चिकेन छोइला)**: Smoky char-grilled chicken tossed in fenugreek-tempered mustard oil and served with chiura.
- **Sel Roti (सेल रोटी)**: The festive golden ring-shaped sweet rice bread.
- **Gundruk Sandheko (गुन्द्रुक साधेको)**: Traditional fermented green leafy salad tossed with roasted soybeans (*bhatmas*).
- **Aloo Tama Bodi (आलु तामा बोडी)**: Sour and savory bamboo shoot, black-eyed pea, and potato stew.
- **Chatamari (चटामरी)**: The celebrated Newari rice crepe topped with minced meat and egg.
- **Kathmandu Street & Cafe Classics**: Keema Noodles, Chowmein, Yak Cheese Balls, Spiced Milk Tea (*Chiya*), Chilled Beer, and traditional Hukka blends.

### 🌍 Global Table Classics
- Curated international recipes including **Beef Rendang**, **Pad Thai**, **Sushi**, **Tandoori Chicken**, **Thai Green & Red Curries**, **Spaghetti Bolognese**, **Lasagne**, **Crispy Falafel**, **Shakshuka**, **Lamb Rogan Josh**, and **Beef Stroganoff**.

### 🔍 Smart Search & Categorized Filtering
- **Interactive Search**: Instant matching across dish names, Devanagari titles, ingredients, and flavor descriptions.
- **Quick-Query Pills**: One-click tags for favorites (*Dal bhat tarkari*, *Momo*, *Chowmein*, *Keema noodles*).
- **Multi-faceted Tabs**:
  - `All` — Complete recipe catalog.
  - `Nepali first` — Authentic Himalayan and Kathmandu valley specialties.
  - `Vegetarian` — Plant-based dishes and salads.
  - `Quick meals` — Fast, delicious meals prepared in 30 minutes or less.
  - `Global table` — World-class culinary classics.

### 📖 Editorial Recipe Detail View
- **Framed Recipe Card**: Polaroid-style presentation with archival notes.
- **Two-Column Ingredient Grid**: Formatted measurements table with clean metrics.
- **Step-by-Step Cooking Technique**: Detailed culinary instructions, safety notes, and serving recommendations.
- **Interactive Action Bar**:
  - `Save to notebook` toggle.
  - `Watch recipe video` — instant search shortcut to verified YouTube video tutorials.
  - `Original source` — direct link to culinary encyclopedic references.

### 💾 Personal Shelf ("Saved for Later")
- Save favorite dishes with a single click.
- Real-time notification badge on the navigation bar.
- Automatic persistence using browser `localStorage`.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Playfair Display, Lora, Plus Jakarta Sans, and Noto Sans Devanagari

---

## 🚀 Getting Started

Follow these steps to run the application locally:

### 1. Prerequisites
Ensure you have **Node.js** (v18 or higher recommended) and **npm** installed on your machine:
```bash
node -v
npm -v
```

### 2. Clone the Repository
```bash
git clone https://github.com/<your-username>/nepali-recipe-finder.git
cd nepali-recipe-finder
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Run Development Server
```bash
npm run dev
```

Open your browser and navigate to:
```
http://localhost:3000
```

---

## 📦 Available Scripts

In the project directory, you can run:

- `npm run dev`: Starts the local Vite development server on port 3000.
- `npm run build`: Compiles and bundles the application for production into `dist/`.
- `npm run preview`: Locally previews the production build.
- `npm run lint`: Validates TypeScript types across the codebase without emitting files.

---

## 📂 Project Structure

```text
nepali-recipe-finder/
├── index.html                   # HTML entry point with Google Fonts & metadata
├── package.json                 # Project dependencies & scripts
├── tsconfig.json                # TypeScript compiler configuration
├── vite.config.ts               # Vite configuration with Tailwind CSS v4 plugin
├── public/                      # Static assets
└── src/
    ├── main.tsx                 # React DOM mount point
    ├── App.tsx                  # Root state, view router & filter controller
    ├── index.css                # Tailwind directives & typography layers
    ├── types.ts                 # TypeScript interfaces (Recipe, Ingredient, FilterCategory)
    ├── assets/
    │   └── images/              # High-definition food photography assets
    ├── components/
    │   ├── Header.tsx           # Sticky navigation header with logo & saved badge
    │   ├── Hero.tsx             # Curved navy hero banner with search & quick pills
    │   ├── RecipeCard.tsx       # Recipe card with origin tag, badge, and save toggle
    │   ├── RecipeDetail.tsx     # 2-column recipe details, ingredients & video link
    │   ├── SavedShelf.tsx       # "Saved for later" personal recipe shelf
    │   └── Footer.tsx           # Devanagari signature footer
    └── data/
        └── recipes.ts           # Complete database of Nepali & global dishes

---

<p align="center">
  <b>घरको स्वाद जहिले पनि</b> • <i>Made for everyday cooking, wherever your kitchen is.</i>
</p>
