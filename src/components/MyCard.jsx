import React from 'react';
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa6';

export default function MyCard() {
  return (
    <div className="w-full md:w-80 bg-[#1e1e1e] border border-gray-800 rounded-2xl p-6 flex flex-col items-center text-center shadow-xl">
      <h2 className="text-xl font-bold tracking-wide mb-4">
        <span className="text-orange-500">Tee</span>wasu
      </h2>

      <div className="w-40 h-40 rounded-2xl overflow-hidden mb-4 border border-gray-700 bg-gray-800">
        <img
          src="../src/assets/hero.png"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>

      <p className="text-xs text-gray-400 mb-1">STU ID: 6852410015</p>
      <p className="text-xs text-gray-500 font-medium mb-6">Fullstack Web Developer</p>

      {/* Social Icons */}
      <div className="flex gap-3 mb-6 text-gray-400">
        <a href="#" className="p-2 border border-gray-700 rounded-full hover:text-orange-500 hover:border-orange-500 transition"><FaFacebookF size={14} /></a>
        <a href="#" className="p-2 border border-gray-700 rounded-full hover:text-orange-500 hover:border-orange-500 transition"><FaXTwitter size={14} /></a>
        <a href="#" className="p-2 border border-gray-700 rounded-full hover:text-orange-500 hover:border-orange-500 transition"><FaInstagram size={14} /></a>
        <a href="#" className="p-2 border border-gray-700 rounded-full hover:text-orange-500 hover:border-orange-500 transition"><FaLinkedinIn size={14} /></a>
        <a href="#" className="p-2 border border-gray-700 rounded-full hover:text-orange-500 hover:border-orange-500 transition"><FaGithub size={14} /></a>
      </div>

      <button className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-black font-bold text-sm tracking-wider rounded-xl uppercase transition shadow-lg shadow-orange-500/20">
        HIRE ME !
      </button>
    </div>
  );
}