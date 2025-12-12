'use client';

import { useState, useEffect } from 'react';
import GhostCursor from '@/components/GhostCursor';

// Color palette for animation
const colors = [
  '#B19EEF', // Purple
  '#FF6B9D', // Pink
  '#4ECDC4', // Cyan
  '#95E1D3', // Mint
  '#F38181', // Coral
  '#AA96DA', // Lavender
  '#FCBAD3', // Light Pink
  '#A8E6CF', // Green
  '#FFD3A5', // Peach
  '#C7CEEA', // Periwinkle
];

export default function Home() {
  const [currentColor, setCurrentColor] = useState('#B19EEF');

  useEffect(() => {
    let colorIndex = 0;
    const interval = setInterval(() => {
      colorIndex = (colorIndex + 1) % colors.length;
      setCurrentColor(colors[colorIndex]);
    }, 3000); // Change color every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 w-screen h-screen bg-black">
      {/* Stationary text - very dark gray, behind GhostCursor, revealed by light */}
      <h1 className="absolute inset-0 flex items-center justify-center text-6xl font-bold select-none pointer-events-none z-0" style={{ color: '#000000' }}>
        Hi anurag
      </h1>

      {/* Full screen GhostCursor - on top layer */}
      <GhostCursor
        style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 10 }}
        // Visuals
        color={currentColor}
        brightness={1.5}
        edgeIntensity={0}

        // Trail and motion
        trailLength={50}
        inertia={0.5}

        // Post-processing
        grainIntensity={0.05}
        bloomStrength={0.3}
        bloomRadius={1.5}
        bloomThreshold={0.025}

        // Fade-out behavior
        fadeDelayMs={1000}
        fadeDurationMs={1500}
      />
    </div>
  );
}
