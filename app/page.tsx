'use client';

import React, { useState } from 'react';
import { BootScreen } from '../components/desktop/BootScreen';
import { Desktop } from '../components/desktop/Desktop';
import { TopBar } from '../components/desktop/TopBar';
import { Dock } from '../components/desktop/Dock';

export default function Home() {
  const [bootComplete, setBootComplete] = useState(false);

  return (
    <>
      {!bootComplete && <BootScreen onComplete={() => setBootComplete(true)} />}

      {bootComplete && (
        <main className="relative w-full h-screen overflow-hidden">
          <TopBar />
          <Desktop />
          <Dock />
        </main>
      )}
    </>
  );
}
