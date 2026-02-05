export type ProjectType = 'featured' | 'standard' | 'compact';
export type ProjectCategory = 'ai-trading' | 'defi' | 'enterprise' | 'mobile' | 'blockchain';
export type ProjectStatus = 'live' | 'beta' | 'delivered' | 'development';

export interface Project {
  id: string;
  type: ProjectType;
  category: ProjectCategory;
  status: ProjectStatus;
  icon: string; // For featured: image path (e.g., '/logos/mariposa.png'), for standard/compact: lucide icon name (e.g., 'Landmark')
  title: string;
  tagline: string;
  description: string;
  keyFeatures?: string[];
  keyStats?: string[];
  tech: string[];
  gradient?: [string, string];
  link?: string;
  logo?: string; // Optional: image path for logo (overrides icon for featured cards)
}

export const PROJECTS: Project[] = [
  {
    id: 'talentai',
    type: 'featured',
    category: 'ai-trading',
    status: 'live',
    icon: 'Brain',
    logo: '/icons/talentai.png',
    title: 'TalentAI Platform',
    tagline: 'AI agents that interview, assess, and rank candidates — so you only meet the best.',
    description: 'Our flagship product. TalentAI replaces manual hiring pipelines with AI agents that conduct structured interviews 24/7, validate technical skills through live assessments, and deliver a ranked shortlist. Companies save 80% of screening time.',
    keyStats: ['45,000+ developers', '80% time saved', '24/7 AI interviews', 'Hedera Foundation backed'],
    keyFeatures: [
      'Post → AI Interviews',
      'Skill Validation',
      'Culture Fit Analysis',
      'Automated Ranking',
    ],
    tech: ['Hedera', 'AI/LLM', 'React', 'Node.js', 'PostgreSQL'],
    gradient: ['#7C3AED', '#4F46E5'],
    link: 'app.talentai.bid',
  },
  {
    id: 'mariposa',
    type: 'standard',
    category: 'ai-trading',
    status: 'beta',
    icon: 'Butterfly',
    logo: '/logos/mariposa.png',
    title: 'MARIPOSA',
    tagline: 'Autonomous AI trading bot with multi-LLM brain',
    description: '4 specialized AI experts analyze markets in parallel — Fibonacci, S/R, Liquidity, Market Bias — reach consensus, and execute trades with sniper precision. Built for Solana.',
    keyFeatures: [
      '4 LLM Expert Consensus',
      'Multi-coin: BTC, ETH, SOL, DOGE',
      'Grade-rated setups (A/B/C)',
      'Real-time execution',
    ],
    tech: ['Node.js', 'TypeScript', 'Llama 3.1', 'Redis', 'Solana'],
  },
  {
    id: 'defi-lending',
    type: 'standard',
    category: 'defi',
    status: 'delivered',
    icon: 'Landmark',
    title: 'DeFi Lending Protocol',
    tagline: 'Algorithmic lending with auto-liquidation',
    description: 'Complete decentralized lending platform with algorithmic interest rates, multi-collateral support, flash loans, and automated liquidation engine.',
    keyFeatures: [
      'Algorithmic interest rates',
      'Multi-collateral + LTV management',
      'Flash loan support',
      'Oracle-powered price feeds',
    ],
    tech: ['Solidity', 'Hardhat', 'Chainlink', 'OpenZeppelin', 'React'],
  },
  {
    id: 'supply-chain',
    type: 'standard',
    category: 'enterprise',
    status: 'delivered',
    icon: 'Package',
    title: 'Supply Chain — Fish Industry',
    tagline: 'Ocean to plate, every step on-chain',
    description: 'Blockchain traceability for the fishing industry. QR code verification, IoT sensor data, immutable audit trail from catch to consumer plate.',
    keyFeatures: [
      'Full chain: Catch → Process → Transport → Retail',
      'QR code scanning at every stage',
      'IoT integration (temp, GPS)',
      'Consumer verification app',
    ],
    tech: ['Hedera', 'IoT', 'Node.js', 'React Native', 'QR Systems'],
  },
  {
    id: 'dao-governance',
    type: 'standard',
    category: 'blockchain',
    status: 'delivered',
    icon: 'Scale',
    title: 'DAO Governance Platform',
    tagline: "Decentralized decisions with ve(3,3) tokenomics",
    description: 'On-chain governance with proposal management, token-weighted voting, treasury controls, and ve(3,3) locking for long-term community alignment.',
    keyFeatures: [
      'On-chain proposals + voting',
      've(3,3) lock model',
      'Multi-sig treasury',
      'Delegation system',
    ],
    tech: ['Solidity', 'Governor (OZ)', 'Snapshot', 'React', 'The Graph'],
  },
  {
    id: 'wallets',
    type: 'standard',
    category: 'mobile',
    status: 'delivered',
    icon: 'Wallet',
    title: 'Multi-Chain Crypto Wallets',
    tagline: 'One app, every chain, your keys',
    description: 'Non-custodial wallets supporting Solana, Ethereum, Hedera, Polygon, and BNB. Built-in DEX, DeFi, NFT gallery, and WalletConnect.',
    keyFeatures: [
      '5+ networks supported',
      'Built-in DEX aggregator',
      'NFT management',
      'Biometric auth',
    ],
    tech: ['React Native', 'Solana Web3.js', 'Ethers.js', 'Hedera SDK'],
  },
  {
    id: 'ai-liquidity',
    type: 'featured',
    category: 'defi',
    status: 'delivered',
    icon: 'Activity',
    title: 'AI-Powered Liquidity Management',
    tagline: 'Machine learning meets concentrated liquidity — auto-rebalance, max yield, min IL.',
    description: 'AI predicts optimal price ranges for concentrated liquidity positions on Uniswap V3 and Raydium. Auto-rebalances positions, minimizes impermanent loss, maximizes fee yield.',
    keyFeatures: [
      'AI price range prediction',
      'Auto-rebalancing engine',
      'Impermanent loss minimization',
      'Multi-DEX support',
    ],
    tech: ['Python', 'TensorFlow', 'Solidity', 'Uniswap V3', 'React'],
    gradient: ['#2563EB', '#0891B2'],
  },
  {
    id: 'gold-token',
    type: 'compact',
    category: 'blockchain',
    status: 'development',
    icon: 'Gem',
    title: 'Gold Tokenization Platform',
    tagline: 'Fractional gold ownership, on-chain proof of reserves',
    description: '',
    tech: ['Hedera', 'Solidity', 'KYC/AML APIs'],
  },
  {
    id: 'nft-marketplace',
    type: 'compact',
    category: 'blockchain',
    status: 'delivered',
    icon: 'Palette',
    title: 'NFT Marketplace',
    tagline: 'Mint, auction, trade — with royalty enforcement',
    description: '',
    tech: ['Hedera', 'Ethereum', 'React', 'IPFS'],
  },
  {
    id: 'payment-gateway',
    type: 'compact',
    category: 'defi',
    status: 'delivered',
    icon: 'CreditCard',
    title: 'Stablecoin Payment Gateway',
    tagline: 'Crypto payments for merchants, instant fiat settlement',
    description: '',
    tech: ['Solana', 'Ethereum', 'Node.js', 'Stripe Integration'],
  },
  {
    id: 'explorer',
    type: 'compact',
    category: 'blockchain',
    status: 'delivered',
    icon: 'Search',
    title: 'Custom Blockchain Explorer',
    tagline: 'Real-time transactions, analytics, contract verification',
    description: '',
    tech: ['Node.js', 'React', 'GraphQL', 'WebSocket'],
  },
  {
    id: 'launchpad',
    type: 'compact',
    category: 'defi',
    status: 'delivered',
    icon: 'Rocket',
    title: 'Token Launchpad',
    tagline: 'Fair launch IDO/IEO with vesting and KYC',
    description: '',
    tech: ['Solidity', 'React', 'Merkle Proofs', 'KYC API'],
  },
];

export const CATEGORIES = [
  { id: 'all', label: 'All Projects', count: PROJECTS.length },
  { id: 'ai-trading', label: 'AI & Trading', count: PROJECTS.filter(p => p.category === 'ai-trading').length },
  { id: 'defi', label: 'DeFi', count: PROJECTS.filter(p => p.category === 'defi').length },
  { id: 'enterprise', label: 'Enterprise', count: PROJECTS.filter(p => p.category === 'enterprise').length },
  { id: 'mobile', label: 'Mobile', count: PROJECTS.filter(p => p.category === 'mobile').length },
  { id: 'blockchain', label: 'Blockchain', count: PROJECTS.filter(p => p.category === 'blockchain').length },
];

export const CATEGORY_GRADIENTS: Record<ProjectCategory, [string, string]> = {
  'ai-trading': ['#7C3AED', '#4F46E5'],
  'defi': ['#2563EB', '#0891B2'],
  'enterprise': ['#059669', '#0D9488'],
  'mobile': ['#EA580C', '#D97706'],
  'blockchain': ['#4338CA', '#6366F1'],
};
