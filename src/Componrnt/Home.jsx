import React, { Suspense, useState, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  useAnimations,
  Stage,
  Float,
  Html,
} from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";

function AlokAvatar(props) {
  const group = useRef();
  // --- UPDATED FILENAME HERE ---
  const { nodes, materials, animations } = useGLTF("/alok-model.glb"); 
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    if (actions && names.length > 0) {
      actions[names[0]].reset().fadeIn(0.5).play();
    }
  }, [actions, names]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature">
          <primitive object={nodes.Hips} />
          {/* ... baki meshes same rahenge ... */}
          <skinnedMesh name="avaturn_body" geometry={nodes.avaturn_body.geometry} material={materials.avaturn_body_material} skeleton={nodes.avaturn_body.skeleton} />
          <skinnedMesh name="avaturn_hair_0" geometry={nodes.avaturn_hair_0.geometry} material={materials.avaturn_hair_0_material} skeleton={nodes.avaturn_hair_0.skeleton} />
          <skinnedMesh name="avaturn_hair_1" geometry={nodes.avaturn_hair_1.geometry} material={materials.avaturn_hair_1_material} skeleton={nodes.avaturn_hair_1.skeleton} />
          <skinnedMesh name="avaturn_shoes_0" geometry={nodes.avaturn_shoes_0.geometry} material={materials.avaturn_shoes_0_material} skeleton={nodes.avaturn_shoes_0.skeleton} />
          <skinnedMesh name="avaturn_look_0" geometry={nodes.avaturn_look_0.geometry} material={materials.avaturn_look_0_material} skeleton={nodes.avaturn_look_0.skeleton} />
        </group>
      </group>
    </group>
  );
}

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Mobile detection logic
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="relative min-h-screen md:h-screen w-full bg-black flex items-center justify-center overflow-hidden py-20 md:py-0">
      
      {/* 1. NEON GLOW NAME (Slightly smaller for mobile) */}
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0">
        <h1
          className="text-[30vw] md:text-[25vw] font-black text-green-500/[0.12] tracking-tighter uppercase italic leading-none"
          style={{
            textShadow: "0 0 50px rgba(34, 197, 94, 0.4)",
            filter: "blur(2px)",
          }}
        >
          ALOK
        </h1>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-3 items-center gap-12">
        
        {/* LEFT: MERN SIDE */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="order-2 md:order-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-green-500 mb-2">
            <div className="w-6 h-[1px] bg-green-500"></div>
            <span className="text-[10px] tracking-[0.4em] font-mono font-bold uppercase">Software Dev</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4 uppercase">
            MERN <span className="text-green-500">Stack.</span>
          </h2>
          <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-[280px] mx-auto md:mx-0">
           Specialized in building scalable web apps with MongoDB, Express, React, and Node.js. I focus on crafting seamless UIs and robust backend architectures. Dedicated to clean code and high-performance digital solutions.<span className="text-white font-bold font-mono text-[10px]">MONGODB, EXPRESS, REACT, NODE.</span>
          </p>
        </motion.div>

        {/* CENTER: GIANT MODEL (Mobile Optimized) */}
        <div 
          className="h-[350px] md:h-[750px] w-full order-1 md:order-2 relative flex justify-center items-center"
          onPointerEnter={() => setIsHovered(true)}
          onPointerLeave={() => setIsHovered(false)}
        >
          <Canvas 
            dpr={[1, 1.5]} // Mobile performance fix
            gl={{ antialias: true, precision: "mediump" }} // GPU fix
            camera={{ position: [0, 0, 5], fov: isMobile ? 40 : 32 }}
          >
            <Suspense fallback={null}>
              <Stage environment="city" intensity={0.4} contactShadow={false}>
                <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.05}>
                  <Html position={[0, isMobile ? 1.5 : 1.8, 0]} center>
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                          className="bg-black/90 border border-green-500/40 p-3 rounded-xl w-[140px] backdrop-blur-md"
                        >
                          <p className="text-white text-[9px] font-bold">Hey, I'm <span className="text-green-400">ALOK</span>. Let's build! 🚀</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Html>
                  <AlokAvatar 
                    scale={isMobile ? 3.8 : 5.0} 
                    position={[0, isMobile ? -2.8 : -3.8, 0]} 
                  />
                </Float>
                </Stage>
              </Suspense>
              <OrbitControls enableZoom={false} minPolarAngle={Math.PI / 2.1} maxPolarAngle={Math.PI / 1.9} />
            </Canvas>
            <div className="absolute inset-0 bg-green-500/5 blur-[80px] rounded-full -z-10"></div>
          </div>

        {/* RIGHT: JAVA + DSA */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="order-3 text-center md:text-right">
          <div className="flex items-center justify-center md:justify-end gap-2 text-green-500 mb-2">
            <span className="text-[10px] tracking-[0.4em] font-mono font-bold uppercase">Problem Solver</span>
            <div className="w-6 h-[1px] bg-green-500"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4 uppercase">
            JAVA + <span className="text-green-500">DSA.</span>
          </h2>
          <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-[280px] mx-auto md:ml-auto">
           Expert in solving complex algorithmic challenges using Java. Deep understanding of Data Structures to write optimized, high-efficiency code. Focused on logic-building and technical problem-solving.
          </p>
          <button className="mt-8 px-8 py-3 bg-white text-black font-black rounded-full hover:bg-green-500 hover:text-white transition-all text-[9px] tracking-widest uppercase">
            Check My Logic
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;