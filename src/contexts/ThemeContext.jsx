import { useState, useContext, createContext } from "react";

const ThemeContext = createContext();
const isThemeDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

const getTheme = () => {
  const localStorageTheme = localStorage.getItem("darkTheme");
  if (localStorageTheme === "true") {
    return true;
  } else if (localStorageTheme === "false") {
    return false;
  } else {
    return isThemeDark;
  }
};

export function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(getTheme());
  // Set default theme to the system theme.

  const toggleTheme = () => {
    setDarkTheme((prev) => !prev);
    localStorage.setItem("darkTheme", !darkTheme ? "true" : "false");
  };

  return (
    <ThemeContext.Provider value={[darkTheme, toggleTheme]}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
