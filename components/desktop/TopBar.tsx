'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useWindowStore } from '@/lib/windowStore';
import { Menu, X } from 'lucide-react';

export const TopBar: React.FC = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openWindow = useWindowStore((state) => state.openWindow);

  // Update time every minute
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      });
      setCurrentTime(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  const navigationLinks = [
    { label: 'About', action: () => openWindow('about') },
    { label: 'Services', action: () => openWindow('services') },
    { label: 'Portfolio', action: () => openWindow('portfolio') },
    { label: 'Partners', action: () => openWindow('partners') },
    { label: 'Blog', action: () => { window.location.href = '/blog'; } },
    { label: 'Contact', action: () => openWindow('contact') },
  ];

  const handleNavClick = (action: () => void) => {
    action();
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 2.3 }}
        className="fixed top-0 left-0 right-0 h-12 md:h-10 z-[10000] bg-white/15 backdrop-blur-[20px] border-b border-white/10"
      >
        <div className="flex items-center justify-between h-full px-3 sm:px-4 md:px-6">
          {/* Left side - Logo */}
          <div className="flex items-center gap-2">
            <img
              src="/icons/talentai.png"
              alt="TalentAI Labs"
              className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
            />
            <span className="text-white text-xs sm:text-sm font-bold whitespace-nowrap">TalentAI Labs</span>
          </div>

          {/* Right side - Navigation Links + System Icons */}
          <div className="flex items-center gap-2 sm:gap-4 md:gap-8">
            {/* Navigation Links - Desktop */}
            <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
              {navigationLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={link.action}
                  className="text-white text-sm font-medium hover:text-white/80 hover:bg-white/10 px-3 py-1.5 rounded-md transition-all"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* System Icons */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Clock - Hidden on small screens */}
              <span className="hidden sm:block text-white text-xs sm:text-sm font-medium">
                {currentTime}
              </span>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-1.5 hover:bg-white/10 rounded-md transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                ) : (
                  <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-12 md:top-10 left-0 right-0 z-[9999] lg:hidden bg-white/90 backdrop-blur-xl border-b border-white/20 shadow-lg"
          >
            <nav className="flex flex-col p-4 space-y-2">
              {navigationLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.action)}
                  className="text-left px-4 py-3 text-[#2D1B1B] text-base font-medium hover:bg-white/50 rounded-lg transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
