import { useState, useEffect } from 'react';

type Theme = 'dark' | 'light';

export const useTheme = () => {
  const [theme] = useState<'light'>('light');

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('dark');
    root.classList.add('light');
    localStorage.setItem('ompatel-theme', 'light');
  }, []);

  // No-op toggleTheme
  const toggleTheme = () => {};

  return { theme: 'light', toggleTheme };
}; 