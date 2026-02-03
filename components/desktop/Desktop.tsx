'use client';

import React, { useEffect } from 'react';
import { useWindowStore } from '@/lib/windowStore';
import { WindowManager } from '../window/WindowManager';

export const Desktop: React.FC = () => {
  const openWindow = useWindowStore((state) => state.openWindow);

  // Handle hash-based routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        const [windowId, ...rest] = hash.split('/');
        if (windowId) {
          openWindow(windowId);
        }
      }
    };

    // Open window on initial load if hash exists
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [openWindow]);

  return (
    <div
      data-desktop
      className="fixed inset-0 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/images/martin-martz-W0NRebXbsjM-unsplash.jpg)',
      }}
    >
      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/10" />

      {/* Hero Card - Left Side */}
      <div className="absolute top-12 left-8 z-10 pointer-events-auto">
        <div className="bg-[#F5E6D3]/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl max-w-md border border-white/30">
          {/* Logo/Icon */}
          <div className="w-16 h-16 mb-6 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center">
            <div className="w-10 h-10 border-4 border-white rounded-full" />
          </div>

          {/* Headline */}
          <h1 className="text-3xl font-bold text-[#2D1B1B] mb-3 leading-tight">
            Blockchain & AI
            <br />
            <span className="text-[#1D1D1F]">Development Agency That Delivers</span>
          </h1>

          {/* Description */}
          <p className="text-base text-[#5A4A42] mb-6 leading-relaxed">
            We're the technical team behind successful Web3 startups and enterprise blockchain projects.
            From smart contracts to trading bots, DeFi protocols to custom AI solutions — we turn ambitious
            ideas into production-ready products. Hedera Foundation backed. 12+ years of shipping code that works.
          </p>

          {/* Status Badge */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-[#2D1B1B] font-medium">Available for work</span>
          </div>

          {/* Feature Badges */}
          <div className="space-y-3 text-sm text-[#5A4A42]">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#E85D75]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">Free consultation</span>
            </div>

            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#E85D75]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">24h response</span>
            </div>

            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#E85D75]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">EU-based team</span>
            </div>
          </div>
        </div>
      </div>

      {/* Window Manager */}
      <WindowManager />
    </div>
  );
};
