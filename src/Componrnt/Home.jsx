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
      
      {/* ====== BACKGROUND ====== */}
      {/* Gradient Orbs */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-br from-green-500/20 to-cyan-500/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-green-500/10 to-cyan-500/10 rounded-full blur-[150px] pointer-events-none"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      </div>

      {/* ====== NEON NAME BACKGROUND ====== */}
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0">
        <motion.h1
          initial={{ opacity: 0.5 }}
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="text-[30vw] md:text-[25vw] font-black text-green-500/15 tracking-tighter uppercase italic leading-none"
          style={{
            textShadow: `
              0 0 20px rgba(34, 197, 94, 0.5),
              0 0 60px rgba(34, 197, 94, 0.2),
              0 0 100px rgba(34, 197, 94, 0.1)
            `,
          }}
        >
          ALOK
        </motion.h1>
      </div>

      {/* ====== MAIN CONTENT ====== */}
      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-3 items-center gap-8 min-h-[80vh]">
        
        {/* ====== LEFT: MERN ====== */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="order-2 md:order-1 text-left"
        >
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

        {/* ====== CENTER: 3D ====== */}
        <div className="h-[400px] md:h-[600px] w-full order-1 md:order-2 relative flex justify-center items-center">
          
          {isMobile ? (
            /* Mobile Static */
            <div className="relative w-64 h-64 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-cyan-500/20 rounded-full blur-[100px] animate-pulse"></div>
              <div className="relative w-48 h-48 rounded-full border border-green-500/20 flex items-center justify-center backdrop-blur-sm bg-black/40">
                <div className="text-center">
                  <div className="text-6xl mb-2">⚡</div>
                  <p className="text-green-400 text-[9px] font-mono tracking-widest">ALOK</p>
                  <p className="text-gray-500 text-[7px] font-mono tracking-wider">Full Stack</p>
                </div>
              </div>
            </div>
          ) : (
            /* Desktop 3D */
            <Canvas camera={{ position: [0, 0, 6], fov: 40 }}>
              <Stars radius={80} depth={60} count={3000} factor={4} saturation={0} fade speed={0.5} />
              
              {/* Main Object */}
              <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.5}>
                <mesh>
                  <torusKnotGeometry args={[1.2, 0.4, 128, 16]} />
                  <meshPhysicalMaterial 
                    color="#22c55e"
                    metalness={0.8}
                    roughness={0.15}
                    emissive="#22c55e"
                    emissiveIntensity={0.3}
                    clearcoat={0.9}
                    clearcoatRoughness={0.1}
                  />
                </mesh>
              </Float>

              {/* Orbiting Ring 1 */}
              <Float speed={0.6} rotationIntensity={0.3} floatIntensity={0.3}>
                <mesh rotation={[0.4, 0.6, 0]}>
                  <ringGeometry args={[1.9, 2.1, 64]} />
                  <meshBasicMaterial color="#22c55e" transparent opacity={0.15} side={2} />
                </mesh>
              </Float>

              {/* Orbiting Ring 2 */}
              <Float speed={0.9} rotationIntensity={0.3} floatIntensity={0.3}>
                <mesh rotation={[0.8, 0.2, 0.5]}>
                  <ringGeometry args={[2.3, 2.5, 64]} />
                  <meshBasicMaterial color="#06b6d4" transparent opacity={0.1} side={2} />
                </mesh>
              </Float>

              {/* Orbiting Particles */}
              {[...Array(12)].map((_, i) => {
                const angle = (i / 12) * Math.PI * 2;
                return (
                  <Float key={i} speed={0.5} rotationIntensity={0.1} floatIntensity={0.2}>
                    <mesh 
                      position={[
                        Math.cos(angle + Date.now() * 0.0005) * 2.5,
                        Math.sin(angle + Date.now() * 0.0005) * 2.5,
                        Math.sin(angle * 2) * 0.5
                      ]}
                    >
                      <sphereGeometry args={[0.03, 6, 6]} />
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

        {/* ====== RIGHT: JAVA ====== */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="order-3 text-left md:text-right"
        >
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
