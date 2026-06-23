import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { motion } from 'framer-motion';

// 🔥 REAL PROJECTS WITH ACTUAL DETAILS
const projects = [
  {
    title: "Swigo – Food Delivery",
    category: "Full Stack Platform",
    
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=2481&auto=format&fit=crop",
    tech: ["React", "Redux", "Node.js", "MongoDB", "Socket.IO"],
    desc: "Engineering a full-stack food delivery platform supporting 3 distinct dashboards – User, Admin, and Delivery Partner – covering the complete order lifecycle. JWT-based RBAC ensures zero cross-role data leakage. Real-time order tracking via Socket.IO enabling sub-second bidirectional updates.",
    status: "Ongoing",
    liveLink: "https://zyngo-omega.vercel.app/" 
  },
  {
    title: "NextHire.AI",
    category: "AI Mock Interview Platform",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=2670&auto=format&fit=crop",
    tech: ["React", "Redux", "Node.js", "MongoDB", "Firebase", "Recharts"],
    desc: "AI interview platform with 3 modes (HR, Technical, Confidence Detection). PDF resume parsing auto-extracts skills for 100% personalized questions. Real-time analytics dashboard scoring candidates across technical depth, communication clarity, and confidence. Automated downloadable PDF performance reports.",
    status: "Live 2025",
    liveLink: "https://interview-ai-app-cn7x.vercel.app/" 
  },
  {
    title: "AI Resume Builder",
    category: "SaaS Platform",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2670&auto=format&fit=crop",
    tech: ["React", "TypeScript", "Node.js", "MongoDB", "Gemini AI", "Razorpay"],
    desc: "Full-stack AI-powered SaaS resume builder with 11+ templates and 2-tier subscription (Free/Pro ₹299/mo) via Razorpay. Google Gemini API powers AI content improvement across 4 modules. ATS score checker, real-time preview, pixel-perfect PDF export, and shareable resume links with custom slugs.",
    status: "Live 2025",
    liveLink: "https://ai-resume-builder-bice-three.vercel.app/" 
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
          
          <div>
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
              transition={{ delay: index * 0.1 }}
              className="min-w-[85vw] md:min-w-[400px] snap-center group"
            >
              <div className="bg-white/[0.03] border border-white/10 rounded-[2rem] overflow-hidden hover:border-green-500/30 transition-all duration-500 backdrop-blur-xl h-full flex flex-col">
                
                {/* PROJECT IMAGE */}
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="relative h-52 overflow-hidden block">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100" />
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                    <span className={`text-[8px] font-black uppercase tracking-widest ${
                      project.status === "Ongoing" ? "text-yellow-500" : 
                      project.status === "Live 2025" ? "text-green-500" : "text-green-500"
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </a>

                {/* PROJECT DETAILS */}
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-xl font-black text-white uppercase mb-1 group-hover:text-green-500 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-green-500 font-mono text-[9px] uppercase tracking-widest mb-3">
                    {project.category}
                  </p>
                  
                  <p className="text-gray-300 text-xs leading-relaxed mb-4 flex-grow">
                    {project.desc}
                  </p>

                  {/* TECH STACK */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((tag, i) => (
                      <span key={i} className="text-[7px] font-bold text-gray-400 border border-white/10 px-2 py-1 rounded-md bg-white/5 uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* LIVE LINK BUTTON */}
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`w-full py-2.5 text-center font-black text-[9px] uppercase tracking-widest rounded-xl transition-all duration-300 ${
                      project.liveLink === "#" 
                      ? "bg-gray-800 text-gray-500 cursor-not-allowed" 
                      : "bg-white/[0.05] border border-white/10 text-white hover:bg-green-500 hover:text-black hover:border-green-500"
                    }`}
                  >
                    {project.liveLink === "#" ? "🔨 In Development" : "🚀 Live Demo"}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* SCROLL BUTTONS */}
        <div className="flex justify-center gap-4 mt-6">
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
