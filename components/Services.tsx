import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Stack, Brain, Code, ShieldCheck } from "@phosphor-icons/react";

const FeatureCard = ({ title, description, icon: Icon, className, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    viewport={{ once: true }}
    className={`group relative bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_40px_-12px_rgba(0,0,0,0.12)] transition-all duration-500 overflow-hidden ${className}`}
  >
    <div className="relative z-10 h-full flex flex-col">
      <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#0F172A] group-hover:text-white transition-all duration-500">
        <Icon className="w-6 h-6" weight="duotone" />
      </div>
      <h3 className="text-xl md:text-2xl font-bold text-[#0F172A] mb-3 tracking-tight">{title}</h3>
      <p className="text-[#64748B] text-base leading-relaxed mb-6">{description}</p>

      <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-[#1E40AF] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
        Learn more <ArrowUpRight className="w-4 h-4" />
      </div>
    </div>

    {/* Decorative BG element */}
    <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-blue-50/50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  </motion.div>
);

export const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 lg:py-32 bg-[#F8FAFC]">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[10px] font-black uppercase tracking-[0.3em] text-[#1E40AF] mb-4"
            >
              What We Build
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F172A] leading-[1.2] tracking-tight"
            >
              End-to-End Development <br />
              <span className="text-slate-400">for Blockchain & AI</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-base text-[#64748B] max-w-sm leading-relaxed"
          >
            From institutional DeFi to high-performance AI agents, we build the infrastructure that powers tomorrow.
          </motion.p>
        </div>

        {/* Bento Grid - 4 Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Service 1: Blockchain Development */}
          <FeatureCard
            className="md:col-span-2 !p-10 md:!p-12"
            title="Smart Contracts & Blockchain Infrastructure"
            description="Production-grade smart contracts that don't get hacked. We've built DeFi protocols managing millions, NFT platforms with thousands of users, and enterprise blockchain solutions for regulated industries. Solidity, Rust, or Hedera — we speak them all fluently."
            icon={Stack}
            delay={0.1}
          />

          {/* Service 2: AI & Intelligent Systems */}
          <FeatureCard
            className=""
            title="AI Solutions That Actually Work"
            description="Not AI buzzwords — real intelligent systems that solve business problems. We built MARIPOSA, an autonomous trading system processing millions in volume. We build AI agents that automate complex workflows, LLM integrations that understand your domain, and data pipelines that scale."
            icon={Brain}
            delay={0.2}
          />

          {/* Service 3: Web & Mobile Development */}
          <FeatureCard
            className=""
            title="Full-Stack Applications Built to Scale"
            description="Beautiful frontends. Bulletproof backends. Whether you need an MVP in 6 weeks or an enterprise platform that handles millions of users, we architect and build web and mobile applications with modern tech stacks. React, Next.js, React Native, Node.js — production-tested."
            icon={Code}
            delay={0.3}
          />

          {/* Service 4: Consulting & Strategy */}
          <FeatureCard
            className="md:col-span-2"
            title="Technical Leadership When You Need It"
            description="Sometimes you don't need a full dev team — you need someone who's been there. We provide technical advisory for blockchain architecture, tokenomics design, due diligence for investors, and fractional CTO services for startups that need senior guidance without the full-time cost."
            icon={ShieldCheck}
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};
