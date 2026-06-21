import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Zap } from 'lucide-react';

interface HeaderProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  openContactModal: () => void;
}

export default function Header({ currentTab, setCurrentTab, openContactModal }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Impact & Services' },
    { id: 'about', label: 'About Us' },
    { id: 'partnerships', label: 'Partnerships' },
    { id: 'careers', label: 'Careers' }
  ];

  const handleNavClick = (tabId: string) => {
    setCurrentTab(tabId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8">
        
        {/* Brand Logo */}
        <button
          id="brand-logo-btn"
          onClick={() => handleNavClick('home')}
          className="group flex items-center gap-2.5 text-left focus:outline-none"
        >
          <div className="flex flex-col items-center justify-center text-white transition-transform group-hover:scale-105">
            <svg viewBox="0 0 100 100" className="h-8 w-auto mb-1 fill-white">
              <path d="M50,15 C35,15 20,30 20,50 C20,70 30,85 50,85 C70,85 80,70 80,50 L55,25 C50,20 40,20 35,25 L25,35 C35,20 45,15 60,30 L85,60 C90,70 85,90 70,95 C50,100 25,85 15,60 L40,35 C45,30 55,30 60,35 Z" />
            </svg>
            <div className="flex flex-col items-center">
               <span className="text-xl font-bold tracking-[0.2em] leading-none">ACE</span>
               <span className="text-[0.45rem] font-medium tracking-[0.3em] mt-0.5">INNOVATION NEXUS</span>
            </div>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1.5" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                id={`nav-item-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-4 py-2 text-sm font-bold transition-all duration-200 rounded-lg ${
                  isActive
                    ? 'text-white'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-1 left-4 right-4 h-0.5 rounded bg-zinc-200" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action CTA Button */}
        <div className="hidden md:flex items-center">
          <button
            id="nav-cta-btn"
            onClick={openContactModal}
            className="group flex items-center gap-1.5 rounded-full bg-white px-5 py-2 text-sm font-extrabold text-black shadow-sm transition-all hover:bg-zinc-200 active:scale-95"
          >
            Get Started
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          id="mobile-menu-btn"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 text-zinc-300 transition-colors hover:bg-zinc-900 md:hidden focus:outline-none"
          aria-expanded={isOpen}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Sidebar Backing Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-20 z-40 bg-slate-950/25 md:hidden" onClick={() => setIsOpen(false)} />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-20 left-0 right-0 z-40 border-b border-zinc-800 bg-zinc-950 px-6 py-8 shadow-xl transition-all duration-300 md:hidden ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-4">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                id={`mobile-nav-item-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-base font-bold transition-colors ${
                  isActive
                    ? 'text-white'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <div className="mt-4 border-t border-zinc-800 pt-6">
            <button
              id="mobile-nav-cta-btn"
              onClick={() => {
                setIsOpen(false);
                openContactModal();
              }}
              className="flex w-full items-center justify-center gap-1.5 rounded-full bg-white py-3.5 text-center text-sm font-extrabold text-black shadow transition-all hover:bg-zinc-200"
            >
              Get Started
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
