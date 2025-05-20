import React, { useEffect, useState } from "react";

const ThemeProvider = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-schema: dark)");
    return savedTheme ? savedTheme : systemPrefersDark ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <button
      onClick={toggleTheme}
      role="img"
      aria-label={`Switch Theme To ${theme === "light" ? "dark" : "light"}`}
      className="absolute top-5 right-4 px-4 py-1 border-none"
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
};

export default ThemeProvider;
