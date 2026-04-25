import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float, MeshDistortMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';

// --- 1. DYNAMIC 3D MODELS (Har Category ke liye alag) ---
function CategoryModel({ type }) {
  const meshRef = useRef();
  useFrame((state) => {
    meshRef.current.rotation.x += 0.005;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <Float speed={4} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={meshRef}>
        {/* HAR CATEGORY KE LIYE ALAG GEOMETRY */}
        {type === "frontend" && <torusKnotGeometry args={[0.8, 0.2, 100, 16]} />}
        {type === "backend" && <boxGeometry args={[1.4, 1.4, 1.4]} />} 
        {type === "motion" && <sphereGeometry args={[1, 32, 32]} />}
        {type === "deploy" && <octahedronGeometry args={[1.5, 0]} />}

        <MeshDistortMaterial 
          color="#22c55e" 
          speed={3} 
          distort={0.3} 
          wireframe 
          opacity={0.7} 
          transparent 
          emissive="#22c55e" 
          emissiveIntensity={0.6} 
        />
      </mesh>
    </Float>
  );
}

const skillCategories = [
  {
    title: "Frontend",
    type: "frontend",
    desc: "Interactive Interfaces",
    skills: [
      { name: "HTML", color: "#E34F26" }, { name: "CSS", color: "#1572B6" },
      { name: "JS", color: "#F7DF1E" }, { name: "React", color: "#61DAFB" },
      { name: "TW", color: "#06B6D4" }, { name: "BS", color: "#7952B3" }
    ]
  },
  {
    title: "MERN Stack", // Focus on MERN
    type: "backend",
    desc: "Backend & Databases",
    skills: [
      { name: "Node", color: "#339933" }, { name: "Ex", color: "#ffffff" },
      { name: "Mongo", color: "#47A248" }, { name: "Java", color: "#007396" }
    ]
  },
  {
    title: "Motion",
    type: "motion",
    desc: "Visual Animations",
    skills: [
      { name: "GSA", color: "#88CE02" }, { name: "FM", color: "#0055FF" },
      { name: "CSS", color: "#264de4" }, { name: "JS", color: "#f0db4f" }
    ]
  },
  {
    title: "Deploy",
    type: "deploy",
    desc: "GitHub & Tools",
    skills: [
      { name: "Git", color: "#F05032" }, { name: "Hub", color: "#ffffff" },
      { name: "Ver", color: "#ffffff" }, { name: "Post", color: "#FF6C37" }
    ]
  }
];

const Skills = () => {
  return (
    <section id='skills' className="relative min-h-screen bg-black py-20 px-6 overflow-hidden flex flex-col justify-center">
      
      {/* 2. STAR FIELD BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        </Canvas>
      </div>

      <div className="container mx-auto relative z-10 max-w-6xl">
        
        {/* HEADING (Dual-Tone) */}
       {/* HEADING: Chota aur Sharp (Better than Screenshot) */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="h-[1px] w-8 bg-green-500"></div>
            <span className="text-green-500 font-mono text-xs tracking-[0.5em] uppercase">Technical Expertise</span>
          </motion.div>
                 <div className="mb-16">

          <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter">
           My Tech<span className="text-green-500 italic"> Stack</span>
          </h3>
        </div>
        </div>

        {/* 4-COLUMN RESPONSIVE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[420px] rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-xl overflow-hidden hover:border-green-500/50 transition-all duration-500"
            >
              {/* DIFFERENT 3D MODEL FOR EACH CATEGORY */}
              <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-100 transition-opacity duration-700">
                <Canvas camera={{ position: [0, 0, 4] }}>
                  <ambientLight intensity={1.5} />
                  <Suspense fallback={null}>
                    <CategoryModel type={cat.type} />
                  </Suspense>
                </Canvas>
              </div>

              {/* CARD CONTENT */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10 pointer-events-none">
                <div>
                  <h4 className="text-green-500 font-mono text-[9px] tracking-widest uppercase mb-1">{cat.desc}</h4>
                  <h5 className="text-2xl font-black text-white uppercase group-hover:text-green-400 transition-colors">{cat.title}</h5>
                </div>

                {/* COLORFUL CIRCLE SKILLS */}
                <div className="grid grid-cols-3 gap-4 pointer-events-auto">
                  {cat.skills.map((skill, i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      className="flex flex-col items-center gap-2"
                    >
                      <div 
                        className="w-12 h-12 rounded-full border flex items-center justify-center text-[10px] font-black bg-black/60 backdrop-blur-md transition-all duration-300"
                        style={{ border: `1px solid ${skill.color}88`, color: skill.color }}
                      >
                        {skill.name}
                      </div>
                      <span className="text-[7px] text-gray-500 font-bold uppercase tracking-widest text-center">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;