import React, { useState } from 'react';
import { Palette, Menu, X, MessageCircle, Sparkles } from 'lucide-react';
import { ARTIST_BIO } from '../data/artworks';

export default function Navbar({ currentRoute, navigateTo }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', route: 'home' },
    { name: 'Collections', route: 'collections' },
    { name: 'About Artist', route: 'about' },
    { name: 'Custom Commission', route: 'commission' },
    { name: 'Contact', route: 'contact' },
  ];

  const handleNav = (route) => {
    navigateTo(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav px-4 lg:px-8 py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo */}
        <div 
          onClick={() => handleNav('home')}
          className="cursor-pointer flex items-center gap-3 group"
        >
          <div className="w-10 h-10 rounded-full border border-amber-500/40 flex items-center justify-center bg-amber-500/10 group-hover:border-amber-400 transition-colors">
            <Palette className="w-5 h-5 text-amber-400" />
          </div>
          <div>
            <span className="font-cinzel text-xl lg:text-2xl font-bold tracking-widest text-white group-hover:text-amber-300 transition-colors block">
              PRAGYA GILL
            </span>
            <span className="text-[10px] tracking-widest uppercase text-amber-400/80 font-medium block -mt-1">
              Fine Art Studio
            </span>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.route}
              onClick={() => handleNav(link.route)}
              className={`text-sm tracking-wider uppercase font-medium transition-all relative py-1 ${
                currentRoute === link.route || (currentRoute.startsWith('artwork/') && link.route === 'collections')
                  ? 'text-amber-300 font-semibold'
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              {link.name}
              {(currentRoute === link.route || (currentRoute.startsWith('artwork/') && link.route === 'collections')) && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-amber-500 to-amber-200 rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* WhatsApp Direct CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={ARTIST_BIO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 hover:bg-amber-500/20 hover:border-amber-400 transition-all text-xs font-semibold uppercase tracking-wider"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            Studio WhatsApp
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-stone-300 hover:text-white p-2"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel mt-3 rounded-2xl p-6 border border-amber-500/20 animate-fade-in">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.route}
                onClick={() => handleNav(link.route)}
                className={`text-left text-base font-medium py-2 px-3 rounded-lg transition-colors ${
                  currentRoute === link.route
                    ? 'bg-amber-500/20 text-amber-300 font-semibold'
                    : 'text-stone-300 hover:bg-stone-800/50'
                }`}
              >
                {link.name}
              </button>
            ))}
            <div className="pt-4 border-t border-stone-800">
              <a
                href={ARTIST_BIO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-amber-500 text-black font-semibold text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Studio Inquiry
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
