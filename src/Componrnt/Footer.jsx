import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// --- ICONS AS CONSTANTS (Library ka jhanjhat khatam) ---
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const ArrowUpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
);

const Footer = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socials = [
    { name: 'Github', icon: <GithubIcon />, url: 'https://github.com/alok957641' },
    { name: 'Linkedin', icon: <LinkedinIcon />, url: 'https://linkedin.com/in/alok-kumar-304980314' },
    { name: 'Instagram', icon: <InstagramIcon />, url: 'https://www.instagram.com/code_with_alok69?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
  ];

  return (
    <footer className="relative bg-[#020202] pt-20 pb-6 px-6 border-t border-white/5 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-green-500/50 to-transparent"></div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-end">
          <div>
            <h2 className="text-5xl md:text-7xl font-black text-white/10 uppercase tracking-tighter mb-6 group cursor-default">
              ALOK<span className="group-hover:text-green-500 transition-colors duration-500">.DEV</span>
            </h2>
            <p className="text-gray-500 font-mono text-[10px] uppercase tracking-[0.4em] max-w-sm font-bold">
              // Engineering digital solutions from Bhagalpur to the world.
            </p>
          </div>

          <div className="flex flex-col md:items-end gap-6">
             <div className="flex gap-4">
                {socials.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, color: '#22c55e', borderColor: 'rgba(34, 197, 94, 0.5)' }}
                    className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/[0.03] border border-white/10 text-white/40 transition-all shadow-xl backdrop-blur-md"
                  >
                    {social.icon}
                  </motion.a>
                ))}
             </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-10 border-y border-white/5 mb-10">
          <div className="space-y-1">
            <p className="text-[8px] text-green-500 font-mono uppercase tracking-widest font-bold">Local_Time</p>
            <p className="text-white font-black text-sm font-mono">{time}</p>
          </div>
          <div className="space-y-1">
            <p className="text-[8px] text-green-500 font-mono uppercase tracking-widest font-bold">Coordinates</p>
            <p className="text-white font-black text-sm font-mono tracking-tighter">25.2445° N, 87.0133° E</p>
          </div>
          <div className="space-y-1">
            <p className="text-[8px] text-green-500 font-mono uppercase tracking-widest font-bold">System_Status</p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></div>
              <p className="text-white font-black text-sm font-mono uppercase">Operational</p>
            </div>
          </div>
          <div className="flex md:justify-end items-center">
            <button 
              onClick={scrollToTop}
              className="group flex items-center gap-3 text-[10px] font-black text-white/40 uppercase tracking-widest hover:text-white transition-all"
            >
              Back to Top
              <span className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-green-500 group-hover:bg-green-500 group-hover:text-black transition-all">
                <ArrowUpIcon />
              </span>
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[9px] font-mono text-gray-600 uppercase tracking-widest">
            © 2026 Alok Kumar. Designed & Developed with Passion.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-[8px] font-mono text-gray-700 uppercase tracking-widest italic font-bold">
               STACK: REACT // FRAMER // THREEJS // GSAP
            </span>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-10 left-0 w-full h-[100px] bg-green-500/5 blur-[80px] pointer-events-none"></div>
    </footer>
  );
};

export default Footer;