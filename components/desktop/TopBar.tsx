'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useWindowStore } from '@/lib/windowStore';

export const TopBar: React.FC = () => {
  const [currentTime, setCurrentTime] = useState('');

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
    { label: 'Blog', action: () => openWindow('blog') },
    { label: 'Contact', action: () => openWindow('contact') },
  ];

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 2.3 }}
      className="fixed top-0 left-0 right-0 h-10 z-[10000] bg-white/15 backdrop-blur-[20px] border-b border-white/10"
    >
      <div className="flex items-center justify-between h-full px-6">
        {/* Left side - Logo */}
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-white/20 rounded-md flex items-center justify-center">
            <div className="w-3 h-3 border-2 border-white rounded-sm" />
          </div>
          <span className="text-white text-sm font-bold">TalentAI Labs</span>
        </div>

        {/* Right side - Navigation Links + System Icons */}
        <div className="flex items-center gap-8">
          {/* Navigation Links */}
          <nav className="flex items-center gap-6">
            {navigationLinks.map((link) => (
              <button
                key={link.label}
                onClick={link.action}
                className="text-[#2D1B1B] text-sm font-medium hover:text-[#1D1D1F] transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* System Icons */}
          <div className="flex items-center gap-3">
            {/* Clock */}
            <span className="text-[#2D1B1B] text-sm font-medium">
              {currentTime}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
