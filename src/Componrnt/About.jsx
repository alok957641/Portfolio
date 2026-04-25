import React from 'react';
import { motion } from 'framer-motion';

const highlights = [
  { id: "01", title: "Core Logic", label: "DSA & Java", desc: "Crafting optimized algorithms with deep mathematical reasoning." },
  { id: "02", title: "Full Stack", label: "MERN Architecture", desc: "Building scalable ecosystems from MongoDB to complex React UIs." },
  { id: "03", title: "Visuals", label: "Framer & Motion", desc: "Designing fluid, high-performance animations that engage users." },
  { id: "04", title: "Execution", label: "Git & Deployment", desc: "Automating workflows and ensuring 99.9% system stability." }
];

const About = () => {
  return (
    <section id="about" className="relative min-h-screen bg-black flex items-center py-20 px-6 overflow-hidden">
      
      {/* --- 1. CLEAN BACKGROUND GLOW (No 3D/Canvas = Zero Lag) --- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Subtle Green Nebula Glow */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-green-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-green-500/5 blur-[120px] rounded-full"></div>
        
        {/* Static CSS Stars (Simple & Fast) */}
        <div className="absolute inset-0 opacity-20" 
             style={{ backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`, backgroundSize: '50px 50px' }}>
        </div>
      </div>

      <div className="container mx-auto relative z-10 max-w-6xl">
        
        {/* HEADING SECTION */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="h-[1px] w-8 bg-green-500"></div>
            <span className="text-green-500 font-mono text-[10px] tracking-[0.5em] uppercase font-bold">About Me</span>
          </motion.div>
          
          <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none">
            Passionate<span className="text-green-500 italic"> Developer</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* --- LEFT: TYPOGRAPHY (TEXT SAME REHGA) --- */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6 text-gray-400 text-lg md:text-xl font-light leading-relaxed">
              <p className="border-l-2 border-green-500/30 pl-6">
                I am <span className="text-white font-bold">Alok Kumar</span>, a digital architect currently pursuing <span className="text-white underline underline-offset-8 decoration-green-500/50">BCA (4th Sem)</span> at BN College, Bhagalpur.
              </p>
              <p className="pl-6">
                Specialized in the <span className="text-green-500 font-mono font-bold">MERN Stack</span>, my approach combines deep <span className="text-white italic font-medium">DSA logic</span> with high-end animations.
              </p>
            </div>

            {/* Premium Skill Tags */}
            <div className="flex flex-wrap gap-2 pl-6">
              {["React", "Node", "Java", "DSA", "Three.js", "Tailwind"].map((tag, i) => (
                <span key={i} className="px-4 py-2 rounded-lg border border-white/10 bg-white/[0.03] text-white/60 text-[9px] font-black uppercase tracking-widest">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* --- RIGHT: CLEAN GLASS CARDS (Fast & Responsive) --- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 md:p-8 rounded-[1.5rem] bg-white/[0.03] border border-white/5 backdrop-blur-md group hover:border-green-500/30 transition-all relative overflow-hidden"
              >
                {/* ID Background Number */}
                <span className="absolute -right-2 -top-2 text-6xl font-black text-white/[0.02] group-hover:text-green-500/5 transition-colors">
                  {item.id}
                </span>

                <div className="relative z-10">
                  <span className="text-[9px] font-black text-green-500 uppercase tracking-widest block mb-2 opacity-60">
                    {item.label}
                  </span>
                  <h4 className="text-white font-black text-lg mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-500 text-[11px] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* Subtle Bottom Glow Overlay */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full h-40 bg-green-500/5 blur-[100px] pointer-events-none"></div>
    </section>
  );
};

export default About;