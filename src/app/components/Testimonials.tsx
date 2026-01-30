import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Quote, ArrowRight, ArrowLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

const testimonials = [
  {
    id: 1,
    name: "Alex Thompson",
    role: "CTO at Hyperdrive Web3",
    content: "TalentAI Labs delivered our smart contracts ahead of schedule. Their blockchain expertise is world-class and communication was excellent throughout the audit process.",
    image: "https://images.unsplash.com/photo-1643285740368-f7f1ba6b116f?auto=format&fit=crop&q=80&w=400",
    company: "Hyperdrive",
    stat: "99% Audit Score"
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Founder at Lunar DeFi",
    content: "We needed complex tokenomics and cross-chain mechanics. They understood our vision immediately and built exactly what we needed for our mainnet launch.",
    image: "https://images.unsplash.com/flagged/photo-1573582677725-863b570e3c00?auto=format&fit=crop&q=80&w=400",
    company: "Lunar",
    stat: "$40M TVL Secured"
  },
  {
    id: 3,
    name: "Marcus Weber",
    role: "VP Engineering at Quantum Ledger",
    content: "Professional, technical, and reliable. They became an extension of our core team and delivered a production-ready platform that scaled seamlessly during peak load.",
    image: "https://images.unsplash.com/photo-1737574821698-862e77f044c1?auto=format&fit=crop&q=80&w=400",
    company: "Quantum",
    stat: "0.2s Avg Latency"
  },
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const rotateTo = (index: number) => {
    if (index === currentIndex) return;
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const next = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-40 bg-[#F8FAFC] overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-24 items-center">
          
          <div className="w-full lg:w-2/5 space-y-8">
            <div className="mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-[10px] font-black uppercase tracking-[0.4em] text-[#1E40AF] mb-6"
              >
                Institutional Feedback
              </motion.div>
              <h2 className="text-5xl md:text-6xl font-bold text-[#0F172A] tracking-tighter leading-[1.1]">
                Voices of <br />
                <span className="text-slate-400">Engineering.</span>
              </h2>
            </div>
            
            <div className="flex flex-col gap-4">
              {testimonials.map((t, index) => (
                <div
                  key={t.id}
                  onClick={() => rotateTo(index)}
                  className={`group relative cursor-pointer flex items-center gap-6 p-8 rounded-[2.5rem] transition-all duration-700 overflow-hidden ${
                    currentIndex === index 
                      ? "bg-white shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] border border-white" 
                      : "bg-transparent border border-transparent hover:bg-slate-100/50"
                  }`}
                >
                  {currentIndex === index && (
                    <motion.div 
                      layoutId="sidebar-active"
                      className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#1E40AF]"
                    />
                  )}

                  <div className={`w-16 h-16 rounded-2xl overflow-hidden transition-all duration-700 ${currentIndex === index ? 'grayscale-0 scale-100 shadow-xl' : 'grayscale opacity-30 scale-90'}`}>
                    <ImageWithFallback src={t.image} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="flex-1">
                    <div className={`text-xl font-bold transition-all duration-500 ${currentIndex === index ? 'text-[#0F172A]' : 'text-slate-400'}`}>
                      {t.name}
                    </div>
                    <div className={`text-[10px] font-black uppercase tracking-[0.2em] mt-1.5 transition-all duration-500 ${currentIndex === index ? 'text-[#1E40AF]' : 'text-slate-300'}`}>
                      {t.company}
                    </div>
                  </div>

                  <div className={`transition-all duration-500 ${currentIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="w-10 h-10 rounded-full bg-[#0F172A] flex items-center justify-center text-white">
                      <ChevronRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-12 flex items-center gap-8">
              <div className="flex gap-4">
                <button 
                  onClick={prev}
                  className="w-16 h-16 rounded-full border border-slate-200 flex items-center justify-center hover:bg-[#0F172A] hover:text-white transition-all duration-500"
                >
                  <ArrowLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={next}
                  className="w-16 h-16 rounded-full border border-slate-200 flex items-center justify-center hover:bg-[#0F172A] hover:text-white transition-all duration-500"
                >
                  <ArrowRight className="w-6 h-6" />
                </button>
              </div>
              <div className="h-[1px] flex-1 bg-slate-200/50" />
              <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                0{currentIndex + 1} / 0{testimonials.length}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-3/5 h-[800px] relative flex items-center justify-center overflow-visible" style={{ perspective: '3000px' }}>
            <AnimatePresence initial={false} mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={(d: number) => ({
                  opacity: 0,
                  rotateY: d > 0 ? 120 : -120,
                  rotateX: d > 0 ? 20 : -20,
                  z: -1000,
                  x: d > 0 ? 300 : -300,
                  scale: 0.5,
                })}
                animate={{
                  opacity: 1,
                  rotateY: 0,
                  rotateX: 0,
                  z: 0,
                  x: 0,
                  scale: 1,
                }}
                exit={(d: number) => ({
                  opacity: 0,
                  rotateY: d > 0 ? -120 : 120,
                  rotateX: d > 0 ? -20 : 20,
                  z: -1000,
                  x: d > 0 ? -300 : 300,
                  scale: 0.5,
                })}
                transition={{
                  type: "spring",
                  stiffness: 40,
                  damping: 12,
                  mass: 0.8
                }}
                className="absolute inset-0 flex items-center justify-center"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="w-full aspect-[4/3] bg-white rounded-[5rem] p-16 md:p-24 shadow-[0_80px_160px_-40px_rgba(0,0,0,0.12)] border border-white relative overflow-hidden flex flex-col">
                  <div className="mb-12 flex items-center justify-between">
                    <Quote className="w-20 h-20 text-[#1E40AF]/10" />
                  </div>
                  
                  <p className="text-3xl md:text-5xl text-[#0F172A] leading-[1.15] tracking-tight font-bold mb-16 italic">
                    "{testimonials[currentIndex].content}"
                  </p>
                  
                  <div className="flex items-end justify-between mt-auto pt-12 border-t border-slate-50">
                    <div className="flex items-center gap-8">
                      <div className="w-24 h-24 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                        <ImageWithFallback src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-black text-[#0F172A] tracking-tight">{testimonials[currentIndex].name}</h4>
                        <p className="text-[#1E40AF] text-[10px] font-black uppercase tracking-[0.4em] mt-2">{testimonials[currentIndex].role}</p>
                      </div>
                    </div>
                    
                    <div className="hidden md:flex flex-col items-end">
                      <div className="text-4xl font-black text-[#0F172A] tracking-tighter tabular-nums mb-1">{testimonials[currentIndex].stat}</div>
                      <div className="text-[9px] font-black uppercase tracking-[0.2em] text-[#64748B]">Impact Verification</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
               <motion.div 
                 animate={{ rotateY: 360, rotateX: 360 }}
                 transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                 className="absolute w-[1000px] h-[1000px] border border-blue-100/40 rounded-full opacity-20" 
                 style={{ transformStyle: 'preserve-3d' }}
               />
               <motion.div 
                 animate={{ rotateY: -360, rotateZ: 360 }}
                 transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                 className="absolute w-[850px] h-[850px] border border-purple-100/30 rounded-full opacity-30" 
                 style={{ transformStyle: 'preserve-3d' }}
               />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
