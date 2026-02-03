import React from "react";
import { motion } from "motion/react";
import { Clock, ShieldCheck, Globe, Zap, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";

const differentiators = [
  {
    title: "12+ Years of Shipping Production Code",
    description: "We're not blockchain tourists. We've been building software since before Ethereum existed. That experience means we've seen what works, what fails, and how to avoid expensive mistakes.",
    icon: Clock,
  },
  {
    title: "Hedera Foundation Backed",
    description: "We're a Hedera Foundation grant recipient — $50K awarded for TalentAI. When the leading enterprise blockchain trusts us, you can too.",
    icon: ShieldCheck,
  },
  {
    title: "EU-Based, Globally Minded",
    description: "Headquartered in Vilnius, Lithuania. EU business standards, GDPR compliant, proper contracts. But we work with clients worldwide and communicate in your timezone.",
    icon: Globe,
  },
  {
    title: "We Build AND Operate",
    description: "We don't just write code and disappear. We've built products we run ourselves. That means we understand the full lifecycle — from MVP to scale to maintenance.",
    icon: Zap,
  },
];

export const WhyUs = () => {
  return (
    <section id="about" className="py-40 bg-[#F8FAFC]">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-[5rem] p-12 md:p-24 shadow-[0_60px_150px_-40px_rgba(0,0,0,0.05)] border border-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[40%] h-full bg-slate-50/50 -skew-x-12 translate-x-1/2 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center relative z-10">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-xs font-black uppercase tracking-[0.4em] text-[#1E40AF] mb-10"
              >
                Why Teams Choose TalentAI Labs
              </motion.div>

              <h2 className="text-5xl md:text-7xl font-bold text-[#0F172A] mb-12 tracking-tighter leading-[0.95]">
                Why the world's <br />
                most ambitious <br />
                <span className="text-slate-400">founders choose us.</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
                {differentiators.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#1E40AF] transition-all duration-500">
                      <item.icon className="w-7 h-7 text-[#1E40AF] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0F172A] mb-4">{item.title}</h3>
                    <p className="text-lg text-[#64748B] font-light leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl border-8 border-slate-50">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1745001901147-8e6c1e6bacf4?auto=format&fit=crop&q=80&w=800" 
                  alt="Our Presence" 
                  className="w-full h-full object-cover grayscale-[0.3]"
                />
              </div>
              
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-10 -right-10 w-48 h-48 bg-white rounded-full shadow-2xl border border-slate-100 flex items-center justify-center p-8 text-center"
              >
                 <div className="flex flex-col items-center">
                    <span className="text-4xl font-black text-[#0F172A]">12+</span>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#64748B]">Years</span>
                 </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
