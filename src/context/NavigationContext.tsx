'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface NavigationContextType {
  isCollapsed: boolean;
  toggleNavigation: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleNavigation = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <NavigationContext.Provider value={{ isCollapsed, toggleNavigation }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}
