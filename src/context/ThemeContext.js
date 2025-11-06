import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';

class ThemeManager {
  constructor() {
    this.THEME_KEY = 'portfolio-theme';
    this.LIGHT = 'light';
    this.DARK = 'dark';
  }

  getStoredTheme() {
    return localStorage.getItem(this.THEME_KEY);
  }

  setStoredTheme(theme) {
    localStorage.setItem(this.THEME_KEY, theme);
  }

  getSystemPreference() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches 
      ? this.DARK 
      : this.LIGHT;
  }

  getInitialTheme() {
    return this.getStoredTheme() || this.getSystemPreference();
  }

  applyTheme(theme) {
    if (theme === this.DARK) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  toggleTheme(currentTheme) {
    return currentTheme === this.LIGHT ? this.DARK : this.LIGHT;
  }
}

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const themeManager = useMemo(() => new ThemeManager(), []);
  const [theme, setTheme] = useState(() => themeManager.getInitialTheme());

  useEffect(() => {
    themeManager.applyTheme(theme);
    themeManager.setStoredTheme(theme);
  }, [theme, themeManager]);

  const toggleTheme = () => {
    setTheme(prevTheme => themeManager.toggleTheme(prevTheme));
  };

  const value = {
    theme,
    toggleTheme,
    isDark: theme === themeManager.DARK,
    isLight: theme === themeManager.LIGHT,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
