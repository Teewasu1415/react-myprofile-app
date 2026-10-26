import React from 'react';

export default function ContactMe() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Contact <span className="text-orange-500">Me</span></h1>
      <p className="text-xs text-gray-400">Let's get in touch!</p>
      <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input type="text" placeholder="Email" className="bg-[#1e1e1e] border border-gray-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-orange-500" />
          <input type="text" placeholder="Phone" className="bg-[#1e1e1e] border border-gray-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-orange-500" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input type="text" placeholder="Name" className="bg-[#1e1e1e] border border-gray-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-orange-500" />
          <input type="text" placeholder="Subject" className="bg-[#1e1e1e] border border-gray-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-orange-500" />
        </div>
        <textarea rows="4" placeholder="Content" className="w-full bg-[#1e1e1e] border border-gray-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-orange-500"></textarea>
        <button type="submit" className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-black font-bold text-xs uppercase rounded-xl transition">
          SUBMIT
        </button>
      </form>
    </div>
  );
}