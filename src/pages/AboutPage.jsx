import React from 'react';
import { Palette, ShieldCheck, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import { ARTIST_BIO } from '../data/artworks';

export default function AboutPage({ navigateTo }) {
  return (
    <div className="pt-28 pb-20 px-4 lg:px-8 max-w-7xl mx-auto space-y-20 animate-fade-in">
      
      {/* Hero Header */}
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-400">About The Artist</span>
        <h1 className="font-serif-heading text-4xl sm:text-5xl font-bold text-white">
          Pragya Gill
        </h1>
        <p className="text-stone-300 text-base font-light leading-relaxed">
          {ARTIST_BIO.tagline}
        </p>
      </section>

      {/* Bio Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Studio Image */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden border border-amber-500/30 shadow-2xl glass-panel">
            <img
              src="/pragya-gill-upscaled.jpg"
              alt="Pragya Gill"
              className="w-full h-[500px] object-cover object-top"
            />
            <div className="absolute bottom-0 inset-x-0 p-6 glass-panel border-t border-amber-500/20 text-center">
              <span className="font-cinzel text-lg font-bold text-white block">Pragya Gill</span>
              <span className="text-xs text-amber-400 font-medium">Fine Artist</span>
            </div>
          </div>
        </div>

        {/* Right Story Text */}
        <div className="lg:col-span-7 space-y-6">
          <h2 className="font-serif-heading text-3xl font-bold text-white">
            Capturing Raw Human Emotion & Spiritual Mythology On Physical Canvas
          </h2>

          {ARTIST_BIO.bioParagraphs.map((para, index) => (
            <p key={index} className="text-stone-300 text-sm sm:text-base leading-relaxed">
              {para}
            </p>
          ))}

          <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl glass-panel border border-amber-500/20 space-y-2">
              <ShieldCheck className="w-6 h-6 text-amber-400" />
              <h4 className="font-cinzel text-sm font-bold text-white">Signed & Wax-Sealed</h4>
              <p className="text-xs text-stone-400">Every artwork includes a physical Certificate of Authenticity with Pragya's studio wax seal.</p>
            </div>

            <div className="p-4 rounded-2xl glass-panel border border-amber-500/20 space-y-2">
              <Sparkles className="w-6 h-6 text-amber-400" />
              <h4 className="font-cinzel text-sm font-bold text-white">Archival Quality</h4>
              <p className="text-xs text-stone-400">Layered with UV-resistant archival varnish to protect pigments for generations.</p>
            </div>
          </div>

          <div className="pt-4">
            <button
              onClick={() => navigateTo('commission')}
              className="px-8 py-3.5 rounded-full bg-amber-500 text-black font-bold text-xs uppercase tracking-wider hover:bg-amber-400 transition-all flex items-center gap-2"
            >
              Discuss Custom Commission With Pragya
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </section>

      {/* Commission Steps Overview */}
      <section className="glass-panel rounded-3xl p-8 lg:p-12 border border-amber-500/20 space-y-10">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">How It Works</span>
          <h2 className="font-serif-heading text-3xl font-bold text-white">
            The Custom Art Commission Process
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ARTIST_BIO.commissionSteps.map((step) => (
            <div key={step.number} className="p-6 rounded-2xl bg-stone-900/60 border border-stone-800 space-y-3">
              <span className="font-cinzel text-2xl font-extrabold text-amber-400 block">{step.number}</span>
              <h3 className="font-cinzel text-base font-bold text-white">{step.title}</h3>
              <p className="text-xs text-stone-400 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
