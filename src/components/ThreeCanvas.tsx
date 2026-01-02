'use client';

import { Stars } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from '@/context/ThemeContext';

function StarField() {
  const starsRef = useRef<THREE.Points>(null);

  useFrame((state, delta) => {
    if (starsRef.current) {
      starsRef.current.rotation.y += delta * 0.02;
    }
  });

  return (
    <Stars
      ref={starsRef}
      radius={100}
      depth={50}
      count={7000}
      factor={6}
      saturation={0.5}
      fade
      speed={1.5}
    />
  );
}

export default function ThreeCanvas() {
  const { theme } = useTheme();
  const backgroundColor = theme === 'dark' ? 'black' : 'rgba(93, 121, 178, 1)';

  return (
    <div style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}>
      <Canvas 
        camera={{ position: [0, 0, 1] }}
        style={{ background: backgroundColor }}
      >
        <StarField />
      </Canvas>
    </div>
  );
}
