'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Rocket, DollarSign, Bot, Link, Shield, Plus } from 'lucide-react';

const projects = [
  {
    id: 1,
    tag: '🚀 Our Flagship Product',
    title: 'TalentAI — AI-Powered Recruitment That Replaces Interviews',
    tagColor: 'bg-teal-500',
    icon: Rocket,
    description: `Your HR team spends weeks screening candidates. Scheduling calls. Asking the same questions over and over. After dozens of interviews, you're still not confident you picked the right person.

TalentAI eliminates this bottleneck entirely.

Our AI agents handle the full screening process — they interview every candidate, validate technical skills through live assessments, evaluate problem-solving ability and communication, and rank candidates by best fit for your specific role and team culture.

Your team only meets candidates who are already pre-qualified. No more wasted interviews. No more gut-feeling hires. Just the right person, faster.`,
    results: [
      '45,000+ candidates on the platform',
      'Save 80% of screening time',
      'AI agents interview 24/7, no scheduling headaches',
      'Blockchain-verified skill credentials',
      'Works for tech, finance, operations — any role',
    ],
    howItWorks: [
      {
        step: '1. Define Your Role',
        description:
          'Tell TalentAI what you need. Skills, experience, culture fit. Our AI understands context, not just keywords.',
      },
      {
        step: '2. AI Agents Interview',
        description:
          'Our AI conducts structured interviews with every applicant. Technical assessments, behavioral questions, skill validation. Every candidate gets a fair, thorough evaluation.',
      },
      {
        step: '3. Candidates Ranked',
        description:
          'AI analyzes every response and scores candidates on skill match, experience relevance, and team fit. Results verified on blockchain. No bias. No guessing.',
      },
      {
        step: '4. You Meet Only the Best',
        description:
          'Your hiring team interviews only the top-ranked candidates. Typically 3-5 people instead of 50. Better candidates. Less time. Confident decisions.',
      },
    ],
    tech: 'Hedera, AI/ML, React, Node.js',
    cta: 'Try TalentAI',
    link: '#contact',
  },
  {
    id: 2,
    tag: '💰 DeFi',
    title: 'Decentralized Lending & Borrowing Protocol',
    tagColor: 'bg-blue-500',
    icon: DollarSign,
    description: `A complete decentralized lending and borrowing protocol built from the ground up. Users deposit crypto assets to earn yield. Borrowers access liquidity against collateral. Smart contracts handle everything — interest rates, liquidation, governance — with zero human intervention.

Built with institutional-grade security. Audited. Battle-tested. Managing real assets on mainnet.`,
    results: [
      'Algorithmic interest rate models',
      'Multi-collateral support',
      'Automated liquidation engine',
      'Governance token and DAO voting',
      'Oracle integration for price feeds',
      'Comprehensive security audit',
    ],
    tech: 'Solidity, Ethereum, Chainlink, React',
    cta: 'Build Your DeFi Protocol',
    link: '#contact',
  },
  {
    id: 3,
    tag: '🤖 AI Trading',
    title: 'MARIPOSA — Autonomous Trading Bot on Solana',
    tagColor: 'bg-purple-500',
    icon: Bot,
    description: `An autonomous trading system built for the Solana ecosystem. MARIPOSA monitors markets in real-time, identifies opportunities using multi-LLM analysis, executes trades with sub-second speed, and manages risk automatically.

Not a simple bot with hardcoded rules — this is an AI-powered trading engine that adapts to market conditions, learns from results, and operates 24/7 without human intervention.`,
    results: [
      'Multi-LLM decision engine (multiple AI models)',
      'Real-time Solana DEX monitoring',
      'Automated risk management and position sizing',
      'Sub-second trade execution',
      'Backtesting and strategy optimization',
      'Performance analytics dashboard',
    ],
    tech: 'Python, Solana, AI/ML, Real-time APIs',
    cta: 'Discuss Trading Systems',
    link: '#contact',
  },
  {
    id: 4,
    tag: '🔗 Enterprise Blockchain',
    title: 'Blockchain Supply Chain — Fish Industry Traceability',
    tagColor: 'bg-cyan-500',
    icon: Link,
    description: `End-to-end traceability platform for the fishing industry. Every catch is recorded on blockchain — from ocean to plate. Consumers scan a QR code and see the complete journey: where it was caught, when, by whom, how it was processed, and when it arrived.

Built for regulatory compliance, food safety, and consumer trust. Proving that blockchain solves real problems in traditional industries.`,
    results: [
      'Immutable catch-to-consumer tracking',
      'QR code verification for consumers',
      'IoT sensor integration (temperature, location)',
      'Regulatory compliance reporting',
      'Multi-stakeholder dashboard',
      'Mobile app for field workers',
    ],
    tech: 'Hedera, IoT, React Native, Node.js',
    cta: 'Explore Enterprise Solutions',
    link: '#contact',
  },
  {
    id: 5,
    tag: '🔐 Blockchain Infrastructure',
    title: 'Multi-Chain Cryptocurrency Wallets',
    tagColor: 'bg-emerald-500',
    icon: Shield,
    description: `Secure, non-custodial crypto wallets supporting multiple blockchain networks. We've built wallet solutions for both retail consumers and enterprise clients — with DeFi integration, token management, staking, and institutional-grade security.`,
    results: [
      'Multi-chain support (Solana, Ethereum, Hedera)',
      'Non-custodial architecture',
      'DeFi integration (swap, stake, lend)',
      'Biometric authentication',
      'Enterprise key management',
      'White-label solutions available',
    ],
    tech: 'React Native, Solana, Ethereum, Security',
    cta: 'Build Your Wallet',
    link: '#contact',
  },
  {
    id: 6,
    tag: 'And More...',
    title: 'Additional Projects Preview',
    tagColor: 'bg-slate-500',
    icon: Plus,
    description: `We've shipped 170+ projects including NFT marketplaces, token launch platforms, DAO governance systems, payment gateways, and custom enterprise solutions. Every project is built to production standards.`,
    results: [],
    tech: 'Various technologies across blockchain & AI',
    cta: 'See All Projects',
    link: '#contact',
  },
];

const ProjectCard = ({ project, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = project.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_40px_-12px_rgba(0,0,0,0.12)] transition-all duration-500 overflow-hidden"
    >
      {/* Tag & Icon */}
      <div className="flex items-center justify-between mb-4">
        <span className={`px-3 py-1 text-xs font-bold text-white rounded-full ${project.tagColor}`}>
          {project.tag}
        </span>
        <Icon className="w-8 h-8 text-slate-300 group-hover:text-[#1E40AF] transition-colors" />
      </div>

      {/* Title */}
      <h3 className="text-xl md:text-2xl font-bold text-[#0F172A] mb-4 leading-tight">{project.title}</h3>

      {/* Description - truncated or full */}
      <div className="text-[#64748B] text-sm leading-relaxed mb-4">
        {isExpanded ? (
          <p className="whitespace-pre-line">{project.description}</p>
        ) : (
          <p>{project.description.slice(0, 200)}...</p>
        )}
      </div>

      {/* Results/Features */}
      {isExpanded && project.results.length > 0 && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mb-6"
        >
          <h4 className="text-sm font-bold text-[#0F172A] mb-3">
            {project.id === 1 ? 'Key Results:' : 'Key Features:'}
          </h4>
          <ul className="space-y-2">
            {project.results.map((result, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-[#64748B]">
                <span className="text-[#10B981] mt-1">✓</span>
                <span>{result}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* How It Works (only for TalentAI) */}
      {isExpanded && project.howItWorks && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mb-6"
        >
          <h4 className="text-sm font-bold text-[#0F172A] mb-4">How It Works:</h4>
          <div className="space-y-4">
            {project.howItWorks.map((item, idx) => (
              <div key={idx} className="border-l-2 border-[#1E40AF] pl-4">
                <h5 className="text-sm font-semibold text-[#0F172A] mb-1">{item.step}</h5>
                <p className="text-xs text-[#64748B]">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Tech Stack */}
      <div className="mb-6">
        <span className="text-xs font-semibold text-slate-400">Tech: </span>
        <span className="text-xs text-slate-600">{project.tech}</span>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <a
          href={project.link}
          className="flex items-center gap-2 px-6 py-3 bg-[#0F172A] text-white text-sm font-semibold rounded-xl hover:bg-[#1E40AF] transition-colors"
        >
          {project.cta}
          <ArrowRight className="w-4 h-4" />
        </a>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-sm font-semibold text-[#1E40AF] hover:text-[#7C3AED] transition-colors"
        >
          {isExpanded ? 'Show Less' : 'Learn More'}
        </button>
      </div>
    </motion.div>
  );
};

export const PortfolioEnhanced = () => {
  return (
    <section id="portfolio" className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[10px] font-black uppercase tracking-[0.3em] text-[#1E40AF] mb-4"
          >
            Portfolio
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F172A] leading-[1.2] tracking-tight mb-6"
          >
            What We've Shipped
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-base md:text-lg text-[#64748B] leading-relaxed"
          >
            Real products. Real users. Real impact.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
