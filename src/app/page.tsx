'use client';

import { useState, useEffect } from 'react';
import GhostCursor from '@/components/GhostCursor';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 w-screen h-screen bg-black">
      {/* Text that follows mouse cursor */}
      <h1
        className="absolute text-6xl font-bold select-none pointer-events-none z-10 text-[#1a0a1a] mix-blend-screen"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        Anurag, fuck you LOL
      </h1>

      {/* Full screen GhostCursor */}
      <GhostCursor
        style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh' }}
        // Visuals
        color="#B19EEF"
        brightness={1}
        edgeIntensity={0}

        // Trail and motion
        trailLength={50}
        inertia={0.5}

        // Post-processing
        grainIntensity={0.05}
        bloomStrength={0.1}
        bloomRadius={1.0}
        bloomThreshold={0.025}

        // Fade-out behavior
        fadeDelayMs={1000}
        fadeDurationMs={1500}
      />
    </div>
  );
}
