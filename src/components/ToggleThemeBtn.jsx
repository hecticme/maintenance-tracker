import { useTheme } from "../contexts/ThemeContext";
import { useEffect } from "react";

export const ToggleThemeBtn = () => {
  const [darkTheme, toggleTheme] = useTheme();

  // Change body background color by adding class
  useEffect(() => {
    if (darkTheme) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkTheme]);

  return (
    <div
      className={`toggle-theme-btn ${darkTheme ? "dark" : ""}`}
      onClick={() => {
        toggleTheme();
      }}
    >
      <div className="toggle-theme-btn__circle"></div>
    </div>
  );
};
