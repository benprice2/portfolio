'use client';

import dynamic from 'next/dynamic';
import { animate, motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { useEffect } from 'react';

const ThreeCanvas = dynamic(
  () => import('./ThreeCanvas').then((mod) => mod.default),
  { ssr: false }
);

const DARK_COLORS = [
  'rgb(124, 58, 237)',     // Purple
  'rgb(67, 56, 202)',      // Indigo
  'rgb(59, 130, 246)',     // Blue
  'rgb(147, 51, 234)',     // Purple
  'rgb(192, 38, 211)',     // Pink
];

const LIGHT_COLORS = [
  'rgb(255, 200, 0)',    // Warm Yellow
  'rgb(255, 190, 0)',    // Golden Yellow
  'rgb(255, 180, 0)',    // Amber Yellow
  'rgb(255, 170, 0)',    // Deep Yellow
  'rgb(255, 160, 0)',    // Rich Yellow
];

export function AuroraBackground() {
  const { theme } = useTheme();
  const colors = theme === 'dark' ? DARK_COLORS : LIGHT_COLORS;
  const color = useMotionValue(colors[0]);

  useEffect(() => {
    const controls = animate(color, colors, {
      ease: 'easeInOut',
      duration: 10,
      repeat: Infinity,
      repeatType: 'mirror',
    });

    return () => controls.stop();
  }, [theme]);

  const gradientSize = theme === 'dark' ? '125% 125%' : '100% 75%';
  const backgroundImage = useMotionTemplate`radial-gradient(${gradientSize} at 50% 100%, ${color}, transparent)`;
  const secondaryImage = useMotionTemplate`radial-gradient(${gradientSize} at 35% 100%, ${color}, transparent ${theme === 'dark' ? '70%' : '60%'})`;
  const tertiaryImage = useMotionTemplate`radial-gradient(${gradientSize} at 65% 100%, ${color}, transparent ${theme === 'dark' ? '70%' : '60%'})`;

  return (
    <div className="fixed inset-0 overflow-hidden -z-10">
      <div className="absolute inset-0" style={{ height: '100vh' }}>
        <ThreeCanvas />
      </div>
      <motion.div
        className={`absolute inset-0 pointer-events-none ${theme === 'dark' ? 'mix-blend-plus-lighter opacity-40' : 'mix-blend-multiply opacity-70'}`}
        style={{ backgroundImage }}
      />
      <motion.div
        className={`absolute inset-0 pointer-events-none ${theme === 'dark' ? 'mix-blend-plus-lighter opacity-30' : 'mix-blend-multiply opacity-80'}`}
        style={{ backgroundImage: secondaryImage }}
      />
      <motion.div
        className={`absolute inset-0 pointer-events-none ${theme === 'dark' ? 'mix-blend-plus-lighter opacity-30' : 'mix-blend-multiply opacity-80'}`}
        style={{ backgroundImage: tertiaryImage }}
      />
    </div>
  );
}
