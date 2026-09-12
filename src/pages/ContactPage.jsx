import React from 'react';
import { Mail, MessageCircle, Instagram, MapPin, ShieldCheck } from 'lucide-react';
import { ARTIST_BIO } from '../data/artworks';

export default function ContactPage() {
  return (
    <div className="pt-28 pb-20 px-4 lg:px-8 max-w-5xl mx-auto space-y-12 animate-fade-in">
      
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Get In Touch</span>
        <h1 className="font-serif-heading text-4xl sm:text-5xl font-bold text-white">
          Studio Contact & Inquiries
        </h1>
        <p className="text-stone-300 text-sm font-light">
          Whether you have questions about an original artwork, fine art prints, or custom framing, Pragya's studio team is here to assist.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Direct Channels Card */}
        <div className="glass-panel p-8 rounded-3xl border border-amber-500/20 space-y-6">
          <h3 className="font-cinzel text-xl font-bold text-white">Direct Communication</h3>
          
          <div className="space-y-4 text-xs">
            <a
              href={ARTIST_BIO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-stone-900 border border-stone-800 flex items-center gap-4 text-stone-200 hover:border-emerald-400 hover:text-emerald-400 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold text-white block text-sm">WhatsApp Studio Line</span>
                <span className="text-stone-400">{ARTIST_BIO.whatsapp} (Fastest Response)</span>
              </div>
            </a>

            <a
              href={`mailto:${ARTIST_BIO.email}`}
              className="p-4 rounded-2xl bg-stone-900 border border-stone-800 flex items-center gap-4 text-stone-200 hover:border-amber-400 hover:text-amber-300 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold text-white block text-sm">Direct Email</span>
                <span className="text-stone-400">{ARTIST_BIO.email}</span>
              </div>
            </a>

            <a
              href={ARTIST_BIO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-stone-900 border border-stone-800 flex items-center gap-4 text-stone-200 hover:border-pink-500 hover:text-pink-400 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-400 group-hover:scale-110 transition-transform">
                <Instagram className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold text-white block text-sm">Instagram Portfolio</span>
                <span className="text-stone-400">{ARTIST_BIO.instagram}</span>
              </div>
            </a>
          </div>
        </div>

        {/* Global Delivery & Studio Note */}
        <div className="glass-panel p-8 rounded-3xl border border-amber-500/20 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="font-cinzel text-xl font-bold text-white">Studio & Dispatch Note</h3>
            <div className="space-y-3 text-xs text-stone-300 leading-relaxed">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Base Studio located in India, shipping fine art worldwide via insured DHL & FedEx Express carriers.</span>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Every package is double-boxed with protective corners and custom shockproof wooden framing.</span>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs">
            <p className="font-bold">Studio Hours</p>
            <p className="text-[11px] text-stone-400 mt-0.5">Monday – Saturday: 10:00 AM – 7:00 PM IST</p>
          </div>
        </div>

      </div>

    </div>
  );
}
