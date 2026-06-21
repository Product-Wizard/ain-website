import React from 'react';
import { ArrowUpRight, Instagram, Mail, MapPin, Phone, Linkedin, Twitter, Zap } from 'lucide-react';

interface FooterProps {
  setCurrentTab: (tab: string) => void;
  openContactModal: () => void;
}

export default function Footer({ setCurrentTab, openContactModal }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (tabId: string) => {
    setCurrentTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const officeHubs = [
    { city: "Ibadan, Nigeria", role: "Primary Operations Command", address: "Nexus Headquarters, Dugbe, Ibadan" }
  ];

  return (
    <footer className="w-full bg-zinc-950 text-zinc-400 border-t border-zinc-900">
      
      {/* Top Section: CTA Grid */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center border-b border-slate-900 pb-16">
          <div className="lg:col-span-12 border-b border-zinc-900 pb-16">
            <h2 className="text-[5rem] font-black tracking-tighter text-white font-display text-center leading-[0.9]">
              Let's Create<br/>Something <span className="text-[#0F62FE]">Extraordinary</span>
            </h2>
          </div>
          <div className="lg:col-span-12 flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button
              id="footer-cta-primary"
              onClick={openContactModal}
              className="group flex items-center justify-center gap-1.5 rounded-none bg-[#0F62FE] px-8 py-5 text-base font-extrabold text-black transition-all hover:bg-[#074299] hover:scale-105"
            >
              Get Started!
            </button>
            <button
              id="footer-cta-secondary"
              onClick={() => handleNavClick('services')}
              className="group flex items-center justify-center gap-2 rounded-none border-2 border-white bg-transparent px-8 py-5 text-base font-extrabold text-white transition-all hover:bg-white hover:text-black hover:scale-105"
            >
              Our Packages
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </div>
        </div>

        {/* Middle Section: Navigation & Hubs */}
        <div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-2 lg:grid-cols-12">
          
          {/* Logo Profile */}
          <div className="lg:col-span-4">
            <div className="flex flex-col items-start gap-1 text-white transition-transform group-hover:scale-105">
              <svg viewBox="0 0 100 100" className="h-10 w-auto mb-1 fill-white">
                <path d="M50,15 C35,15 20,30 20,50 C20,70 30,85 50,85 C70,85 80,70 80,50 L55,25 C50,20 40,20 35,25 L25,35 C35,20 45,15 60,30 L85,60 C90,70 85,90 70,95 C50,100 25,85 15,60 L40,35 C45,30 55,30 60,35 Z" />
              </svg>
              <div className="flex flex-col items-start">
                 <span className="text-xl font-bold tracking-[0.2em] leading-none">ACE</span>
                 <span className="text-[0.45rem] font-medium tracking-[0.3em] mt-0.5">INNOVATION NEXUS</span>
              </div>
            </div>
            <p className="mt-6 text-sm text-zinc-500 max-w-xs leading-relaxed">
              Build your brand, grow your business. We'll build your website, grow your socials, and streamline your brand.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-white"
                title="Instagram Profile"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-white"
                title="LinkedIn Page"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-white"
                title="Twitter Page"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Navigation links */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Agency Nav</h3>
            <ul className="mt-6 space-y-3.5 text-sm">
              <li>
                <button onClick={() => handleNavClick('home')} className="hover:text-white transition-colors">Home Landing</button>
              </li>
              <li>
                <button onClick={() => handleNavClick('services')} className="hover:text-white transition-colors">Impact & Case Studies</button>
              </li>
              <li>
                <button onClick={() => handleNavClick('about')} className="hover:text-white transition-colors">About the Architects</button>
              </li>
              <li>
                <button onClick={() => handleNavClick('partnerships')} className="hover:text-white transition-colors">Strategic Partnerships</button>
              </li>
              <li>
                <button onClick={() => handleNavClick('careers')} className="hover:text-white transition-colors">Careers & Talent</button>
              </li>
            </ul>
          </div>

          {/* Physical locations / Hubs */}
          <div className="lg:col-span-5">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Global Nerve Nodes</h3>
            <div className="mt-6 space-y-5">
              {officeHubs.map((hub, idx) => (
                <div key={idx} className="flex gap-3">
                  <MapPin className="h-5 w-5 text-[#0F62FE] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-zinc-200">{hub.city}</h4>
                    <span className="text-[10px] font-semibold text-[#0F62FE] uppercase font-mono block tracking-wider mt-0.5">
                      {hub.role}
                    </span>
                    <p className="text-[12px] text-zinc-500 mt-0.5">{hub.address}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom copyright details */}
        <div className="mt-8 border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-zinc-500">
          <div>
            &copy; {currentYear} Ace Innovation Nexus. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300">Privacy Blueprint</a>
            <a href="#" className="hover:text-slate-300">Operational Terms</a>
            <a href="#" className="hover:text-slate-300">Ecosystem Framework</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
