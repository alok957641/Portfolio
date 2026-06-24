import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight, Gauge, LockKeyhole, RadioTower, Smartphone } from 'lucide-react';

const projects = [
  {
    title: "Swigo Food Delivery",
    category: "MERN Platform",
    image: "https://i.pinimg.com/1200x/9a/bf/3e/9abf3e37c5d47cafad5011523e38a4d5.jpg",
    tech: ["React", "Redux", "Node", "MongoDB", "Socket.IO"],
    desc: "Food delivery app with dashboards, JWT role access, live tracking, REST APIs, and responsive UI.",
    status: "Ongoing",
    liveLink: "https://zyngo-omega.vercel.app/",
    icon: RadioTower
  },
  {
    title: "AI Buzz Agency",
    category: "Agency Website",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=2662&auto=format&fit=crop",
    tech: ["React", "Tailwind", "Framer", "Responsive"],
    desc: "Responsive agency website with smooth animation, fast rendering, and cross-device polish.",
    status: "Live",
    liveLink: "https://aibuzz.media",
    icon: Gauge
  },
  {
    title: "Infotech Company",
    category: "Business Website",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    tech: ["React", "Tailwind", "Lenis", "Vercel"],
    desc: "Business website with smooth scrolling, clean layout flow, and optimized responsive sections.",
    status: "Live",
    liveLink: "https://infotech-company.vercel.app/",
    icon: Smartphone
  },
  {
    title: "NextHire.AI",
    category: "AI Interview App",
    image: "https://i.pinimg.com/1200x/48/19/a9/4819a94d5fde7f464accb63ebcdb3539.jpg",
    tech: ["React", "Redux", "Node", "Firebase", "Recharts"],
    desc: "AI interview app with resume parsing, analytics dashboard, and downloadable reports.",
    status: "Live 2025",
    liveLink: "https://interview-ai-app-cn7x.vercel.app/",
    icon: LockKeyhole
  },
  {
    title: "AI Resume Builder",
    category: "SaaS Platform",
    image: "https://i.pinimg.com/736x/af/6e/e1/af6ee127828c7e8749b61b4e5fc85520.jpg",
    tech: ["React", "TypeScript", "Node", "Gemini", "Razorpay"],
    desc: "AI resume builder with templates, ATS score, live preview, PDF export, and share links.",
    status: "Live 2025",
    liveLink: "https://ai-resume-builder-bice-three.vercel.app/",
    icon: Gauge
  }
];

const Projects = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    scrollRef.current.scrollTo({
      left: direction === 'left' ? scrollLeft - clientWidth * 0.85 : scrollLeft + clientWidth * 0.85,
      behavior: 'smooth'
    });
  };

  const handlePointerMove = (event) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mouse-x', `${event.clientX - rect.left}px`);
    card.style.setProperty('--mouse-y', `${event.clientY - rect.top}px`);
  };

  return (
    <section id="projects" className="section-pad relative">
      <div className="section-inner">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="eyebrow mb-3"
            >
              My Work
            </motion.div>
            <h3 className="headline">
              Featured <span className="text-gradient">projects.</span>
            </h3>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scroll('left')}
              aria-label="Scroll projects left"
              className="grid h-10 w-10 place-items-center rounded-full border border-violet-100/12 bg-violet-200/[0.06] text-white transition hover:bg-violet-600"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              aria-label="Scroll projects right"
              className="grid h-10 w-10 place-items-center rounded-full border border-violet-100/12 bg-violet-200/[0.06] text-white transition hover:bg-violet-600"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        <div ref={scrollRef} className="hide-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-5">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: index * 0.05 }}
                onPointerMove={handlePointerMove}
                className="spotlight-card glass-panel group min-w-[82vw] snap-center overflow-hidden rounded-[22px] transition duration-300 hover:-translate-y-1 sm:min-w-[330px] md:min-w-[360px]"
              >
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="relative block h-40 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover opacity-72 transition duration-700 group-hover:scale-105 group-hover:opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070312] via-[#070312]/20 to-transparent" />
                  <span className="absolute left-3 top-3 rounded-full border border-violet-100/15 bg-black/50 px-2.5 py-1 text-[8px] font-black uppercase tracking-[0.18em] text-violet-100 backdrop-blur-xl">
                    {project.status}
                  </span>
                </a>

                <div className="relative z-10 flex flex-col p-4">
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[8px] font-black uppercase tracking-[0.22em] text-violet-200/72">{project.category}</p>
                      <h4 className="mt-1.5 text-lg font-black text-white">{project.title}</h4>
                    </div>
                    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-violet-600 text-white shadow-[0_0_20px_rgba(139,92,246,0.35)]">
                      <Icon size={16} />
                    </div>
                  </div>

                  <p className="min-h-[48px] text-[12px] leading-6 text-violet-100/56">{project.desc}</p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tech.map((tag) => (
                      <span key={tag} className="rounded-full border border-violet-100/10 bg-black/22 px-2.5 py-1 text-[8px] font-bold text-violet-50/70">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-violet-600 px-4 py-2 text-[8px] font-black uppercase tracking-[0.16em] text-white shadow-[0_0_20px_rgba(139,92,246,0.32)] transition hover:bg-violet-500"
                  >
                    Live Demo
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
