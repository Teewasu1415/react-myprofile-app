import React from 'react';

export default function Skill() {
  const skills = [
    { name: 'React', percent: '60%' },
    { name: 'Figma', percent: '85%' },
    { name: 'HTML/CSS', percent: '80%' },
    { name: 'Next.js', percent: '60%' },
    { name: 'JavaScript', percent: '65%' },
    { name: 'GitHub', percent: '70%' },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">My <span className="text-orange-500">Skills</span></h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {skills.map((s, i) => (
          <div key={i} className="bg-[#1e1e1e] border border-gray-800 rounded-2xl p-6 flex flex-col items-center justify-center space-y-3 hover:border-orange-500/50 transition">
            <div className="w-16 h-16 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500 font-bold text-sm">
              {s.percent}
            </div>
            <p className="text-sm font-medium text-white">{s.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}