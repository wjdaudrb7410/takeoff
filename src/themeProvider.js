import { lightTheme, DarkTheme } from "./theme";
import { createContext, useState, useContext, useCallback } from "react";
import { ThemeProvider as StyledProvider } from "styled-components";
const ThemeContext = createContext({});

const ThemeProvider = ({ children }) => {
  const LocalTheme = window.localStorage.getItem("theme") || "light";
  const [ThemeMode, SetThemeMode] = useState(LocalTheme);
  const themeObject = ThemeMode === "light" ? lightTheme : DarkTheme;
  return (
    <ThemeContext.Provider value={{ ThemeMode, SetThemeMode }}>
      <StyledProvider theme={themeObject}>{children}</StyledProvider>
    </ThemeContext.Provider>
  );
};

function useTheme() {
  const context = useContext(ThemeContext);
  const { ThemeMode, SetThemeMode } = context;

  const toggleTheme = useCallback(() => {
    if (ThemeMode === "light") {
      SetThemeMode("dark");
      window.localStorage.setItem("theme", "dark");
    } else {
      SetThemeMode("light");
      window.localStorage.setItem("theme", "light");
    }
  }, [ThemeMode]);

  return [ThemeMode, toggleTheme];
}

export { ThemeProvider, useTheme };
