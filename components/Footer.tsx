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
            <p className="text-sm leading-relaxed mb-4 font-medium">TalentAI Labs UAB</p>
            <p className="text-lg leading-relaxed mb-12 font-light">
              Blockchain & AI development agency building the decentralized future. Based in Lithuania, serving clients worldwide.
            </p>
            <div className="flex gap-4">
              <a href="https://linkedin.com/company/talentailabs" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all text-white">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://twitter.com/talentailabs" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all text-white">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://github.com/talentailabs" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all text-white">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-16 lg:gap-20">
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white mb-8">Services</h4>
              <ul className="space-y-6 text-sm font-medium">
                <li><a href="#services" className="hover:text-blue-400 transition-colors">Blockchain Development</a></li>
                <li><a href="#services" className="hover:text-blue-400 transition-colors">AI Solutions</a></li>
                <li><a href="#services" className="hover:text-blue-400 transition-colors">Web & Mobile</a></li>
                <li><a href="#services" className="hover:text-blue-400 transition-colors">Consulting</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white mb-8">Company</h4>
              <ul className="space-y-6 text-sm font-medium">
                <li><a href="#portfolio" className="hover:text-blue-400 transition-colors">Portfolio</a></li>
                <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white mb-8">Resources</h4>
              <ul className="space-y-6 text-sm font-medium">
                <li><a href="#portfolio" className="hover:text-blue-400 transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Tech Blog</a></li>
                <li><a href="https://github.com/talentailabs" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">GitHub</a></li>
                <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white mb-8">Connect</h4>
              <ul className="space-y-6 text-sm font-medium">
                <li><a href="mailto:hello@talentailabs.com" className="hover:text-blue-400 transition-colors">hello@talentailabs.com</a></li>
                <li><a href="https://linkedin.com/company/talentailabs" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">LinkedIn</a></li>
                <li><a href="https://twitter.com/talentailabs" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Twitter</a></li>
                <li><a href="https://t.me/talentailabs" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Telegram</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black uppercase tracking-[0.2em]">
          <p>© 2026 TalentAI Labs UAB. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Built with ❤️ in Vilnius, Lithuania</span>
            <span className="text-lg">🇱🇹</span>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
