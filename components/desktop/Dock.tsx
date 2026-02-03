'use client';

import React, { useRef, useState } from 'react';
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

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dockRef.current) return;

    const dockRect = dockRef.current.getBoundingClientRect();
    const relativeX = e.clientX - dockRect.left;

    setMouseX(relativeX);

    // Calculate icon positions if not already done
    if (Object.keys(iconPositions).length === 0) {
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
    }
  };

  const handleMouseLeave = () => {
    setMouseX(0);
  };

  const handleIconClick = (id: string) => {
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
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[9999]"
    >
      <div
        ref={dockRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="
          flex items-end gap-3 px-4 py-3
          bg-white/12 backdrop-blur-[30px]
          border border-white/20
          rounded-[20px]
          shadow-[0_8px_32px_rgba(0,0,0,0.2)]
        "
      >
        {DOCK_ICONS.map((icon) => (
          <div
            key={icon.id}
            data-dock-icon-id={icon.id}
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
    </motion.div>
  );
};
