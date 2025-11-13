import { motion } from 'motion/react';
import { Code2, GraduationCap, Briefcase, Lightbulb } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export function About() {
  const { theme } = useTheme();

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`mb-4 transition-colors duration-500 ${
            theme === 'dark' ? 'text-stone-100' : 'text-stone-900'
          }`}>About Me</h2>
          <div className={`w-20 h-1 bg-gradient-to-r mx-auto rounded-full ${
            theme === 'dark' ? 'from-rose-700 to-amber-700' : 'from-rose-500 to-amber-500'
          }`}></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={`backdrop-blur-md border rounded-3xl p-8 md:p-12 mb-12 transition-colors duration-500 ${
            theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-white/50 border-stone-200'
          }`}
        >
          <div className="flex items-start gap-4 mb-6">
            <div className={`backdrop-blur-md border rounded-full p-3 flex-shrink-0 transition-colors duration-500 ${
              theme === 'dark' 
                ? 'bg-white/10 border-white/20 text-rose-400' 
                : 'bg-white/50 border-stone-200 text-rose-600'
            }`}>
              <GraduationCap size={24} />
            </div>
            <div>
              <h3 className={`mb-2 transition-colors duration-500 ${
                theme === 'dark' ? 'text-stone-100' : 'text-stone-900'
              }`}>Education & Background</h3>
              <p className={`leading-relaxed transition-colors duration-500 ${
                theme === 'dark' ? 'text-stone-300' : 'text-stone-600'
              }`}>
                I'm a BSIT graduate with a passion for technology and innovation. My academic background 
                has provided me with a strong foundation in computer science and software development principles.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 mb-6">
            <div className={`backdrop-blur-md border rounded-full p-3 flex-shrink-0 transition-colors duration-500 ${
              theme === 'dark' 
                ? 'bg-white/10 border-white/20 text-rose-400' 
                : 'bg-white/50 border-stone-200 text-rose-600'
            }`}>
              <Code2 size={24} />
            </div>
            <div>
              <h3 className={`mb-2 transition-colors duration-500 ${
                theme === 'dark' ? 'text-stone-100' : 'text-stone-900'
              }`}>Web Development</h3>
              <p className={`leading-relaxed transition-colors duration-500 ${
                theme === 'dark' ? 'text-stone-300' : 'text-stone-600'
              }`}>
                As a freelance developer, I specialize in creating web-based applications and digital solutions. 
                I focus on building functional, user-friendly projects that meet specific needs and solve real problems.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className={`backdrop-blur-md border rounded-full p-3 flex-shrink-0 transition-colors duration-500 ${
              theme === 'dark' 
                ? 'bg-white/10 border-white/20 text-rose-400' 
                : 'bg-white/50 border-stone-200 text-rose-600'
            }`}>
              <Briefcase size={24} />
            </div>
            <div>
              <h3 className={`mb-2 transition-colors duration-500 ${
                theme === 'dark' ? 'text-stone-100' : 'text-stone-900'
              }`}>BPO Experience</h3>
              <p className={`leading-relaxed transition-colors duration-500 ${
                theme === 'dark' ? 'text-stone-300' : 'text-stone-600'
              }`}>
                With 2 years of experience in the BPO industry, I bring strong customer service skills, 
                technical expertise, and professional communication to all my projects. This experience has 
                shaped my approach to delivering quality solutions and excellent client service.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className={`backdrop-blur-md bg-gradient-to-br border rounded-3xl p-8 text-center transition-colors duration-500 ${
            theme === 'dark'
              ? 'from-rose-950/10 to-amber-950/10 border-white/10'
              : 'from-rose-100/50 to-amber-100/50 border-stone-200'
          }`}
        >
          <Lightbulb className={`mx-auto mb-4 transition-colors duration-500 ${
            theme === 'dark' ? 'text-rose-400' : 'text-rose-600'
          }`} size={32} />
          <p className={`leading-relaxed transition-colors duration-500 ${
            theme === 'dark' ? 'text-stone-300' : 'text-stone-600'
          }`}>
            My goal is to create innovative digital solutions that are both functional and impactful. 
            Whether it's a web application, capstone project, or custom tech solution, I'm committed 
            to delivering quality work that exceeds expectations.
          </p>
        </motion.div>
      </div>
    </section>
  );
}