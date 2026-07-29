"use client";

import {createContext, useContext} from 'react';

export type Theme = "light" | "dark" | "system";
interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void; // The updater function type
}

export const ThemeContext1 = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext1);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
