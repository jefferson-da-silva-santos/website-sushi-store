import { createContext } from "react";

const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
  iconThemeButton: 'bx bx-moon'
});

export default ThemeContext;