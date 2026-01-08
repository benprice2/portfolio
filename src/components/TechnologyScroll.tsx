'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss,
  SiOpenai,
  SiVercel,
  SiGit,
  SiGithub,
  SiSupabase
} from 'react-icons/si';

const technologies = [
  { icon: SiReact, name: 'React' },
  { icon: SiNextdotjs, name: 'Next.js' },
  { icon: SiTailwindcss, name: 'Tailwind CSS' },
  { icon: SiOpenai, name: 'OpenAI' },
  { icon: SiVercel, name: 'Vercel' },
  { icon: SiTypescript, name: 'TypeScript' },
  { icon: SiGit, name: 'Git' },
  { icon: SiGithub, name: 'GitHub' },
  { icon: SiSupabase, name: 'Supabase' }
];

export function TechnologyScroll() {
  const [duplicatedTech, setDuplicatedTech] = useState(technologies);

  // Duplicate items 6 times to create smoother seamless loop
  useEffect(() => {
    setDuplicatedTech(Array(6).fill(technologies).flat());
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-transparent via-white/5 to-transparent backdrop-blur-sm">
      <div className="relative overflow-hidden">
        <div className="flex w-fit">
          <motion.div
            className="flex py-4 sm:py-6 md:py-8 gap-12 sm:gap-16 md:gap-20"
            animate={{
              x: ["-0%", "-100%"],
            }}
            style={{
              width: `${technologies.length * 150}px`,
            }}
            transition={{
              duration: 50, // Scroll duration in seconds - adjust this value to change speed
              ease: "linear",
              repeat: Infinity,
            }}
          >
          {duplicatedTech.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex flex-col items-center justify-center gap-2 sm:gap-3 w-[120px]"
            >
              <tech.icon 
                className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white/80 hover:text-white transition-colors" 
                title={tech.name}
              />
              <span className="text-[10px] sm:text-xs font-medium text-white/70 truncate max-w-full">{tech.name}</span>
            </div>
          ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
