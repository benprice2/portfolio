'use client';

import { useEffect, useState } from 'react';

const COLOR_SCHEME_QUERY = '(prefers-color-scheme: dark)';

export function useDarkMode() {
  const [isDark, setIsDark] = useState(
    typeof window !== 'undefined' 
      ? window.matchMedia(COLOR_SCHEME_QUERY).matches
      : false
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(COLOR_SCHEME_QUERY);
    const handleChange = (event: MediaQueryListEvent) => setIsDark(event.matches);

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggle = () => {
    setIsDark(!isDark);
    if (typeof window !== 'undefined') {
      document.documentElement.classList.toggle('dark');
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.classList.toggle('dark', isDark);
    }
  }, [isDark]);

  return { isDark, toggle };
}
