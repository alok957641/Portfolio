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
      
      {/* ====== 1. BACKGROUND EFFECTS ====== */}
      {/* AI Neural Network Grid */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#22c55e20_1px,transparent_1px),linear-gradient(to_bottom,#22c55e20_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none"></div>

      {/* ====== 2. MAIN CONTENT ====== */}
      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
        
        {/* ====== LEFT: TEXT CONTENT ====== */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 lg:order-1"
        >
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 px-4 py-1.5 rounded-full mb-6"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-green-400 text-[10px] font-mono tracking-[0.3em] uppercase">AI-Powered Solutions</span>
          </motion.div>

          {/* Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6"
          >
            Elevate Your Business
            <br />
            Using{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
              AI-Driven
            </span>
            <br />
            Automation
          </motion.h1>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 text-sm md:text-base max-w-lg leading-relaxed mb-8"
          >
            An innovative software platform that simplifies your tasks, enhances efficiency, 
            and helps your business grow seamlessly.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <motion.a 
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-black font-bold rounded-full text-sm uppercase tracking-wider shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:shadow-[0_0_50px_rgba(34,197,94,0.5)] transition-all"
            >
              Start Free Trial
            </motion.a>
            <motion.a 
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-white/20 text-white font-bold rounded-full text-sm uppercase tracking-wider hover:bg-white/5 transition-all backdrop-blur-sm"
            >
              Book a Demo
            </motion.a>
          </motion.div>

          {/* Trust Badge */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-6"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-gradient-to-br from-gray-600 to-gray-400"></div>
              ))}
            </div>
            <div>
              <p className="text-white font-bold text-sm">10,000+</p>
              <p className="text-gray-500 text-[10px] uppercase tracking-wider">Teams Worldwide</p>
            </div>
          </motion.div>
        </motion.div>

        {/* ====== RIGHT: 3D VISUALIZATION ====== */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 lg:order-2 h-[400px] md:h-[500px] lg:h-[600px] relative"
        >
          {isMobile ? (
            /* Mobile Static Visualization */
            <div className="w-full h-full flex items-center justify-center">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-cyan-500/20 rounded-full blur-[80px]"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full border-2 border-green-500/30 flex items-center justify-center backdrop-blur-sm bg-black/40">
                    <div className="text-center">
                      <div className="text-5xl mb-2">⚡</div>
                      <p className="text-green-400 text-xs font-mono">AI Engine</p>
                    </div>
                  </div>
                </div>
                {/* Floating Particles */}
                <div className="absolute top-0 right-0 w-12 h-12 bg-green-500/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-cyan-500/20 rounded-full blur-xl animate-pulse delay-700"></div>
              </div>
            </div>
          ) : (
            /* Desktop 3D Visualization */
            <Canvas camera={{ position: [0, 0, 8], fov: 45 }} className="rounded-2xl">
              {/* Stars Background */}
              <Stars radius={50} depth={50} count={2000} factor={4} saturation={0} fade speed={0.5} />
              
              {/* Main Object */}
              <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
                <mesh>
                  <torusKnotGeometry args={[1.5, 0.5, 128, 16]} />
                  <meshPhysicalMaterial 
                    color="#22c55e"
                    metalness={0.8}
                    roughness={0.2}
                    emissive="#22c55e"
                    emissiveIntensity={0.2}
                    wireframe={false}
                    clearcoat={0.8}
                    clearcoatRoughness={0.2}
                  />
                </mesh>
              </Float>

              {/* Orbiting Rings */}
              <Float speed={0.8} rotationIntensity={0.5} floatIntensity={0.3}>
                <mesh position={[0, 0, 0]}>
                  <ringGeometry args={[2.2, 2.4, 64]} />
                  <meshBasicMaterial color="#22c55e" transparent opacity={0.15} side={2} />
                </mesh>
              </Float>

              <Float speed={1.2} rotationIntensity={0.5} floatIntensity={0.3}>
                <mesh position={[0, 0, 0]} rotation={[0.5, 0, 0]}>
                  <ringGeometry args={[2.6, 2.8, 64]} />
                  <meshBasicMaterial color="#06b6d4" transparent opacity={0.1} side={2} />
                </mesh>
              </Float>

              <OrbitControls 
                enableZoom={false}
                enablePan={false}
                autoRotate
                autoRotateSpeed={2}
                minPolarAngle={Math.PI / 3}
                maxPolarAngle={Math.PI / 2}
              />
            </Canvas>
          )}
        </motion.div>
      </div>

      {/* ====== 3. SCROLL INDICATOR ====== */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-gray-600 text-[8px] uppercase tracking-[0.3em]">Scroll</span>
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
