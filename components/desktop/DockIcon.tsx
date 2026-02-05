'use client';

import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
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
  const [buttonRect, setButtonRect] = useState<DOMRect | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Update button position when tooltip shows
  useEffect(() => {
    if (showTooltip && buttonRef.current) {
      setButtonRect(buttonRef.current.getBoundingClientRect());
    }
  }, [showTooltip]);

  // Calculate magnification based on mouse distance
  const calculateScale = () => {
    // No magnification when mouse not hovering dock or icon position not calculated
    if (mouseX === 0 || !iconX) return 1;

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
      <div className="w-[1px] h-8 sm:h-10 md:h-12 bg-white/30 mx-1 sm:mx-1.5 md:mx-2 self-center" />
    );
  }

  return (
    <>
      <div className="relative flex flex-col items-center">
        {/* Icon */}
        <motion.button
          ref={buttonRef}
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
          className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-[22%] overflow-hidden shadow-lg pointer-events-auto z-10"
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
        <div className="w-full h-full bg-gradient-to-br from-[#1E40AF] to-[#7C3AED] flex items-center justify-center text-white text-base sm:text-lg md:text-xl font-bold" style={{ display: icon ? 'none' : 'flex' }}>
          {title.charAt(0)}
        </div>
      </motion.button>

        {/* Active indicator dot */}
        {isActive && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -bottom-0.5 sm:-bottom-1 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white rounded-full"
          />
        )}
      </div>

      {/* Tooltip - rendered via portal at document root */}
      {showTooltip && title && buttonRect && typeof window !== 'undefined' && createPortal(
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed',
            left: buttonRect.left + buttonRect.width / 2,
            top: buttonRect.top - 40,
            transform: 'translateX(-50%)',
          }}
          className="bg-black/80 backdrop-blur-sm text-white text-[10px] sm:text-xs px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg whitespace-nowrap pointer-events-none z-[10001]"
        >
          {title}
        </motion.div>,
        document.body
      )}
    </>
  );
};
