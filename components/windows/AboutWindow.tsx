import React, { useState } from 'react';
import { Linkedin, Twitter, Github, Mail } from 'lucide-react';

const AboutWindow: React.FC = () => {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <div className="flex h-full">
      {/* Left Sidebar */}
      <div className="w-64 bg-[#F5E6D3] p-6 flex flex-col justify-between">
        {/* Logo */}
        <div>
          <div className="w-12 h-12 mb-8 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center">
            <div className="w-7 h-7 border-3 border-white rounded-full" />
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            <button
              onClick={() => setActiveSection('about')}
              className={`w-full text-left px-4 py-2 rounded-lg font-medium transition-colors ${
                activeSection === 'about'
                  ? 'bg-[#FFD60A] text-[#1D1D1F]'
                  : 'text-[#5A4A42] hover:bg-[#E8D5BD]'
              }`}
            >
              About Us
            </button>
            <button
              onClick={() => setActiveSection('team')}
              className={`w-full text-left px-4 py-2 rounded-lg font-medium transition-colors ${
                activeSection === 'team'
                  ? 'bg-[#FFD60A] text-[#1D1D1F]'
                  : 'text-[#5A4A42] hover:bg-[#E8D5BD]'
              }`}
            >
              Our Team
            </button>
            <button
              onClick={() => setActiveSection('work')}
              className={`w-full text-left px-4 py-2 rounded-lg font-medium transition-colors ${
                activeSection === 'work'
                  ? 'bg-[#FFD60A] text-[#1D1D1F]'
                  : 'text-[#5A4A42] hover:bg-[#E8D5BD]'
              }`}
            >
              Our Work
            </button>
            <button
              onClick={() => setActiveSection('contact')}
              className={`w-full text-left px-4 py-2 rounded-lg font-medium transition-colors ${
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
        <div className="space-y-3">
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
      <div className="flex-1 bg-white p-12 overflow-y-auto">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-[#1D1D1F] leading-tight mb-6">
            Hello, we are{' '}
            <span className="text-[#0066FF]">TalentAI Labs</span> — We build{' '}
            <span className="text-[#FF6B6B]">what others can't.</span>
          </h1>
        </div>

        {/* Team Photos Placeholder */}
        <div className="grid grid-cols-3 gap-6 mb-12">
          {/* Founder 1 */}
          <div className="space-y-3">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-600 shadow-lg" />
            <div>
              <div className="font-bold text-[#1D1D1F]">Hatem Azaiez</div>
              <div className="text-sm text-[#64748B]">Co-Founder & CTO</div>
            </div>
          </div>
          {/* Founder 2 */}
          <div className="space-y-3">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-400 to-pink-600 shadow-lg" />
            <div>
              <div className="font-bold text-[#1D1D1F]">Mohamed Mnif</div>
              <div className="text-sm text-[#64748B]">Co-Founder & Lead Engineer</div>
            </div>
          </div>
          {/* Founder 3 */}
          <div className="space-y-3">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-teal-400 to-cyan-600 shadow-lg" />
            <div>
              <div className="font-bold text-[#1D1D1F]">Jaafer Saied</div>
              <div className="text-sm text-[#64748B]">Co-Founder & Lead Developer</div>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-10 max-w-4xl">
          {/* Who We Are */}
          <section>
            <h2 className="text-3xl font-bold text-[#1D1D1F] mb-4">Who We Are</h2>
            <p className="text-lg text-[#64748B] leading-relaxed">
              TalentAI Labs is a blockchain and AI development agency based in Vilnius, Lithuania.
              We specialize in building production-grade smart contracts, DeFi protocols, autonomous AI agents,
              and full-stack Web3 applications. With 36+ years of combined engineering experience, we turn
              ambitious ideas into production-ready products.
            </p>
          </section>

          {/* Our Approach */}
          <section>
            <h2 className="text-3xl font-bold text-[#1D1D1F] mb-4">Our Approach</h2>
            <p className="text-lg text-[#64748B] leading-relaxed">
              We believe technology should solve real problems. We start by understanding your business goals
              and technical requirements, then architect solutions that are secure, scalable, and maintainable.
              Our iterative development process ensures you're involved at every step, from smart contract
              design to final deployment.
            </p>
          </section>

          {/* What Makes Us Different */}
          <section>
            <h2 className="text-3xl font-bold text-[#1D1D1F] mb-4">What Makes Us Different</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#F8FAFC] p-4 rounded-lg">
                <div className="font-bold text-[#1D1D1F] mb-1">36+ Years Experience</div>
                <div className="text-sm text-[#64748B]">Combined engineering expertise</div>
              </div>
              <div className="bg-[#F8FAFC] p-4 rounded-lg">
                <div className="font-bold text-[#1D1D1F] mb-1">Hedera Foundation Backed</div>
                <div className="text-sm text-[#64748B]">$50K grant recipient</div>
              </div>
              <div className="bg-[#F8FAFC] p-4 rounded-lg">
                <div className="font-bold text-[#1D1D1F] mb-1">TalentAI Platform</div>
                <div className="text-sm text-[#64748B]">45,000+ developers verified</div>
              </div>
              <div className="bg-[#F8FAFC] p-4 rounded-lg">
                <div className="font-bold text-[#1D1D1F] mb-1">MARIPOSA Agent</div>
                <div className="text-sm text-[#64748B]">Autonomous crypto trading</div>
              </div>
              <div className="bg-[#F8FAFC] p-4 rounded-lg">
                <div className="font-bold text-[#1D1D1F] mb-1">DeFi Protocols</div>
                <div className="text-sm text-[#64748B]">Millions in TVL managed</div>
              </div>
              <div className="bg-[#F8FAFC] p-4 rounded-lg">
                <div className="font-bold text-[#1D1D1F] mb-1">EU-Based Team</div>
                <div className="text-sm text-[#64748B]">Vilnius, Lithuania 🇱🇹</div>
              </div>
            </div>
          </section>

          {/* Based in Lithuania */}
          <section>
            <h2 className="text-3xl font-bold text-[#1D1D1F] mb-4">Based in Lithuania 🇱🇹</h2>
            <p className="text-lg text-[#64748B] leading-relaxed">
              We're proudly based in Vilnius, Lithuania — in the heart of the European Union.
              This gives us the advantage of EU data protection standards, reliable legal framework,
              and favorable timezone for working with clients globally. We deliver enterprise-grade
              solutions with the professionalism and quality standards you'd expect from a European agency.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutWindow;
