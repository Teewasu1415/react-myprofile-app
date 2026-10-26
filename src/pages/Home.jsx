import React from 'react';

export default function Home() {
  return (
    <div className="space-y-6">
      <p className="text-gray-400 text-sm font-medium">Lets Work <span className="text-orange-500">Together !</span></p>
      <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
        Hi From <span className="text-orange-500">Teewasu</span> ,<br />
        Interactive Designer & Fullstack Web Developer
      </h1>
      <p className="text-gray-400 text-sm leading-relaxed max-w-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo maxime tempora nisi neque a adipisci nulla voluptatem!
      </p>
      <div className="flex gap-12 pt-6">
        <div>
          <h3 className="text-4xl font-extrabold text-orange-500">3+</h3>
          <p className="text-xs text-gray-400 uppercase mt-1">Years of<span className="block">Experience</span></p>
        </div>
        <div>
          <h3 className="text-4xl font-extrabold text-orange-500">10+</h3>
          <p className="text-xs text-gray-400 uppercase mt-1">Projects<span className="block">Completed</span></p>
        </div>
      </div>
    </div>
  );
}