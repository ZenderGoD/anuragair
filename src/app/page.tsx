import GhostCursor from '@/components/GhostCursor';

export default function Home() {
  return (
    <div className="fixed inset-0 w-screen h-screen bg-black">
      {/* Hidden text */}
      <h1 className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-transparent select-none pointer-events-none z-10">
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
