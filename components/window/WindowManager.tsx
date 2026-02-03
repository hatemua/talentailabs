'use client';

import React from 'react';
import { useWindowStore } from '@/lib/windowStore';
import { Window } from './Window';

// Dynamic imports for window content
const AboutWindow = React.lazy(() => import('../windows/AboutWindow'));
const ServicesWindow = React.lazy(() => import('../windows/ServicesWindow'));
const PortfolioWindow = React.lazy(() => import('../windows/PortfolioWindow'));
const TalentAIWindow = React.lazy(() => import('../windows/TalentAIWindow'));
const TeamWindow = React.lazy(() => import('../windows/TeamWindow'));
const TechStackWindow = React.lazy(() => import('../windows/TechStackWindow'));
const BlogWindow = React.lazy(() => import('../windows/BlogWindow'));
const ContactWindow = React.lazy(() => import('../windows/ContactWindow'));
const TerminalWindow = React.lazy(() => import('../windows/TerminalWindow'));
const READMEWindow = React.lazy(() => import('../windows/READMEWindow'));

const WINDOW_COMPONENTS: Record<string, React.LazyExoticComponent<React.FC>> = {
  about: AboutWindow,
  services: ServicesWindow,
  portfolio: PortfolioWindow,
  talentai: TalentAIWindow,
  team: TeamWindow,
  tech: TechStackWindow,
  blog: BlogWindow,
  contact: ContactWindow,
  terminal: TerminalWindow,
  readme: READMEWindow,
};

export const WindowManager: React.FC = () => {
  const windows = useWindowStore((state) => state.windows);

  return (
    <>
      {Object.entries(windows).map(([id, config]) => {
        const WindowContent = WINDOW_COMPONENTS[id];

        if (!WindowContent || !config.isOpen) {
          return null;
        }

        return (
          <Window key={id} id={id}>
            <React.Suspense
              fallback={
                <div className="flex items-center justify-center h-full">
                  <div className="text-[#86868B] text-sm">Loading...</div>
                </div>
              }
            >
              <WindowContent />
            </React.Suspense>
          </Window>
        );
      })}
    </>
  );
};
