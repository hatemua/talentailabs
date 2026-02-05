'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useWindowStore } from '@/lib/windowStore';
import { DOCK_ICONS } from '@/lib/constants';
import { DockIcon } from './DockIcon';

export const Dock: React.FC = () => {
  const dockRef = useRef<HTMLDivElement>(null);
  const [mouseX, setMouseX] = useState(0);
  const [iconPositions, setIconPositions] = useState<Record<string, number>>({});

  const openWindow = useWindowStore((state) => state.openWindow);
  const windows = useWindowStore((state) => state.windows);

  // Calculate icon positions after component mounts
  useEffect(() => {
    const calculatePositions = () => {
      if (!dockRef.current) return;

      const dockRect = dockRef.current.getBoundingClientRect();
      const icons = dockRef.current.querySelectorAll('[data-dock-icon-id]');
      const positions: Record<string, number> = {};

      icons.forEach((icon) => {
        const id = icon.getAttribute('data-dock-icon-id');
        if (id) {
          const iconRect = icon.getBoundingClientRect();
          const iconCenter = iconRect.left + iconRect.width / 2 - dockRect.left;
          positions[id] = iconCenter;
        }
      });

      setIconPositions(positions);
    };

    // Calculate positions immediately and after animations complete
    const timer1 = setTimeout(calculatePositions, 100);
    const timer2 = setTimeout(calculatePositions, 3100);

    // Recalculate on window resize
    window.addEventListener('resize', calculatePositions);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      window.removeEventListener('resize', calculatePositions);
    };
  }, [DOCK_ICONS.length]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dockRef.current) return;

    const dockRect = dockRef.current.getBoundingClientRect();
    const relativeX = e.clientX - dockRect.left;

    setMouseX(relativeX);
  };

  const handleMouseLeave = () => {
    setMouseX(0);
  };

  const handleIconClick = (id: string) => {
    if (id === 'blog') {
      window.location.href = '/blog';
      return;
    }
    openWindow(id);
    window.location.hash = id;
  };

  const isWindowActive = (id: string) => {
    const window = windows[id];
    return window?.isOpen && !window?.isMinimized;
  };

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 2.5 }}
      className="fixed bottom-2 sm:bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 z-[9999] px-2 sm:px-0"
    >
      <div className="relative">
        {/* Background layer - renders behind icons */}
        <div className="absolute inset-0 bg-white/12 backdrop-blur-[30px] border border-white/20 rounded-[16px] sm:rounded-[18px] md:rounded-[20px] shadow-[0_8px_32px_rgba(0,0,0,0.2)] -z-10" />

        {/* Icon container - renders above background */}
        <div
          ref={dockRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative flex items-end gap-2 sm:gap-2.5 md:gap-3 px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 max-w-[calc(100vw-1rem)] overflow-x-auto scrollbar-hide"
        >
          {DOCK_ICONS.map((icon) => (
            <div
              key={icon.id}
              data-dock-icon-id={icon.id}
              className="flex-shrink-0 pointer-events-none"
            >
              <DockIcon
                id={icon.id}
                title={icon.title}
                icon={icon.icon}
                onClick={() => handleIconClick(icon.id)}
                isActive={isWindowActive(icon.id)}
                mouseX={mouseX}
                iconX={iconPositions[icon.id] || 0}
              />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
