import React, { Suspense, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast'; // 1. Toast import kiya

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // 2. EmailJS Logic with Toast
    emailjs.sendForm(
      'service_6ob144b',   
      'template_lmgcbh9',  
      formRef.current,
      '6fyOu6S4X-8_r6drX'    
    )
    .then(() => {
      setLoading(false);
      // Sexy Success Notification
      toast.success('Message sent successfully! 🚀', {
        style: {
          border: '1px solid #22c55e',
          padding: '16px',
          color: '#fff',
          background: '#000',
        },
        iconTheme: {
          primary: '#22c55e',
          secondary: '#fff',
        },
      });
      formRef.current.reset(); 
    }, (error) => {
      setLoading(false);
      console.log(error.text);
      // Professional Error Notification
      toast.error('Something went wrong. Try again!', {
        style: {
          border: '1px solid #ef4444',
          padding: '16px',
          color: '#fff',
          background: '#000',
        },
      });
    });
  };

  return (
    <section id="contact" className="relative min-h-screen bg-[#010101] py-20 px-6 overflow-hidden flex flex-col justify-center">
      
      {/* Background Stars */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 15] }}>
          <Stars radius={100} depth={50} count={2000} factor={3} saturation={0} fade speed={0.5} />
        </Canvas>
      </div>

      <div className="container mx-auto relative z-10 max-w-6xl">
        <div className="mb-16 text-center md:text-left">
          <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter">
            Let's work <span className="text-green-500 italic">together.</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* LEFT: INFO */}
          <div className="lg:col-span-5 space-y-12">
            <p className="text-gray-400 text-lg leading-relaxed">
              New projects, creative ideas, or opportunities—feel free to reach out!
            </p>
            <div className="space-y-4 text-white/60 font-mono text-xs uppercase tracking-widest">
              <div className="p-6 border border-white/10 rounded-2xl bg-white/5 font-bold">📍 Bhagalpur, Bihar, India</div>
              <div className="p-6 border border-white/10 rounded-2xl bg-white/5 font-bold">⚡ Response Time: &lt; 24h</div>
            </div>
          </div>

          {/* RIGHT: THE FORM */}
          <motion.div className="lg:col-span-7 bg-white/[0.03] border border-white/10 p-10 rounded-[3rem] backdrop-blur-2xl">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  name="from_name"
                  required
                  placeholder="NAME_" 
                  className="w-full bg-black/40 border border-white/5 rounded-2xl p-5 text-white font-mono text-xs focus:border-green-500 outline-none transition-all" 
                />
                <input 
                  type="email" 
                  name="from_email"
                  required
                  placeholder="EMAIL_ADDR" 
                  className="w-full bg-black/40 border border-white/5 rounded-2xl p-5 text-white font-mono text-xs focus:border-green-500 outline-none transition-all" 
                />
              </div>
              <textarea 
                name="message"
                required
                rows="5" 
                placeholder="YOUR_MESSAGE..." 
                className="w-full bg-black/40 border border-white/5 rounded-3xl p-6 text-white font-mono text-xs focus:border-green-500 outline-none transition-all resize-none"
              ></textarea>
              
              <button 
                type="submit"
                disabled={loading}
                className="w-full py-5 bg-green-500 text-black font-black text-[11px] uppercase tracking-[0.4em] rounded-2xl hover:bg-white transition-all shadow-[0_20px_50px_rgba(34,197,94,0.2)] active:scale-95"
              >
                {loading ? 'Transmitting...' : 'Send Transmission →'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;