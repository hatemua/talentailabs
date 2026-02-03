'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface TrafficLightsProps {
  onClose: () => void;
  onMinimize: () => void;
  onMaximize: () => void;
  isMaximized?: boolean;
}

export const TrafficLights: React.FC<TrafficLightsProps> = ({
  onClose,
  onMinimize,
  onMaximize,
  isMaximized = false,
}) => {
  const [hoveredButton, setHoveredButton] = React.useState<string | null>(null);

  const buttonVariants = {
    idle: { scale: 1 },
    hover: { scale: 1.1 },
  };

  return (
    <div className="flex items-center gap-2">
      {/* Close */}
      <motion.button
        variants={buttonVariants}
        initial="idle"
        whileHover="hover"
        onHoverStart={() => setHoveredButton('close')}
        onHoverEnd={() => setHoveredButton(null)}
        onClick={onClose}
        className="w-3 h-3 rounded-full bg-[#FF5F56] hover:bg-[#FF5F56]/90 relative group"
        aria-label="Close"
      >
        {hoveredButton === 'close' && (
          <span className="absolute inset-0 flex items-center justify-center text-[8px] text-black/50">
            ×
          </span>
        )}
      </motion.button>

      {/* Minimize */}
      <motion.button
        variants={buttonVariants}
        initial="idle"
        whileHover="hover"
        onHoverStart={() => setHoveredButton('minimize')}
        onHoverEnd={() => setHoveredButton(null)}
        onClick={onMinimize}
        className="w-3 h-3 rounded-full bg-[#FFBD2E] hover:bg-[#FFBD2E]/90 relative group"
        aria-label="Minimize"
      >
        {hoveredButton === 'minimize' && (
          <span className="absolute inset-0 flex items-center justify-center text-[8px] text-black/50">
            −
          </span>
        )}
      </motion.button>

      {/* Maximize/Restore */}
      <motion.button
        variants={buttonVariants}
        initial="idle"
        whileHover="hover"
        onHoverStart={() => setHoveredButton('maximize')}
        onHoverEnd={() => setHoveredButton(null)}
        onClick={onMaximize}
        className="w-3 h-3 rounded-full bg-[#27C93F] hover:bg-[#27C93F]/90 relative group"
        aria-label={isMaximized ? 'Restore' : 'Maximize'}
      >
        {hoveredButton === 'maximize' && (
          <span className="absolute inset-0 flex items-center justify-center text-[8px] text-black/50">
            {isMaximized ? '⤡' : '⤢'}
          </span>
        )}
      </motion.button>
    </div>
  );
};
