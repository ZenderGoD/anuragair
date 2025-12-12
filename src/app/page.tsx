import GhostCursor from '@/components/GhostCursor';

export default function Home() {
  return (
    <div className="fixed inset-0 w-screen h-screen bg-black">
      {/* Stationary text - very dark gray, behind GhostCursor, revealed by light */}
      <h1 className="absolute inset-0 flex items-center justify-center text-6xl font-bold select-none pointer-events-none z-0" style={{ color: '#1a1a1a', textShadow: '0 0 2px rgba(177, 158, 239, 0.1)' }}>
        Hi anurag
      </h1>

      {/* Full screen GhostCursor - on top layer */}
      <GhostCursor
        style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 10 }}
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
