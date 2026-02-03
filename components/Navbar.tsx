import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight, ArrowRight } from "lucide-react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Expertise", href: "#technologies" },
    { name: "Projects", href: "#portfolio" },
    { name: "Process", href: "#process" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6 md:p-8 pointer-events-none">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`pointer-events-auto flex items-center justify-between px-10 py-4 rounded-[2.5rem] transition-all duration-700 w-full max-w-7xl ${
          isScrolled 
            ? "bg-white/70 backdrop-blur-2xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-white/80" 
            : "bg-transparent border border-transparent"
        }`}
      >
        {/* Institutional Logo */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-10 h-10 bg-[#0F172A] rounded-2xl flex items-center justify-center shadow-lg transform rotate-3 hover:rotate-0 transition-transform">
              <div className="w-5 h-5 border-[3px] border-white rounded-sm" />
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-white shadow-sm" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-black text-[#0F172A] tracking-tighter leading-none">TALENTAI</span>
            <span className="text-[10px] font-bold text-[#1E40AF] tracking-[0.2em] uppercase leading-none mt-1">Labs</span>
          </div>
        </div>

        {/* Desktop Links - Hyper Clean */}
        <div className="hidden lg:flex items-center gap-12 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group relative text-sm font-bold text-[#64748B] hover:text-[#0F172A] transition-colors"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1E40AF] transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-6">
          <a href="#contact" className="hidden md:block text-sm font-bold text-[#64748B] hover:text-[#0F172A] transition-colors">
            Inquiry
          </a>
          <button className="group relative hidden md:flex items-center gap-2 px-8 py-3 bg-[#0F172A] text-white rounded-full text-sm font-bold overflow-hidden transition-all hover:pr-10 active:scale-95">
            <span className="relative z-10">Start Project</span>
            <ArrowRight className="absolute right-4 w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
          </button>
          
          <button 
            className="lg:hidden p-2 text-[#0F172A]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-24 left-6 right-6 bg-white/90 backdrop-blur-2xl rounded-[3rem] p-10 shadow-2xl border border-white lg:hidden pointer-events-auto"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-3xl font-bold text-[#0F172A] hover:text-[#1E40AF] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="h-[1px] bg-slate-100" />
              <div className="flex flex-col gap-4">
                <button className="w-full py-5 text-[#64748B] text-lg font-bold">Inquiry</button>
                <button className="w-full py-6 bg-[#0F172A] text-white rounded-3xl text-xl font-bold shadow-2xl shadow-slate-200">
                  Start Project
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
