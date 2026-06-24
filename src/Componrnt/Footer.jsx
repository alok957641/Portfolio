import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Footer = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const socials = [
    { name: 'Github', icon: GithubIcon, url: 'https://github.com/alok957641' },
    { name: 'Linkedin', icon: LinkedinIcon, url: 'https://linkedin.com/in/alok-kumar-304980314' },
    { name: 'Instagram', icon: InstagramIcon, url: 'https://www.instagram.com/code_with_alok69?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
  ];

  return (
    <footer className="relative border-t border-white/10 px-6 py-12">
      <div className="section-inner">
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <h2 className="text-5xl font-black uppercase leading-none text-white md:text-7xl">
              Alok<span className="text-gradient">.dev</span>
            </h2>
            <p className="mt-5 max-w-xl text-sm font-semibold uppercase tracking-[0.22em] text-white/45">
              Engineering digital products from Bhagalpur to the web.
            </p>
          </div>

          <div className="flex gap-3">
            {socials.map(({ name, icon: Icon, url }) => (
              <motion.a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4 }}
                className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.06] text-white/65 transition hover:bg-white hover:text-black"
                aria-label={name}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-4 border-y border-white/10 py-7 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.24em] text-violet-200">Local Time</p>
            <p className="mt-2 font-mono text-sm font-black text-white">{time}</p>
          </div>
          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.24em] text-violet-200">Coordinates</p>
            <p className="mt-2 font-mono text-sm font-black text-white">25.2445 N, 87.0133 E</p>
          </div>
          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.24em] text-violet-200">Status</p>
            <p className="mt-2 text-sm font-black uppercase text-white">Available</p>
          </div>
          <div className="sm:col-span-2 lg:col-span-1 lg:text-right">
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-white/65 transition hover:bg-white hover:text-black"
            >
              Back to top
              <ArrowUp size={15} />
            </button>
          </div>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-white/35 md:flex-row">
          <p>Copyright 2026 Alok Kumar.</p>
          <p>React / Framer Motion / Three.js / Tailwind</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
