import { motion } from 'motion/react';
import { Facebook, Instagram, Mail, ArrowDown } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import avatarImage from 'figma:asset/48afc5e873c61f4122483a9ee2b0bc8d98ab80e2.png';

export function Hero() {
  const { theme } = useTheme();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6">
            <div className={`w-32 h-32 mx-auto mb-6 rounded-full backdrop-blur-md border flex items-center justify-center overflow-hidden ${
              theme === 'dark' ? 'bg-white/10 border-white/20' : 'bg-white/50 border-stone-200'
            }`}>
              <img 
                src={avatarImage} 
                alt="Remy Camiguel" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h1 className={`mb-4 transition-colors duration-500 ${
            theme === 'dark' ? 'text-stone-100' : 'text-stone-900'
          }`}>
            Hi, I'm <span className={`text-transparent bg-clip-text bg-gradient-to-r ${
              theme === 'dark' ? 'from-rose-500 to-amber-500' : 'from-rose-600 to-amber-600'
            }`}>Remy Camiguel</span>
          </h1>
          
          <p className={`mb-8 max-w-2xl mx-auto transition-colors duration-500 ${
            theme === 'dark' ? 'text-stone-300' : 'text-stone-600'
          }`}>
            A BSIT graduate and freelance developer creating web-based applications, capstone projects, 
            and innovative tech solutions. With 2 years of BPO industry experience, I bring both technical 
            expertise and professional service to every project.
          </p>

          <div className="flex items-center justify-center gap-4 mb-12">
            <a
              href="https://facebook.com/rxmdyrems"
              target="_blank"
              rel="noopener noreferrer"
              className={`backdrop-blur-md border rounded-full p-3 transition-all duration-300 hover:scale-110 ${
                theme === 'dark'
                  ? 'bg-white/10 border-white/20 hover:bg-white/20 text-stone-200 hover:text-white'
                  : 'bg-white/50 border-stone-200 hover:bg-white/80 text-stone-700 hover:text-stone-900'
              }`}
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://instagram.com/rxmdyrems"
              target="_blank"
              rel="noopener noreferrer"
              className={`backdrop-blur-md border rounded-full p-3 transition-all duration-300 hover:scale-110 ${
                theme === 'dark'
                  ? 'bg-white/10 border-white/20 hover:bg-white/20 text-stone-200 hover:text-white'
                  : 'bg-white/50 border-stone-200 hover:bg-white/80 text-stone-700 hover:text-stone-900'
              }`}
            >
              <Instagram size={24} />
            </a>
            <a
              href="mailto:remy@example.com"
              className={`backdrop-blur-md border rounded-full p-3 transition-all duration-300 hover:scale-110 ${
                theme === 'dark'
                  ? 'bg-white/10 border-white/20 hover:bg-white/20 text-stone-200 hover:text-white'
                  : 'bg-white/50 border-stone-200 hover:bg-white/80 text-stone-700 hover:text-stone-900'
              }`}
            >
              <Mail size={24} />
            </a>
          </div>

          <motion.a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`inline-flex items-center gap-2 backdrop-blur-md bg-gradient-to-r border rounded-full px-8 py-3 transition-all duration-300 hover:scale-105 ${
              theme === 'dark'
                ? 'from-rose-950/30 to-amber-950/30 border-white/20 text-stone-200 hover:from-rose-900/40 hover:to-amber-900/40'
                : 'from-rose-100/80 to-amber-100/80 border-stone-200 text-stone-700 hover:from-rose-200/90 hover:to-amber-200/90'
            }`}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Explore my work
            <ArrowDown size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}