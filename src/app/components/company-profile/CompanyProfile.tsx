import React from 'react';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { Services } from './Services';
import { About } from './About';
import { Contact } from './Contact';
import { Footer } from './Footer';

interface CompanyProfileProps {
  onLoginClick: () => void;
}

export function CompanyProfile({ onLoginClick }: CompanyProfileProps) {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-200">
      <Navbar onLoginClick={onLoginClick} />
      <main>
        <Hero onLoginClick={onLoginClick} />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
