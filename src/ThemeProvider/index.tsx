import type { ReactNode } from 'react';
import { useState } from "react";
import ThemeContext from "../contexts/ThemeContext";

type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
  iconThemeButton: string
};

type ThemeProviderProps = {
  children: ReactNode;
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>("light");
  const [iconThemeButton, setIconThemeButton] = useState<string>("bx bx-moon");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      setIconThemeButton("bx bx-sun");
    } else {
      setTheme("light");
      setIconThemeButton("bx bx-moon");
    }
  };

  const value: ThemeContextValue = {
    theme,
    toggleTheme,
    iconThemeButton
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
