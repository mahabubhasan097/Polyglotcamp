import React, { createContext, useState } from 'react';

export const ThemeContextt = createContext();

const ThemeProviderr = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  };

  return (
    <ThemeContextt.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContextt.Provider>
  );
};

export default ThemeProviderr;
