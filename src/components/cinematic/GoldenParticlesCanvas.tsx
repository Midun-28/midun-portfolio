import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  maxOpacity: number;
  pulseSpeed: number;
  color: string;
}

interface GoldenParticlesCanvasProps {
  density?: number;
  className?: string;
}

export const GoldenParticlesCanvas: React.FC<GoldenParticlesCanvasProps> = ({
  density = 50,
  className = "absolute inset-0 pointer-events-none z-10"
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const colors = [
      'rgba(243, 198, 79, ', // Bright gold
      'rgba(212, 175, 55, ', // Royal gold
      'rgba(197, 160, 89, ', // Antique gold
      'rgba(254, 240, 138, ' // Sparkle pale gold
    ];

    const particles: Particle[] = [];
    const count = Math.floor((width * height) / 18000) * (density / 40);

    for (let i = 0; i < count; i++) {
      const maxOp = Math.random() * 0.7 + 0.2;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2.5 + 0.8,
        speedY: -(Math.random() * 0.4 + 0.15), // Gently drift upwards like sacred temple fire embers
        speedX: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * maxOp,
        maxOpacity: maxOp,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.y += p.speedY;
        p.x += p.speedX;

        // Subtle glow pulse
        p.opacity += p.pulseSpeed;
        if (p.opacity > p.maxOpacity || p.opacity < 0.1) {
          p.pulseSpeed = -p.pulseSpeed;
        }

        // Loop boundaries smoothly
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${Math.max(0, Math.min(1, p.opacity))})`;
        ctx.shadowBlur = p.size * 3;
        ctx.shadowColor = 'rgba(212, 175, 55, 0.6)';
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [density]);

  return <canvas ref={canvasRef} className={className} />;
};
