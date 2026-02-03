import React from "react";
import { motion } from "motion/react";
import { Users, ShieldCheck, Brain, ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";

export const Product = () => {
  return (
    <section className="py-40 bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-[#0F172A] rounded-[5rem] overflow-hidden relative">
          {/* Abstract light effects */}
          <div className="absolute top-0 right-0 w-[80%] h-full bg-gradient-to-l from-blue-500/10 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-purple-500/10 blur-[150px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="p-12 md:p-24">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-xs font-black uppercase tracking-[0.4em] text-blue-400 mb-10"
              >
                Our Product: TalentAI
              </motion.div>

              <h2 className="text-5xl md:text-7xl font-bold text-white mb-10 leading-[0.95] tracking-tighter">
                The Skill Verification <br />
                <span className="text-blue-400">Platform We Built For Ourselves</span>
              </h2>

              <p className="text-xl text-slate-400 mb-8 leading-relaxed font-light">
                TalentAI started as a solution to our own hiring problem: how do you know if someone actually has the skills they claim? We built an AI-powered platform that verifies real abilities through assessments and stores credentials on the blockchain.
              </p>

              <p className="text-xl text-slate-400 mb-16 leading-relaxed font-light">
                Today, 45,000+ developers use TalentAI to prove their skills. Companies use it to assess internal teams and verify external candidates. It's proof that we don't just build for clients — we build products we believe in.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mb-20">
                <div className="flex flex-col gap-4">
                  <Users className="w-8 h-8 text-blue-400" />
                  <div>
                    <div className="text-3xl font-bold text-white">45K+</div>
                    <div className="text-xs font-black uppercase tracking-widest text-slate-500 mt-1">Verified Developers</div>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <ShieldCheck className="w-8 h-8 text-blue-400" />
                  <div>
                    <div className="text-3xl font-bold text-white">$50K</div>
                    <div className="text-xs font-black uppercase tracking-widest text-slate-500 mt-1">Hedera Grant</div>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <Brain className="w-8 h-8 text-blue-400" />
                  <div>
                    <div className="text-3xl font-bold text-white">AI-Powered</div>
                    <div className="text-xs font-black uppercase tracking-widest text-slate-500 mt-1">Skill Assessment</div>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <ShieldCheck className="w-8 h-8 text-blue-400" />
                  <div>
                    <div className="text-3xl font-bold text-white">Blockchain</div>
                    <div className="text-xs font-black uppercase tracking-widest text-slate-500 mt-1">Credentials</div>
                  </div>
                </div>
              </div>

              <a href="https://talentai.com" target="_blank" rel="noopener noreferrer" className="px-12 py-6 bg-white text-[#0F172A] rounded-full font-bold text-lg hover:shadow-[0_20px_40px_rgba(255,255,255,0.1)] hover:-translate-y-1 transition-all flex items-center justify-center gap-3">
                Explore TalentAI Platform
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>

            <div className="relative h-full min-h-[500px] flex items-center justify-center p-12 lg:p-0">
               <motion.div
                  initial={{ opacity: 0, scale: 0.9, x: 100 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ duration: 1.2 }}
                  viewport={{ once: true }}
                  className="w-full h-full lg:h-[120%] lg:absolute lg:top-[-10%] lg:right-[-10%] rounded-[4rem] overflow-hidden shadow-3xl border-[20px] border-white/5"
               >
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1717501218504-81ed5eb52cd0?q=80&w=1200" 
                    alt="Platform Preview"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-transparent to-transparent opacity-40 lg:opacity-60" />
               </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
