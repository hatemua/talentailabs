'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useWindowStore } from '@/lib/windowStore';
import { TrafficLights } from './TrafficLights';

interface WindowProps {
  id: string;
  children: React.ReactNode;
}

export const Window: React.FC<WindowProps> = ({ id, children }) => {
  const windowConfig = useWindowStore((state) => state.windows[id]);
  const focusWindow = useWindowStore((state) => state.focusWindow);
  const closeWindow = useWindowStore((state) => state.closeWindow);
  const minimizeWindow = useWindowStore((state) => state.minimizeWindow);
  const maximizeWindow = useWindowStore((state) => state.maximizeWindow);

  if (!windowConfig || !windowConfig.isOpen || windowConfig.isMinimized) {
    return null;
  }

  const handleMouseDown = () => {
    if (!windowConfig.isFocused) {
      focusWindow(id);
    }
  };

  const isMaximized = windowConfig.isMaximized || false;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.2,
          ease: 'easeOut',
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            closeWindow(id);
          }
        }}
        className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-start justify-center pt-16"
        style={{
          zIndex: windowConfig.zIndex,
        }}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{
            duration: 0.2,
            ease: 'easeOut',
          }}
          onMouseDown={handleMouseDown}
          className={`
            rounded-xl overflow-hidden bg-white
            ${windowConfig.isFocused
              ? 'shadow-[0_25px_50px_rgba(0,0,0,0.35)]'
              : 'shadow-[0_25px_50px_rgba(0,0,0,0.2)] opacity-95'
            }
            transition-shadow duration-200
          `}
          style={{
            width: windowConfig.size.width,
            maxHeight: 'calc(100vh - 120px)',
            marginTop: '20px',
          }}
        >
          {/* Title Bar */}
          <div
            className="bg-[#F5F5F7] border-b border-gray-200 px-4 py-3 flex items-center justify-between select-none"
          >
            <div className="flex items-center gap-3">
              <TrafficLights
                onClose={() => closeWindow(id)}
                onMinimize={() => minimizeWindow(id)}
                onMaximize={() => maximizeWindow(id)}
                isMaximized={isMaximized}
              />
            </div>

            <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
              {windowConfig.icon && (
                <img
                  src={windowConfig.icon}
                  alt=""
                  className="w-4 h-4"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              )}
              <span className="text-sm font-semibold text-[#1D1D1F]">
                {windowConfig.title}
              </span>
            </div>

            <div className="w-[60px]" /> {/* Spacer for centering */}
          </div>

          {/* Window Content */}
          <div className="bg-white overflow-auto" style={{ maxHeight: 'calc(100vh - 180px)' }}>
            {children}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
