import React from "react";
import { motion } from "motion/react";
import { ExternalLink, ArrowRight, ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

const projects = [
  {
    title: "TalentAI Skill Protocol",
    tag: "Flagship Product",
    description: "Architecting a decentralized verification engine for institutional talent. Powering over 45k+ unique developer identities on the Hedera Hashgraph.",
    tech: ["Hedera", "Rust", "TypeScript"],
    image: "https://images.unsplash.com/photo-1642432556591-72cbc671b707?q=80&w=1200",
    size: "large"
  },
  {
    title: "MARIPOSA AI Engine",
    tag: "Strategic AI",
    description: "A proprietary autonomous trading infrastructure leveraging multi-agent neural networks for real-time market optimization.",
    tech: ["Python", "PyTorch", "Solana"],
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=800",
    size: "small"
  },
  {
    title: "Vortex Bridge",
    tag: "Cross-Chain",
    description: "Seamless asset migration protocol with institutional-grade security and sub-second finality across major L1s.",
    tech: ["Solidity", "Zero-Knowledge", "WASM"],
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800",
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
              Selected Engagements
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-bold text-[#0F172A] tracking-tighter leading-[1.1]">
              Engineered to <br />
              <span className="text-slate-400">Perform.</span>
            </h2>
          </div>
          <button className="group flex items-center gap-4 text-xl font-bold text-[#0F172A] pb-3 border-b-2 border-slate-100 hover:border-[#1E40AF] transition-all">
            View Case Studies
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
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
                  <p className="text-[#64748B] text-xl leading-relaxed mb-8 font-light">
                    {project.description}
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
