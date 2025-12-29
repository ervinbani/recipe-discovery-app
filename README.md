# Recipe Discovery App

Discover, search, and save recipes from around the world. This single-page application is built with React, TypeScript, and Vite, and uses TheMealDB as the data source.

## Demo (what to expect)

- Landing shows recipe categories.
- Click a category to browse recipes.
- Click a recipe to view ingredients, instructions, and an optional video.
- Use the search bar in the navbar to find recipes by name.
- Toggle light/dark theme and save favorites (persisted via localStorage).

## Features

- Browse recipe categories
- View recipes by category and see recipe details
- Search recipes by name
- Add/remove recipes to Favorites (global state + localStorage)
- Light / Dark theme toggle
- Back button for easy navigation
- Responsive UI for mobile and desktop

## Project Structure

```
src/
  components/      // Reusable components (Navbar, RecipeCard, RecipeCategoryCard, BackButton, Feedback...)
  context/         // Context providers (Favorites, Theme)
  hooks/           // Custom hooks (useFetch, useLocalStorage)
  pages/           // Pages (Home, Category, RecipeDetail, Favorites, SearchResults)
  styles/          // CSS and theme styles
  assets/          // Images/icons
```

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/ervinbani/recipe-discovery-app.git
cd recipe-discovery-app
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open the app in the browser:

[http://localhost:5173](http://localhost:5173)

## Available Scripts

- `npm run dev` — Start development server
- `npm run build` — Build production bundle
- `npm run preview` — Serve the production build locally

## Main Dependencies

- React
- React Router DOM
- TypeScript
- Vite

## API

This project uses TheMealDB for recipe data: https://www.themealdb.com/api.php

## Author

Ervin Bani — https://github.com/ervinbani

## Notes & Future Improvements

- Add user authentication and cloud-synced favorites
- Add automated tests (unit & E2E)
- Add screenshots or a short demo GIF to the README

---
