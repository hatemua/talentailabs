import React from 'react';

const TerminalWindow: React.FC = () => {
  return (
    <div className="p-8 bg-[#1E1E1E] h-full font-mono text-green-400">
      <div>talentailabs@vilnius ~ % </div>
      <p className="text-gray-400 mt-4">Terminal content will be implemented here</p>
    </div>
  );
};

export default TerminalWindow;
