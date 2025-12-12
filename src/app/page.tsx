'use client';

import { useState } from 'react';
import GhostCursor from '@/components/GhostCursor';

export default function Home() {
  const [isTextVisible, setIsTextVisible] = useState(false);

  return (
    <div className="fixed inset-0 w-screen h-screen bg-black">
      {/* Text that appears on hover */}
      <h1
        className={`absolute inset-0 flex items-center justify-center text-6xl font-bold select-none z-10 transition-opacity duration-300 ${
          isTextVisible ? 'text-white opacity-100' : 'text-transparent opacity-0'
        }`}
        onMouseEnter={() => setIsTextVisible(true)}
        onMouseLeave={() => setIsTextVisible(false)}
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
