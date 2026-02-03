import React from "react";
import { motion } from "framer-motion";
import { Cpu, Layers, ShieldCheck, Zap, Globe, Cpu as Chip, ExternalLink } from "lucide-react";

const partnerData = [
  { name: "NVIDIA", color: "#76B900", icon: Chip, desc: "AI Computing", desktopPos: "top-0 left-[5%]" },
  { name: "DARBLOCKCHAIN", color: "#7C3AED", icon: Layers, desc: "Protocol Dev", desktopPos: "top-10 right-[5%]" },
  { name: "WEEX", color: "#1E40AF", icon: ShieldCheck, desc: "Liquidity", desktopPos: "bottom-10 right-[10%]" },
  { name: "HEDERA", color: "#000000", icon: Zap, desc: "DLT Infrastructure", desktopPos: "bottom-0 left-[10%]" },
  { name: "ETHEREUM", color: "#627EEA", icon: Globe, desc: "Base Layer", desktopPos: "top-[40%] left-[-2%]" },
  { name: "SOLANA", color: "#14F195", icon: Cpu, desc: "Scalability", desktopPos: "top-[40%] right-[-2%]" },
];

const PartnerCard = ({ name, color, icon: Icon, desc, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="group relative flex flex-col items-center p-6 bg-white/80 backdrop-blur-sm border border-slate-100 rounded-[2.5rem] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 w-full"
  >
    <div 
      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 text-white shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
      style={{ background: `linear-gradient(135deg, ${color}, ${color}dd)` }}
    >
      <Icon className="w-7 h-7" />
    </div>
    <div className="text-center">
      <h4 className="text-sm font-black text-[#0F172A] tracking-tight uppercase mb-1">{name}</h4>
      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{desc}</p>
    </div>
    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
      <ExternalLink className="w-3 h-3 text-slate-300" />
    </div>
  </motion.div>
);

export const Partners = () => {
  return (
    <section className="py-32 md:py-48 bg-[#F8FAFC] overflow-hidden relative border-y border-slate-100/50">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Modern Header - Optimized for readability */}
        <div className="max-w-4xl mx-auto text-center mb-24 md:mb-40">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[10px] font-black uppercase tracking-[0.8em] text-[#1E40AF] mb-6"
          >
            Network Alliances
          </motion.div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#0F172A] tracking-tighter leading-none mb-8">
            Global <span className="text-slate-300">Partners.</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed font-medium">
            Collaborating with industry leaders to define the next frontier of decentralized intelligence and institutional blockchain solutions.
          </p>
        </div>

        {/* Desktop Galactic Constellation Layout */}
        <div className="hidden lg:flex relative h-[700px] items-center justify-center max-w-7xl mx-auto">
          
          {/* Central Core Hub */}
          <motion.div 
            animate={{ 
              scale: [1, 1.02, 1],
              y: [0, -10, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-20 w-72 h-72 bg-[#0F172A] rounded-[3.5rem] shadow-[0_50px_100px_-20px_rgba(15,23,42,0.4)] flex flex-col items-center justify-center p-10 border border-slate-800"
          >
            <div className="w-16 h-16 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-3xl rotate-12 flex items-center justify-center shadow-2xl mb-6">
               <div className="w-8 h-8 border-4 border-white rounded-lg" />
            </div>
            <div className="text-center">
              <div className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em] mb-2">TalentAI Core</div>
              <h3 className="text-xl font-bold text-white tracking-tighter">Integration Hub</h3>
            </div>
            
            {/* Animated Pulses */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 rounded-[3.5rem] border border-blue-500/20 animate-[ping_4s_linear_infinite]" />
            </div>
          </motion.div>

          {/* Satellite Partners in Constellation */}
          <div className="absolute inset-0">
            {partnerData.map((partner, i) => (
              <motion.div
                key={partner.name}
                className={`absolute w-60 ${partner.desktopPos}`}
                animate={{ 
                  y: [0, Math.sin(i) * 15, 0],
                }}
                transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
              >
                <PartnerCard {...partner} index={i} />
              </motion.div>
            ))}
          </div>

          {/* Connective SVG Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.03]" viewBox="0 0 1200 700">
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1E40AF" />
                <stop offset="100%" stopColor="#7C3AED" />
              </linearGradient>
            </defs>
            {/* Simple geometric lines from center to corners area */}
            <line x1="600" y1="350" x2="200" y2="100" stroke="url(#lineGrad)" strokeWidth="2" />
            <line x1="600" y1="350" x2="1000" y2="100" stroke="url(#lineGrad)" strokeWidth="2" />
            <line x1="600" y1="350" x2="200" y2="600" stroke="url(#lineGrad)" strokeWidth="2" />
            <line x1="600" y1="350" x2="1000" y2="600" stroke="url(#lineGrad)" strokeWidth="2" />
            <line x1="600" y1="350" x2="50" y2="350" stroke="url(#lineGrad)" strokeWidth="2" />
            <line x1="600" y1="350" x2="1150" y2="350" stroke="url(#lineGrad)" strokeWidth="2" />
          </svg>
        </div>

        {/* Mobile & Tablet Layout - Clean, High-Value Grid */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6">
          {partnerData.map((partner, i) => (
            <PartnerCard key={partner.name} {...partner} index={i} />
          ))}
        </div>
      </div>

      {/* Atmospheric Background Layers */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] aspect-square bg-[radial-gradient(circle_at_center,rgba(30,64,175,0.02)_0%,transparent_70%)]" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>
    </section>
  );
};
