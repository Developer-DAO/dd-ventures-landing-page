import { useCallback } from 'react';
import { loadSlim } from 'tsparticles-slim';
import type { Container, Engine } from 'tsparticles-engine';
import Particles from 'react-tsparticles';
import { useTheme } from './ThemeProvider';

export function ParticleBackground() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0"
      options={{
        fpsLimit: 120,
        particles: {
          color: {
            value: isDark ? '#ffffff' : '#000000',
          },
          links: {
            color: isDark ? '#ffffff' : '#000000',
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.2,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
        fullScreen: {
          enable: false,
        },
        background: {
          color: {
            value: 'transparent',
          },
        },
      }}
    />
  );
} 