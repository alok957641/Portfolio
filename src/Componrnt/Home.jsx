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

// --- 1. MODEL COMPONENT (Animation Only) ---
function AlokAvatar(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model (5).glb");
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
          <skinnedMesh
            name="avaturn_body"
            geometry={nodes.avaturn_body.geometry}
            material={materials.avaturn_body_material}
            skeleton={nodes.avaturn_body.skeleton}
          />
          <skinnedMesh
            name="avaturn_hair_0"
            geometry={nodes.avaturn_hair_0.geometry}
            material={materials.avaturn_hair_0_material}
            skeleton={nodes.avaturn_hair_0.skeleton}
          />
          <skinnedMesh
            name="avaturn_hair_1"
            geometry={nodes.avaturn_hair_1.geometry}
            material={materials.avaturn_hair_1_material}
            skeleton={nodes.avaturn_hair_1.skeleton}
          />
          <skinnedMesh
            name="avaturn_shoes_0"
            geometry={nodes.avaturn_shoes_0.geometry}
            material={materials.avaturn_shoes_0_material}
            skeleton={nodes.avaturn_shoes_0.skeleton}
          />
          <skinnedMesh
            name="avaturn_look_0"
            geometry={nodes.avaturn_look_0.geometry}
            material={materials.avaturn_look_0_material}
            skeleton={nodes.avaturn_look_0.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

// --- 2. MAIN HOME COMPONENT ---
const Home = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative md:h-screen w-full bg-black flex items-center justify-center overflow-hidden">
      {/* 1. NEON GLOW NAME: ALOK (Ab chamkega!) */}
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0">
        <h1
          className="text-[25vw] font-black text-green-500/[0.15] tracking-tighter uppercase italic leading-none"
          style={{
            textShadow:
              "0 0 50px rgba(34, 197, 94, 0.6), 0 0 100px rgba(34, 197, 94, 0.4)",
            filter: "blur(2px)",
          }}
        >
          ALOK
        </h1>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-3 items-center pt-32 md:pt-10 gap-10">
        {/* LEFT: MERN SIDE (Left Aligned) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          className="order-2 md:order-1"
        >
          <div className="flex items-center gap-2 text-green-500 mb-2">
            <div className="w-6 h-[1px] bg-green-500"></div>
            <span className="text-[10px] tracking-[0.4em] font-mono font-bold uppercase">
              Software Dev
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4">
            MERN <br />
            <span className="text-green-500 uppercase">Stack.</span>
          </h2>
          <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-[280px]">
            Specialized in building scalable web apps with MongoDB, Express,
            React, and Node.js. I focus on crafting seamless UIs and robust
            backend architectures. Dedicated to clean code and high-performance
            digital solutions.{" "}
            <span className="text-white">
              MongoDB, Express, React, and Node.js.
            </span>
          </p>
        </motion.div>

        {/* CENTER: GIANT MODEL (No Hover Jump) */}
        <div
          className="h-[400px] md:h-[750px] w-full order-1 md:order-2 relative flex justify-center items-center"
          onPointerEnter={() => setIsHovered(true)}
          onPointerLeave={() => setIsHovered(false)}
        >
          <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 32 }}>
            <Suspense fallback={null}>
              <Stage environment="city" intensity={0.5} contactShadow={false}>
                <Float
                  speed={1.5}
                  rotationIntensity={0.1}
                  floatIntensity={0.05}
                >
                  {/* Speech Bubble beside head */}
                  <Html position={[1.4, 1.8, 0]} center>
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8, x: -10 }}
                          animate={{ opacity: 1, scale: 1, x: 0 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className="bg-black/90 backdrop-blur-xl border border-green-500/40 p-4 rounded-2xl rounded-tl-none w-[160px] shadow-2xl"
                        >
                          <p className="text-white text-[10px] font-bold">
                            Hey, I'm{" "}
                            <span className="text-green-400 uppercase">
                              Alok
                            </span>
                            . <br />
                            Let's build something. 🚀
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Html>

                  {/* GIANT MODEL (Scale 5.0) */}
                  <AlokAvatar scale={5.0} position={[0, -3.8, 0]} />
                </Float>
              </Stage>
            </Suspense>
            <OrbitControls
              enableZoom={false}
              minPolarAngle={Math.PI / 2.1}
              maxPolarAngle={Math.PI / 1.9}
            />
          </Canvas>
          {/* Subtle Glow Aura behind model */}
          <div className="absolute inset-0 bg-green-500/5 blur-[100px] rounded-full -z-10"></div>
        </div>

        {/* RIGHT: JAVA + DSA (Left Aligned for mobile) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          className="order-3 md:text-right"
        >
          <div className="flex items-center justify-start md:justify-end gap-2 text-green-500 mb-2">
            <span className="text-[10px] tracking-[0.4em] font-mono font-bold uppercase">
              Problem Solver
            </span>
            <div className="w-6 h-[1px] bg-green-500"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4">
            JAVA + <br />
            <span className="text-green-500 uppercase font-black">DSA.</span>
          </h2>
          <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-[280px] md:ml-auto">
            Expert in solving complex algorithmic challenges using Java. Deep
            understanding of Data Structures to write optimized, high-efficiency
            code. Focused on logic-building and technical problem-solving.
          </p>
          <button className="mt-8 px-10 py-4 bg-white text-black font-black rounded-full hover:bg-green-500 hover:text-white transition-all duration-300 text-[10px] tracking-widest uppercase">
            Check My Logic
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
