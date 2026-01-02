'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { ReactNode } from 'react';
import { useNavigation } from '@/context/NavigationContext';

interface NavItem {
  name: string;
  href: string;
  icon: ReactNode;
}

const navigation: NavItem[] = [
  {
    name: 'Overview',
    href: '#overview',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
      </svg>
    ),
  },
  {
    name: 'Projects',
    href: '#projects',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
      </svg>
    ),
  },
  {
    name: 'Skills',
    href: '#skills',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="6" y1="3" x2="6" y2="15"></line>
        <circle cx="18" cy="6" r="3"></circle>
        <circle cx="6" cy="18" r="3"></circle>
        <path d="M18 9a9 9 0 0 1-9 9"></path>
      </svg>
    ),
  },
  {
    name: 'Process',
    href: '#process',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
        <path d="M2 2l7.586 7.586"></path>
        <circle cx="11" cy="11" r="2"></circle>
      </svg>
    ),
  },
];

export function Navigation() {
  const pathname = usePathname();
  const { isCollapsed, toggleNavigation } = useNavigation();

  return (
    <motion.nav
      className={`flex-shrink-0 ${isCollapsed ? 'w-16' : 'w-64'} bg-white/10 dark:bg-black/20 backdrop-blur-md border-r border-white/10 p-4 transition-[width] duration-300 ease-in-out sticky top-0 h-screen`}
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <button
        onClick={toggleNavigation}
        className="absolute -right-3 top-14 p-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/70 hover:text-white hover:bg-white/20 transition-colors"
        aria-label={isCollapsed ? 'Expand navigation' : 'Collapse navigation'}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transform transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`}
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <div className="flex flex-col h-full">
        <div className="flex-1">
          <div className="mb-8">
            <motion.h2 
              className={`font-clash text-3xl font-bold tracking-tighter text-white whitespace-nowrap gradient-text ${isCollapsed ? 'text-center' : 'px-3'}`}
              animate={{ opacity: 1, width: '100%' }}
              transition={{ duration: 0.2 }}
            >
              BP
            </motion.h2>
          </div>

          <ul className="space-y-2">
            {navigation.map((item) => (
              <motion.li key={item.name} whileHover={{ x: 4 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href={item.href}
                  className={`flex items-center ${isCollapsed ? 'justify-center' : 'space-x-3'} px-3 py-2 rounded-lg text-sm font-medium transition-colors
                    ${pathname === item.href 
                      ? 'bg-white/20 text-white' 
                      : 'text-white/70 hover:bg-white/10 hover:text-white'
                    }`}
                  title={isCollapsed ? item.name : undefined}
                >
                  <span className="w-5 h-5">{item.icon}</span>
                  {!isCollapsed && <span>{item.name}</span>}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.div 
          className="pt-6 border-t border-white/10 overflow-hidden"
          animate={{ opacity: isCollapsed ? 0 : 1, height: isCollapsed ? 0 : 'auto' }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-center space-x-3 px-3 py-2 text-sm text-white/70">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"></path>
            </svg>
            <span>ben.price700@gmail.com</span>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
