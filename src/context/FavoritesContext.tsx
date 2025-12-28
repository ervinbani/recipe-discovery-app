import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface FavoritesContextType {
  favorites: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useLocalStorage<string[]>("favorites", []);

  const addFavorite = (id: string) => {
    if (!favorites.includes(id)) setFavorites([...favorites, id]);
  };
  const removeFavorite = (id: string) => {
    setFavorites(favorites.filter((fav) => fav !== id));
  };
  const isFavorite = (id: string) => favorites.includes(id);

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext);
  if (!ctx)
    throw new Error("useFavorites deve essere usato dentro FavoritesProvider");
  return ctx;
}
