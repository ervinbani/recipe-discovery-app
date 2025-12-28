import React, { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface ThemeContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useLocalStorage<"light" | "dark">("theme", "light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Applica la classe al body
  React.useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme deve essere usato dentro ThemeProvider");
  return ctx;
}
