import { motion } from 'motion/react';
import { Code2, BookOpen, MessageSquare, Headphones } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export function Services() {
  const { theme } = useTheme();

  const services = [
    {
      icon: <Code2 size={28} />,
      title: 'Web Development',
      description: 'Create responsive, interactive, and user-friendly websites and web applications tailored to your needs.',
    },
    {
      icon: <BookOpen size={28} />,
      title: 'Capstone Projects',
      description: 'Provide guidance, development, and execution for academic or personal capstone projects from concept to completion.',
    },
    {
      icon: <MessageSquare size={28} />,
      title: 'Consultation',
      description: 'Offer tech advice, project planning, and management services to help bring your ideas to life.',
    },
    {
      icon: <Headphones size={28} />,
      title: 'BPO Experience',
      description: 'Leverage 2+ years of customer service and technical expertise from the BPO industry for professional solutions.',
    },
  ];

  return (
    <section id="services" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`mb-4 transition-colors duration-500 ${
            theme === 'dark' ? 'text-stone-100' : 'text-stone-900'
          }`}>Services</h2>
          <div className={`w-20 h-1 bg-gradient-to-r mx-auto rounded-full ${
            theme === 'dark' ? 'from-rose-700 to-amber-700' : 'from-rose-500 to-amber-500'
          }`}></div>
          <p className={`mt-6 max-w-2xl mx-auto transition-colors duration-500 ${
            theme === 'dark' ? 'text-stone-300' : 'text-stone-600'
          }`}>
            Offering a range of services to help you build, develop, and execute your digital projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`backdrop-blur-md border rounded-3xl p-8 transition-all duration-300 group hover:scale-105 ${
                theme === 'dark' 
                  ? 'bg-white/5 border-white/10 hover:bg-white/10' 
                  : 'bg-white/50 border-stone-200 hover:bg-white/70'
              }`}
            >
              <div className={`mb-4 group-hover:scale-110 transition-all duration-300 ${
                theme === 'dark' ? 'text-rose-400' : 'text-rose-600'
              }`}>
                {service.icon}
              </div>
              <h3 className={`mb-3 transition-colors duration-500 ${
                theme === 'dark' ? 'text-stone-100' : 'text-stone-900'
              }`}>{service.title}</h3>
              <p className={`transition-colors duration-500 ${
                theme === 'dark' ? 'text-stone-400' : 'text-stone-600'
              }`}>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}