import GhostCursor from '@/components/GhostCursor';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div className="text-center">
        {/* Hidden text */}
        <h1 className="text-6xl font-bold text-transparent select-none pointer-events-none">
          Anurag, fuck you LOL
        </h1>

        {/* Large GhostCursor effect */}
        <div style={{ height: 800, position: 'relative', width: '100vw', maxWidth: '1200px' }}>
          <GhostCursor
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
      </div>
    </div>
  );
}
