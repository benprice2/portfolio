'use client';

import { AuroraBackground } from '@/components/AuroraBackground';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function AuroraTest() {
  const [showControls, setShowControls] = useState(false);

  return (
    <div className="min-h-screen relative">
      <AuroraBackground />
      
      {/* Controls Panel */}
      <motion.div 
        initial={{ x: '100%' }}
        animate={{ x: showControls ? 0 : '100%' }}
        transition={{ type: 'spring', damping: 20 }}
        className="fixed top-0 right-0 w-80 h-full bg-white/10 backdrop-blur-md border-l border-white/10 p-6 shadow-xl"
      >
        <h2 className="text-xl font-bold text-white mb-6">Aurora Controls</h2>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-white/70 mb-2">
              Star Count
            </label>
            <input 
              type="range" 
              min="1000" 
              max="10000" 
              defaultValue="7000"
              className="w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white/70 mb-2">
              Star Speed
            </label>
            <input 
              type="range" 
              min="0" 
              max="100" 
              defaultValue="20"
              className="w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white/70 mb-2">
              Aurora Opacity
            </label>
            <input 
              type="range" 
              min="0" 
              max="100" 
              defaultValue="40"
              className="w-full"
            />
          </div>
        </div>
      </motion.div>

      {/* Toggle Button */}
      <button
        onClick={() => setShowControls(prev => !prev)}
        className="fixed top-4 right-4 p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/70 hover:text-white hover:bg-white/20 transition-colors z-50"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>
      </button>
    </div>
  );
}
