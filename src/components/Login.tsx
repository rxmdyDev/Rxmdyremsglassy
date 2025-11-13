import { useState } from 'react';
import { motion } from 'motion/react';
import { Lock, User, AlertCircle, ArrowLeft } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const { theme } = useTheme();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const success = login(username, password);
    if (success) {
      navigate('/admin');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center px-6 transition-colors duration-500 ${
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

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md relative z-10"
      >
        <button
          onClick={() => navigate('/')}
          className={`mb-6 flex items-center gap-2 transition-colors ${
            theme === 'dark' ? 'text-stone-400 hover:text-stone-200' : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          <ArrowLeft size={20} />
          Back to Home
        </button>

        <div className={`backdrop-blur-md border rounded-3xl p-8 md:p-12 transition-colors duration-500 ${
          theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-white/50 border-stone-200'
        }`}>
          <div className="text-center mb-8">
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
              theme === 'dark' 
                ? 'bg-gradient-to-br from-rose-800 to-amber-800' 
                : 'bg-gradient-to-br from-rose-400 to-amber-400'
            }`}>
              <Lock className="text-white" size={28} />
            </div>
            <h1 className={`mb-2 transition-colors duration-500 ${
              theme === 'dark' ? 'text-stone-100' : 'text-stone-900'
            }`}>Admin Login</h1>
            <p className={`transition-colors duration-500 ${
              theme === 'dark' ? 'text-stone-400' : 'text-stone-600'
            }`}>
              Enter your credentials to access the admin panel
            </p>
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex items-center gap-2 p-4 rounded-2xl mb-6 ${
                theme === 'dark' 
                  ? 'bg-red-950/30 border border-red-900/50 text-red-400' 
                  : 'bg-red-100 border border-red-300 text-red-700'
              }`}
            >
              <AlertCircle size={20} />
              <span>{error}</span>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="username" className={`block mb-2 transition-colors duration-500 ${
                theme === 'dark' ? 'text-stone-300' : 'text-stone-700'
              }`}>
                Username
              </label>
              <div className="relative">
                <User className={`absolute left-4 top-1/2 -translate-y-1/2 ${
                  theme === 'dark' ? 'text-stone-500' : 'text-stone-400'
                }`} size={20} />
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className={`w-full backdrop-blur-md border rounded-2xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 transition-all ${
                    theme === 'dark'
                      ? 'bg-white/10 border-white/20 text-stone-200 placeholder-stone-500 focus:ring-rose-700/50'
                      : 'bg-white/50 border-stone-200 text-stone-900 placeholder-stone-400 focus:ring-rose-500/50'
                  }`}
                  placeholder="Enter username"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className={`block mb-2 transition-colors duration-500 ${
                theme === 'dark' ? 'text-stone-300' : 'text-stone-700'
              }`}>
                Password
              </label>
              <div className="relative">
                <Lock className={`absolute left-4 top-1/2 -translate-y-1/2 ${
                  theme === 'dark' ? 'text-stone-500' : 'text-stone-400'
                }`} size={20} />
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full backdrop-blur-md border rounded-2xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 transition-all ${
                    theme === 'dark'
                      ? 'bg-white/10 border-white/20 text-stone-200 placeholder-stone-500 focus:ring-rose-700/50'
                      : 'bg-white/50 border-stone-200 text-stone-900 placeholder-stone-400 focus:ring-rose-500/50'
                  }`}
                  placeholder="Enter password"
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              className={`w-full backdrop-blur-md bg-gradient-to-r border rounded-full px-6 py-6 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 ${
                theme === 'dark'
                  ? 'from-rose-950/40 to-amber-950/40 hover:from-rose-900/60 hover:to-amber-900/60 border-white/20 text-stone-100'
                  : 'from-rose-200/80 to-amber-200/80 hover:from-rose-300/90 hover:to-amber-300/90 border-stone-200 text-stone-900'
              }`}
            >
              <Lock size={18} />
              Login
            </Button>
          </form>

          <div className={`mt-6 p-4 rounded-2xl ${
            theme === 'dark' 
              ? 'bg-white/5 border border-white/10' 
              : 'bg-stone-100/50 border border-stone-200'
          }`}>
            <p className={`mb-2 transition-colors duration-500 ${
              theme === 'dark' ? 'text-stone-400' : 'text-stone-600'
            }`}>
              Demo Credentials:
            </p>
            <p className={`transition-colors duration-500 ${
              theme === 'dark' ? 'text-stone-300' : 'text-stone-700'
            }`}>
              Username: <span className={theme === 'dark' ? 'text-rose-400' : 'text-rose-600'}>admin</span>
            </p>
            <p className={`transition-colors duration-500 ${
              theme === 'dark' ? 'text-stone-300' : 'text-stone-700'
            }`}>
              Password: <span className={theme === 'dark' ? 'text-rose-400' : 'text-rose-600'}>admin123</span>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
