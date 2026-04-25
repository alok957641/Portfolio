import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, LayoutGrid, MessageSquare, Menu, X, ArrowUpRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // --- LINKS KO IDS SE CONNECT KIYA HAI ---
  const navItems = [
    { name: 'See my work', href: '#projects', icon: <Briefcase size={18} />, color: 'text-green-400' },
    { name: 'My catalog', href: '#skills', icon: <LayoutGrid size={18} />, color: 'text-blue-400' },
    { name: 'Book a service', href: '#contact', icon: <MessageSquare size={18} />, color: 'text-emerald-400' },
  ];

  return (
    <nav className="fixed top-6 w-full flex flex-col items-center z-[200] px-4">
      
      {/* 1. DESKTOP VERSION */}
      <div className="hidden md:flex items-center gap-3 p-2 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
        {navItems.map((item, index) => (
          <motion.a
            key={index}
            href={item.href} // ID based navigation
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.05)' }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/5 transition-all group"
          >
            <span className={`${item.color} group-hover:drop-shadow-[0_0_8px_rgba(74,222,128,0.8)]`}>
              {item.icon}
            </span>
            <span className="text-[11px] font-black uppercase tracking-widest text-gray-200">
              {item.name}
            </span>
            <ArrowUpRight size={14} className="text-gray-500 group-hover:text-white transition-colors" />
          </motion.a>
        ))}
      </div>

      {/* 2. MOBILE VERSION (Responsive Bar) */}
      <div className="md:hidden w-full flex justify-between items-center px-6 py-4 bg-black/60 backdrop-blur-3xl border border-white/10 rounded-[2rem] shadow-2xl">
        <div className="text-white font-black tracking-tighter text-lg">
          ALOK<span className="text-green-500">.DEV</span>
        </div>
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="text-white p-2 bg-white/5 rounded-xl border border-white/10"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* 3. MOBILE MENU DROPDOWN (Animated) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="md:hidden w-full mt-3 bg-black/95 border border-white/10 rounded-[2rem] p-4 flex flex-col gap-2 backdrop-blur-3xl shadow-2xl"
          >
            {navItems.map((item, index) => (
              <a 
                key={index} 
                href={item.href} 
                onClick={() => setIsOpen(false)} // Click pe menu band ho jayega
                className="flex items-center justify-between gap-4 text-gray-300 p-4 rounded-2xl hover:bg-white/5 transition-all"
              >
                <div className="flex items-center gap-4">
                  <span className={item.color}>{item.icon}</span>
                  <span className="text-xs font-black uppercase tracking-widest">{item.name}</span>
                </div>
                <ArrowUpRight size={16} className="opacity-30" />
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;