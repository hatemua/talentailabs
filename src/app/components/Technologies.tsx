import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Code2, 
  Cpu, 
  Database, 
  Globe, 
  Layers, 
  Lock, 
  MessageSquare, 
  Zap,
  ChevronRight,
  Workflow,
  ShieldCheck,
  Search,
  Box,
  Fingerprint
} from "lucide-react";

const techCategories = [
  {
    id: "blockchain",
    title: "Blockchain & Web3",
    icon: Layers,
    description: "Architecting secure, scalable decentralized ecosystems.",
    color: "#1E40AF",
    items: [
      { name: "Hedera", icon: Zap, detail: "Enterprise DLT & HCS" },
      { name: "Ethereum", icon: Globe, detail: "EVM & L2 Scaling" },
      { name: "Solana", icon: Box, detail: "High-Performance Rust" },
      { name: "Smart Contracts", icon: Lock, detail: "Audit-Ready Solidity" },
    ]
  },
  {
    id: "ai",
    title: "AI & Intelligence",
    icon: Cpu,
    description: "Neural architectures for real-world automation.",
    color: "#7C3AED",
    items: [
      { name: "Neural Networks", icon: Workflow, detail: "Custom LLM Fine-tuning" },
      { name: "Python", icon: Code2, detail: "PyTorch & TensorFlow" },
      { name: "Computer Vision", icon: Fingerprint, detail: "Spatial Intelligence" },
      { name: "Automation", icon: Zap, detail: "Autonomous Agents" },
    ]
  },
  {
    id: "backend",
    title: "Systems & Core",
    icon: Database,
    description: "High-load infrastructure and secure data pipelines.",
    color: "#0891B2",
    items: [
      { name: "Node.js", icon: Code2, detail: "Distributed Microservices" },
      { name: "Go / Rust", icon: ShieldCheck, detail: "Low-Latency Systems" },
      { name: "PostgreSQL", icon: Database, detail: "Optimized Datastores" },
      { name: "Cloud Native", icon: Globe, detail: "Kubernetes & AWS" },
    ]
  }
];

export const Technologies = () => {
  const [activeTab, setActiveTab] = useState(techCategories[0].id);

  return (
    <section id="technologies" className="py-32 md:py-48 bg-white relative overflow-hidden">
      {/* Background Architectural Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute top-0 left-0 w-full h-px bg-slate-900" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-slate-900" />
        <div className="absolute left-1/4 top-0 w-px h-full bg-slate-900" />
        <div className="absolute right-1/4 top-0 w-px h-full bg-slate-900" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-[10px] font-black uppercase tracking-[0.8em] text-[#1E40AF] mb-6"
              >
                Our Technical Edge
              </motion.div>
              <h2 className="text-5xl md:text-7xl font-bold text-[#0F172A] tracking-tighter leading-none">
                Technologies <br />
                <span className="text-slate-300">We Master.</span>
              </h2>
            </div>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-slate-500 max-w-sm text-lg leading-relaxed font-medium"
            >
              We don't just use tools; we engineer solutions that define industries across the decentralization spectrum.
            </motion.p>
          </div>

          {/* Interactive Stack Explorer */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Navigation Tabs */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              {techCategories.map((category) => {
                const isActive = activeTab === category.id;
                const Icon = category.icon;
                
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveTab(category.id)}
                    className={`group relative text-left p-8 rounded-[2rem] transition-all duration-500 ${
                      isActive 
                        ? "bg-[#0F172A] text-white shadow-[0_30px_60px_-10px_rgba(15,23,42,0.3)]" 
                        : "bg-slate-50 text-slate-400 hover:bg-slate-100"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-2xl transition-colors duration-500 ${
                        isActive ? "bg-white/10" : "bg-white shadow-sm"
                      }`}>
                        <Icon className={`w-6 h-6 ${isActive ? "text-white" : "text-slate-400"}`} />
                      </div>
                      <ChevronRight className={`w-5 h-5 transition-transform duration-500 ${
                        isActive ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                      }`} />
                    </div>
                    <h3 className={`text-xl font-bold tracking-tight mb-2 ${isActive ? "text-white" : "text-[#0F172A]"}`}>
                      {category.title}
                    </h3>
                    <p className={`text-sm leading-relaxed ${isActive ? "text-slate-400" : "text-slate-500"}`}>
                      {category.description}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Right: Content Display */}
            <div className="lg:col-span-8 bg-slate-50 rounded-[3rem] p-8 md:p-12 relative overflow-hidden min-h-[500px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "circOut" }}
                  className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {techCategories.find(c => c.id === activeTab)?.items.map((item, idx) => {
                    const ItemIcon = item.icon;
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ y: -5 }}
                        className="group bg-white p-8 rounded-[2.5rem] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.03)] border border-slate-100 flex items-start gap-6"
                      >
                        <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0 group-hover:bg-[#0F172A] group-hover:text-white transition-colors duration-500">
                          <ItemIcon className="w-7 h-7" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-[#0F172A] tracking-tight mb-1">{item.name}</h4>
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{item.detail}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>

              {/* Decorative Background for Detail Box */}
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-100/20 to-purple-100/20 rounded-full blur-3xl pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
