import { useState, useEffect, useMemo } from 'react';

export default function StarBackground() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Generate 150 random stars on mount
    const generatedStars = Array.from({ length: 150 }).map(() => ({
      id: Math.random(),
      x: Math.random() * 100, // vw
      y: Math.random() * 100, // vh
      size: Math.random() * 2 + 1, // 1px to 3px
      delay: Math.random() * 5, // random animation delay
      duration: Math.random() * 2 + 1.5, // 1.5s to 3.5s twinkle speed
    }));
    setStars(generatedStars);
  }, []);

  const styles = useMemo(() => `
    @keyframes twinkle {
      0%, 100% { opacity: 0; transform: scale(0.8); }
      50% { opacity: 1; transform: scale(1.5); }
    }
  `, []);

  return (
    <>
      <style>{styles}</style>
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white will-change-transform"
            style={{
              left: `${star.x}vw`,
              top: `${star.y}vh`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              boxShadow: `0 0 ${star.size * 3}px rgba(255, 255, 255, 1)`,
              animation: `twinkle ${star.duration}s ease-in-out infinite`,
              animationDelay: `${star.delay}s`
            }}
          />
        ))}
      </div>
    </>
  );
}
