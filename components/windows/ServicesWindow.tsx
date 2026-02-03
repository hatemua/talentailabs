import React from 'react';

const ServicesWindow: React.FC = () => {
  const services = [
    {
      title: 'Smart Contracts & Blockchain',
      description: 'Production-grade smart contracts, DeFi protocols, NFT platforms, and enterprise blockchain solutions.',
      tech: ['Solidity', 'Rust', 'Hedera SDK', 'Ethereum', 'Solana'],
    },
    {
      title: 'AI Solutions',
      description: 'Autonomous trading agents, LLM integrations, RAG systems, and ML pipelines that actually work.',
      tech: ['Python', 'TensorFlow', 'LangChain', 'GPT-4', 'Claude'],
    },
    {
      title: 'Full-Stack Development',
      description: 'Modern web and mobile applications with beautiful UIs and bulletproof backends.',
      tech: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL'],
    },
    {
      title: 'Technical Advisory',
      description: 'Blockchain architecture, tokenomics design, due diligence, and fractional CTO services.',
      tech: ['Strategy', 'Architecture', 'Security', 'Audits'],
    },
  ];

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[#0F172A] mb-4">Our Services</h1>
        <p className="text-lg text-[#64748B] mb-8">
          End-to-end development for blockchain and AI. From concept to production.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-[#1E40AF] transition-colors"
            >
              <h3 className="text-xl font-bold text-[#0F172A] mb-2">{service.title}</h3>
              <p className="text-[#64748B] mb-4 leading-relaxed">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-semibold text-[#1E40AF] bg-blue-50 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesWindow;
