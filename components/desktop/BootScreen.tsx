'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BootScreenProps {
  onComplete: () => void;
}

export const BootScreen: React.FC<BootScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState<'logo' | 'loading' | 'transition' | 'complete'>('logo');

  useEffect(() => {
    // Check if boot has already been shown this session
    const hasBooted = sessionStorage.getItem('talentai_boot_complete');
    if (hasBooted) {
      onComplete();
      return;
    }

    // Stage 1: Show logo (500ms)
    const logoTimer = setTimeout(() => {
      setStage('loading');
    }, 500);

    // Stage 2: Loading bar (1000ms)
    const loadingTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(loadingTimer);
          setTimeout(() => {
            setStage('transition');
            setTimeout(() => {
              setStage('complete');
              sessionStorage.setItem('talentai_boot_complete', 'true');
              onComplete();
            }, 500);
          }, 200);
          return 100;
        }
        return prev + 2;
      });
    }, 20);

    return () => {
      clearTimeout(logoTimer);
      clearInterval(loadingTimer);
    };
  }, [onComplete]);

  const handleSkip = () => {
    sessionStorage.setItem('talentai_boot_complete', 'true');
    setStage('complete');
    onComplete();
  };

  if (stage === 'complete') {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        onClick={handleSkip}
        className="fixed inset-0 z-[99999] bg-black flex flex-col items-center justify-center cursor-pointer"
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: stage === 'transition' ? 0 : 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-8"
        >
          {/* Logo Icon */}
          <div className="relative">
            <motion.div
              animate={{
                rotate: stage === 'loading' ? 360 : 0,
              }}
              transition={{
                duration: 2,
                repeat: stage === 'loading' ? Infinity : 0,
                ease: 'linear',
              }}
              className="w-24 h-24 bg-gradient-to-br from-[#1E40AF] to-[#7C3AED] rounded-3xl flex items-center justify-center shadow-2xl"
            >
              <div className="w-16 h-16 border-4 border-white rounded-2xl" />
            </motion.div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full border-4 border-black" />
          </div>

          {/* Logo Text */}
          <div className="flex flex-col items-center">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl font-black text-white tracking-tight"
            >
              TALENTAI
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-sm font-bold text-blue-400 tracking-[0.3em] uppercase mt-1"
            >
              Labs
            </motion.p>
          </div>

          {/* Loading Bar */}
          {stage !== 'logo' && (
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 200 }}
              className="h-1 bg-white/20 rounded-full overflow-hidden"
            >
              <motion.div
                className="h-full bg-gradient-to-r from-[#1E40AF] to-[#7C3AED]"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </motion.div>
          )}
        </motion.div>

        {/* Skip hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 text-white/50 text-sm"
        >
          Click anywhere to skip
        </motion.p>
      </motion.div>
    </AnimatePresence>
  );
};
