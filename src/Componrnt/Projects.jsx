import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { motion } from 'framer-motion';

// 🔥 NAYA ORDER: Pehle 3 important projects, phir baaki 2
const projects = [
  {
    title: "Zyngo Food Delivery",
    category: "Food Delivery Platform",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=2481&auto=format&fit=crop",
    tech: ["React Native", "Firebase", "Stripe", "Live Tracking"],
    desc: "A complete food delivery app with real-time GPS tracking, secure payments via Stripe, and Firebase authentication. Optimized for both iOS and Android.",
    status: "Live",
    liveLink: "https://zyngofood.com" // 🔴 Yahan apni real link daal de
  },
  {
    title: "NextHire.ai",
    category: "AI Recruitment Platform",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=2670&auto=format&fit=crop",
    tech: ["Next.js", "AI", "PostgreSQL", "Tailwind"],
    desc: "AI-powered recruitment platform that automates candidate screening, resume parsing, and intelligent job matching using machine learning algorithms.",
    status: "Live",
    liveLink: "https://nexthire.ai" // 🔴 Yahan apni real link daal de
  },
  {
    title: "ResumeBuilder Pro",
    category: "Career Tools",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2670&auto=format&fit=crop",
    tech: ["React", "PDF Generation", "MongoDB", "Redux"],
    desc: "Professional resume builder with customizable templates, real-time preview, and one-click PDF export. Includes ATS-friendly formatting options.",
    status: "Live",
    liveLink: "https://resumebuilder.com" // 🔴 Yahan apni real link daal de
  },
  {
    title: "NowInfoTech",
    category: "Corporate Platform",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    tech: ["React", "Tailwind", "Responsive"],
    desc: "A fully responsive business interface built with React. Focused on modular components and seamless navigation across all device breakpoints.",
    status: "Live",
    liveLink: "https://infotech-company.vercel.app/"
  },
  {
    title: "AiBuzz Media",
    category: "Influencer Agency",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=2662&auto=format&fit=crop",
    tech: ["React", "Nodemailer", "Tailwind"],
    desc: "A specialized agency portal featuring custom Nodemailer integration for automated lead generation and secure client communication.",
    status: "Live",
    liveLink: "https://aibuzz.media"
  }
];

const Projects = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id='projects' className="relative min-h-screen bg-black py-20 px-6 overflow-hidden flex flex-col justify-center">
      
      {/* STAR BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        </Canvas>
      </div>

      <div className="container mx-auto relative z-10 max-w-6xl">
        
        {/* HEADER */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="h-[1px] w-8 bg-green-500"></div>
            <span className="text-green-500 font-mono text-xs tracking-[0.5em] uppercase">My Work</span>
          </motion.div>
          
          <div className="mb-16">
            <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter">
              Featured <span className="text-green-500 italic"> Projects</span>
            </h3>
          </div>
        </div>

        {/* PROJECT SLIDER */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-10 px-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }} // 🔥 Har card thoda delay se aaye
              className="min-w-[85vw] md:min-w-[380px] snap-center group"
            >
              <div className="bg-white/[0.03] border border-white/10 rounded-[2rem] overflow-hidden hover:border-green-500/30 transition-all duration-500 backdrop-blur-xl h-full flex flex-col">
                
                {/* PROJECT IMAGE */}
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="relative h-48 overflow-hidden block">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100" />
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                    <span className="text-[8px] font-black text-green-500 uppercase tracking-widest">{project.status}</span>
                  </div>
                </a>

                {/* PROJECT DETAILS */}
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-2xl font-black text-white uppercase mb-1 group-hover:text-green-500 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-green-500 font-mono text-[9px] uppercase tracking-widest mb-4">
                    {project.category}
                  </p>
                  
                  <p className="text-gray-400 text-xs leading-relaxed mb-6 flex-grow">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tag, i) => (
                      <span key={i} className="text-[8px] font-bold text-gray-400 border border-white/10 px-2 py-1 rounded-md bg-white/5 uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* LIVE LINK BUTTON */}
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`w-full py-3 text-center font-black text-[9px] uppercase tracking-widest rounded-xl transition-all duration-300 ${
                      project.liveLink === "#" 
                      ? "bg-gray-800 text-gray-500 cursor-not-allowed" 
                      : "bg-white/[0.05] border border-white/10 text-white hover:bg-green-500 hover:text-black hover:border-green-500"
                    }`}
                  >
                    {project.liveLink === "#" ? "Mission Pending" : "🚀 Live Demo"}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 🔥 SCROLL BUTTONS - Agar chahiye toh */}
        <div className="flex justify-center gap-4 mt-8">
          <button 
            onClick={() => scroll('left')}
            className="bg-white/5 border border-white/10 text-white p-3 rounded-full hover:bg-green-500 hover:text-black transition-all duration-300"
          >
            ←
          </button>
          <button 
            onClick={() => scroll('right')}
            className="bg-white/5 border border-white/10 text-white p-3 rounded-full hover:bg-green-500 hover:text-black transition-all duration-300"
          >
            →
          </button>
        </div>
      </div>
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-green-500/5 blur-[120px] rounded-full pointer-events-none"></div>
    </section>
  );
};

export default Projects;
