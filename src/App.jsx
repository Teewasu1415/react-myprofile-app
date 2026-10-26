import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MyCard from './components/MyCard';
import SideMenu from './components/SideMenu';

import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import EduExp from './pages/EduExp';
import Spec from './pages/Spec';
import Projects from './pages/Projects';
import Skill from './pages/Skill';
import ContactMe from './pages/ContactMe';

export default function App() {
  return (
    <div className="min-h-screen bg-[#111111] text-white flex justify-center items-center p-4 md:p-10 font-sans">
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-8 items-start relative">
        
        {/* Component กลาง: MyCard.jsx */}
        <MyCard />

        {/* Dynamic Route Content */}
        <main className="flex-1 bg-[#161616] border border-gray-800 rounded-3xl p-8 min-h-550px flex flex-col justify-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/eduexp" element={<EduExp />} />
            <Route path="/spec" element={<Spec />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skill />} />
            <Route path="/contactme" element={<ContactMe />} />
          </Routes>
        </main>

        {/* Component กลาง: SideMenu.jsx */}
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 md:static md:translate-x-0 z-50">
          <SideMenu />
        </div>

      </div>
    </div>
  );
}