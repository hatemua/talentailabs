'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface DockIconProps {
  id: string;
  title: string;
  icon: string;
  onClick: () => void;
  isActive: boolean;
  mouseX: number;
  iconX: number;
}

export const DockIcon: React.FC<DockIconProps> = ({
  id,
  title,
  icon,
  onClick,
  isActive,
  mouseX,
  iconX,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  // Calculate magnification based on mouse distance
  const calculateScale = () => {
    if (mouseX === 0) return 1; // No magnification when mouse not hovering dock

    const distance = Math.abs(mouseX - iconX);
    const maxDistance = 100; // pixels

    if (distance > maxDistance) return 1;

    // Scale from 1.0 to 1.5 based on proximity
    const scale = 1 + (0.5 * (1 - distance / maxDistance));
    return Math.min(scale, 1.5);
  };

  const scale = calculateScale();

  // If this is a separator
  if (id === 'separator') {
    return (
      <div className="w-[1px] h-12 bg-white/30 mx-2 self-center" />
    );
  }

  return (
    <div className="relative flex flex-col items-center">
      {/* Tooltip */}
      {showTooltip && title && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute -top-12 bg-black/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap pointer-events-none"
        >
          {title}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black/80 rotate-45" />
        </motion.div>
      )}

      {/* Icon */}
      <motion.button
        onClick={onClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        animate={{
          scale,
          y: scale > 1 ? -(scale - 1) * 20 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 25,
        }}
        className="relative w-14 h-14 rounded-[22%] overflow-hidden shadow-lg"
        style={{
          transformOrigin: 'bottom center',
        }}
      >
        {/* Icon Image */}
        {icon ? (
          <img
            src={icon}
            alt={title}
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback to gradient if image fails to load
              e.currentTarget.style.display = 'none';
              const fallback = e.currentTarget.nextElementSibling as HTMLElement;
              if (fallback) fallback.style.display = 'flex';
            }}
          />
        ) : null}
        {/* Fallback gradient */}
        <div className="w-full h-full bg-gradient-to-br from-[#1E40AF] to-[#7C3AED] flex items-center justify-center text-white text-xl font-bold" style={{ display: icon ? 'none' : 'flex' }}>
          {title.charAt(0)}
        </div>
      </motion.button>

      {/* Active indicator dot */}
      {isActive && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute -bottom-1 w-1 h-1 bg-white rounded-full"
        />
      )}
    </div>
  );
};
