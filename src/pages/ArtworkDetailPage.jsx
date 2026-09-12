import React, { useState } from 'react';
import { Eye, MessageCircle, ShieldCheck, Truck, ArrowLeft, Sparkles, CheckCircle2, Share2 } from 'lucide-react';
import { ARTWORKS_DATA } from '../data/artworks';

export default function ArtworkDetailPage({ slug, navigateTo, onOpenWallModal, onOpenInquiry }) {
  const artwork = ARTWORKS_DATA.find((a) => a.slug === slug || a.id === slug) || ARTWORKS_DATA[0];
  const [zoomActive, setZoomActive] = useState(false);

  return (
    <div className="pt-28 pb-20 px-4 lg:px-8 max-w-7xl mx-auto space-y-12 animate-fade-in">
      
      {/* Back Button */}
      <button
        onClick={() => navigateTo('collections')}
        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 hover:text-amber-300 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Art Gallery
      </button>

      {/* Product Hero Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left: High-Res Artwork Viewer */}
        <div className="lg:col-span-7 space-y-4">
          <div 
            onClick={() => setZoomActive(!zoomActive)}
            className={`relative rounded-3xl overflow-hidden glass-panel border border-amber-500/30 bg-stone-950 p-4 cursor-zoom-in transition-all ${
              zoomActive ? 'ring-2 ring-amber-400' : ''
            }`}
          >
            <img
              src={artwork.localImage}
              alt={artwork.title}
              className={`w-full h-auto max-h-[600px] object-contain rounded-2xl mx-auto transition-transform duration-500 ${
                zoomActive ? 'scale-125' : 'scale-100'
              }`}
            />
            
            {/* Visualizer Badge Overlay */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between pointer-events-none">
              <span className="bg-black/80 backdrop-blur-md border border-amber-500/30 text-amber-300 text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full font-bold">
                {artwork.size} • {artwork.medium}
              </span>
              <span className="bg-black/80 backdrop-blur-md text-stone-300 text-[10px] px-3 py-1.5 rounded-full">
                Click image to {zoomActive ? 'reset zoom' : 'zoom texture'}
              </span>
            </div>
          </div>

          {/* Quick Room Visualizer Trigger Banner */}
          <div className="p-4 rounded-2xl glass-panel border border-amber-500/20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                <Eye className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Visualize On Your Living Room Wall</p>
                <p className="text-[10px] text-stone-400">Test painting scale & frame styles on different wall shades.</p>
              </div>
            </div>
            <button
              onClick={() => onOpenWallModal(artwork)}
              className="px-4 py-2 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-400/40 text-xs font-bold uppercase tracking-wider hover:bg-amber-500 hover:text-black transition-all"
            >
              Test On Wall
            </button>
          </div>
        </div>

        {/* Right: Painting Details & Purchase Funnel */}
        <div className="lg:col-span-5 space-y-6">
          
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                {artwork.category || 'Original Painting'}
              </span>
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                artwork.availability === 'Available'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                  : 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
              }`}>
                {artwork.availability}
              </span>
            </div>

            <h1 className="font-serif-heading text-3xl sm:text-4xl font-bold text-white leading-tight">
              {artwork.title}
            </h1>

            <div className="mt-3 flex items-baseline gap-3">
              <span className="text-3xl font-bold text-amber-300">
                ₹{artwork.price.toLocaleString('en-IN')}
              </span>
              <span className="text-xs text-stone-400">
                (Taxes & Global Shipping Calculated at Checkout)
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="p-4 rounded-xl bg-stone-900/60 border border-stone-800 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">Artwork Overview</h4>
            <p className="text-stone-300 text-xs leading-relaxed">
              {artwork.description}
            </p>
          </div>

          {/* Primary Action Buttons */}
          <div className="space-y-3 pt-2">
            <button
              onClick={() => onOpenInquiry(artwork)}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-300 text-black font-bold text-xs uppercase tracking-wider hover:opacity-95 transition-all shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Inquire to Collect Original Painting
            </button>

            <button
              onClick={() => onOpenInquiry(artwork)}
              className="w-full py-3.5 rounded-2xl border border-stone-700 bg-stone-900 text-stone-300 font-semibold text-xs uppercase tracking-wider hover:border-amber-400 hover:text-amber-300 transition-all flex items-center justify-center gap-2"
            >
              Order Fine Art Print Copy
            </button>
          </div>

          {/* Specifications Sheet */}
          <div className="space-y-3 pt-4 border-t border-stone-800">
            <h4 className="font-cinzel text-sm font-bold text-white uppercase tracking-wider">
              Artwork Specifications
            </h4>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-stone-900 border border-stone-800">
                <span className="text-stone-500 block text-[10px] uppercase font-bold">Dimensions</span>
                <span className="text-white font-medium">{artwork.size}</span>
              </div>
              <div className="p-3 rounded-xl bg-stone-900 border border-stone-800">
                <span className="text-stone-500 block text-[10px] uppercase font-bold">Medium</span>
                <span className="text-white font-medium">{artwork.medium}</span>
              </div>
              <div className="p-3 rounded-xl bg-stone-900 border border-stone-800">
                <span className="text-stone-500 block text-[10px] uppercase font-bold">Canvas Base</span>
                <span className="text-white font-medium">Heavy Canvas Board</span>
              </div>
              <div className="p-3 rounded-xl bg-stone-900 border border-stone-800">
                <span className="text-stone-500 block text-[10px] uppercase font-bold">Framing</span>
                <span className="text-white font-medium">Unframed / Custom Frame Available</span>
              </div>
            </div>
          </div>

          {/* Authenticity & Delivery Guarantees */}
          <div className="space-y-2 pt-2 text-xs text-stone-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Includes hand-signed authenticity certificate with official studio wax seal.</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-amber-400" />
              <span>Worldwide express shipping with protective shockproof packaging.</span>
            </div>
          </div>

        </div>

      </div>

      {/* Story Behind The Painting Section */}
      <section className="glass-panel rounded-3xl p-8 lg:p-12 border border-amber-500/20 space-y-6 max-w-4xl mx-auto">
        <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-widest">
          <Sparkles className="w-4 h-4" />
          The Artist's Notes
        </div>
        <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-white">
          Story Behind "{artwork.title}"
        </h2>
        <p className="text-stone-300 text-sm sm:text-base font-light leading-relaxed italic border-l-2 border-amber-400 pl-6 py-1">
          "{artwork.story}"
        </p>
      </section>

    </div>
  );
}
