import { motion } from 'framer-motion';
import { ArrowUpRight, Award, BookOpenCheck, GraduationCap, Sparkles } from 'lucide-react';

const certs = [
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    image: "https://design-style-guide.freecodecamp.org/downloads/fcc_primary_large.png",
    link: "https://drive.google.com/file/d/1pHO8sArbHfiKHeGP-wR0RZUqfF6KH56Q/view?usp=drive_link",
  },
  {
    title: "Digital Skills: User Experience",
    issuer: "Accenture",
    image: "/accenture.png",
    link: "https://drive.google.com/file/d/1Eis9jrq-ZonTDXs_EntVgGZPE8keaMsy/view?usp=drive_link",
  },
  {
    title: "AI Fundamentals",
    issuer: "Accenture",
    image: "/accenture.png",
    link: "https://drive.google.com/file/d/1zhzoKSNZsxQ78A-IthWus5YK1KweiqLY/view?usp=drive_link",
  }
];

const education = [
  {
    title: "Bachelor of Computer Applications",
    place: "BN College, Bhagalpur (TMBU)",
    meta: "2024 - 2027",
    badge: "BCA"
  },
  {
    title: "12th - 77.0%",
    place: "K.S.S College, Lakhisarai",
    meta: "2022 - 2024",
    badge: "Higher Secondary"
  }
];

const EducationCertifications = () => {
  const handlePointerMove = (event) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mouse-x', `${event.clientX - rect.left}px`);
    card.style.setProperty('--mouse-y', `${event.clientY - rect.top}px`);
  };

  return (
    <section className="section-pad relative">
      <div className="section-inner">
        <div className="mb-8 grid gap-4 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="eyebrow mb-3"
            >
              Background
            </motion.div>
            <h3 className="headline">
              Education & <span className="text-gradient">certifications.</span>
            </h3>
          </div>
          <p className="max-w-xl text-xs leading-6 text-violet-100/55 lg:ml-auto">
            Academic base from BCA and 12th, plus certifications in responsive web design, UX, and AI fundamentals.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="space-y-4">
            <div className="flex items-center gap-3 px-1">
              <GraduationCap size={20} className="text-violet-200" />
              <p className="text-[11px] font-black uppercase tracking-[0.25em] text-white/55">Education</p>
            </div>

            {education.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -22 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                onPointerMove={handlePointerMove}
                className="spotlight-card glass-panel rounded-[22px] p-4"
              >
                <div className="relative z-10">
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-violet-600 text-white">
                      <BookOpenCheck size={18} />
                    </div>
                    <span className="rounded-full border border-violet-100/12 bg-black/24 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-violet-100/52">
                      {item.badge}
                    </span>
                  </div>
                  <h4 className="text-base font-black text-white">{item.title}</h4>
                  <p className="mt-2 text-xs leading-5 text-violet-100/54">{item.place}</p>
                  <p className="mt-5 text-[10px] font-black uppercase tracking-[0.24em] text-violet-200/72">{item.meta}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 px-1">
              <Award size={20} className="text-violet-200" />
              <p className="text-[11px] font-black uppercase tracking-[0.25em] text-white/55">Certifications</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {certs.map((cert, index) => (
                <motion.article
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07 }}
                  onPointerMove={handlePointerMove}
                  className={`spotlight-card glass-panel rounded-[22px] p-4 ${index === 0 ? "md:col-span-2" : ""}`}
                >
                  <div className="relative z-10 flex h-full flex-col">
                    <div className="mb-5 flex items-center justify-between gap-4">
                      <div className="grid h-12 w-12 place-items-center rounded-xl border border-violet-100/12 bg-white/[0.06] p-2.5">
                        <img src={cert.image} alt={cert.issuer} className="max-h-full max-w-full object-contain" />
                      </div>
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-violet-600 text-white transition hover:bg-violet-500"
                        aria-label={`Open ${cert.title} certificate`}
                      >
                        <ArrowUpRight size={17} />
                      </a>
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-[0.24em] text-violet-200/68">{cert.issuer}</p>
                    <h4 className="mt-2 text-base font-black text-white">{cert.title}</h4>
                  </div>
                </motion.article>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-start gap-3 rounded-[20px] border border-violet-100/12 bg-violet-200/[0.045] p-4 text-xs leading-6 text-violet-100/56"
            >
              <Sparkles size={19} className="mt-1 shrink-0 text-violet-200" />
              More certifications and advanced projects will keep getting added as the stack grows.
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationCertifications;
