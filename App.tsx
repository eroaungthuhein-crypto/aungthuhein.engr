import React from 'react';
import Hero from './components/Hero';
import Summary from './components/Summary';
import Experience from './components/Experience';
import SkillsEducation from './components/SkillsEducation';
import ChatWidget from './components/ChatWidget';
import { CONTACT_INFO } from './constants';
import { Mail, Github, Linkedin } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <main>
        <Hero />
        <Summary />
        <Experience />
        <SkillsEducation />
      </main>

      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h5 className="text-white font-bold text-lg">Aung Thu Hein</h5>
            <p className="text-sm mt-1">Project Engineer | ELV Specialist</p>
          </div>
          
          <div className="flex gap-6">
            <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors" title="Email">
              <Mail size={24} />
            </a>
            {/* Placeholder links since not in CV, but good for portfolio aesthetic */}
            <a href="#" className="hover:text-white transition-colors" title="LinkedIn (Placeholder)">
              <Linkedin size={24} />
            </a>
            <a href="#" className="hover:text-white transition-colors" title="GitHub (Placeholder)">
               <Github size={24} />
            </a>
          </div>

          <div className="text-xs text-slate-500 text-center md:text-right">
            &copy; {new Date().getFullYear()} Aung Thu Hein. All rights reserved.<br/>
            Based in {CONTACT_INFO.location}.
          </div>
        </div>
      </footer>

      <ChatWidget />
    </div>
  );
};

export default App;