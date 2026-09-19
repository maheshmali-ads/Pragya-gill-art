import React from 'react';
import { Palette, MessageCircle, Mail, Instagram, ShieldCheck, Truck, Sparkles } from 'lucide-react';
import { ARTIST_BIO } from '../data/artworks';

export default function Footer({ navigateTo }) {
  return (
    <footer className="bg-stone-950 border-t border-amber-500/15 text-stone-300 pt-16 pb-12 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Col 1: Brand Info */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-amber-500/40 flex items-center justify-center bg-amber-500/10">
              <Palette className="w-5 h-5 text-amber-400" />
            </div>
            <span className="font-cinzel text-xl font-bold tracking-widest text-white">
              PRAGYA GILL
            </span>
          </div>
          <p className="text-sm text-stone-400 leading-relaxed">
            {ARTIST_BIO.tagline} Physical original paintings & custom commissions shipped worldwide with hand-signed authenticity certificates.
          </p>
          <div className="pt-2 flex items-center gap-3">
            <a
              href={ARTIST_BIO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center hover:border-amber-400 hover:text-amber-400 transition-all"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={ARTIST_BIO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center hover:border-emerald-400 hover:text-emerald-400 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div className="space-y-4">
          <h4 className="font-cinzel text-base font-semibold text-white tracking-wider">
            Explore Studio
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <button onClick={() => navigateTo('collections')} className="hover:text-amber-300 transition-colors">
                All Artworks (15 Originals)
              </button>
            </li>
            <li>
              <button onClick={() => navigateTo('about')} className="hover:text-amber-300 transition-colors">
                About Pragya Gill
              </button>
            </li>
            <li>
              <button onClick={() => navigateTo('commission')} className="hover:text-amber-300 transition-colors">
                Custom Art Commission
              </button>
            </li>
            <li>
              <button onClick={() => navigateTo('contact')} className="hover:text-amber-300 transition-colors">
                Studio Contact & Inquiries
              </button>
            </li>
          </ul>
        </div>

        {/* Col 3: Trust & Assurance */}
        <div className="space-y-4">
          <h4 className="font-cinzel text-base font-semibold text-white tracking-wider">
            Authenticity & Shipping
          </h4>
          <div className="space-y-3 text-xs text-stone-400">
            <div className="flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>Hand-signed Certificate of Authenticity with official studio wax seal.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <Truck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>Worldwide insured express shipping with custom wooden crate packaging.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>Lightfast archival paints & UV protective varnish applied to every canvas.</span>
            </div>
          </div>
        </div>

        {/* Col 4: Direct Inquiries */}
        <div className="space-y-4">
          <h4 className="font-cinzel text-base font-semibold text-white tracking-wider">
            Direct Contact
          </h4>
          <p className="text-xs text-stone-400">
            Have questions about a specific painting or custom size? Reach out directly:
          </p>
          <div className="space-y-2 text-xs">
            <a
              href={`mailto:${ARTIST_BIO.email}`}
              className="flex items-center gap-2 text-stone-300 hover:text-amber-300 transition-colors"
            >
              <Mail className="w-4 h-4 text-amber-400" />
              {ARTIST_BIO.email}
            </a>
            <a
              href={ARTIST_BIO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-stone-300 hover:text-emerald-400 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              {ARTIST_BIO.whatsapp}
            </a>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-stone-900 flex flex-col md:flex-row items-center justify-between text-xs text-stone-500 gap-4 text-center md:text-left">
        <p>© {new Date().getFullYear()} Pragya Gill Fine Art Studio. All rights reserved.</p>
        <p>Created by <a href="https://www.linkedin.com/in/maheshmaliii/" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-amber-400 transition-colors underline decoration-stone-700 underline-offset-4">Mahesh Mali</a></p>
        <p className="tracking-widest uppercase">Handcrafted Fine Art | Global Delivery</p>
      </div>
    </footer>
  );
}
