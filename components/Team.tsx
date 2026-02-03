'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

const specialtyBadges = {
  hatem: [
    'Blockchain Architecture',
    'AI & Machine Learning',
    'Full-Stack Development',
    'Hedera Hashgraph',
    'Solana & Ethereum',
  ],
  mohamed: [
    'Smart Contract Development',
    'Backend Architecture',
    'DeFi Protocols',
    'Security & Auditing',
    'System Design',
  ],
  jaafer: [
    'Web & Mobile Development',
    'Crypto Wallets',
    'React & React Native',
    'Supply Chain Solutions',
    'UI/UX Implementation',
  ],
};

const TeamMember = ({ name, role, bio, linkedin, specialties, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    viewport={{ once: true }}
    className="group bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_40px_-12px_rgba(0,0,0,0.12)] transition-all duration-500"
  >
    {/* Photo Placeholder */}
    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#1E40AF] to-[#7C3AED] mb-6 flex items-center justify-center text-white text-3xl font-bold shadow-lg group-hover:scale-105 transition-transform duration-500">
      {name.charAt(0)}
    </div>

    {/* Name & Role */}
    <div className="mb-4">
      <div className="flex items-center gap-3 mb-2">
        <h3 className="text-2xl font-bold text-[#0F172A]">{name}</h3>
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#1E40AF] hover:text-[#7C3AED] transition-colors"
          aria-label={`${name} LinkedIn profile`}
        >
          <Linkedin className="w-5 h-5" />
        </a>
      </div>
      <p className="text-sm font-semibold text-[#1E40AF]">{role}</p>
    </div>

    {/* Bio */}
    <p className="text-[#64748B] text-sm leading-relaxed mb-6">{bio}</p>

    {/* Specialty Badges */}
    <div className="flex flex-wrap gap-2">
      {specialties.map((specialty, idx) => (
        <span
          key={idx}
          className="px-3 py-1 text-xs font-medium bg-slate-50 text-slate-700 rounded-full border border-slate-100"
        >
          {specialty}
        </span>
      ))}
    </div>
  </motion.div>
);

export const Team = () => {
  return (
    <section id="team" className="py-16 md:py-24 lg:py-32 bg-[#F8FAFC]">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[10px] font-black uppercase tracking-[0.3em] text-[#1E40AF] mb-4"
          >
            Meet The Team
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F172A] leading-[1.2] tracking-tight mb-6"
          >
            The Team Behind TalentAI Labs
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-base md:text-lg text-[#64748B] leading-relaxed"
          >
            36+ combined years of building production systems
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <TeamMember
            name="Hatem Azaiez"
            role="Co-Founder & CTO"
            linkedin="https://www.linkedin.com/in/hatem-azaiez-1327a25a/"
            specialties={specialtyBadges.hatem}
            bio="12+ years of full-stack development and blockchain engineering. Hatem has built DeFi protocols, AI trading systems, and enterprise blockchain solutions across Hedera, Solana, Ethereum, and more. He architected TalentAI from zero to 45,000+ users and led the team to win the Hedera Origin Future Hackathon. His background spans embedded systems, cloud architecture, and AI — giving him the rare ability to connect low-level engineering with high-level product thinking."
            delay={0.1}
          />

          <TeamMember
            name="Mohamed Mnif"
            role="Co-Founder & Lead Engineer"
            linkedin="https://www.linkedin.com/in/mohamed-mnif-3b8b9698/"
            specialties={specialtyBadges.mohamed}
            bio="12+ years of software engineering experience with deep expertise in backend systems, smart contract development, and scalable architecture. Mohamed has been instrumental in building TalentAI Labs' most complex technical deliverables — from DeFi lending protocols to cross-chain infrastructure. He brings rigorous engineering discipline and a relentless focus on code quality and security."
            delay={0.2}
          />

          <TeamMember
            name="Jaafer Saied"
            role="Co-Founder & Lead Developer"
            linkedin="https://www.linkedin.com/in/jaafar--saied/"
            specialties={specialtyBadges.jaafer}
            bio="12+ years of development experience across web, mobile, and blockchain platforms. Jaafer has led the development of multiple production applications including crypto wallets, supply chain solutions, and enterprise dashboards. His versatility across frontend, mobile, and blockchain development makes him the driving force behind TalentAI Labs' ability to deliver complete, polished products."
            delay={0.3}
          />
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-base text-[#64748B] leading-relaxed">
            Together, we bring <span className="font-semibold text-[#1E40AF]">36+ years of experience</span> building
            production systems. We've worked together for years and operate as a tight, efficient team that ships fast
            without cutting corners.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
