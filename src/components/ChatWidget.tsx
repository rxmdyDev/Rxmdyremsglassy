import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, User, Minus, AlertCircle } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import avatarImage from 'figma:asset/48afc5e873c61f4122483a9ee2b0bc8d98ab80e2.png';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'admin';
  timestamp: Date;
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [showCloseConfirm, setShowCloseConfirm] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm Remy. How can I help you today?",
      sender: 'admin',
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const { theme } = useTheme();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, isMinimized]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputMessage.trim() === '') return;

    const newMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages([...messages, newMessage]);
    setInputMessage('');

    // Simulate admin response
    setTimeout(() => {
      const autoReply: Message = {
        id: messages.length + 2,
        text: "Thanks for your message! I'll get back to you as soon as possible.",
        sender: 'admin',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, autoReply]);
    }, 1000);
  };

  const handleClose = () => {
    setShowCloseConfirm(true);
  };

  const confirmClose = () => {
    setIsOpen(false);
    setIsMinimized(false);
    setShowCloseConfirm(false);
    // Reset messages after closing
    setTimeout(() => {
      setMessages([
        {
          id: 1,
          text: "Hi! I'm Remy. How can I help you today?",
          sender: 'admin',
          timestamp: new Date(),
        },
      ]);
    }, 300);
  };

  const cancelClose = () => {
    setShowCloseConfirm(false);
  };

  const handleMinimize = () => {
    setIsMinimized(true);
  };

  const handleMaximize = () => {
    setIsMinimized(false);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        onClick={() => {
          setIsOpen(!isOpen);
          setIsMinimized(false);
        }}
        className={`fixed bottom-6 right-6 z-40 backdrop-blur-md border rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 ${
          theme === 'dark'
            ? 'bg-gradient-to-br from-rose-950/60 to-amber-950/60 border-white/20 text-white hover:from-rose-900/80 hover:to-amber-900/80'
            : 'bg-gradient-to-br from-rose-200 to-amber-200 border-stone-200 text-stone-900 hover:from-rose-300 hover:to-amber-300'
        }`}
        aria-label="Open chat"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={isOpen && !isMinimized ? "close" : "chat"}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <MessageCircle size={28} />
          </motion.div>
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && !isMinimized && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className={`fixed backdrop-blur-md border rounded-3xl shadow-2xl flex flex-col overflow-hidden
              inset-0 w-full h-full
              sm:bottom-24 sm:right-6 sm:w-[400px] sm:h-[550px] sm:top-auto sm:left-auto sm:inset-auto sm:rounded-3xl
              z-[60]
              ${
              theme === 'dark'
                ? 'bg-white/10 border-white/20'
                : 'bg-white/80 border-stone-200'
            }`}
          >
            {/* Chat Header */}
            <div className={`backdrop-blur-md border-b p-4 flex items-center gap-3 ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-rose-950/40 to-amber-950/40 border-white/10'
                : 'bg-gradient-to-r from-rose-100/80 to-amber-100/80 border-stone-200'
            }`}>
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/30">
                <img src={avatarImage} alt="Remy" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <h3 className={`transition-colors duration-500 ${
                  theme === 'dark' ? 'text-stone-100' : 'text-stone-900'
                }`}>Remy Camiguel</h3>
                <p className={`transition-colors duration-500 ${
                  theme === 'dark' ? 'text-stone-400' : 'text-stone-600'
                }`}>
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                  Online
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleMinimize}
                  className={`backdrop-blur-md border rounded-full p-2 transition-all duration-300 hover:scale-110 ${
                    theme === 'dark'
                      ? 'bg-white/10 border-white/20 text-stone-200 hover:bg-white/20'
                      : 'bg-white/50 border-stone-200 text-stone-700 hover:bg-white/80'
                  }`}
                  aria-label="Minimize chat"
                >
                  <Minus size={18} />
                </button>
                <button
                  onClick={handleClose}
                  className={`backdrop-blur-md border rounded-full p-2 transition-all duration-300 hover:scale-110 ${
                    theme === 'dark'
                      ? 'bg-red-950/40 border-red-900/50 text-red-400 hover:bg-red-900/60'
                      : 'bg-red-100 border-red-300 text-red-700 hover:bg-red-200'
                  }`}
                  aria-label="Close chat"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex gap-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.sender === 'admin'
                        ? 'overflow-hidden'
                        : theme === 'dark'
                          ? 'bg-white/20'
                          : 'bg-stone-300'
                    }`}>
                      {message.sender === 'admin' ? (
                        <img src={avatarImage} alt="Remy" className="w-full h-full object-cover" />
                      ) : (
                        <User size={16} className={theme === 'dark' ? 'text-stone-300' : 'text-stone-700'} />
                      )}
                    </div>
                    <div>
                      <div className={`backdrop-blur-md border rounded-2xl px-4 py-2 ${
                        message.sender === 'user'
                          ? theme === 'dark'
                            ? 'bg-gradient-to-br from-rose-950/60 to-amber-950/60 border-white/20 text-stone-100'
                            : 'bg-gradient-to-br from-rose-200 to-amber-200 border-stone-200 text-stone-900'
                          : theme === 'dark'
                            ? 'bg-white/10 border-white/20 text-stone-200'
                            : 'bg-white/60 border-stone-200 text-stone-900'
                      }`}>
                        <p>{message.text}</p>
                      </div>
                      <p className={`mt-1 px-2 ${
                        theme === 'dark' ? 'text-stone-500' : 'text-stone-500'
                      } ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
                        {formatTime(message.timestamp)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className={`backdrop-blur-md border-t p-4 ${
              theme === 'dark'
                ? 'bg-white/5 border-white/10'
                : 'bg-white/50 border-stone-200'
            }`}>
              <form onSubmit={handleSendMessage} className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Type a message..."
                  className={`flex-1 backdrop-blur-md border rounded-full px-4 py-3 focus:outline-none focus:ring-2 transition-all ${
                    theme === 'dark'
                      ? 'bg-white/10 border-white/20 text-stone-200 placeholder-stone-500 focus:ring-rose-700/50'
                      : 'bg-white/50 border-stone-200 text-stone-900 placeholder-stone-400 focus:ring-rose-500/50'
                  }`}
                />
                <button
                  type="submit"
                  className={`backdrop-blur-md bg-gradient-to-r border rounded-full p-3 transition-all duration-300 hover:scale-110 flex items-center justify-center ${
                    theme === 'dark'
                      ? 'from-rose-950/60 to-amber-950/60 border-white/20 text-white hover:from-rose-900/80 hover:to-amber-900/80'
                      : 'from-rose-200 to-amber-200 border-stone-200 text-stone-900 hover:from-rose-300 hover:to-amber-300'
                  }`}
                  aria-label="Send message"
                >
                  <Send size={20} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Minimized Chat Bar */}
      <AnimatePresence>
        {isOpen && isMinimized && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={handleMaximize}
            className={`fixed bottom-24 right-6 z-[60] backdrop-blur-md border rounded-full px-6 py-3 shadow-2xl cursor-pointer transition-all duration-300 hover:scale-105 flex items-center gap-3 ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-rose-950/40 to-amber-950/40 border-white/20'
                : 'bg-gradient-to-r from-rose-100/80 to-amber-100/80 border-stone-200'
            }`}
          >
            <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white/30">
              <img src={avatarImage} alt="Remy" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className={`transition-colors duration-500 ${
                theme === 'dark' ? 'text-stone-100' : 'text-stone-900'
              }`}>Remy Camiguel</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Close Confirmation Dialog */}
      <AnimatePresence>
        {showCloseConfirm && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[70]"
              onClick={cancelClose}
            />
            
            {/* Confirmation Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[80] backdrop-blur-md border rounded-3xl p-8 shadow-2xl w-[90%] max-w-md ${
                theme === 'dark'
                  ? 'bg-white/10 border-white/20'
                  : 'bg-white/90 border-stone-200'
              }`}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`backdrop-blur-md border rounded-full p-3 ${
                  theme === 'dark'
                    ? 'bg-red-950/40 border-red-900/50 text-red-400'
                    : 'bg-red-100 border-red-300 text-red-700'
                }`}>
                  <AlertCircle size={24} />
                </div>
                <div>
                  <h3 className={`mb-2 transition-colors duration-500 ${
                    theme === 'dark' ? 'text-stone-100' : 'text-stone-900'
                  }`}>End Chat Session?</h3>
                  <p className={`transition-colors duration-500 ${
                    theme === 'dark' ? 'text-stone-300' : 'text-stone-600'
                  }`}>
                    Are you sure you want to end this chat session? Your conversation history will be cleared.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3 justify-end">
                <button
                  onClick={cancelClose}
                  className={`backdrop-blur-md border rounded-full px-6 py-2 transition-all duration-300 hover:scale-105 ${
                    theme === 'dark'
                      ? 'bg-white/10 border-white/20 text-stone-200 hover:bg-white/20'
                      : 'bg-white/50 border-stone-200 text-stone-700 hover:bg-white/80'
                  }`}
                >
                  Cancel
                </button>
                <button
                  onClick={confirmClose}
                  className={`backdrop-blur-md border rounded-full px-6 py-2 transition-all duration-300 hover:scale-105 ${
                    theme === 'dark'
                      ? 'bg-red-950/60 border-red-900/50 text-red-400 hover:bg-red-900/80'
                      : 'bg-red-100 border-red-300 text-red-700 hover:bg-red-200'
                  }`}
                >
                  End Chat
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}