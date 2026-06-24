import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";
import { ArrowDown, Code2, ExternalLink, Send } from "lucide-react";

const techPills = ["React", "Next.js", "TypeScript", "Node", "MongoDB", "Java", "DSA"];

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden px-6 pb-14 pt-28">
      <div className="hero-arc" />

      <div className="absolute inset-0 opacity-55">
        {!isMobile && (
          <Canvas camera={{ position: [0, 0, 7], fov: 48 }}>
            <Stars radius={80} depth={45} count={1300} factor={2.4} saturation={0} fade speed={0.25} />
            <ambientLight intensity={1.1} />
            <Float speed={1.1} rotationIntensity={0.35} floatIntensity={0.55}>
              <mesh position={[-2.8, -0.45, -0.4]} rotation={[0.4, 0.6, 0.2]}>
                <icosahedronGeometry args={[1.05, 1]} />
                <meshStandardMaterial color="#8b5cf6" metalness={0.45} roughness={0.24} wireframe />
              </mesh>
            </Float>
          </Canvas>
        )}
      </div>

      <div className="section-inner relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-300/15 bg-violet-300/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-violet-100 shadow-[0_0_30px_rgba(139,92,246,0.22)]">
            Portfolio 2026
          </div>
          <h1 className="mx-auto max-w-3xl text-[clamp(2.35rem,5.2vw,4.25rem)] font-extrabold leading-[1.06] tracking-[-0.01em] text-white">
            Modern portfolio for <span className="text-gradient">MERN stack development.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-violet-100/62 md:text-base">
            I am Alok Kumar, building clean web apps with React, Next.js, TypeScript, Node, MongoDB, Java logic, and smooth user-focused animation.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-2.5">
            {techPills.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.16 + index * 0.05 }}
                className="rounded-full border border-violet-200/12 bg-violet-200/[0.055] px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-violet-100/70"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <motion.a
              href="#projects"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-violet-600 px-6 py-3.5 text-[10px] font-black uppercase tracking-[0.18em] text-white shadow-[0_0_35px_rgba(139,92,246,0.48)] transition hover:bg-violet-500"
            >
              <Code2 size={15} />
              View Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2.5 rounded-full border border-violet-100/18 bg-black/20 px-6 py-3.5 text-[10px] font-black uppercase tracking-[0.18em] text-violet-50 transition hover:bg-violet-100/10"
            >
              <Send size={15} />
              Contact
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.12, ease: "easeOut" }}
          className="animated-border mx-auto mt-14 max-w-4xl rounded-[28px] p-[1px]"
        >
          <div className="glass-panel relative overflow-hidden rounded-[28px] p-4 md:p-5">
            <div className="absolute right-0 top-0 h-40 w-72 bg-violet-500/20 blur-[70px]" />
            <div className="grid gap-5 md:grid-cols-[0.85fr_1.15fr] md:items-center">
              <div className="relative overflow-hidden rounded-[22px] border border-violet-100/12 bg-black/20">
                <img
                  src="/alok.png"
                  alt="Alok Kumar"
                  className="aspect-[4/4.2] w-full object-cover object-top opacity-90"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#080312] to-transparent p-4">
                  <p className="text-[10px] font-black uppercase tracking-[0.24em] text-violet-100/70">Available for work</p>
                  <h2 className="mt-1 text-lg font-black text-white">Alok Kumar</h2>
                </div>
              </div>

              <div className="relative p-2 md:p-4">
                <div className="mb-7 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.25em] text-violet-200/60">Developer Console</p>
                    <h3 className="mt-2 text-2xl font-bold text-white md:text-3xl">MERN + Java DSA</h3>
                  </div>
                  <a
                    href="#contact"
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-violet-500 text-white shadow-[0_0_25px_rgba(139,92,246,0.5)] transition hover:bg-violet-400"
                    aria-label="Open contact section"
                  >
                    <ExternalLink size={17} />
                  </a>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    ["5+", "Projects"],
                    ["24h", "Response"],
                    ["2026", "Portfolio"],
                  ].map(([value, label]) => (
                    <div key={label} className="rounded-2xl border border-violet-100/12 bg-black/22 p-4">
                      <p className="text-2xl font-black text-white">{value}</p>
                      <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em] text-violet-100/45">{label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl border border-violet-100/12 bg-black/22 p-4">
                  <div className="mb-3 flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.18em] text-violet-100/50">
                    <span>Frontend</span>
                    <span>92%</span>
                  </div>
                  <div className="h-2 rounded-full bg-violet-950">
                    <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-violet-700 via-violet-400 to-violet-200 shadow-[0_0_25px_rgba(139,92,246,0.65)]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[9px] font-black uppercase tracking-[0.3em] text-violet-100/35"
      >
        Scroll
        <motion.span animate={{ y: [0, 7, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ArrowDown size={15} />
        </motion.span>
      </motion.a>
    </section>
  );
};

export default Home;
