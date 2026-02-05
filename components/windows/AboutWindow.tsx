import React, { useState } from 'react';
import { Linkedin, Twitter, Github, Mail } from 'lucide-react';

const AboutWindow: React.FC = () => {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <div className="flex flex-col lg:flex-row h-full">
      {/* Left Sidebar */}
      <div className="w-full lg:w-64 bg-[#F5E6D3] p-4 lg:p-6 flex flex-col justify-between">
        {/* Logo */}
        <div>
          <div className="w-12 h-12 mb-4 lg:mb-8 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center">
            <div className="w-7 h-7 border-3 border-white rounded-full" />
          </div>

          {/* Navigation */}
          <nav className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible">
            <button
              onClick={() => setActiveSection('about')}
              className={`flex-shrink-0 lg:w-full text-left px-3 py-2 lg:px-4 rounded-lg text-sm lg:text-base font-medium transition-colors ${
                activeSection === 'about'
                  ? 'bg-[#FFD60A] text-[#1D1D1F]'
                  : 'text-[#5A4A42] hover:bg-[#E8D5BD]'
              }`}
            >
              About Us
            </button>
            <button
              onClick={() => setActiveSection('team')}
              className={`flex-shrink-0 lg:w-full text-left px-3 py-2 lg:px-4 rounded-lg text-sm lg:text-base font-medium transition-colors ${
                activeSection === 'team'
                  ? 'bg-[#FFD60A] text-[#1D1D1F]'
                  : 'text-[#5A4A42] hover:bg-[#E8D5BD]'
              }`}
            >
              Our Team
            </button>
            <button
              onClick={() => setActiveSection('work')}
              className={`flex-shrink-0 lg:w-full text-left px-3 py-2 lg:px-4 rounded-lg text-sm lg:text-base font-medium transition-colors ${
                activeSection === 'work'
                  ? 'bg-[#FFD60A] text-[#1D1D1F]'
                  : 'text-[#5A4A42] hover:bg-[#E8D5BD]'
              }`}
            >
              Our Work
            </button>
            <button
              onClick={() => setActiveSection('contact')}
              className={`flex-shrink-0 lg:w-full text-left px-3 py-2 lg:px-4 rounded-lg text-sm lg:text-base font-medium transition-colors ${
                activeSection === 'contact'
                  ? 'bg-[#FFD60A] text-[#1D1D1F]'
                  : 'text-[#5A4A42] hover:bg-[#E8D5BD]'
              }`}
            >
              Contact
            </button>
          </nav>
        </div>

        {/* Social Media Icons */}
        <div className="hidden lg:block space-y-3 mt-4 lg:mt-0">
          <div className="text-xs font-semibold text-[#5A4A42] mb-2">CONNECT</div>
          <div className="flex gap-3">
            <a
              href="https://www.linkedin.com/company/talentailabs"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#0077B5] rounded-lg flex items-center justify-center hover:scale-110 transition-transform"
            >
              <Linkedin className="w-5 h-5 text-white" />
            </a>
            <a
              href="https://twitter.com/talentailabs"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#1DA1F2] rounded-lg flex items-center justify-center hover:scale-110 transition-transform"
            >
              <Twitter className="w-5 h-5 text-white" />
            </a>
          </div>
          <div className="flex gap-3">
            <a
              href="https://github.com/talentailabs"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#333] rounded-lg flex items-center justify-center hover:scale-110 transition-transform"
            >
              <Github className="w-5 h-5 text-white" />
            </a>
            <a
              href="mailto:hello@talentailabs.com"
              className="w-10 h-10 bg-[#EA4335] rounded-lg flex items-center justify-center hover:scale-110 transition-transform"
            >
              <Mail className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-white p-4 sm:p-6 md:p-8 lg:p-12 overflow-y-auto">
        {activeSection === 'about' && (
          <>
            {/* Hero Section */}
            <div className="mb-8 md:mb-12">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1D1D1F] leading-tight mb-4 md:mb-6">
                Hello, we are{' '}
                <span className="text-[#0066FF]">TalentAI Labs</span> — We build{' '}
                <span className="text-[#FF6B6B]">what others can't.</span>
              </h1>
            </div>

            {/* Team Photos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 md:mb-12">
              {/* Founder 1 */}
              <div className="space-y-3">
                <img
                  src="/images/team/hatem.jpg"
                  alt="Hatem Azaiez"
                  className="w-full aspect-square rounded-2xl shadow-lg object-cover"
                />
                <div>
                  <div className="font-bold text-[#1D1D1F] text-base sm:text-lg">Hatem Azaiez</div>
                  <div className="text-sm text-[#64748B]">Co-Founder & CTO</div>
                </div>
              </div>
              {/* Founder 2 */}
              <div className="space-y-3">
                <img
                  src="/images/team/mnif.jpg"
                  alt="Mohamed Mnif"
                  className="w-full aspect-square rounded-2xl shadow-lg object-cover"
                />
                <div>
                  <div className="font-bold text-[#1D1D1F] text-base sm:text-lg">Mohamed Mnif</div>
                  <div className="text-sm text-[#64748B]">Co-Founder & COO</div>
                </div>
              </div>
              {/* Founder 3 */}
              <div className="space-y-3">
                <img
                  src="/images/team/jaafer.jpg"
                  alt="Jaafer Saied"
                  className="w-full aspect-square rounded-2xl shadow-lg object-cover"
                />
                <div>
                  <div className="font-bold text-[#1D1D1F] text-base sm:text-lg">Jaafer Saied</div>
                  <div className="text-sm text-[#64748B]">Co-Founder & Business Advisor</div>
                </div>
              </div>
            </div>

            {/* Content Sections */}
            <div className="space-y-8 md:space-y-10 max-w-4xl">
              {/* Who We Are */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1D1D1F] mb-3 md:mb-4">Who We Are</h2>
                <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
                  TalentAI Labs is a blockchain and AI development agency based in Vilnius, Lithuania.
                  We specialize in building production-grade smart contracts, DeFi protocols, autonomous AI agents,
                  and full-stack Web3 applications. With 36+ years of combined engineering experience, we turn
                  ambitious ideas into production-ready products.
                </p>
              </section>

              {/* Our Approach */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1D1D1F] mb-3 md:mb-4">Our Approach</h2>
                <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
                  We believe technology should solve real problems. We start by understanding your business goals
                  and technical requirements, then architect solutions that are secure, scalable, and maintainable.
                  Our iterative development process ensures you're involved at every step, from smart contract
                  design to final deployment.
                </p>
              </section>

              {/* What Makes Us Different */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1D1D1F] mb-4 md:mb-6">What Makes Us Different</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  <div className="bg-[#F8FAFC] p-4 rounded-lg">
                    <div className="font-bold text-[#1D1D1F] mb-1 text-sm sm:text-base">36+ Years Experience</div>
                    <div className="text-xs sm:text-sm text-[#64748B]">Combined engineering expertise</div>
                  </div>
                  <div className="bg-[#F8FAFC] p-4 rounded-lg">
                    <div className="font-bold text-[#1D1D1F] mb-1 text-sm sm:text-base">Hedera Foundation Backed</div>
                    <div className="text-xs sm:text-sm text-[#64748B]">$50K grant recipient</div>
                  </div>
                  <div className="bg-[#F8FAFC] p-4 rounded-lg">
                    <div className="font-bold text-[#1D1D1F] mb-1 text-sm sm:text-base">TalentAI Platform</div>
                    <div className="text-xs sm:text-sm text-[#64748B]">45,000+ developers verified</div>
                  </div>
                  <div className="bg-[#F8FAFC] p-4 rounded-lg">
                    <div className="font-bold text-[#1D1D1F] mb-1 text-sm sm:text-base">MARIPOSA Agent</div>
                    <div className="text-xs sm:text-sm text-[#64748B]">Autonomous crypto trading</div>
                  </div>
                  <div className="bg-[#F8FAFC] p-4 rounded-lg">
                    <div className="font-bold text-[#1D1D1F] mb-1 text-sm sm:text-base">DeFi Protocols</div>
                    <div className="text-xs sm:text-sm text-[#64748B]">Millions in TVL managed</div>
                  </div>
                  <div className="bg-[#F8FAFC] p-4 rounded-lg">
                    <div className="font-bold text-[#1D1D1F] mb-1 text-sm sm:text-base">EU-Based Team</div>
                    <div className="text-xs sm:text-sm text-[#64748B]">Vilnius, Lithuania 🇱🇹</div>
                  </div>
                </div>
              </section>

              {/* Based in Lithuania */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1D1D1F] mb-3 md:mb-4">Based in Lithuania 🇱🇹</h2>
                <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
                  We're proudly based in Vilnius, Lithuania — in the heart of the European Union.
                  This gives us the advantage of EU data protection standards, reliable legal framework,
                  and favorable timezone for working with clients globally. We deliver enterprise-grade
                  solutions with the professionalism and quality standards you'd expect from a European agency.
                </p>
              </section>
            </div>
          </>
        )}

        {activeSection === 'team' && (
          <div className="space-y-8 md:space-y-10 max-w-4xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1D1D1F] leading-tight mb-8 md:mb-12">
              Meet Our <span className="text-[#0066FF]">Team</span>
            </h1>

            {/* Founder 1 */}
            <section className="flex flex-col md:flex-row gap-4 md:gap-8 items-start">
              <img
                src="/images/team/hatem.jpg"
                alt="Hatem Azaiez"
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-2xl shadow-lg flex-shrink-0 object-cover mx-auto md:mx-0"
              />
              <div className="flex-1">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1D1D1F] mb-2">Hatem Azaiez</h2>
                <p className="text-base sm:text-lg text-[#0066FF] mb-3 md:mb-4">Co-Founder & CTO</p>
                <p className="text-sm sm:text-base md:text-lg text-[#64748B] leading-relaxed mb-3 md:mb-4">
                  Hatem is a blockchain architect with 12+ years of experience in distributed systems and smart contract development.
                  He leads our technical vision and has architected DeFi protocols managing millions in TVL. Expert in Solidity,
                  Hedera Hashgraph, and Solana development.
                </p>
                <a
                  href="https://www.linkedin.com/in/hatem-azaiez-1327a25a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#0077B5] hover:underline text-sm sm:text-base"
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                  Connect on LinkedIn
                </a>
              </div>
            </section>

            {/* Founder 2 */}
            <section className="flex flex-col md:flex-row gap-4 md:gap-8 items-start">
              <img
                src="/images/team/mnif.jpg"
                alt="Mohamed Mnif"
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-2xl shadow-lg flex-shrink-0 object-cover mx-auto md:mx-0"
              />
              <div className="flex-1">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1D1D1F] mb-2">Mohamed Mnif</h2>
                <p className="text-base sm:text-lg text-[#0066FF] mb-3 md:mb-4">Co-Founder & COO / Operations Manager</p>
                <p className="text-sm sm:text-base md:text-lg text-[#64748B] leading-relaxed mb-3 md:mb-4">
                  Mohamed is the operational backbone of TalentAI Labs, with 12+ years of experience managing complex
                  projects and teams. He oversees day-to-day operations, ensures efficient workflows, and maintains the
                  high standards that define our delivery. Expert in project management, resource allocation, and strategic planning.
                </p>
                <a
                  href="https://www.linkedin.com/in/mohamed-mnif-3b8b9698/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#0077B5] hover:underline text-sm sm:text-base"
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                  Connect on LinkedIn
                </a>
              </div>
            </section>

            {/* Founder 3 */}
            <section className="flex flex-col md:flex-row gap-4 md:gap-8 items-start">
              <img
                src="/images/team/jaafer.jpg"
                alt="Jaafer Saied"
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-2xl shadow-lg flex-shrink-0 object-cover mx-auto md:mx-0"
              />
              <div className="flex-1">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1D1D1F] mb-2">Jaafer Saied</h2>
                <p className="text-base sm:text-lg text-[#0066FF] mb-3 md:mb-4">Co-Founder & Business Advisor</p>
                <p className="text-sm sm:text-base md:text-lg text-[#64748B] leading-relaxed mb-3 md:mb-4">
                  Jaafer brings strategic business insight to TalentAI Labs with 12+ years of experience in business development
                  and strategic planning. He guides our business strategy, identifies market opportunities, and ensures we deliver
                  solutions that align with client needs and market demands. Expert in business analysis, strategic partnerships, and growth planning.
                </p>
                <a
                  href="https://www.linkedin.com/in/jaafar--saied/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#0077B5] hover:underline text-sm sm:text-base"
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                  Connect on LinkedIn
                </a>
              </div>
            </section>
          </div>
        )}

        {activeSection === 'work' && (
          <div className="space-y-8 md:space-y-12 max-w-5xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1D1D1F] leading-tight">
              Our <span className="text-[#0066FF]">Work</span> & Expertise
            </h1>




            {/* Consulting Services */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-[#1D1D1F] mb-4 md:mb-6">Consulting Services</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <div className="bg-white p-4 md:p-5 rounded-lg border border-[#E5E7EB]">
                  <h3 className="font-bold text-[#1D1D1F] mb-2 md:mb-3 text-sm sm:text-base">UI/UX Consulting</h3>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    User research, journey mapping, design systems, Figma, accessibility (WCAG 2.1), responsive design, micro-interactions
                  </p>
                </div>

                <div className="bg-white p-4 md:p-5 rounded-lg border border-[#E5E7EB]">
                  <h3 className="font-bold text-[#1D1D1F] mb-2 md:mb-3 text-sm sm:text-base">Blockchain Consulting</h3>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    Tokenomics, protocol architecture, security audits, consensus mechanisms, gas optimization, smart contract upgradability
                  </p>
                </div>

                <div className="bg-white p-4 md:p-5 rounded-lg border border-[#E5E7EB]">
                  <h3 className="font-bold text-[#1D1D1F] mb-2 md:mb-3 text-sm sm:text-base">AI & Agentic Consulting</h3>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    Agent architecture, LangChain implementation, prompt engineering, model selection, RAG optimization, autonomous systems
                  </p>
                </div>

                <div className="bg-white p-4 md:p-5 rounded-lg border border-[#E5E7EB]">
                  <h3 className="font-bold text-[#1D1D1F] mb-2 md:mb-3 text-sm sm:text-base">Backend/Database/Web3</h3>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    Infrastructure architecture, SQL/NoSQL, scalability, API design, caching, Web3 infrastructure, IPFS/Arweave
                  </p>
                </div>
              </div>
            </section>

            {/* Featured Projects */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-[#1D1D1F] mb-4 md:mb-6">Featured Projects</h2>
              <div className="space-y-3 md:space-y-4">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 sm:p-5 md:p-6 rounded-lg">
                  <h3 className="font-bold text-[#1D1D1F] text-lg sm:text-xl mb-2">TalentAI Platform</h3>
                  <p className="text-sm sm:text-base text-[#64748B] mb-3">
                    AI-powered developer verification platform with 45,000+ verified engineers.
                    Built on Hedera Hashgraph with $50K grant from Hedera Foundation.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="bg-white px-2 sm:px-3 py-1 rounded-full text-xs font-medium text-[#0066FF]">Hedera</span>
                    <span className="bg-white px-2 sm:px-3 py-1 rounded-full text-xs font-medium text-[#0066FF]">AI/ML</span>
                    <span className="bg-white px-2 sm:px-3 py-1 rounded-full text-xs font-medium text-[#0066FF]">Next.js</span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 sm:p-5 md:p-6 rounded-lg">
                  <h3 className="font-bold text-[#1D1D1F] text-lg sm:text-xl mb-2">MARIPOSA Trading Agent</h3>
                  <p className="text-sm sm:text-base text-[#64748B] mb-3">
                    Autonomous crypto trading bot with sentiment analysis, technical indicators,
                    and risk management. Production-ready with real trading capabilities.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="bg-white px-2 sm:px-3 py-1 rounded-full text-xs font-medium text-[#7C3AED]">AI Agents</span>
                    <span className="bg-white px-2 sm:px-3 py-1 rounded-full text-xs font-medium text-[#7C3AED]">Trading</span>
                    <span className="bg-white px-2 sm:px-3 py-1 rounded-full text-xs font-medium text-[#7C3AED]">Python</span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-4 sm:p-5 md:p-6 rounded-lg">
                  <h3 className="font-bold text-[#1D1D1F] text-lg sm:text-xl mb-2">DeFi Lending Protocols</h3>
                  <p className="text-sm sm:text-base text-[#64748B] mb-3">
                    Production-grade lending and borrowing protocols with millions in TVL.
                    Audited smart contracts with liquidation mechanisms and oracle integration.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="bg-white px-2 sm:px-3 py-1 rounded-full text-xs font-medium text-[#14B8A6]">DeFi</span>
                    <span className="bg-white px-2 sm:px-3 py-1 rounded-full text-xs font-medium text-[#14B8A6]">Solidity</span>
                    <span className="bg-white px-2 sm:px-3 py-1 rounded-full text-xs font-medium text-[#14B8A6]">Security</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeSection === 'contact' && (
          <div className="space-y-6 md:space-y-10 max-w-2xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1D1D1F] leading-tight mb-8 md:mb-12 text-center">
              Get in <span className="text-[#0066FF]">Touch</span>
            </h1>

            <div className="bg-[#F8FAFC] p-4 sm:p-6 md:p-8 rounded-2xl">
              <h2 className="text-xl sm:text-2xl font-bold text-[#1D1D1F] mb-4 md:mb-6">Let's Build Something Great</h2>
              <p className="text-sm sm:text-base md:text-lg text-[#64748B] mb-6 md:mb-8">
                Whether you need a smart contract audited, a DeFi protocol built, or an AI agent developed,
                we're here to help. Reach out and let's discuss your project.
              </p>

              {/* Contact Methods */}
              <div className="space-y-3 md:space-y-4">
                <a
                  href="mailto:hello@talentailabs.com"
                  className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#EA4335] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-bold text-[#1D1D1F] text-sm sm:text-base">Email</div>
                    <div className="text-[#64748B] text-xs sm:text-sm truncate">hello@talentailabs.com</div>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/company/talentailabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0077B5] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-[#1D1D1F] text-sm sm:text-base">LinkedIn</div>
                    <div className="text-[#64748B] text-xs sm:text-sm">@talentailabs</div>
                  </div>
                </a>

                <a
                  href="https://twitter.com/talentailabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1DA1F2] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Twitter className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-[#1D1D1F] text-sm sm:text-base">Twitter</div>
                    <div className="text-[#64748B] text-xs sm:text-sm">@talentailabs</div>
                  </div>
                </a>

                <a
                  href="https://github.com/talentailabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#333] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Github className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-[#1D1D1F] text-sm sm:text-base">GitHub</div>
                    <div className="text-[#64748B] text-xs sm:text-sm">@talentailabs</div>
                  </div>
                </a>
              </div>

              {/* Location */}
              <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-[#E5E7EB]">
                <h3 className="font-bold text-[#1D1D1F] mb-2 text-sm sm:text-base">Location</h3>
                <p className="text-[#64748B] text-xs sm:text-sm">
                  Vilnius, Lithuania 🇱🇹<br />
                  European Union
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutWindow;
