import { motion } from 'framer-motion';
import { BriefcaseBusiness, GraduationCap, MapPin, Medal, Rocket, Sparkles } from 'lucide-react';

const highlights = [
  { icon: BriefcaseBusiness, title: "Freelance MERN Developer", desc: "Developing and deploying responsive web applications since 2024." },
  { icon: Sparkles, title: "Animated UI Specialist", desc: "Building modern layouts with Tailwind CSS, Framer Motion, and smooth interaction details." },
  { icon: Rocket, title: "Performance Focused", desc: "Optimized layouts, fast rendering, and deployment-ready frontends on Vercel." },
  { icon: Medal, title: "Problem Solver", desc: "Java, DSA, REST APIs, and clean debugging habits for scalable product logic." }
];

const timeline = [
  {
    title: "BCA - Bachelor of Computer Applications",
    place: "BN College, Bhagalpur (TMBU)",
    meta: "2024 - 2027"
  },
  {
    title: "12th - 77.0%",
    place: "K.S.S College, Lakhisarai",
    meta: "2022 - 2024"
  }
];

const About = () => {
  const handlePointerMove = (event) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mouse-x', `${event.clientX - rect.left}px`);
    card.style.setProperty('--mouse-y', `${event.clientY - rect.top}px`);
  };

  return (
    <section id="about" className="section-pad relative">
      <div className="section-inner">
        <div className="mb-8 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="eyebrow mb-3"
          >
            About Me
          </motion.div>
          <h3 className="headline text-[clamp(2rem,4.2vw,3.4rem)]">
            Full stack developer with <span className="text-gradient">freelance execution.</span>
          </h3>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onPointerMove={handlePointerMove}
            className="spotlight-card glass-panel soft-card-grid rounded-[24px] p-5 md:p-6"
          >
            <div className="relative z-10">
              <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.26em] text-violet-200/70">Bhagalpur, Bihar</p>
                  <h4 className="mt-2 text-2xl font-black text-white md:text-3xl">Alok Kumar</h4>
                </div>
                <div className="inline-flex w-fit items-center gap-2 rounded-full bg-violet-600 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-white shadow-[0_0_26px_rgba(139,92,246,0.38)]">
                  <MapPin size={14} />
                  Available
                </div>
              </div>

              <p className="max-w-3xl text-sm leading-7 text-violet-50/70">
                I am a Freelance MERN Stack Developer building responsive web apps with React, Node.js, Express.js, MongoDB, Tailwind CSS, and Framer Motion. I also work with Next.js and TypeScript for cleaner scalable frontends.
              </p>
              <p className="mt-4 max-w-3xl text-xs leading-6 text-violet-100/50">
                My work focuses on performance, usability, REST APIs, JWT authentication, real-time features with Socket.IO, and smooth UI experiences across desktop, tablet, and mobile.
              </p>

              <div className="mt-6 grid gap-2.5 sm:grid-cols-3">
                {[
                  ["2024+", "Freelance"],
                  ["MERN", "Core Stack"],
                  ["Next.js", "Learning Done"]
                ].map(([value, label]) => (
                  <div key={label} className="rounded-2xl border border-violet-100/12 bg-black/22 p-3.5">
                    <p className="text-xl font-black text-white">{value}</p>
                    <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.22em] text-violet-100/42">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {timeline.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              className="glass-panel rounded-[22px] p-4"
              >
                <div className="mb-5 grid h-11 w-11 place-items-center rounded-2xl bg-violet-600 text-white">
                  <GraduationCap size={20} />
                </div>
                <h4 className="text-base font-black text-white">{item.title}</h4>
                <p className="mt-2 text-xs text-violet-100/56">{item.place}</p>
                <p className="mt-4 text-[10px] font-black uppercase tracking-[0.22em] text-violet-200/70">{item.meta}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map(({ icon: Icon, title, desc }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              onPointerMove={handlePointerMove}
              className="spotlight-card glass-panel rounded-[20px] p-4 transition hover:-translate-y-1"
            >
              <div className="relative z-10">
                <Icon className="mb-5 text-violet-200" size={20} />
                <h4 className="text-sm font-black text-white">{title}</h4>
                <p className="mt-2 text-xs leading-5 text-violet-100/48">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
