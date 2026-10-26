import React from 'react';

export default function Projects() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Featured <span className="text-orange-500">Projects</span></h1>
      <div className="bg-[#1e1e1e] border border-gray-800 rounded-2xl p-6 space-y-4">
        <h3 className="text-lg font-bold text-white">Manage Task App - Fullstack web-development</h3>
        <p className="text-xs text-gray-400">Here's my student project built with Nextjs and Laravel, using TailwindCSS on the front-end.</p>
        <div className="rounded-xl overflow-hidden border border-gray-800">
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" alt="Project" className="w-full h-48 object-cover" />
        </div>
      </div>
    </div>
  );
}