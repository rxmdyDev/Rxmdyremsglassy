import { motion } from 'motion/react';
import { Mail, MapPin, Send } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export function Contact() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`mb-4 transition-colors duration-500 ${
            theme === 'dark' ? 'text-stone-100' : 'text-stone-900'
          }`}>Get In Touch</h2>
          <div className={`w-20 h-1 bg-gradient-to-r mx-auto rounded-full ${
            theme === 'dark' ? 'from-rose-700 to-amber-700' : 'from-rose-500 to-amber-500'
          }`}></div>
          <p className={`mt-6 transition-colors duration-500 ${
            theme === 'dark' ? 'text-stone-300' : 'text-stone-600'
          }`}>
            Have a project in mind? Let's work together to create something amazing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`backdrop-blur-md border rounded-3xl p-8 transition-colors duration-500 ${
              theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-white/50 border-stone-200'
            }`}
          >
            <h3 className={`mb-6 transition-colors duration-500 ${
              theme === 'dark' ? 'text-stone-100' : 'text-stone-900'
            }`}>Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className={`backdrop-blur-md border rounded-full p-3 transition-colors duration-500 ${
                  theme === 'dark' 
                    ? 'bg-white/10 border-white/20 text-rose-400' 
                    : 'bg-white/50 border-stone-200 text-rose-600'
                }`}>
                  <Mail size={20} />
                </div>
                <div>
                  <p className={`mb-1 transition-colors duration-500 ${
                    theme === 'dark' ? 'text-stone-400' : 'text-stone-600'
                  }`}>Email</p>
                  <a href="mailto:remy@example.com" className={`transition-colors ${
                    theme === 'dark' ? 'text-stone-200 hover:text-white' : 'text-stone-700 hover:text-stone-900'
                  }`}>
                    remy@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className={`backdrop-blur-md border rounded-full p-3 transition-colors duration-500 ${
                  theme === 'dark' 
                    ? 'bg-white/10 border-white/20 text-rose-400' 
                    : 'bg-white/50 border-stone-200 text-rose-600'
                }`}>
                  <MapPin size={20} />
                </div>
                <div>
                  <p className={`mb-1 transition-colors duration-500 ${
                    theme === 'dark' ? 'text-stone-400' : 'text-stone-600'
                  }`}>Location</p>
                  <p className={`transition-colors duration-500 ${
                    theme === 'dark' ? 'text-stone-200' : 'text-stone-700'
                  }`}>Philippines</p>
                </div>
              </div>
            </div>

            <div className={`mt-8 pt-8 border-t transition-colors duration-500 ${
              theme === 'dark' ? 'border-white/10' : 'border-stone-200'
            }`}>
              <p className={`mb-4 transition-colors duration-500 ${
                theme === 'dark' ? 'text-stone-400' : 'text-stone-600'
              }`}>Connect with me</p>
              <div className="flex gap-3">
                <a
                  href="https://facebook.com/rxmdyrems"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`backdrop-blur-md border rounded-full px-6 py-2 transition-all duration-300 hover:scale-105 ${
                    theme === 'dark'
                      ? 'bg-white/10 border-white/20 text-stone-200 hover:bg-white/20'
                      : 'bg-white/50 border-stone-200 text-stone-700 hover:bg-white/80'
                  }`}
                >
                  Facebook
                </a>
                <a
                  href="https://instagram.com/rxmdyrems"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`backdrop-blur-md border rounded-full px-6 py-2 transition-all duration-300 hover:scale-105 ${
                    theme === 'dark'
                      ? 'bg-white/10 border-white/20 text-stone-200 hover:bg-white/20'
                      : 'bg-white/50 border-stone-200 text-stone-700 hover:bg-white/80'
                  }`}
                >
                  Instagram
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`backdrop-blur-md border rounded-3xl p-8 transition-colors duration-500 ${
              theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-white/50 border-stone-200'
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className={`block mb-2 transition-colors duration-500 ${
                  theme === 'dark' ? 'text-stone-300' : 'text-stone-700'
                }`}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full backdrop-blur-md border rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 transition-all ${
                    theme === 'dark'
                      ? 'bg-white/10 border-white/20 text-stone-200 placeholder-stone-500 focus:ring-rose-700/50'
                      : 'bg-white/50 border-stone-200 text-stone-900 placeholder-stone-400 focus:ring-rose-500/50'
                  }`}
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className={`block mb-2 transition-colors duration-500 ${
                  theme === 'dark' ? 'text-stone-300' : 'text-stone-700'
                }`}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full backdrop-blur-md border rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 transition-all ${
                    theme === 'dark'
                      ? 'bg-white/10 border-white/20 text-stone-200 placeholder-stone-500 focus:ring-rose-700/50'
                      : 'bg-white/50 border-stone-200 text-stone-900 placeholder-stone-400 focus:ring-rose-500/50'
                  }`}
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className={`block mb-2 transition-colors duration-500 ${
                  theme === 'dark' ? 'text-stone-300' : 'text-stone-700'
                }`}>
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full backdrop-blur-md border rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 transition-all resize-none ${
                    theme === 'dark'
                      ? 'bg-white/10 border-white/20 text-stone-200 placeholder-stone-500 focus:ring-rose-700/50'
                      : 'bg-white/50 border-stone-200 text-stone-900 placeholder-stone-400 focus:ring-rose-500/50'
                  }`}
                  placeholder="Your message..."
                  rows={5}
                  required
                />
              </div>

              <Button
                type="submit"
                className={`w-full backdrop-blur-md bg-gradient-to-r border rounded-full px-6 py-6 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 ${
                  theme === 'dark'
                    ? 'from-rose-950/40 to-amber-950/40 hover:from-rose-900/60 hover:to-amber-900/60 border-white/20 text-stone-100'
                    : 'from-rose-200/80 to-amber-200/80 hover:from-rose-300/90 hover:to-amber-300/90 border-stone-200 text-stone-900'
                }`}
              >
                <Send size={18} />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}