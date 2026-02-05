'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useWindowStore } from '@/lib/windowStore';

// Partner Types
type PartnerTier = 'featured' | 'standard' | 'compact';
type PartnerStatus = 'strategic' | 'blockchain' | 'ai-tech';

interface Partner {
  id: string;
  name: string;
  tier: PartnerTier;
  status: PartnerStatus;
  tag: string;
  brandColor: string;
  symbol: string;
  logo?: string;
  hasGrantBadge?: boolean;
}

const PARTNERS: Partner[] = [
  // TIER 1 - STRATEGIC PARTNERS
  {
    id: 'hedera-foundation',
    name: 'Hedera Foundation',
    tier: 'featured',
    status: 'strategic',
    tag: '$50K Grant Recipient',
    brandColor: '#8259EF',
    symbol: 'ℏ',
    logo: '/icons/partners/hedfund.png',
    hasGrantBadge: true,
  },
  {
    id: 'hedera-hashgraph',
    name: 'Hedera Hashgraph',
    tier: 'featured',
    status: 'strategic',
    tag: 'Core DLT Network',
    brandColor: '#8259EF',
    symbol: 'ℏ',
    logo: '/icons/partners/Hedera-Logo-Black.svg',
  },
  {
    id: 'weex',
    name: 'WEEX',
    tier: 'featured',
    status: 'strategic',
    tag: 'Exchange Partner',
    brandColor: '#00D4AA',
    symbol: 'W',
    logo: '/icons/partners/logo_yellow2.png',
  },
  {
    id: 'nvidia',
    name: 'NVIDIA',
    tier: 'featured',
    status: 'strategic',
    tag: 'AI Infrastructure',
    brandColor: '#76B900',
    symbol: '▬',
    logo: '/icons/partners/NVIDIA_logo.svg.png',
  },

  // TIER 2 - BLOCKCHAIN NETWORKS
  {
    id: 'ethereum',
    name: 'Ethereum',
    tier: 'standard',
    status: 'blockchain',
    tag: 'Smart Contracts & DeFi',
    brandColor: '#627EEA',
    symbol: '◆',
    logo: '/icons/partners/ethereum-eth-logo.png',
  },
  {
    id: 'solana',
    name: 'Solana',
    tier: 'standard',
    status: 'blockchain',
    tag: 'High-Performance DApps',
    brandColor: '#9945FF',
    symbol: '◎',
    logo: '/icons/partners/solana-sol-logo.png',
  },
  {
    id: 'avalanche',
    name: 'Avalanche',
    tier: 'standard',
    status: 'blockchain',
    tag: 'Subnet Architecture',
    brandColor: '#E84142',
    symbol: '▲',
    logo: '/icons/partners/avalanche-avax-logo.svg',
  },
  {
    id: 'polkadot',
    name: 'Polkadot',
    tier: 'standard',
    status: 'blockchain',
    tag: 'Cross-Chain Bridges',
    brandColor: '#E6007A',
    symbol: '●●',
    logo: '/icons/partners/polkadot-logo-nkF5RsEE_t.png',
  },
  {
    id: 'massa',
    name: 'Massa',
    tier: 'standard',
    status: 'blockchain',
    tag: 'Autonomous Smart Contracts',
    brandColor: '#1ED760',
    symbol: 'M',
    logo: '/icons/partners/massa_logo.svg',
  },
  {
    id: 'darblockchain',
    name: 'DarBlockchain',
    tier: 'standard',
    status: 'blockchain',
    tag: 'Consulting Network',
    brandColor: '#F59E0B',
    symbol: 'D',
    logo: '/icons/partners/download.png',
  },

  // TIER 3 - AI & TECHNOLOGY
  {
    id: 'together-ai',
    name: 'Together AI',
    tier: 'compact',
    status: 'ai-tech',
    tag: 'LLM Infrastructure',
    brandColor: '#6366F1',
    symbol: '⚡',
    logo: '/icons/partners/together-ai-branding-fullBlack.webp',
  },
  {
    id: 'hashgraph-funds',
    name: 'Hashgraph Funds',
    tier: 'compact',
    status: 'ai-tech',
    tag: 'Investment & Advisory',
    brandColor: '#4F46E5',
    symbol: 'H',
    logo: '/icons/partners/online.png',
  },
];

const PartnerWindow: React.FC = () => {
  const openWindow = useWindowStore((state) => state.openWindow);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const featuredPartners = PARTNERS.filter(p => p.tier === 'featured');
  const standardPartners = PARTNERS.filter(p => p.tier === 'standard');
  const compactPartners = PARTNERS.filter(p => p.tier === 'compact');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25, scale: 0.92 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", damping: 22, stiffness: 200 }
    }
  };

  return (
    <div className="relative bg-gray-50 min-h-full overflow-y-auto">
      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 p-6 sm:p-8 md:p-10"
      >
        {/* HEADER */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-4 tracking-tight">
            Trusted By Industry Leaders
          </h1>
          <p className="text-sm sm:text-base text-gray-600 max-w-[520px] mx-auto leading-relaxed">
            Building with the strongest networks in blockchain, AI, and enterprise technology
          </p>
        </motion.div>

        {/* TIER 1 - STRATEGIC PARTNERS */}
        <motion.section variants={itemVariants} className="mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent max-w-[200px]" />
            <h2 className="px-6 text-[11px] uppercase tracking-[3px] text-[#9333EA] font-semibold">
              Strategic Partners
            </h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-gray-300 to-transparent max-w-[200px]" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredPartners.map((partner, index) => (
              <motion.div
                key={partner.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                onHoverStart={() => setHoveredCard(partner.id)}
                onHoverEnd={() => setHoveredCard(null)}
                className="relative h-[150px] rounded-2xl bg-white border p-5 cursor-pointer transition-all duration-300 group"
                style={{
                  borderColor: hoveredCard === partner.id ? '#D1D5DB' : '#E5E7EB',
                  backgroundColor: hoveredCard === partner.id ? '#F9FAFB' : '#FFFFFF',
                  boxShadow: hoveredCard === partner.id ? `0 0 30px ${partner.brandColor}26` : 'none',
                }}
              >
                {/* Grant Badge */}
                {partner.hasGrantBadge && (
                  <div className="absolute top-3 right-3 text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-md font-bold">
                    🏆 Grant
                  </div>
                )}

                {/* Logo Symbol or Image */}
                <div className="flex items-center justify-center mb-3">
                  {partner.logo ? (
                    <motion.img
                      src={partner.logo}
                      alt={partner.name}
                      className="h-12 object-contain transition-transform duration-300"
                      animate={hoveredCard === partner.id ? { scale: 1.1 } : { scale: 1.0 }}
                    />
                  ) : (
                    <motion.div
                      className="text-5xl font-bold transition-transform duration-300"
                      style={{ color: partner.brandColor }}
                      animate={hoveredCard === partner.id ? { scale: 1.1 } : { scale: 1.0 }}
                    >
                      {partner.symbol}
                    </motion.div>
                  )}
                </div>

                {/* Name */}
                <h3 className="text-sm font-semibold text-[#0F172A] text-center mb-1">
                  {partner.name}
                </h3>

                {/* Tag */}
                <p className="text-xs text-gray-600 text-center mb-3">
                  {partner.tag}
                </p>

                {/* Bottom Accent Line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full"
                  style={{ backgroundColor: partner.brandColor }}
                />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* TIER 2 - BLOCKCHAIN NETWORKS */}
        <motion.section variants={itemVariants} className="mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent max-w-[200px]" />
            <h2 className="px-6 text-[11px] uppercase tracking-[3px] text-[#9333EA] font-semibold">
              Blockchain Networks
            </h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-gray-300 to-transparent max-w-[200px]" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {standardPartners.map((partner) => (
              <motion.div
                key={partner.id}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                onHoverStart={() => setHoveredCard(partner.id)}
                onHoverEnd={() => setHoveredCard(null)}
                className="h-[110px] rounded-xl bg-white border p-3 cursor-pointer transition-all duration-300 flex flex-col items-center justify-center"
                style={{
                  borderColor: hoveredCard === partner.id ? '#D1D5DB' : '#E5E7EB',
                  backgroundColor: hoveredCard === partner.id ? '#F9FAFB' : '#FFFFFF',
                  boxShadow: hoveredCard === partner.id ? `0 0 30px ${partner.brandColor}26` : 'none',
                }}
              >
                {/* Logo Symbol or Image */}
                {partner.logo ? (
                  <motion.img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-9 object-contain mb-2 transition-transform duration-300"
                    animate={hoveredCard === partner.id ? { scale: 1.1 } : { scale: 1.0 }}
                  />
                ) : (
                  <motion.div
                    className="text-4xl font-bold mb-2 transition-transform duration-300"
                    style={{ color: partner.brandColor }}
                    animate={hoveredCard === partner.id ? { scale: 1.1 } : { scale: 1.0 }}
                  >
                    {partner.symbol}
                  </motion.div>
                )}

                {/* Name */}
                <h3 className="text-xs font-semibold text-[#0F172A] text-center mb-0.5">
                  {partner.name}
                </h3>

                {/* Tag */}
                <p className="text-[10px] text-gray-600 text-center line-clamp-1">
                  {partner.tag}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* TIER 3 - AI & TECHNOLOGY */}
        <motion.section variants={itemVariants} className="mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent max-w-[200px]" />
            <h2 className="px-6 text-[11px] uppercase tracking-[3px] text-[#9333EA] font-semibold">
              AI & Technology
            </h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-gray-300 to-transparent max-w-[200px]" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {compactPartners.map((partner) => (
              <motion.div
                key={partner.id}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                onHoverStart={() => setHoveredCard(partner.id)}
                onHoverEnd={() => setHoveredCard(null)}
                className="h-[100px] rounded-xl bg-white border p-4 cursor-pointer transition-all duration-300 flex items-center gap-3"
                style={{
                  borderColor: hoveredCard === partner.id ? '#D1D5DB' : '#E5E7EB',
                  backgroundColor: hoveredCard === partner.id ? '#F9FAFB' : '#FFFFFF',
                  boxShadow: hoveredCard === partner.id ? `0 0 30px ${partner.brandColor}26` : 'none',
                }}
              >
                {/* Logo Symbol or Image */}
                {partner.logo ? (
                  <motion.img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-7 object-contain transition-transform duration-300 flex-shrink-0"
                    animate={hoveredCard === partner.id ? { scale: 1.1 } : { scale: 1.0 }}
                  />
                ) : (
                  <motion.div
                    className="text-3xl font-bold transition-transform duration-300 flex-shrink-0"
                    style={{ color: partner.brandColor }}
                    animate={hoveredCard === partner.id ? { scale: 1.1 } : { scale: 1.0 }}
                  >
                    {partner.symbol}
                  </motion.div>
                )}

                <div className="flex-1">
                  {/* Name */}
                  <h3 className="text-sm font-semibold text-[#0F172A] mb-0.5">
                    {partner.name}
                  </h3>

                  {/* Tag */}
                  <p className="text-xs text-gray-600">
                    {partner.tag}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Become a Partner Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              onClick={() => openWindow('contact')}
              className="h-[100px] rounded-xl border-2 border-dashed border-gray-300 hover:border-gray-400 p-4 cursor-pointer transition-all duration-300 flex flex-col items-center justify-center group hover:bg-gray-50"
            >
              <motion.div
                className="text-2xl text-gray-400 group-hover:text-gray-600 mb-1 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                +
              </motion.div>
              <p className="text-xs text-gray-600 font-medium">
                Become a Partner
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* BOTTOM BANNER */}
        <motion.div
          variants={itemVariants}
          className="max-w-2xl mx-auto rounded-xl border border-gray-200 bg-gray-100 p-5 text-center"
        >
          <p className="text-sm font-medium text-[#0F172A] mb-1">
            🏆 Backed by a $50,000 Hedera Foundation Grant
          </p>
          <p className="text-xs text-gray-600">
            Partnered across 6+ blockchain networks
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PartnerWindow;
