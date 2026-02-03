import React from 'react';

const READMEWindow: React.FC = () => {
  return (
    <div className="p-8 font-mono text-sm bg-white">
      <pre className="whitespace-pre-wrap text-[#1D1D1F] leading-relaxed">
{`README.txt — TalentAI Labs

Thanks for exploring our desktop!

We're a blockchain & AI development agency based in
Vilnius, Lithuania. 36+ years combined experience
building production systems.

Notable projects:
• TalentAI Platform (45,000+ users, Hedera Foundation backed)
• MARIPOSA (autonomous trading agent)
• DeFi protocols managing millions in TVL

Try opening the Terminal for fun commands, or check out
our Portfolio to see what we've built.

Want to work together?
hello@talentailabs.com

Built with ❤️ in Lithuania 🇱🇹`}
      </pre>
    </div>
  );
};

export default READMEWindow;
