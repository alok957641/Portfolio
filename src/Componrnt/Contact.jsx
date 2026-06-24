import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { Clock3, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      'service_6ob144b',
      'template_lmgcbh9',
      formRef.current,
      '6fyOu6S4X-8_r6drX'
    )
    .then(() => {
      setLoading(false);
      toast.success('Message sent successfully!', {
        style: {
          border: '1px solid rgba(167, 139, 250, 0.5)',
          padding: '16px',
          color: '#fff',
          background: '#080a12',
        },
        iconTheme: {
          primary: '#a78bfa',
          secondary: '#080a12',
        },
      });
      formRef.current.reset();
    }, (error) => {
      setLoading(false);
      console.log(error.text);
      toast.error('Something went wrong. Try again!', {
        style: {
          border: '1px solid rgba(248, 113, 113, 0.5)',
          padding: '16px',
          color: '#fff',
          background: '#080a12',
        },
      });
    });
  };

  return (
    <section id="contact" className="section-pad relative">
      <div className="section-inner">
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="eyebrow mb-5"
          >
            Contact
          </motion.div>
          <h3 className="headline text-[clamp(2rem,4.2vw,3.4rem)]">
            Let's build <span className="text-gradient">something sharp.</span>
          </h3>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-4">
            <div className="glass-panel rounded-[28px] p-7">
              <Mail className="mb-8 text-violet-200" size={28} />
              <p className="text-lg leading-8 text-slate-300">
                New project, collaboration, freelance work, or a quick idea check. Send the details and I will respond fast.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
                <MapPin className="mb-3 text-violet-200" size={20} />
                <p className="text-[10px] font-black uppercase tracking-[0.24em] text-white/45">Location</p>
                <p className="mt-2 font-black text-white">Bhagalpur, Bihar</p>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
                <Clock3 className="mb-3 text-violet-200" size={20} />
                <p className="text-[10px] font-black uppercase tracking-[0.24em] text-white/45">Response</p>
                <p className="mt-2 font-black text-white">Under 24 hours</p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="animated-border rounded-[34px] p-[1px]"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="glass-panel rounded-[34px] p-6 md:p-9">
              <div className="grid gap-5 md:grid-cols-2">
                <input
                  type="text"
                  name="from_name"
                  required
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-violet-100/12 bg-black/30 p-5 text-sm font-semibold text-white outline-none transition placeholder:text-white/35 focus:border-violet-300"
                />
                <input
                  type="email"
                  name="from_email"
                  required
                  placeholder="Email address"
                  className="w-full rounded-2xl border border-violet-100/12 bg-black/30 p-5 text-sm font-semibold text-white outline-none transition placeholder:text-white/35 focus:border-violet-300"
                />
              </div>
              <textarea
                name="message"
                required
                rows="6"
                placeholder="Tell me about your project"
                className="mt-5 w-full resize-none rounded-[24px] border border-violet-100/12 bg-black/30 p-5 text-sm font-semibold text-white outline-none transition placeholder:text-white/35 focus:border-violet-300"
              />
              <button
                type="submit"
                disabled={loading}
                className="mt-5 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-violet-600 px-6 py-5 text-[11px] font-black uppercase tracking-[0.22em] text-white shadow-[0_0_28px_rgba(139,92,246,0.38)] transition hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? 'Sending...' : 'Send Message'}
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
