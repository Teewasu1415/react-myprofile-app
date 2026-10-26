import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  FiHome, 
  FiUser, 
  FiBriefcase, 
  FiGrid, 
  FiFolder, 
  FiCode, 
  FiMail 
} from 'react-icons/fi';

export default function SideMenu() {
  const menuItems = [
    { path: '/', icon: <FiHome size={18} />, label: 'Home' },
    { path: '/about', icon: <FiUser size={18} />, label: 'About' },
    { path: '/eduexp', icon: <FiBriefcase size={18} />, label: 'Edu & Exp' },
    { path: '/spec', icon: <FiGrid size={18} />, label: 'Specializations' },
    { path: '/projects', icon: <FiFolder size={18} />, label: 'Projects' },
    { path: '/skills', icon: <FiCode size={18} />, label: 'Skills' },
    { path: '/contactme', icon: <FiMail size={18} />, label: 'Contact' },
  ];

  return (
    <div className="bg-[#1e1e1e] border border-gray-800 rounded-full p-3 flex md:flex-col gap-4 items-center justify-center shadow-xl">
      {menuItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          title={item.label}
          className={({ isActive }) =>
            `p-3 rounded-full transition ${
              isActive
                ? 'text-orange-500 bg-gray-800 border border-orange-500/30'
                : 'text-gray-400 hover:text-orange-500'
            }`
          }
        >
          {item.icon}
        </NavLink>
      ))}
    </div>
  );
}