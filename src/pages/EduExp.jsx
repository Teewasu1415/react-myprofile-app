import React from 'react';

export default function EduExp() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-white">Education & <span className="text-orange-500">Experience</span></h1>
      <div className="space-y-6 border-l-2 border-orange-500/30 pl-6">
        <div>
          <span className="text-xs text-orange-500 font-semibold">2027 - Present</span>
          <h3 className="text-lg font-bold text-white">UI/UX Designer</h3>
          <p className="text-xs text-gray-400">Freelance</p>
          <h3 className="text-lg font-bold text-white mt-2">Fullstack Web Developer</h3>
          <p className="text-xs text-gray-400">Freelance</p>
        </div>
        <div>
          <span className="text-xs text-orange-500 font-semibold">2024 - 2027</span>
          <h3 className="text-lg font-bold text-white">Bachelor Degree in Technology Digital and Innovation</h3>
          <p className="text-xs text-gray-400">Southeast Asia University</p>
        </div>
        <div>
          <span className="text-xs text-orange-500 font-semibold">2016 - 2024</span>
          <h3 className="text-lg font-bold text-white">High school</h3>
          <p className="text-xs text-gray-400">Sarasas Witaed Bangbon School</p>
        </div>
      </div>
    </div>
  );
}