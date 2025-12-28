# Recipe Discovery App

Un'applicazione React per scoprire, cercare e salvare ricette dal mondo, sviluppata con Vite, TypeScript e React Router.

## Funzionalità

- Esplora categorie di ricette
- Visualizza ricette per categoria
- Dettagli completi di ogni ricetta (ingredienti, istruzioni, video)
- Aggiungi/rimuovi ricette dai preferiti
- Ricerca ricette per nome
- Gestione preferiti globale (context + localStorage)
- UI responsive e moderna

## Struttura del progetto

```
src/
  components/      // Componenti riutilizzabili (Navbar, Card, Spinner...)
  context/         // Context API (Favorites)
  hooks/           // Custom hooks (useFetch, useLocalStorage)
  pages/           // Pagine principali (Home, Category, RecipeDetail, ...)
  styles/          // File CSS
```

## Avvio locale

1. Clona la repo:
   ```
   git clone https://github.com/ervinbani/recipe-discovery-app.git
   cd recipe-discovery-app
   ```
2. Installa le dipendenze:
   ```
   npm install
   ```
3. Avvia il server di sviluppo:
   ```
   npm run dev
   ```
4. Apri [http://localhost:5173](http://localhost:5173) nel browser.

## Dipendenze principali

- React
- React Router DOM
- TypeScript
- Vite

## API utilizzata

- [TheMealDB](https://www.themealdb.com/api.php)

## Autore

Ervin Bani

---

Per domande o suggerimenti, apri una issue su GitHub!
},
},
])

````

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
````
