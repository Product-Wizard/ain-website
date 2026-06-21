import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X } from 'lucide-react';

interface FloatingGuideProps {
  currentTab: string;
}

export default function FloatingGuide({ currentTab }: FloatingGuideProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const messages: Record<string, string> = {
    home: "Hey! I'm Leo, your digital guide. Need help scaling your business?",
    services: "Our packages are built for speed and ROI. Want a customized plan?",
    about: "We're more than an agency, we're an extension of your team.",
    partnerships: "We love collaborating. Let's build something extraordinary together.",
    careers: "Join the top 1% of digital architects. Check out our open roles!",
  };

  useEffect(() => {
    setIsOpen(false); // Close when tab changes, then pop open after a delay
    
    const introDelays = setTimeout(() => {
      setMessage(messages[currentTab] || messages['home']);
      setIsOpen(true);
    }, 1500);

    return () => clearTimeout(introDelays);
  }, [currentTab]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      
      {/* Tooltip Dialog */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
            className="mb-4 bg-zinc-900 border border-zinc-800 text-white p-4 rounded-2xl rounded-br-sm shadow-2xl max-w-[240px] pointer-events-auto relative"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-2 -right-2 bg-zinc-800 border border-zinc-700 text-zinc-400 hover:text-white rounded-full p-1"
            >
              <X className="h-3 w-3" />
            </button>
            <p className="text-sm font-medium leading-relaxed">{message}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Avatar Avatar */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="pointer-events-auto relative h-16 w-16 rounded-full overflow-hidden border-2 border-[#22C55E] shadow-[0_0_20px_rgba(34,197,94,0.3)] bg-zinc-900 focus:outline-none flex items-center justify-center"
      >
        <img
          referrerPolicy="no-referrer"
          src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=400&q=80"
          alt="Leo - AI Guide"
          className="h-full w-full object-cover"
        />
        {/* Notification Dot */}
        {!isOpen && (
          <span className="absolute top-0 right-0 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#22C55E]"></span>
          </span>
        )}
      </motion.button>
    </div>
  );
}
