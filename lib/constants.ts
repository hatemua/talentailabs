// Constants for macOS desktop OS

export const WINDOW_DEFAULTS = {
  about: {
    title: 'About TalentAI Labs',
    icon: '/icons/about.svg',
    size: { width: 900, height: 700 },
    minSize: { width: 600, height: 400 },
    hasSidebar: false,
    hasTabs: false,
  },
  services: {
    title: 'Services',
    icon: '/icons/services.svg',
    size: { width: 1000, height: 750 },
    minSize: { width: 700, height: 500 },
    hasSidebar: false,
    hasTabs: false,
  },
  portfolio: {
    title: 'Portfolio',
    icon: '/icons/portfolio.svg',
    size: { width: 1100, height: 800 },
    minSize: { width: 800, height: 600 },
    hasSidebar: false,
    hasTabs: true,
  },
  talentai: {
    title: 'TalentAI Platform',
    icon: '/icons/talentai.svg',
    size: { width: 950, height: 750 },
    minSize: { width: 700, height: 500 },
    hasSidebar: false,
    hasTabs: false,
  },
  team: {
    title: 'Team',
    icon: '/icons/team.svg',
    size: { width: 900, height: 700 },
    minSize: { width: 600, height: 400 },
    hasSidebar: false,
    hasTabs: false,
  },
  tech: {
    title: 'Technologies',
    icon: '/icons/tech.svg',
    size: { width: 1000, height: 750 },
    minSize: { width: 700, height: 500 },
    hasSidebar: false,
    hasTabs: false,
  },
  blog: {
    title: 'Blog',
    icon: '/icons/blog.svg',
    size: { width: 900, height: 800 },
    minSize: { width: 700, height: 600 },
    hasSidebar: true,
    hasTabs: false,
  },
  contact: {
    title: 'Contact',
    icon: '/icons/contact.svg',
    size: { width: 700, height: 600 },
    minSize: { width: 500, height: 400 },
    hasSidebar: false,
    hasTabs: false,
  },
  terminal: {
    title: 'Terminal',
    icon: '/icons/terminal.svg',
    size: { width: 800, height: 500 },
    minSize: { width: 600, height: 300 },
    hasSidebar: false,
    hasTabs: false,
  },
  readme: {
    title: 'README.txt',
    icon: '/icons/readme.svg',
    size: { width: 600, height: 400 },
    minSize: { width: 400, height: 300 },
    hasSidebar: false,
    hasTabs: false,
  },
  partners: {
    title: 'Our Partners & Ecosystem',
    icon: '/icons/partners.svg',
    size: { width: 920, height: 620 },
    minSize: { width: 600, height: 400 },
    hasSidebar: false,
    hasTabs: false,
  },
};

// Desktop icons removed - all navigation now via dock (5 icons only)

export const DOCK_ICONS = [
  { id: 'about', title: 'About', icon: '/icons/about.png' },
  { id: 'services', title: 'Services', icon: '/icons/services.png' },
  { id: 'portfolio', title: 'Portfolio', icon: '/icons/portfolio.png' },
  { id: 'partners', title: 'Partners', icon: '/icons/partners.png' },
  { id: 'contact', title: 'Contact', icon: '/icons/contact.png' },
];

export const WALLPAPERS = [
  {
    id: 'default',
    name: 'TalentAI Gradient',
    gradient: 'linear-gradient(135deg, #0A1628 0%, #2D1B69 40%, #0E4D64 100%)',
  },
  {
    id: 'purple',
    name: 'Purple Dreams',
    gradient: 'linear-gradient(135deg, #1E1B4B 0%, #4C1D95 50%, #701A75 100%)',
  },
  {
    id: 'blue',
    name: 'Ocean Deep',
    gradient: 'linear-gradient(135deg, #0C1E3D 0%, #1E3A8A 50%, #0369A1 100%)',
  },
];

export const TERMINAL_COMMANDS = {
  help: `Available commands:
  about       - Company information
  team        - Meet the team
  services    - What we build
  portfolio   - View our projects
  skills      - Technical expertise
  contact     - Get in touch
  talentai    - Open TalentAI platform info
  coffee      - Brew some coffee
  blockchain  - Blockchain knowledge
  hire        - Start a project
  clear       - Clear terminal
  whoami      - Who are you?
  sudo        - Escalate privileges (jk)
  hello       - Greetings
  matrix      - Enter the matrix
  ls          - List files
  cat         - Read file
  pwd         - Print working directory
  date        - Current date and time
  neofetch    - System information`,

  about: `TalentAI Labs — Blockchain & AI Development Agency

We build what others can't. Based in Vilnius, Lithuania 🇱🇹
36+ years combined engineering experience
Hedera Foundation backed • $50K grant recipient

Core expertise:
• Blockchain: Smart contracts, DeFi, NFTs, wallets
• AI: Trading bots, LLM integrations, autonomous agents
• Full-stack: Web3 dApps, enterprise platforms

hello@talentailabs.com`,

  team: `The Team:

Hatem Azaiez — Co-Founder & CTO
  • 15+ years blockchain & AI development
  • Built MARIPOSA autonomous trading system
  • Previously: FinTech, DeFi protocols

Mohamed Mnif — Co-Founder & Lead Engineer
  • 12+ years full-stack & blockchain
  • Smart contract security expert
  • Previously: Enterprise blockchain solutions

Jaafer Saied — Co-Founder & Lead Developer
  • 9+ years software engineering
  • Frontend architecture specialist
  • Previously: SaaS platforms, Web3 interfaces`,

  services: `Our Services:

[1] Smart Contracts & Blockchain Infrastructure
    → Solidity, Rust, Hedera SDK
    → DeFi protocols, NFT platforms, DAOs
    → Security audits & optimization

[2] AI Solutions
    → Autonomous trading agents
    → LLM integrations & RAG systems
    → Predictive analytics & ML pipelines

[3] Full-Stack Applications
    → React, Next.js, TypeScript
    → Node.js, PostgreSQL, Redis
    → Web3 wallet integration

[4] Technical Advisory
    → Blockchain architecture
    → Tokenomics design
    → Due diligence for investors`,

  portfolio: `Selected Projects:

[1] TalentAI Platform
    → 45,000+ developers verified
    → Blockchain credential system
    → Hedera Foundation backed ($50K grant)

[2] MARIPOSA Trading Agent
    → Autonomous crypto trading
    → Millions in volume processed
    → Multi-exchange execution

[3] DeFi Lending Protocol
    → $2M+ TVL managed
    → Cross-chain compatibility
    → Advanced risk management

[4] Enterprise Supply Chain
    → Blockchain provenance tracking
    → IoT sensor integration
    → Real-time transparency

Type 'talentai' to open TalentAI platform window`,

  skills: () => `Technical Skills:

Blockchain          ████████████████████  95%
Solidity/Smart      ██████████████████    90%
AI/ML               ████████████████      80%
React/Next.js       ████████████████████  95%
Node.js/TypeScript  ████████████████████  95%
System Architecture ███████████████████   92%
Security            ███████████████       75%
DevOps              ██████████████        70%`,

  contact: `Get in Touch:

Email:    hello@talentailabs.com
Location: Vilnius, Lithuania 🇱🇹
LinkedIn: /company/talentailabs
Twitter:  @talentailabs
GitHub:   github.com/talentailabs

Type 'hire' to start a project`,

  coffee: `☕ Brewing coffee...

[████████████████████████████████] 100%

Your coffee is ready! ☕
(Best enjoyed while reviewing smart contracts)`,

  blockchain: `Which blockchain?

We know them all:
• Ethereum (L1 & L2s: Arbitrum, Optimism, Base, Polygon)
• Hedera Hashgraph ← Our specialty
• Solana
• Avalanche
• BNB Chain
• Polkadot / Kusama

Pick your poison. We'll build on it.`,

  hire: () => `Starting new project...

Opening contact window...`,

  clear: 'CLEAR_SCREEN',

  whoami: `You're someone who found our desktop OS website.

Which means you're either:
[1] A potential client looking for top-tier dev work
[2] A developer appreciating the UI/UX
[3] A recruiter (we're not hiring, but nice try)
[4] Our competitor doing research (hi! 👋)

Want to work with us? Type 'contact'`,

  sudo: `sudo: permission denied

Nice try, but you'll need to fill out the contact form first.
We don't give root access to just anyone. 😉

Type 'hire' to start a legitimate conversation.`,

  hello: `Hello! 👋

Thanks for exploring our macOS-style website.
We're TalentAI Labs — a blockchain & AI dev agency.

Quick commands:
• 'services' - See what we build
• 'portfolio' - Check our work
• 'contact' - Get in touch

Type 'help' for full command list.`,

  matrix: 'MATRIX_RAIN',

  ls: `total 8
drwxr-xr-x  12 talentai  staff   384B  talentailabs/
drwxr-xr-x   6 talentai  staff   192B  projects/
-rw-r--r--   1 talentai  staff   1.2K  README.txt
-rw-r--r--   1 talentai  staff   847B  services.md
-rw-r--r--   1 talentai  staff   2.1K  portfolio.md
-rw-r--r--   1 talentai  staff   512B  contact.txt`,

  cat: `Usage: cat <filename>

Try: cat README.txt`,

  'cat README.txt': `README.txt — TalentAI Labs

Thanks for exploring our desktop!

We're a blockchain & AI development agency based in Vilnius, Lithuania.
36+ years combined experience building production systems.

Notable projects:
• TalentAI Platform (45,000+ users, Hedera Foundation backed)
• MARIPOSA (autonomous trading agent)
• DeFi protocols managing millions in TVL

Try opening the Terminal for fun commands, or check out our
Portfolio to see what we've built.

Want to work together?
hello@talentailabs.com

Built with ❤️ in Lithuania 🇱🇹`,

  pwd: `/home/talentailabs/vilnius`,

  date: () => new Date().toLocaleString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  }),

  neofetch: () => `
           ████████           talentai@vilnius
         ██        ██         ─────────────────
       ██  ████████  ██       OS: TalentAI Desktop v1.0
      ██  ██      ██  ██      Host: Vilnius, Lithuania 🇱🇹
     ██  ██  ████  ██  ██     Kernel: Blockchain-AI-5.0
     ██  ██  ████  ██  ██     Uptime: ${new Date().getFullYear() - 2020} years
      ██  ██      ██  ██      Packages: blockchain, ai, web3
       ██  ████████  ██       Shell: talent-sh
         ██        ██         Terminal: macOS-style
           ████████           CPU: 3x Senior Engineers
                              Memory: 36+ years experience
                              GPU: Smart Contracts Accelerator`,
};

export const NOTIFICATIONS = [
  {
    id: 'welcome',
    title: '👋 Welcome to TalentAI Labs',
    message: 'Double-click any icon to explore',
    duration: 5000,
  },
  {
    id: 'talentai',
    title: '🚀 Check out TalentAI Platform',
    message: '45,000+ developers verified',
    duration: 5000,
    delay: 10000,
  },
  {
    id: 'contact',
    title: '💬 Want to discuss a project?',
    message: 'Let\'s build something amazing',
    duration: 5000,
    delay: 30000,
  },
];
