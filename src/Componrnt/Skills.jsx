import { motion } from 'framer-motion';
import {
  Braces,
  Code2,
  Database,
  GitBranch,
  Layers3,
  Network,
  Palette,
  Rocket,
  Server,
  ShieldCheck,
  Sparkles,
  Workflow
} from 'lucide-react';

const skillGroups = [
  {
    title: "Languages",
    icon: Code2,
    desc: "Core programming foundation",
    skills: ["JavaScript", "TypeScript", "Java", "C"]
  },
  {
    title: "Frontend",
    icon: Palette,
    desc: "Responsive modern interfaces",
    skills: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap", "Responsive Design"]
  },
  {
    title: "Backend",
    icon: Server,
    desc: "APIs, auth and server logic",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "Role Based Access"]
  },
  {
    title: "Database",
    icon: Database,
    desc: "Data models and storage",
    skills: ["MongoDB", "Query Optimization", "Schema Design"]
  },
  {
    title: "Motion UI",
    icon: Sparkles,
    desc: "Smooth interactions",
    skills: ["Framer Motion", "Lenis Scroll", "Micro Animations", "UI Transitions"]
  },
  {
    title: "Realtime",
    icon: Network,
    desc: "Live product experiences",
    skills: ["Socket.IO", "Live Tracking", "Realtime Updates"]
  },
  {
    title: "Tools",
    icon: GitBranch,
    desc: "Daily developer workflow",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Vercel"]
  },
  {
    title: "Problem Solving",
    icon: Braces,
    desc: "Clean and optimized logic",
    skills: ["DSA", "Algorithms", "Debugging", "Performance"]
  }
];

const strengths = [
  { icon: ShieldCheck, label: "Secure APIs", value: "JWT + RBAC" },
  { icon: Layers3, label: "Full Stack", value: "MERN + Next" },
  { icon: Rocket, label: "Deployment", value: "Vercel Ready" },
  { icon: Workflow, label: "UX Flow", value: "Animated UI" }
];

const Skills = () => {
  const handlePointerMove = (event) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mouse-x', `${event.clientX - rect.left}px`);
    card.style.setProperty('--mouse-y', `${event.clientY - rect.top}px`);
  };

  return (
    <section id="skills" className="section-pad relative">
      <div className="section-inner">
        <div className="mb-8 grid gap-4 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="eyebrow mb-3"
            >
              Technical Expertise
            </motion.div>
            <h3 className="headline">
              Skills built for <span className="text-gradient">real products.</span>
            </h3>
          </div>
          <p className="max-w-xl text-xs leading-6 text-violet-100/58 lg:ml-auto">
            Resume-based stack with MERN, Next.js, TypeScript, REST APIs, Socket.IO, clean responsive UI, and deployment-ready workflows.
          </p>
        </div>

        <div className="mb-4 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
          {strengths.map(({ icon: Icon, label, value }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="rounded-2xl border border-violet-100/12 bg-violet-200/[0.045] p-3.5"
            >
              <Icon className="mb-4 text-violet-200" size={20} />
              <p className="text-[9px] font-black uppercase tracking-[0.22em] text-violet-100/45">{label}</p>
              <p className="mt-2 text-sm font-black text-white">{value}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map(({ title, icon: Icon, desc, skills }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.04 }}
              onPointerMove={handlePointerMove}
              className="spotlight-card glass-panel soft-card-grid group rounded-[22px] p-4 transition duration-300 hover:-translate-y-1 hover:border-violet-300/35"
            >
              <div className="relative z-10">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-violet-600 text-white shadow-[0_0_24px_rgba(139,92,246,0.4)] transition group-hover:scale-105">
                    <Icon size={18} />
                  </div>
                  <span className="rounded-full border border-violet-100/12 bg-black/20 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-violet-100/48">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h4 className="text-base font-black text-white">{title}</h4>
                <p className="mt-2 text-[11px] leading-5 text-violet-100/48">{desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-violet-100/10 bg-black/22 px-2.5 py-1 text-[9px] font-bold text-violet-50/72"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
