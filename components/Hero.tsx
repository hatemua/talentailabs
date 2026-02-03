import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { ShieldCheck, Lightning, Globe, Lock } from "@phosphor-icons/react";

const FloatingGlassCard = ({ children, className, delay = 0, yRange = [0, -20] }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ 
      opacity: 1, 
      y: yRange,
    }}
    transition={{
      opacity: { duration: 1, delay },
      y: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay + 0.5,
        repeatType: "reverse"
      }
    }}
    className={`absolute z-10 backdrop-blur-md bg-white/40 border border-white/60 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.05)] rounded-[2rem] p-5 ${className}`}
  >
    {children}
  </motion.div>
);

export const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -100]);
  const y2 = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-[100vh] flex flex-col items-center justify-center pt-20 pb-24 overflow-hidden bg-[#F8FAFC]">
      {/* Ultra-Premium Background Architecture */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Subtle Radial Sunburst */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[140%] aspect-square bg-[radial-gradient(circle_at_center,rgba(30,64,175,0.03)_0%,rgba(124,58,237,0.02)_30%,transparent_70%)]" />
        
        {/* Fading Dot Grid */}
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: `radial-gradient(circle at 2px 2px, #E2E8F0 1px, transparent 0)`, 
            backgroundSize: '48px 48px',
            maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
          }} 
        />
      </div>

      <div className="container mx-auto px-6 relative z-30">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-slate-200 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#64748B]">Hedera Foundation Partner</span>
          </motion.div>

          {/* Master Headline */}
          <motion.div style={{ opacity }} className="relative z-40">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#0F172A] leading-[1.1] tracking-[-0.02em] mb-6"
            >
              Blockchain & AI <br />
              <span className="bg-gradient-to-r from-[#1E40AF] via-[#7C3AED] to-[#0891B2] bg-clip-text text-transparent">
                Development Agency That Delivers
              </span>
            </motion.h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-[#64748B] mb-6 max-w-3xl leading-relaxed font-normal relative z-40"
          >
            We're the technical team behind successful Web3 startups and enterprise blockchain projects. From smart contracts to trading bots, DeFi protocols to custom AI solutions — we turn ambitious ideas into production-ready products. Hedera Foundation backed. 12+ years of shipping code that works.
          </motion.p>

          {/* Trust Micro-copy */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-6 mb-10 text-sm text-[#64748B] relative z-40"
          >
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#1E40AF]" weight="duotone" />
              Free consultation
            </span>
            <span className="flex items-center gap-2">
              <Lightning className="w-5 h-5 text-[#1E40AF]" weight="duotone" />
              24h response
            </span>
            <span className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-[#1E40AF]" weight="duotone" />
              EU-based team
            </span>
          </motion.div>

          {/* Action Group */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-16 relative z-40"
          >
            <a href="#contact" className="group relative px-8 py-4 bg-[#0F172A] text-white rounded-xl font-semibold text-base transition-all hover:scale-105 active:scale-95 shadow-[0_8px_24px_rgba(15,23,42,0.2)]">
              <span className="relative z-10 flex items-center gap-2">
                Start Your Project
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a href="#portfolio" className="px-8 py-4 bg-white text-[#0F172A] border border-slate-200 rounded-xl font-semibold text-base hover:bg-slate-50 transition-all hover:shadow-lg active:scale-95">
              See Our Work
            </a>
          </motion.div>
        </div>
      </div>

      {/* Floating UI Elements - Repositioned to avoid overlap with core text */}
      
      {/* Top Left: Terminal/Code Snippet - Moved further out */}
      <FloatingGlassCard className="top-10 left-[2vw] w-72 hidden 2xl:block" delay={0.2} yRange={[0, -20]}>
        <div className="flex items-center gap-1.5 mb-3">
          <div className="w-2 h-2 rounded-full bg-red-400" />
          <div className="w-2 h-2 rounded-full bg-amber-400" />
          <div className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="ml-2 text-[9px] font-mono text-slate-400">audit_engine.sol</span>
        </div>
        <div className="space-y-1.5 font-mono text-[10px]">
          <div className="flex gap-2 text-blue-600"><span>fn verifyProof()</span></div>
          <div className="flex gap-2 text-slate-500 pl-3"><span>require(valid, "ERR");</span></div>
          <div className="flex gap-2 text-purple-600 pl-3"><span>return exec();</span></div>
        </div>
        <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between">
          <span className="text-[9px] font-bold text-[#1E40AF]">VALIDATED</span>
          <ShieldCheck className="w-3 h-3 text-[#1E40AF]" weight="duotone" />
        </div>
      </FloatingGlassCard>

      {/* Top Right: Network Activity - Moved further out */}
      <FloatingGlassCard className="top-20 right-[2vw] w-64 hidden 2xl:block" delay={0.4} yRange={[0, 20]}>
        <div className="flex items-center justify-between mb-4">
          <div className="text-[10px] font-black text-[#0F172A] uppercase tracking-tighter">Throughput</div>
          <div className="px-2 py-0.5 rounded bg-blue-50 text-[9px] font-bold text-blue-600">LIVE</div>
        </div>
        <div className="flex items-end gap-1 h-12 mb-3">
          {[30, 60, 40, 80, 55, 70, 45, 75].map((h, i) => (
            <motion.div
              key={i}
              animate={{ height: `${h}%` }}
              transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", delay: i * 0.1 }}
              className="flex-1 bg-blue-500/40 rounded-sm"
            />
          ))}
        </div>
        <div className="flex justify-between text-[9px] font-bold text-slate-400">
          <span>2.4k TPS</span>
          <span>1ms</span>
        </div>
      </FloatingGlassCard>

      {/* Middle Right: Security Badge */}
      <FloatingGlassCard className="top-[40%] right-[5vw] p-4 hidden xl:block" delay={0.7} yRange={[0, -10]}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-100">
            <Lock className="w-5 h-5 text-white" weight="duotone" />
          </div>
          <div>
            <div className="text-[10px] font-bold text-[#0F172A]">AI AUDIT</div>
            <div className="text-[8px] font-black text-emerald-600 uppercase">Secured</div>
          </div>
        </div>
      </FloatingGlassCard>

      {/* Trust Badges - Ultra clean */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="mt-12 flex flex-wrap justify-center gap-12 md:gap-16 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700 px-6 relative z-40"
      >
        {["Ethereum", "Hedera", "Solana", "NVIDIA", "Anthropic", "Polkadot"].map(brand => (
          <span key={brand} className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-slate-400 cursor-default">
            {brand}
          </span>
        ))}
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-slate-200 to-transparent" />
      </motion.div>
    </section>
  );
};
