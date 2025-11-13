import { useEffect, useState } from 'react';
import { Navigation } from './Navigation';
import { Hero } from './Hero';
import { About } from './About';
import { Services } from './Services';
import { Projects } from './Projects';
import { Contact } from './Contact';
import { ChatWidget } from './ChatWidget';
import { useTheme } from '../contexts/ThemeContext';

export function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-neutral-950 via-stone-950 to-neutral-950' 
        : 'bg-gradient-to-br from-stone-50 via-neutral-100 to-stone-50'
    }`}>
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse transition-colors duration-500 ${
          theme === 'dark' ? 'bg-rose-950/30' : 'bg-rose-200/40'
        }`}></div>
        <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000 transition-colors duration-500 ${
          theme === 'dark' ? 'bg-amber-950/20' : 'bg-amber-200/30'
        }`}></div>
      </div>

      <Navigation scrolled={scrolled} />
      
      <main className="relative z-0">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>

      <footer className={`relative z-0 border-t backdrop-blur-md transition-colors duration-500 ${
        theme === 'dark' 
          ? 'border-white/10 bg-black/20' 
          : 'border-stone-200 bg-white/30'
      }`}>
        <div className={`max-w-6xl mx-auto px-6 py-8 text-center transition-colors duration-500 ${
          theme === 'dark' ? 'text-stone-400' : 'text-stone-600'
        }`}>
          <p>© 2025 Remy Camiguel. All rights reserved.</p>
        </div>
      </footer>

      <ChatWidget />
    </div>
  );
}