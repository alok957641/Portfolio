import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BriefcaseBusiness, Download, Layers3, Menu, MessageCircle, Sparkles, X } from 'lucide-react';

const navItems = [
  { name: 'Work', href: '#projects', icon: BriefcaseBusiness },
  { name: 'Stack', href: '#skills', icon: Layers3 },
  { name: 'Contact', href: '#contact', icon: MessageCircle },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed left-0 top-0 z-[200] w-full px-4 pt-4 md:px-8 md:pt-5">
      <div className="mx-auto flex max-w-5xl items-center justify-between rounded-full border border-violet-200/12 bg-[#070312]/72 px-4 py-2.5 shadow-[0_18px_70px_rgba(20,8,54,0.42)] backdrop-blur-2xl md:px-4">
        <a href="#top" className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-violet-600 text-xs font-black text-white shadow-[0_0_25px_rgba(139,92,246,0.5)]">
            AK
          </span>
          <span className="hidden leading-none sm:block">
            <span className="block text-xs font-black text-white">Alok Kumar</span>
            <span className="block text-[8px] font-bold uppercase tracking-[0.22em] text-violet-200/62">Full Stack Dev</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 rounded-full bg-violet-200/[0.055] p-1 md:flex">
          {navItems.map(({ name, href, icon: Icon }) => (
            <motion.a
              key={name}
              href={href}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-2 rounded-full px-3.5 py-2 text-[10px] font-bold text-violet-50/68 transition hover:bg-violet-500 hover:text-white"
            >
              <Icon size={14} />
              {name}
            </motion.a>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href="/Alok_Resume.pdf"
            download="Alok_Resume.pdf"
            className="flex min-w-[108px] items-center justify-center gap-2 rounded-full bg-violet-600 px-4 py-2.5 text-[10px] font-black uppercase tracking-[0.12em] text-white shadow-[0_0_26px_rgba(139,92,246,0.45)] transition hover:bg-violet-500"
          >
            <Download size={14} />
            CV
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setIsOpen((value) => !value)}
          className="grid h-10 w-10 place-items-center rounded-full border border-violet-200/12 bg-violet-200/[0.06] text-white md:hidden"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            className="mx-auto mt-3 max-w-5xl rounded-[24px] border border-violet-200/12 bg-[#070312]/95 p-3 shadow-2xl backdrop-blur-2xl md:hidden"
          >
            {navItems.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between rounded-2xl px-4 py-4 text-xs font-black uppercase tracking-[0.16em] text-white/75 transition hover:bg-violet-200/[0.07] hover:text-white"
              >
                <span className="flex items-center gap-3">
                  <Icon size={17} className="text-violet-200" />
                  {name}
                </span>
                <Sparkles size={15} className="text-violet-300" />
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
