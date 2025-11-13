import { Menu, X, Sun, Moon, LogIn, Shield } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

interface NavigationProps {
  scrolled: boolean;
}

export function Navigation({ scrolled }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const handleAuthClick = () => {
    if (isAuthenticated) {
      navigate('/admin');
    } else {
      navigate('/login');
    }
    setMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        scrolled ? 'top-4' : 'top-8'
      }`}
    >
      <div
        className={`backdrop-blur-md border rounded-full px-6 py-3 shadow-2xl transition-all duration-300 ${
          theme === 'dark'
            ? 'bg-white/10 border-white/20 shadow-rose-950/20'
            : 'bg-white/70 border-stone-200 shadow-stone-300/30'
        } ${scrolled ? (theme === 'dark' ? 'shadow-rose-900/20' : 'shadow-stone-400/30') : ''}`}
      >
        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`transition-colors duration-200 relative group ${
                  theme === 'dark' ? 'text-stone-200 hover:text-white' : 'text-stone-700 hover:text-stone-900'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r group-hover:w-full transition-all duration-300 ${
                  theme === 'dark' ? 'from-rose-700 to-amber-700' : 'from-rose-500 to-amber-500'
                }`}></span>
              </a>
            </li>
          ))}
          <li className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                theme === 'dark' 
                  ? 'bg-white/10 text-amber-400 hover:bg-white/20' 
                  : 'bg-stone-200 text-amber-600 hover:bg-stone-300'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={handleAuthClick}
              className={`flex items-center gap-2 backdrop-blur-md bg-gradient-to-r border rounded-full px-4 py-2 transition-all duration-300 hover:scale-105 ${
                isAuthenticated
                  ? theme === 'dark'
                    ? 'from-rose-950/40 to-amber-950/40 border-white/30 text-stone-100 hover:from-rose-900/60 hover:to-amber-900/60'
                    : 'from-rose-200/80 to-amber-200/80 border-stone-300 text-stone-900 hover:from-rose-300/90 hover:to-amber-300/90'
                  : theme === 'dark'
                    ? 'from-white/10 to-white/5 border-white/20 text-stone-200 hover:from-white/20 hover:to-white/10'
                    : 'from-white/60 to-white/40 border-stone-200 text-stone-700 hover:from-white/80 hover:to-white/60'
              }`}
            >
              {isAuthenticated ? (
                <>
                  <Shield size={18} />
                  <span>Admin</span>
                </>
              ) : (
                <>
                  <LogIn size={18} />
                  <span>Login</span>
                </>
              )}
            </button>
          </li>
        </ul>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center justify-between min-w-[200px]">
          <span className={`transition-colors duration-300 ${
            theme === 'dark' ? 'text-stone-200' : 'text-stone-700'
          }`}>Rxms</span>
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-300 ${
                theme === 'dark' 
                  ? 'bg-white/10 text-amber-400 hover:bg-white/20' 
                  : 'bg-stone-200 text-amber-600 hover:bg-stone-300'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`transition-colors ${
                theme === 'dark' ? 'text-stone-200 hover:text-white' : 'text-stone-700 hover:text-stone-900'
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`md:hidden absolute top-full left-1/2 -translate-x-1/2 mt-4 backdrop-blur-md border rounded-3xl px-6 py-4 shadow-2xl min-w-[250px] ${
              theme === 'dark' 
                ? 'bg-white/10 border-white/20' 
                : 'bg-white/70 border-stone-200'
            }`}
          >
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`transition-colors duration-200 block ${
                      theme === 'dark' ? 'text-stone-200 hover:text-white' : 'text-stone-700 hover:text-stone-900'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-4 border-t border-white/10">
                <button
                  onClick={handleAuthClick}
                  className={`w-full flex items-center justify-center gap-2 backdrop-blur-md bg-gradient-to-r border rounded-full px-4 py-3 transition-all duration-300 hover:scale-105 ${
                    isAuthenticated
                      ? theme === 'dark'
                        ? 'from-rose-950/40 to-amber-950/40 border-white/30 text-stone-100 hover:from-rose-900/60 hover:to-amber-900/60'
                        : 'from-rose-200/80 to-amber-200/80 border-stone-300 text-stone-900 hover:from-rose-300/90 hover:to-amber-300/90'
                      : theme === 'dark'
                        ? 'from-white/10 to-white/5 border-white/20 text-stone-200 hover:from-white/20 hover:to-white/10'
                        : 'from-white/60 to-white/40 border-stone-200 text-stone-700 hover:from-white/80 hover:to-white/60'
                  }`}
                >
                  {isAuthenticated ? (
                    <>
                      <Shield size={18} />
                      <span>Admin</span>
                    </>
                  ) : (
                    <>
                      <LogIn size={18} />
                      <span>Login</span>
                    </>
                  )}
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}