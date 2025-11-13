import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export function Projects() {
  const { theme } = useTheme();

  const projects = [
    {
      title: 'Movie Streaming Web App',
      description: 'A full-featured movie streaming platform with user authentication, search functionality, video playback, and personalized recommendations.',
      tags: ['React', 'Node.js', 'MongoDB', 'Video API'],
      gradient: theme === 'dark' ? 'from-rose-950/20 to-pink-950/20' : 'from-rose-200/60 to-pink-200/60',
    },
    {
      title: 'E-Commerce Platform',
      description: 'A comprehensive e-commerce solution with product management, shopping cart, payment integration, and order tracking.',
      tags: ['TypeScript', 'Next.js', 'PostgreSQL', 'Stripe'],
      gradient: theme === 'dark' ? 'from-amber-950/20 to-orange-950/20' : 'from-amber-200/60 to-orange-200/60',
    },
    {
      title: 'Student Portal System',
      description: 'Academic management system for students and faculty with course enrollment, grade tracking, and announcement features.',
      tags: ['React', 'Express', 'MySQL', 'Tailwind'],
      gradient: theme === 'dark' ? 'from-stone-900/20 to-neutral-900/20' : 'from-stone-200/60 to-neutral-200/60',
    },
    {
      title: 'Inventory Management',
      description: 'Business inventory tracking system with real-time stock updates, reporting, and multi-user access control.',
      tags: ['Vue.js', 'Firebase', 'Charts.js', 'PWA'],
      gradient: theme === 'dark' ? 'from-red-950/20 to-rose-950/20' : 'from-red-200/60 to-rose-200/60',
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`mb-4 transition-colors duration-500 ${
            theme === 'dark' ? 'text-stone-100' : 'text-stone-900'
          }`}>Featured Projects</h2>
          <div className={`w-20 h-1 bg-gradient-to-r mx-auto rounded-full ${
            theme === 'dark' ? 'from-rose-700 to-amber-700' : 'from-rose-500 to-amber-500'
          }`}></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`backdrop-blur-md border rounded-3xl p-8 transition-all duration-300 group ${
                theme === 'dark' 
                  ? 'bg-white/5 border-white/10 hover:bg-white/10' 
                  : 'bg-white/50 border-stone-200 hover:bg-white/70'
              }`}
            >
              <div className={`w-full h-48 bg-gradient-to-br ${project.gradient} rounded-2xl mb-6 flex items-center justify-center border transition-colors duration-500 ${
                theme === 'dark' ? 'border-white/10' : 'border-stone-200'
              }`}>
                <div className={`backdrop-blur-sm rounded-full p-6 ${
                  theme === 'dark' ? 'bg-black/20' : 'bg-white/40'
                }`}>
                  <Code2Icon className={`transition-colors duration-500 ${
                    theme === 'dark' ? 'text-white' : 'text-stone-700'
                  }`} size={48} />
                </div>
              </div>

              <h3 className={`mb-3 transition-colors duration-500 ${
                theme === 'dark' ? 'text-stone-100' : 'text-stone-900'
              }`}>{project.title}</h3>
              <p className={`mb-6 transition-colors duration-500 ${
                theme === 'dark' ? 'text-stone-400' : 'text-stone-600'
              }`}>{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`backdrop-blur-md border rounded-full px-3 py-1 transition-colors duration-500 ${
                      theme === 'dark' 
                        ? 'bg-white/10 border-white/10 text-stone-300' 
                        : 'bg-white/50 border-stone-200 text-stone-700'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href="#"
                  className={`flex items-center gap-2 backdrop-blur-md border rounded-full px-4 py-2 transition-all duration-300 hover:scale-105 ${
                    theme === 'dark'
                      ? 'bg-white/10 border-white/20 text-stone-200 hover:bg-white/20'
                      : 'bg-white/50 border-stone-200 text-stone-700 hover:bg-white/80'
                  }`}
                >
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </a>
                <a
                  href="#"
                  className={`flex items-center gap-2 backdrop-blur-md border rounded-full px-4 py-2 transition-all duration-300 hover:scale-105 ${
                    theme === 'dark'
                      ? 'bg-white/10 border-white/20 text-stone-200 hover:bg-white/20'
                      : 'bg-white/50 border-stone-200 text-stone-700 hover:bg-white/80'
                  }`}
                >
                  <Github size={16} />
                  <span>Code</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Code2Icon({ className, size }: { className?: string; size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || 24}
      height={size || 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
  );
}