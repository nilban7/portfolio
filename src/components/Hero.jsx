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
    <section className="relative w-full h-[100vh] overflow-hidden flex items-center justify-center bg-[#050508]">
      {/* Background Image */}
      <img
        src="/assets/gptimage2.png"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover -z-20 opacity-40"
        onError={(e) => { e.target.style.display = 'none'; }}
      />

      {/* Film Grain Noise Overlay */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none -z-10 opacity-[0.25] mix-blend-overlay"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")"
        }}
      />

      {/* Dynamic Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 -z-10" />

      {/* Edge Fade Gradients */}
      <div className="absolute top-0 left-0 right-0 h-24 md:h-48 bg-gradient-to-b from-[#050508] to-transparent z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48 bg-gradient-to-t from-[#050508] to-transparent z-0 pointer-events-none" />
      <div className="absolute top-0 bottom-0 left-0 w-16 md:w-48 bg-gradient-to-r from-[#050508] to-transparent z-0 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-16 md:w-48 bg-gradient-to-l from-[#050508] to-transparent z-0 pointer-events-none" />

      {/* Hero Content */}
      <div className="z-10 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight uppercase drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
          NILADRI BANERJEE
        </h1>

        {/* Animated Rotating Subtitle */}
        <div className="h-[48px] md:h-[64px] mt-4 md:mt-6 overflow-hidden relative flex items-center justify-center w-full">
          <span
            className={"text-cyan-400 font-bold text-xl sm:text-2xl md:text-4xl tracking-[0.25em] md:tracking-[0.35em] uppercase transition-all duration-500 ease-out transform drop-shadow-[0_0_20px_rgba(34,211,238,0.6)] " + (
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
