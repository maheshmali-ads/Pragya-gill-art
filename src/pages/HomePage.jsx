import React, { useState, useEffect } from 'react';
import { Palette, Sparkles, ArrowRight, Eye, ShieldCheck, Truck, MessageCircle, Star } from 'lucide-react';
import { ARTWORKS_DATA, ARTIST_BIO } from '../data/artworks';

export default function HomePage({ navigateTo, onOpenWallModal, onOpenInquiry }) {
  const featuredArtworks = ARTWORKS_DATA.filter(a => a.featured).slice(0, 4);
  const heroImages = featuredArtworks.length > 0 ? featuredArtworks : ARTWORKS_DATA.slice(0, 4);
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const currentHero = heroImages[currentHeroIndex] || ARTWORKS_DATA[0];

  return (
    <div className="space-y-24 pb-20 animate-fade-in">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6 text-left relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-semibold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Original Physical Artworks & Commissions
            </div>

            <h1 className="font-serif-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
              Fine Art That Feels Personal, Capturing <span className="gold-gradient-text">Raw Emotion</span> on Canvas
            </h1>

            <p className="text-stone-300 text-base sm:text-lg max-w-2xl font-light leading-relaxed">
              Explore 100% hand-painted acrylic & oil masterpieces on heavy canvas board by fine artist <strong className="text-white font-medium">Pragya Gill</strong>. Delivered worldwide with wax-sealed Certificates of Authenticity.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => navigateTo('collections')}
                className="w-full sm:w-auto justify-center px-7 py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-300 text-black font-bold text-xs uppercase tracking-wider hover:opacity-95 transition-all shadow-xl shadow-amber-500/15 flex items-center gap-2"
              >
                Explore All 15 Artworks
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button
                onClick={() => navigateTo('commission')}
                className="w-full sm:w-auto justify-center px-7 py-3.5 rounded-full border border-stone-700 bg-stone-900/60 text-white font-semibold text-xs uppercase tracking-wider hover:border-amber-400 hover:text-amber-300 transition-all flex items-center"
              >
                Commission Custom Art
              </button>
            </div>

            {/* Quick Stats */}
            <div className="pt-8 grid grid-cols-3 gap-2 sm:gap-6 border-t border-stone-800/80 text-[10px] sm:text-xs">
              <div>
                <span className="font-cinzel text-lg sm:text-xl font-bold text-amber-400 block">15+</span>
                <span className="text-stone-400">Original Masterpieces</span>
              </div>
              <div>
                <span className="font-cinzel text-xl font-bold text-amber-400 block">100%</span>
                <span className="text-stone-400">Hand-Painted Canvas</span>
              </div>
              <div>
                <span className="font-cinzel text-xl font-bold text-amber-400 block">Global</span>
                <span className="text-stone-400">Insured Shipping</span>
              </div>
            </div>
          </div>

          {/* Right Hero Image Card */}
          <div className="lg:col-span-5 relative z-10 h-[300px] sm:h-[400px] lg:h-[460px] mt-8 lg:mt-0">
            <div className="relative group h-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-amber-200/40 rounded-3xl blur-md opacity-40 group-hover:opacity-75 transition duration-500" />
              <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 bg-stone-900 shadow-2xl h-full">
                {heroImages.map((art, index) => (
                  <img
                    key={art.id}
                    src={art.localImage}
                    alt={art.title}
                    className={`absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-opacity duration-1000 ${
                      index === currentHeroIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                  />
                ))}
                
                {/* Image Overlay Banner */}
                <div className="absolute bottom-0 left-0 right-0 p-5 glass-panel border-t border-amber-500/20 flex items-center justify-between z-20">
                  <div className="overflow-hidden pr-2">
                    <span className="text-[10px] uppercase font-bold text-amber-400 tracking-widest">Featured Artwork</span>
                    <h3 className="font-cinzel text-lg font-bold text-white truncate max-w-[160px] sm:max-w-[200px]" key={`title-${currentHero.id}`}>
                      {currentHero.title}
                    </h3>
                    <p className="text-xs text-stone-300 truncate max-w-[160px] sm:max-w-[200px]" key={`desc-${currentHero.id}`}>
                      {currentHero.size} • {currentHero.medium}
                    </p>
                  </div>
                  <button
                    onClick={() => navigateTo(`artwork/${currentHero.slug}`)}
                    className="px-4 py-2 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold border border-amber-400/40 hover:bg-amber-500 hover:text-black transition-all shrink-0"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Featured Masterpieces Carousel/Grid */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-800 pb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Curated Showcase</span>
            <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-white mt-1">
              Featured Paintings
            </h2>
          </div>
          <button
            onClick={() => navigateTo('collections')}
            className="text-xs font-bold uppercase tracking-wider text-amber-400 hover:text-amber-300 flex items-center gap-1.5 self-start md:self-auto"
          >
            View Complete Gallery ({ARTWORKS_DATA.length})
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredArtworks.map((art) => (
            <div
              key={art.id}
              className="group glass-panel rounded-2xl overflow-hidden border border-amber-500/15 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div 
                className="relative overflow-hidden cursor-pointer aspect-4/5"
                onClick={() => navigateTo(`artwork/${art.slug}`)}
              >
                <img
                  src={art.localImage}
                  alt={art.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3">
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md ${
                    art.availability === 'Available' 
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                      : 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                  }`}>
                    {art.availability}
                  </span>
                </div>
              </div>

              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 
                    onClick={() => navigateTo(`artwork/${art.slug}`)}
                    className="font-cinzel text-lg font-bold text-white hover:text-amber-300 cursor-pointer transition-colors"
                  >
                    {art.title}
                  </h3>
                  <p className="text-xs text-stone-400 mt-1">{art.size} • {art.medium}</p>
                </div>

                <div className="pt-3 border-t border-stone-800/60 flex items-center justify-between">
                  <span className="text-sm font-bold text-amber-300">
                    ₹{art.price.toLocaleString('en-IN')}
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onOpenWallModal(art)}
                      className="p-2 rounded-lg bg-stone-800 text-stone-300 hover:text-amber-300 hover:bg-stone-700 transition-colors"
                      title="Visualize on Wall"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => navigateTo(`artwork/${art.slug}`)}
                      className="px-3 py-1.5 rounded-lg bg-amber-500/15 text-amber-300 text-xs font-semibold hover:bg-amber-500 hover:text-black transition-all"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Interactive Wall Visualizer Banner */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden glass-panel border border-amber-500/30 p-8 lg:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Interactive Studio Tool</span>
              <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-white">
                Visualize Art On Your Living Room Wall Before Collecting
              </h2>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                Wondering how a 24×20 inch canvas will look on your wall color? Use our interactive room preview tool to test frame styles and wall shades instantly.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onOpenWallModal(ARTWORKS_DATA[0])}
                  className="px-6 py-3 rounded-full bg-amber-500 text-black font-bold text-xs uppercase tracking-wider hover:bg-amber-400 transition-all flex items-center gap-2"
                >
                  <Eye className="w-4 h-4" />
                  Launch Room Visualizer Tool
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm rounded-2xl overflow-hidden border border-amber-500/40 shadow-2xl wall-bg-cream p-6 text-center">
                <img
                  src="/artworks/crown-never-asked.jpg"
                  alt="Room mockup"
                  className="w-48 mx-auto shadow-2xl border-4 border-black"
                />
                <span className="inline-block mt-4 text-[10px] font-bold uppercase tracking-widest text-stone-800 bg-white/70 px-3 py-1 rounded-full">
                  Live Wall Color Preview
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Commission CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-stone-900 via-stone-900 to-amber-950/40 border border-amber-500/20 p-8 lg:p-12 text-center space-y-6">
          <Sparkles className="w-10 h-10 text-amber-400 mx-auto" />
          <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-white max-w-2xl mx-auto">
            Looking for a Bespoke Custom Painting for Your Space?
          </h2>
          <p className="text-stone-300 text-sm max-w-xl mx-auto leading-relaxed">
            Collaborate directly with Pragya Gill to bring your vision to life on custom canvas sizes with your tailored color palette and room specifications.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <button
              onClick={() => navigateTo('commission')}
              className="px-8 py-3.5 rounded-full bg-amber-500 text-black font-bold text-xs uppercase tracking-wider hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/20"
            >
              Start Custom Commission
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
