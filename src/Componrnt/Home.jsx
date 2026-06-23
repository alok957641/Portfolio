import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Float } from "@react-three/drei";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="relative min-h-screen w-full bg-black flex items-center justify-center overflow-hidden">
      
      {/* ====== 1. BACKGROUND - REFRENCE IMAGE STYLE ====== */}
      {/* Gradient Orbs - Green & Cyan blend */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-br from-green-500/20 to-cyan-500/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-green-500/10 to-cyan-500/10 rounded-full blur-[150px] pointer-events-none"></div>

      {/* Grid Pattern - Like reference image */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      </div>

      {/* ====== 2. MAIN CONTENT - 3 COLUMN LAYOUT ====== */}
      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-3 items-center gap-8 min-h-[80vh]">
        
        {/* ====== LEFT: MERN STACK ====== */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="order-2 md:order-1 text-left"
        >
          {/* Line + Label - Refrence style */}
          <div className="flex items-center gap-3 text-green-500 mb-3">
            <div className="w-8 h-[1px] bg-gradient-to-r from-green-500 to-transparent"></div>
            <span className="text-[10px] tracking-[0.3em] font-mono font-bold uppercase text-green-400">Software Dev</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
            MERN <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">Stack.</span>
          </h2>
          
          <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-[260px]">
            Specialized in building scalable web apps with MongoDB, Express, React, and Node.js. I focus on crafting seamless UIs and robust backend architectures.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {["MongoDB", "Express", "React", "Node"].map((tech, i) => (
              <span key={i} className="text-[8px] font-bold text-green-400/70 border border-green-500/20 px-2.5 py-1 rounded-full bg-green-500/5 uppercase tracking-wider">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ====== CENTER: 3D VISUALIZATION (NO MODEL) ====== */}
        <div className="h-[400px] md:h-[650px] w-full order-1 md:order-2 relative flex justify-center items-center">
          
          {isMobile ? (
            /* --- MOBILE STATIC --- */
            <div className="relative w-64 h-64 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-cyan-500/20 rounded-full blur-[100px] animate-pulse"></div>
              <div className="relative w-48 h-48 rounded-full border border-green-500/20 flex items-center justify-center backdrop-blur-sm bg-black/40">
                <div className="text-center">
                  <div className="text-6xl mb-2">⚡</div>
                  <p className="text-green-400 text-[9px] font-mono tracking-widest">ALOK</p>
                  <p className="text-gray-500 text-[7px] font-mono tracking-wider">Full Stack</p>
                </div>
              </div>
              {/* Floating tags */}
              <div className="absolute -top-2 -right-2 bg-green-500/10 border border-green-500/30 px-3 py-1 rounded-full backdrop-blur-xl">
                <span className="text-green-400 text-[8px] font-black font-mono">React.js</span>
              </div>
              <div className="absolute -bottom-2 -left-2 bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 rounded-full backdrop-blur-xl">
                <span className="text-cyan-400 text-[8px] font-black font-mono">Node.js</span>
              </div>
            </div>
          ) : (
            /* --- DESKTOP 3D --- */
            <Canvas camera={{ position: [0, 0, 6], fov: 40 }} className="rounded-2xl">
              {/* Stars */}
              <Stars radius={80} depth={60} count={4000} factor={4} saturation={0} fade speed={0.5} />
              
              {/* Main Object - Torus Knot */}
              <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.5}>
                <mesh>
                  <torusKnotGeometry args={[1.3, 0.4, 128, 16]} />
                  <meshPhysicalMaterial 
                    color="#22c55e"
                    metalness={0.8}
                    roughness={0.15}
                    emissive="#22c55e"
                    emissiveIntensity={0.2}
                    clearcoat={0.9}
                    clearcoatRoughness={0.1}
                  />
                </mesh>
              </Float>

              {/* Orbiting Rings */}
              <Float speed={0.6} rotationIntensity={0.3} floatIntensity={0.3}>
                <mesh position={[0, 0, 0]} rotation={[0.4, 0.6, 0]}>
                  <ringGeometry args={[2.0, 2.2, 64]} />
                  <meshBasicMaterial color="#22c55e" transparent opacity={0.12} side={2} />
                </mesh>
              </Float>

              <Float speed={0.9} rotationIntensity={0.3} floatIntensity={0.3}>
                <mesh position={[0, 0, 0]} rotation={[0.8, 0.2, 0.5]}>
                  <ringGeometry args={[2.4, 2.6, 64]} />
                  <meshBasicMaterial color="#06b6d4" transparent opacity={0.08} side={2} />
                </mesh>
              </Float>

              {/* Small Particles Orbiting */}
              {[...Array(12)].map((_, i) => {
                const angle = (i / 12) * Math.PI * 2;
                return (
                  <Float key={i} speed={0.3 + i * 0.05} rotationIntensity={0.1} floatIntensity={0.2}>
                    <mesh 
                      position={[
                        Math.cos(angle) * 2.6,
                        Math.sin(angle) * 2.6,
                        Math.sin(angle * 2) * 0.5
                      ]}
                    >
                      <sphereGeometry args={[0.035, 6, 6]} />
                      <meshBasicMaterial color={i % 2 === 0 ? "#22c55e" : "#06b6d4"} transparent opacity={0.6} />
                    </mesh>
                  </Float>
                );
              })}

              <OrbitControls 
                enableZoom={false}
                enablePan={false}
                autoRotate
                autoRotateSpeed={2}
                minPolarAngle={Math.PI / 2.5}
                maxPolarAngle={Math.PI / 1.8}
              />
            </Canvas>
          )}
        </div>

        {/* ====== RIGHT: JAVA + DSA ====== */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="order-3 text-left md:text-right"
        >
          {/* Line + Label - Right aligned */}
          <div className="flex items-center gap-3 text-green-500 mb-3 justify-start md:justify-end">
            <span className="text-[10px] tracking-[0.3em] font-mono font-bold uppercase text-green-400">Problem Solver</span>
            <div className="w-8 h-[1px] bg-gradient-to-l from-green-500 to-transparent"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
            JAVA + <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">DSA.</span>
          </h2>
          
          <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-[260px] md:ml-auto">
            Expert in solving complex algorithmic challenges using Java. Deep understanding of Data Structures to write optimized, high-efficiency code.
          </p>
          <div className="mt-3 flex flex-wrap gap-2 justify-start md:justify-end">
            {["Java", "DSA", "Algorithms", "Optimization"].map((tech, i) => (
              <span key={i} className="text-[8px] font-bold text-green-400/70 border border-green-500/20 px-2.5 py-1 rounded-full bg-green-500/5 uppercase tracking-wider">
                {tech}
              </span>
            ))}
          </div>

          {/* Download Button - Gradient Style */}
          <motion.a
            href="/Alok_Resume.pdf"
            download="Alok_Resume.pdf"
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(34,197,94,0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-black font-bold rounded-full hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] transition-all text-[9px] tracking-widest uppercase inline-block text-center"
          >
            Download CV_
          </motion.a>
        </motion.div>
      </div>

      {/* ====== SCROLL INDICATOR ====== */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-gray-600 text-[7px] uppercase tracking-[0.4em] font-mono">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-8 bg-gradient-to-b from-green-500 to-transparent"
        ></motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
