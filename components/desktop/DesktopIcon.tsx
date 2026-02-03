'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface DesktopIconProps {
  id: string;
  title: string;
  icon: string;
  onDoubleClick: () => void;
  index: number;
}

export const DesktopIcon: React.FC<DesktopIconProps> = ({
  id,
  title,
  icon,
  onDoubleClick,
  index,
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const [lastClickTime, setLastClickTime] = useState(0);

  const handleClick = () => {
    const now = Date.now();
    const timeDiff = now - lastClickTime;

    if (timeDiff < 300) {
      // Double click
      onDoubleClick();
      setIsSelected(false);
    } else {
      // Single click
      setIsSelected(true);
    }

    setLastClickTime(now);
  };

  // macOS-style app icon renderer
  const renderAppIcon = () => {
    const iconSize = "w-20 h-20";
    const commonClasses = "relative rounded-[22%] shadow-2xl overflow-hidden";

    switch (id) {
      case 'talentai':
        // Blue development/design tool icon (like Framer)
        return (
          <div className={`${iconSize} ${commonClasses} bg-gradient-to-br from-[#0066FF] to-[#004ACC]`}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 border-4 border-white rounded-lg rotate-45 transform" />
            </div>
            {/* Glossy overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-transparent" />
          </div>
        );

      case 'portfolio':
        // Photos app icon (colorful flower petals)
        return (
          <div className={`${iconSize} ${commonClasses} bg-white`}>
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Flower petals */}
              <div className="relative w-14 h-14">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-5 h-5 bg-red-500 rounded-full" />
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-5 h-5 bg-orange-500 rounded-full" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-5 bg-purple-500 rounded-full" />
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-5 h-5 bg-blue-500 rounded-full" />
                <div className="absolute top-1/4 right-1/4 w-5 h-5 bg-yellow-400 rounded-full" />
                <div className="absolute bottom-1/4 right-1/4 w-5 h-5 bg-pink-500 rounded-full" />
                <div className="absolute bottom-1/4 left-1/4 w-5 h-5 bg-green-500 rounded-full" />
                <div className="absolute top-1/4 left-1/4 w-5 h-5 bg-teal-500 rounded-full" />
                {/* Center */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full" />
              </div>
            </div>
            {/* Glossy overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-transparent" />
          </div>
        );

      case 'services':
        // Blue folder icon
        return (
          <div className={`${iconSize} ${commonClasses} bg-gradient-to-b from-[#5FC1F3] to-[#3FA8E0]`}>
            <div className="absolute inset-0 flex items-center justify-center pt-3">
              <div className="w-14 h-11 bg-gradient-to-b from-[#5FC1F3] to-[#2E97D3] rounded-md relative">
                {/* Folder tab */}
                <div className="absolute -top-2 left-0 w-8 h-3 bg-gradient-to-b from-[#6BC9F8] to-[#5FC1F3] rounded-t-md" />
              </div>
            </div>
            {/* Glossy overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-black/10" />
          </div>
        );

      case 'tech':
        // Yellow notes app icon
        return (
          <div className={`${iconSize} ${commonClasses} bg-gradient-to-b from-[#FFD60A] to-[#FFC700]`}>
            <div className="absolute inset-0 p-3">
              {/* Note lines */}
              <div className="space-y-2 mt-4">
                <div className="h-0.5 bg-[#CC9A00] opacity-30 rounded" />
                <div className="h-0.5 bg-[#CC9A00] opacity-30 rounded" />
                <div className="h-0.5 bg-[#CC9A00] opacity-30 rounded" />
                <div className="h-0.5 bg-[#CC9A00] opacity-30 rounded w-2/3" />
              </div>
            </div>
            {/* Glossy overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-transparent" />
          </div>
        );

      case 'blog':
        // Document/text icon (Safari-like)
        return (
          <div className={`${iconSize} ${commonClasses} bg-gradient-to-br from-[#06F] to-[#00A6FF]`}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-10 h-10 border-3 border-white rounded-lg flex items-center justify-center">
                <div className="space-y-1">
                  <div className="w-6 h-0.5 bg-white rounded" />
                  <div className="w-6 h-0.5 bg-white rounded" />
                  <div className="w-4 h-0.5 bg-white rounded" />
                </div>
              </div>
            </div>
            {/* Glossy overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-transparent" />
          </div>
        );

      case 'contact':
        // Blue mail icon
        return (
          <div className={`${iconSize} ${commonClasses} bg-gradient-to-b from-[#3D8DE8] to-[#2777D9]`}>
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Envelope */}
              <div className="relative w-12 h-9 bg-white rounded-sm">
                {/* Envelope flap */}
                <div className="absolute -top-2 left-0 right-0 h-6 bg-white overflow-hidden rounded-t-sm">
                  <div className="absolute top-0 left-0 w-0 h-0 border-l-[24px] border-l-transparent border-r-[24px] border-r-transparent border-t-[18px] border-t-white" />
                  <div className="absolute top-0 left-0 w-0 h-0 border-l-[24px] border-l-transparent border-r-[24px] border-r-transparent border-t-[16px] border-t-[#3D8DE8]" />
                </div>
              </div>
            </div>
            {/* Glossy overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-black/5" />
          </div>
        );

      default:
        // Fallback icon
        return (
          <div className={`${iconSize} ${commonClasses} bg-gradient-to-br from-gray-400 to-gray-600`}>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-3xl font-bold">{title.charAt(0)}</span>
            </div>
            {/* Glossy overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-transparent" />
          </div>
        );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        delay: index * 0.08,
        type: 'spring',
        stiffness: 260,
        damping: 20,
      }}
      onClick={handleClick}
      className={`
        flex flex-col items-center gap-2 cursor-pointer
        select-none group
        ${isSelected ? 'opacity-100' : 'opacity-95 hover:opacity-100'}
        transition-all duration-200
      `}
    >
      <motion.div
        whileHover={{ scale: 1.08, y: -4 }}
        whileTap={{ scale: 0.95 }}
        className="relative"
      >
        {renderAppIcon()}
      </motion.div>

      <span className="text-white text-xs font-medium text-center leading-tight max-w-[90px] px-1.5 py-0.5 rounded bg-black/20 backdrop-blur-sm drop-shadow-lg">
        {title}
      </span>
    </motion.div>
  );
};
