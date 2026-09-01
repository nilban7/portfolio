import { useState, useEffect } from 'react';

const words = [
  'ENGINEER',
  'HACKER',
  'DEVELOPER',
  'TRADER',
  'SINGER',
  'STRATEGIST',
  'PAINTER',
  'MARKETER',
  'ROBOTICIST'
];

export default function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setFade(true);
      }, 350);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[100vh] overflow-hidden flex items-center justify-center bg-black">
      {/* High-Resolution Space Beam Hero Background Image */}
      <img
        src="/assets/gptimage2.jpg"
        alt="Cosmic Space Hero Background"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-80 pointer-events-none select-none"
      />

      {/* Subtle overlay for text contrast */}
      <div className="absolute inset-0 bg-black/30 z-0 pointer-events-none" />

      {/* Edge Fade Gradients */}
      <div className="absolute top-0 left-0 right-0 h-24 md:h-36 bg-gradient-to-b from-[#050508]/80 to-transparent z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48 bg-gradient-to-t from-[#050508] to-transparent z-0 pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight uppercase drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)]">
          NILADRI BANERJEE
        </h1>

        {/* Animated Rotating Subtitle */}
        <div className="h-[48px] md:h-[64px] mt-4 md:mt-6 overflow-hidden relative flex items-center justify-center w-full">
          <span
            className={"text-cyan-400 font-bold text-xl sm:text-2xl md:text-4xl tracking-[0.25em] md:tracking-[0.35em] uppercase transition-all duration-500 ease-out transform drop-shadow-[0_0_20px_rgba(34,211,238,0.8)] " + (
              fade ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'
            )}
          >
            {words[currentWordIndex]}
          </span>
        </div>
      </div>
    </section>
  );
}
