import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { motion } from 'framer-motion';

const certs = [
  {
    title: "Responsive Web Design",
    issuer: "FreeCodeCamp",
    image: "https://design-style-guide.freecodecamp.org/downloads/fcc_primary_large.png",
    link: "https://drive.google.com/file/d/1pHO8sArbHfiKHeGP-wR0RZUqfF6KH56Q/view?usp=drive_link",
  },
  {
    title: "Artificial Intelligence",
    issuer: "Accenture",
    image: "public/pngegg (11).png",
    link: "https://drive.google.com/file/d/1zhzoKSNZsxQ78A-IthWus5YK1KweiqLY/view?usp=drive_link",
  },
  {
    title: "User Experience (UX)",
    issuer: "Accenture",
    image: "public/pngegg (11).png",
    link: "https://drive.google.com/file/d/1Eis9jrq-ZonTDXs_EntVgGZPE8keaMsy/view?usp=drive_link",
  }
];

const EducationCertifications = () => {
  return (
    <section className="relative min-h-screen bg-black py-20 px-6 overflow-hidden flex items-center">
      
      {/* 1. SIGNATURE STARS BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        </Canvas>
      </div>

      <div className="container mx-auto relative z-10 max-w-6xl">
        
        {/* MAIN HEADING (Chota Size) */}
       <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="h-[1px] w-8 bg-green-500"></div>
            <span className="text-green-500 font-mono text-xs tracking-[0.5em] uppercase">Background</span>
          </motion.div>
                 <div className="mb-16">

          <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter">
            Education & <span className="text-green-500 italic">  Certifications</span>
          </h3>
        </div>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* THE VERTICAL LINE (Side Line Effect) */}
          <div className="absolute left-0 md:left-[2%] top-10 bottom-0 w-[1px] bg-gradient-to-b from-green-500 via-green-500/20 to-transparent hidden md:block">
            <div className="absolute top-0 -left-[5px] w-2.5 h-2.5 bg-green-500 rounded-full shadow-[0_0_15px_#22c55e]"></div>
          </div>

          {/* --- LEFT COLUMN: EDUCATION --- */}
          <div className="md:col-span-5 md:pl-10">
             {/* Small Sub-heading like image */}
             <div className="flex items-center gap-2 mb-6 text-white/50">
                <span className="text-green-500 text-lg">🎓</span>
                <span className="text-xs font-black uppercase tracking-[0.3em]">Education</span>
             </div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/10 backdrop-blur-xl relative group hover:border-green-500/30 transition-all duration-500"
            >
              <div className="space-y-4">
                <h5 className="text-white font-black text-2xl leading-tight">Bachelor of Computer Applications</h5>
                <p className="text-green-500 font-mono text-xs uppercase tracking-widest">BN College, Bhagalpur</p>
                
                <div className="pt-6 flex items-center justify-between border-t border-white/5">
                  <span className="text-gray-500 text-[10px] uppercase font-bold tracking-widest">2024 — 2027</span>
                  <span className="bg-green-500/10 text-green-500 text-[10px] font-bold px-3 py-1 rounded-full border border-green-500/20">4th Semester</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* --- RIGHT COLUMN: CERTIFICATIONS --- */}
          <div className="md:col-span-7">
             {/* Small Sub-heading like image */}
             <div className="flex items-center gap-2 mb-6 text-white/50">
                <span className="text-green-500 text-lg">📜</span>
                <span className="text-xs font-black uppercase tracking-[0.3em]">Certifications</span>
             </div>

            <div className="space-y-4">
              {certs.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group p-4 rounded-[1.5rem] bg-white/[0.02] border border-white/10 backdrop-blur-xl hover:border-green-500/40 transition-all flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-black/40 rounded-xl border border-white/5 flex items-center justify-center p-2 group-hover:bg-white/5 transition-all">
                      <img src={cert.image} alt={cert.issuer} className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-100 transition-all" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm group-hover:text-green-500 transition-colors">{cert.title}</h4>
                      <p className="text-gray-500 text-[9px] font-mono uppercase tracking-widest">{cert.issuer}</p>
                    </div>
                  </div>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-green-500 hover:text-black transition-all">
                    <span className="text-xs">↗</span>
                  </a>
                </motion.div>
              ))}

              {/* TERA TARGET LINE (Added here) */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="pt-6 flex items-center gap-3 px-4"
              >
                <span className="text-xl">🎯</span>
                <p className="text-gray-500 font-mono text-[10px] uppercase tracking-widest leading-relaxed">
                  Currently learning and will be <span className="text-green-500 font-bold">adding more certifications soon!</span>
                </p>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EducationCertifications;