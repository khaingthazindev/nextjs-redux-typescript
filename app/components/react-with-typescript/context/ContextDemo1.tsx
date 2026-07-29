"use client";

import {useState} from "react";
import {Theme, ThemeContext1, useTheme} from "@/app/components/react-with-typescript/context/ThemeContext1";

function ThemeToggleButton() {
  const { theme, setTheme } = useTheme();
  
  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </div>
  );
}

function DarkTheme() {
  const { theme, setTheme } = useTheme();
  
  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={() => setTheme("dark")}>
        Dark Theme
      </button>
    </div>
  );
}


export default function ContextDemo1() {
  const [theme, setTheme] = useState<Theme>('light');
  
  return (
    <ThemeContext1.Provider value={{ theme, setTheme }}>
      <ThemeToggleButton/>
      <DarkTheme/>
    </ThemeContext1.Provider>
  );
}