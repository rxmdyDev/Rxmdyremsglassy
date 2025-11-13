import { useState } from 'react';
import { motion } from 'motion/react';
import { LogOut, Settings, FileText, Mail, User, Home } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

export function AdminPanel() {
  const { logout } = useAuth();
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('profile');

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const tabs = [
    { id: 'profile', label: 'Profile', icon: <User size={20} /> },
    { id: 'content', label: 'Content', icon: <FileText size={20} /> },
    { id: 'messages', label: 'Messages', icon: <Mail size={20} /> },
    { id: 'settings', label: 'Settings', icon: <Settings size={20} /> },
  ];

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

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className={`backdrop-blur-md border rounded-3xl p-6 mb-8 flex items-center justify-between transition-colors duration-500 ${
          theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-white/50 border-stone-200'
        }`}>
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
              theme === 'dark' 
                ? 'bg-gradient-to-br from-rose-800 to-amber-800' 
                : 'bg-gradient-to-br from-rose-400 to-amber-400'
            }`}>
              <Settings className="text-white" size={24} />
            </div>
            <div>
              <h1 className={`transition-colors duration-500 ${
                theme === 'dark' ? 'text-stone-100' : 'text-stone-900'
              }`}>Admin Panel</h1>
              <p className={`transition-colors duration-500 ${
                theme === 'dark' ? 'text-stone-400' : 'text-stone-600'
              }`}>Manage your website content and settings</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/')}
              className={`flex items-center gap-2 backdrop-blur-md border rounded-full px-4 py-2 transition-all duration-300 hover:scale-105 ${
                theme === 'dark'
                  ? 'bg-white/10 border-white/20 text-stone-200 hover:bg-white/20'
                  : 'bg-white/50 border-stone-200 text-stone-700 hover:bg-white/80'
              }`}
            >
              <Home size={18} />
              Home
            </button>
            <Button
              onClick={handleLogout}
              className={`flex items-center gap-2 backdrop-blur-md border rounded-full px-4 py-2 transition-all duration-300 hover:scale-105 ${
                theme === 'dark'
                  ? 'bg-red-950/40 border-red-900/50 text-red-400 hover:bg-red-900/60'
                  : 'bg-red-100 border-red-300 text-red-700 hover:bg-red-200'
              }`}
            >
              <LogOut size={18} />
              Logout
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <div className={`backdrop-blur-md border rounded-3xl p-2 mb-8 flex gap-2 transition-colors duration-500 ${
          theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-white/50 border-stone-200'
        }`}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-2xl transition-all duration-300 ${
                activeTab === tab.id
                  ? theme === 'dark'
                    ? 'bg-gradient-to-r from-rose-950/60 to-amber-950/60 text-stone-100'
                    : 'bg-gradient-to-r from-rose-200 to-amber-200 text-stone-900'
                  : theme === 'dark'
                    ? 'text-stone-400 hover:text-stone-200'
                    : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {tab.icon}
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={`backdrop-blur-md border rounded-3xl p-8 transition-colors duration-500 ${
            theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-white/50 border-stone-200'
          }`}
        >
          {activeTab === 'profile' && (
            <div>
              <h2 className={`mb-6 transition-colors duration-500 ${
                theme === 'dark' ? 'text-stone-100' : 'text-stone-900'
              }`}>Profile Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className={`block mb-2 transition-colors duration-500 ${
                    theme === 'dark' ? 'text-stone-300' : 'text-stone-700'
                  }`}>Name</label>
                  <input
                    type="text"
                    defaultValue="Remy Camiguel"
                    className={`w-full backdrop-blur-md border rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 transition-all ${
                      theme === 'dark'
                        ? 'bg-white/10 border-white/20 text-stone-200 focus:ring-rose-700/50'
                        : 'bg-white/50 border-stone-200 text-stone-900 focus:ring-rose-500/50'
                    }`}
                  />
                </div>
                <div>
                  <label className={`block mb-2 transition-colors duration-500 ${
                    theme === 'dark' ? 'text-stone-300' : 'text-stone-700'
                  }`}>Email</label>
                  <input
                    type="email"
                    defaultValue="remy@example.com"
                    className={`w-full backdrop-blur-md border rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 transition-all ${
                      theme === 'dark'
                        ? 'bg-white/10 border-white/20 text-stone-200 focus:ring-rose-700/50'
                        : 'bg-white/50 border-stone-200 text-stone-900 focus:ring-rose-500/50'
                    }`}
                  />
                </div>
                <div>
                  <label className={`block mb-2 transition-colors duration-500 ${
                    theme === 'dark' ? 'text-stone-300' : 'text-stone-700'
                  }`}>Location</label>
                  <input
                    type="text"
                    defaultValue="Philippines"
                    className={`w-full backdrop-blur-md border rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 transition-all ${
                      theme === 'dark'
                        ? 'bg-white/10 border-white/20 text-stone-200 focus:ring-rose-700/50'
                        : 'bg-white/50 border-stone-200 text-stone-900 focus:ring-rose-500/50'
                    }`}
                  />
                </div>
                <div>
                  <label className={`block mb-2 transition-colors duration-500 ${
                    theme === 'dark' ? 'text-stone-300' : 'text-stone-700'
                  }`}>Role</label>
                  <input
                    type="text"
                    defaultValue="Freelance Developer"
                    className={`w-full backdrop-blur-md border rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 transition-all ${
                      theme === 'dark'
                        ? 'bg-white/10 border-white/20 text-stone-200 focus:ring-rose-700/50'
                        : 'bg-white/50 border-stone-200 text-stone-900 focus:ring-rose-500/50'
                    }`}
                  />
                </div>
              </div>
              <div className="mt-6">
                <label className={`block mb-2 transition-colors duration-500 ${
                  theme === 'dark' ? 'text-stone-300' : 'text-stone-700'
                }`}>Bio</label>
                <textarea
                  rows={4}
                  defaultValue="A BSIT graduate and freelance developer creating web-based applications, capstone projects, and innovative tech solutions."
                  className={`w-full backdrop-blur-md border rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 transition-all resize-none ${
                    theme === 'dark'
                      ? 'bg-white/10 border-white/20 text-stone-200 focus:ring-rose-700/50'
                      : 'bg-white/50 border-stone-200 text-stone-900 focus:ring-rose-500/50'
                  }`}
                />
              </div>
              <Button className={`mt-6 backdrop-blur-md bg-gradient-to-r border rounded-full px-6 py-3 transition-all duration-300 hover:scale-105 ${
                theme === 'dark'
                  ? 'from-rose-950/40 to-amber-950/40 hover:from-rose-900/60 hover:to-amber-900/60 border-white/20 text-stone-100'
                  : 'from-rose-200/80 to-amber-200/80 hover:from-rose-300/90 hover:to-amber-300/90 border-stone-200 text-stone-900'
              }`}>
                Save Changes
              </Button>
            </div>
          )}

          {activeTab === 'content' && (
            <div>
              <h2 className={`mb-6 transition-colors duration-500 ${
                theme === 'dark' ? 'text-stone-100' : 'text-stone-900'
              }`}>Content Management</h2>
              <p className={`mb-4 transition-colors duration-500 ${
                theme === 'dark' ? 'text-stone-300' : 'text-stone-600'
              }`}>Manage your website's projects, services, and other content here.</p>
              <div className="grid gap-4">
                {['Projects', 'Services', 'About Section'].map((item) => (
                  <div
                    key={item}
                    className={`backdrop-blur-md border rounded-2xl p-4 flex items-center justify-between transition-colors duration-500 ${
                      theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-white/30 border-stone-200'
                    }`}
                  >
                    <span className={`transition-colors duration-500 ${
                      theme === 'dark' ? 'text-stone-200' : 'text-stone-900'
                    }`}>{item}</span>
                    <Button className={`backdrop-blur-md border rounded-full px-4 py-2 transition-all duration-300 hover:scale-105 ${
                      theme === 'dark'
                        ? 'bg-white/10 border-white/20 text-stone-200 hover:bg-white/20'
                        : 'bg-white/50 border-stone-200 text-stone-700 hover:bg-white/80'
                    }`}>
                      Edit
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'messages' && (
            <div>
              <h2 className={`mb-6 transition-colors duration-500 ${
                theme === 'dark' ? 'text-stone-100' : 'text-stone-900'
              }`}>Messages</h2>
              <p className={`transition-colors duration-500 ${
                theme === 'dark' ? 'text-stone-300' : 'text-stone-600'
              }`}>View and manage contact form submissions here.</p>
              <div className={`mt-6 p-8 rounded-2xl text-center ${
                theme === 'dark' ? 'bg-white/5' : 'bg-white/30'
              }`}>
                <Mail className={`mx-auto mb-4 ${
                  theme === 'dark' ? 'text-stone-500' : 'text-stone-400'
                }`} size={48} />
                <p className={`transition-colors duration-500 ${
                  theme === 'dark' ? 'text-stone-400' : 'text-stone-600'
                }`}>No messages yet</p>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div>
              <h2 className={`mb-6 transition-colors duration-500 ${
                theme === 'dark' ? 'text-stone-100' : 'text-stone-900'
              }`}>Settings</h2>
              <div className="space-y-6">
                <div>
                  <h3 className={`mb-4 transition-colors duration-500 ${
                    theme === 'dark' ? 'text-stone-200' : 'text-stone-800'
                  }`}>Social Media Links</h3>
                  <div className="space-y-4">
                    <div>
                      <label className={`block mb-2 transition-colors duration-500 ${
                        theme === 'dark' ? 'text-stone-300' : 'text-stone-700'
                      }`}>Facebook</label>
                      <input
                        type="text"
                        defaultValue="https://facebook.com/rxmdyrems"
                        className={`w-full backdrop-blur-md border rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 transition-all ${
                          theme === 'dark'
                            ? 'bg-white/10 border-white/20 text-stone-200 focus:ring-rose-700/50'
                            : 'bg-white/50 border-stone-200 text-stone-900 focus:ring-rose-500/50'
                        }`}
                      />
                    </div>
                    <div>
                      <label className={`block mb-2 transition-colors duration-500 ${
                        theme === 'dark' ? 'text-stone-300' : 'text-stone-700'
                      }`}>Instagram</label>
                      <input
                        type="text"
                        defaultValue="https://instagram.com/rxmdyrems"
                        className={`w-full backdrop-blur-md border rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 transition-all ${
                          theme === 'dark'
                            ? 'bg-white/10 border-white/20 text-stone-200 focus:ring-rose-700/50'
                            : 'bg-white/50 border-stone-200 text-stone-900 focus:ring-rose-500/50'
                        }`}
                      />
                    </div>
                  </div>
                </div>
                <Button className={`backdrop-blur-md bg-gradient-to-r border rounded-full px-6 py-3 transition-all duration-300 hover:scale-105 ${
                  theme === 'dark'
                    ? 'from-rose-950/40 to-amber-950/40 hover:from-rose-900/60 hover:to-amber-900/60 border-white/20 text-stone-100'
                    : 'from-rose-200/80 to-amber-200/80 hover:from-rose-300/90 hover:to-amber-300/90 border-stone-200 text-stone-900'
                }`}>
                  Update Settings
                </Button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
