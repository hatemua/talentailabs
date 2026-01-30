import React from "react";
import { motion } from "motion/react";
import { BrainCircuit, Cpu, Globe, Lock, Shield, Zap, ArrowUpRight, Code, Database, Layers } from "lucide-react";

const FeatureCard = ({ title, description, icon: Icon, className, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    viewport={{ once: true }}
    className={`group relative bg-white rounded-[3rem] p-10 border border-slate-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.03)] hover:shadow-[0_48px_80px_-24px_rgba(0,0,0,0.08)] transition-all duration-700 overflow-hidden ${className}`}
  >
    <div className="relative z-10 h-full flex flex-col">
      <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-[#0F172A] group-hover:text-white transition-all duration-500">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-3xl font-bold text-[#0F172A] mb-4 tracking-tight">{title}</h3>
      <p className="text-[#64748B] text-lg leading-relaxed mb-8 max-w-sm">{description}</p>
      
      <div className="mt-auto flex items-center gap-2 text-sm font-bold text-[#1E40AF] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
        Learn more <ArrowUpRight className="w-4 h-4" />
      </div>
    </div>
    
    {/* Decorative BG element */}
    <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-blue-50/50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
  </motion.div>
);

export const Services = () => {
  return (
    <section id="services" className="py-40 bg-[#F8FAFC]">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[10px] font-black uppercase tracking-[0.4em] text-[#1E40AF] mb-6"
            >
              Our Capability Stack
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold text-[#0F172A] leading-[1.1] tracking-tighter"
            >
              Architecting the <br />
              <span className="text-slate-400">Future of Web3.</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xl text-[#64748B] max-w-sm font-light leading-relaxed"
          >
            From institutional DeFi to high-performance AI agents, we build the infrastructure that powers tomorrow.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Large Card */}
          <FeatureCard 
            className="md:col-span-2 md:row-span-2 !p-16"
            title="Blockchain Engineering"
            description="We build surgical-grade smart contracts and decentralized protocols on Hedera, Ethereum, and Solana. Security-first architecture with performance that scales to millions of users."
            icon={Layers}
            delay={0.1}
          />
          
          <FeatureCard 
            title="AI Systems"
            description="Custom LLMs and autonomous agents for enterprise automation."
            icon={BrainCircuit}
            delay={0.2}
          />
          
          <FeatureCard 
            title="Secure Infrastructure"
            description="Institutional-grade custody and node operations."
            icon={Shield}
            delay={0.3}
          />

          {/* Bottom Row */}
          <FeatureCard 
            title="Advanced Analytics"
            description="Real-time on-chain data intelligence and predictive modeling."
            icon={Database}
            delay={0.4}
          />
          
          <FeatureCard 
            className="md:col-span-2"
            title="Platform Engineering"
            description="Seamlessly bridging the gap between high-complexity backend protocols and world-class user interfaces for web and mobile."
            icon={Code}
            delay={0.5}
          />
        </div>
      </div>
    </section>
  );
};
