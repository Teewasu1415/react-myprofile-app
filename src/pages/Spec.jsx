import React from 'react';

export default function Spec() {
  const specs = [
    { title: 'Frontend Developer', desc: 'Front-end development is where design meets code to create captivating and user-centric digital experiences.' },
    { title: 'UI/UX Designer', desc: 'UI/UX design is my passion for blending art and user psychology into seamless and delightful interactions.' },
    { title: 'Graphic Designer', desc: 'As a graphic designer, I transform ideas into visually striking and impactful designs.' }
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">My <span className="text-orange-500">Specializations</span></h1>
      <div className="space-y-4">
        {specs.map((item, idx) => (
          <div key={idx} className="p-6 bg-[#1e1e1e] border border-gray-800 rounded-2xl flex justify-between items-start hover:border-orange-500/50 transition">
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-white">{item.title}</h3>
              <p className="text-xs text-gray-400 max-w-lg">{item.desc}</p>
            </div>
            <span className="text-orange-500 text-xs font-bold">0{idx + 1}</span>
          </div>
        ))}
      </div>
    </div>
  );
}