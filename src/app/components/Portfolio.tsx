import React from "react";
import { motion } from "motion/react";
import { ExternalLink, ArrowRight, ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";

const projects = [
  {
    title: "TalentAI Platform",
    tag: "Our Flagship Product",
    description: "We built TalentAI from zero to 45,000+ developers. It's an AI-powered platform that verifies real skills using assessments and blockchain credentials. Companies use it to verify both internal team capabilities and external candidates. Backed by a $50K Hedera Foundation grant.",
    stats: "45,000+ users • Hedera blockchain • AI matching engine",
    tech: ["Hedera", "AI/ML", "React", "Node.js"],
    image: "https://images.unsplash.com/photo-1642432556591-72cbc671b707?q=80&w=1200",
    size: "large"
  },
  {
    title: "MARIPOSA",
    tag: "AI Trading System",
    description: "MARIPOSA is our multi-LLM trading system that analyzes markets, manages risk, and executes trades autonomously. Built with real-time data processing, multiple AI models for decision-making, and sophisticated risk management. Processing millions in trading volume.",
    stats: "Multi-LLM system • Real-time processing • Autonomous execution",
    tech: ["Python", "AI/ML", "Solana", "APIs"],
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=800",
    size: "small"
  },
  {
    title: "Crypto Wallet",
    tag: "Blockchain Infrastructure",
    description: "Secure, non-custodial wallet supporting multiple blockchain networks. Features include DeFi integration, token swaps, staking, and enterprise-grade security. Built for both retail users and institutional clients.",
    stats: "Multi-chain • DeFi integration • Enterprise security",
    tech: ["React Native", "Solana", "Ethereum", "Security"],
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800",
    size: "small"
  },
  {
    title: "DeFi Protocol",
    tag: "Smart Contracts",
    description: "Custom DeFi protocol with staking, liquidity pools, and governance mechanisms. Audited smart contracts handling significant TVL. Built to institutional security standards with comprehensive testing.",
    stats: "Audited contracts • Staking & governance • Institutional grade",
    tech: ["Solidity", "Hedera", "Web3", "Audits"],
    image: "https://images.unsplash.com/photo-1621504450181-5d356f61d307?q=80&w=800",
    size: "small"
  },
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-40 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[10px] font-black uppercase tracking-[0.4em] text-[#1E40AF] mb-6"
            >
              What We've Shipped
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-bold text-[#0F172A] tracking-tighter leading-[1.1]">
              Real products. Real users. <br />
              <span className="text-slate-400">Real results.</span>
            </h2>
          </div>
          <a href="#contact" className="group flex items-center gap-4 text-xl font-bold text-[#0F172A] pb-3 border-b-2 border-slate-100 hover:border-[#1E40AF] transition-all">
            Have a similar project? Let's talk
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className={`group flex flex-col ${project.size === 'large' ? 'md:col-span-2' : ''}`}
            >
              <div className="relative aspect-[21/9] rounded-[4rem] overflow-hidden mb-12 shadow-[0_64px_128px_-32px_rgba(0,0,0,0.1)] bg-slate-50 border border-slate-100/50">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 group-hover:grayscale-0 grayscale-[0.3] transition-all duration-[1.5s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="absolute top-10 left-10">
                  <div className="px-6 py-2.5 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-[#0F172A] shadow-xl border border-white">
                    {project.tag}
                  </div>
                </div>

                <div className="absolute bottom-10 right-10 translate-y-20 group-hover:translate-y-0 transition-transform duration-700">
                  <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center shadow-2xl">
                    <ArrowUpRight className="w-8 h-8 text-[#1E40AF]" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between gap-12 px-6">
                <div className="max-w-2xl">
                  <h3 className="text-4xl font-bold text-[#0F172A] mb-6 tracking-tight group-hover:text-[#1E40AF] transition-colors duration-500">
                    {project.title}
                  </h3>
                  <p className="text-[#64748B] text-xl leading-relaxed mb-6 font-light">
                    {project.description}
                  </p>
                  <p className="text-[#1E40AF] text-sm font-bold mb-8">
                    {project.stats}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {project.tech.map((t) => (
                      <span key={t} className="px-4 py-1.5 bg-slate-50 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-500 border border-slate-100">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
