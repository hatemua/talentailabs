import React from "react";
import { Linkedin, Twitter, Github, Send, ArrowUpRight } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-slate-500 py-32 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between gap-20 mb-32">
          <div className="max-w-md">
            <div className="flex items-center gap-2 mb-10">
              <div className="w-10 h-10 bg-gradient-to-br from-[#1E40AF] to-[#7C3AED] rounded-xl flex items-center justify-center">
                <div className="w-5 h-5 border-4 border-white rounded-sm rotate-45" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tighter">TalentAI Labs</span>
            </div>
            <p className="text-lg leading-relaxed mb-12 font-light">
              Architecting the future of decentralized intelligence. A premium IT services agency based in Vilnius, Lithuania.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Twitter, Github].map((Icon, i) => (
                <a key={i} href="#" className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all text-white">
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-16 lg:gap-24">
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white mb-8">Expertise</h4>
              <ul className="space-y-6 text-sm font-medium">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Blockchain</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">AI Systems</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Platforms</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Consulting</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white mb-8">Company</h4>
              <ul className="space-y-6 text-sm font-medium">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Portfolio</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Insights</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white mb-8">Newsletter</h4>
              <p className="text-xs mb-6">Stay updated with our latest R&D.</p>
              <div className="relative">
                <input 
                  placeholder="Email Address" 
                  className="w-full bg-white/5 border-b border-white/20 py-4 focus:outline-none focus:border-white transition-all text-white text-sm"
                />
                <button className="absolute right-0 top-1/2 -translate-y-1/2 text-white">
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black uppercase tracking-[0.2em]">
          <p>© 2026 TalentAI Labs UAB. EU Registered.</p>
          <div className="flex items-center gap-4">
            <span>Built in Vilnius</span>
            <span className="text-lg opacity-50 grayscale">🇱🇹</span>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
