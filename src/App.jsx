import { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import ScrollProgress from './components/ScrollProgress';
import StarBackground from './components/StarBackground';

function App() {
  useEffect(() => {
    // Optional: Smooth scroll reset on load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen bg-background text-primary selection:bg-accent selection:text-background font-sans overflow-x-hidden">
      <ScrollProgress />
      <StarBackground />
      <Hero />
      <div className="relative z-10 bg-transparent shadow-[0_-20px_40px_rgba(0,0,0,0.8)]">
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}

export default App;
