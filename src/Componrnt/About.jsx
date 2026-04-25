import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { motion } from 'framer-motion';

const highlights = [
  { id: "01", title: "Core Logic", label: "DSA & Java", desc: "Crafting optimized algorithms with deep mathematical reasoning." },
  { id: "02", title: "Full Stack", label: "MERN Architecture", desc: "Building scalable ecosystems from MongoDB to complex React UIs." },
  { id: "03", title: "Visuals", label: "Framer & Motion", desc: "Designing fluid, high-performance animations that engage users." },
  { id: "04", title: "Execution", label: "Git & Deployment", desc: "Automating workflows and ensuring 99.9% system stability." }
];

const About = () => {
  return (
    <section id="about" className="relative min-h-screen bg-black flex items-center py-24 px-6 overflow-hidden">
      
      {/* --- 1. THE SIGNATURE STAR FIELD (FIXED FOR MOBILE) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Canvas 
          camera={{ position: [0, 0, 1] }}
          gl={{ 
            alpha: true, // Transparent background ke liye zaroori hai
            antialias: false, // Mobile performance boost
            powerPreference: "high-performance" 
          }}
        >
          {/* Opacity-50 ki jagah yahan 'factor' aur 'fade' se stars ko dhundla karo */}
          <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        </Canvas>
      </div>

      <div className="container mx-auto relative z-10 max-w-6xl">
        
        {/* HEADING SECTION */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="h-[1px] w-8 bg-green-500"></div>
            <span className="text-green-500 font-mono text-xs tracking-[0.5em] uppercase font-bold">About Me</span>
          </motion.div>
          
          <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none">
            Passionate<span className="text-green-500 italic"> Developer</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* --- LEFT: TYPOGRAPHY --- */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-10"
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
            <div className="flex flex-wrap gap-3 pl-6">
              {["React", "Node", "Java", "DSA", "Three.js", "Tailwind"].map((tag, i) => (
                <span key={i} className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-white/60 text-[9px] font-black uppercase tracking-widest hover:border-green-500 hover:text-green-500 transition-all">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* --- RIGHT: 3D-FEEL FLOATING CARDS --- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 relative">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-green-500/10 blur-[100px] rounded-full -z-10 animate-pulse"></div>

            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/5 backdrop-blur-3xl group hover:border-green-500/30 transition-all relative overflow-hidden"
              >
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

      {/* UI Overlay */}
      <div className="absolute bottom-10 right-10 hidden md:flex flex-col gap-1 text-[8px] font-mono text-white/20 uppercase tracking-[1em] rotate-90 origin-bottom-right">
        <span>Bhagalpur_In_Cloud</span>
        <span>Build_Status: 100%</span>
      </div>
    </section>
  );
};

export default About;