import React, { useState } from 'react';
import { X, Eye, Sparkles, Check, Move, Maximize2, ArrowLeft } from 'lucide-react';

export default function WallVisualizerModal({ artwork, isOpen, onClose, onOpenInquiry }) {
  if (!isOpen || !artwork) return null;

  const [wallColor, setWallColor] = useState('cream');
  const [frameStyle, setFrameStyle] = useState('none');
  const [scaleFactor, setScaleFactor] = useState(1);

  const wallColors = [
    { id: 'cream', name: 'Warm Cream', class: 'bg-[#f4eee5]' },
    { id: 'charcoal', name: 'Deep Charcoal', class: 'bg-[#1f2229]' },
    { id: 'sage', name: 'Sage Green', class: 'bg-[#4a554a]' },
    { id: 'navy', name: 'Royal Navy', class: 'bg-[#1b263b]' },
  ];

  const frameStyles = [
    { id: 'none', name: 'Stretched Canvas (Frameless)', borderStyle: 'border-0' },
    { id: 'wood', name: 'Natural Oak Floating Frame', borderStyle: 'border-[12px] border-[#c29b68] shadow-2xl' },
    { id: 'black', name: 'Matte Black Gallery Frame', borderStyle: 'border-[10px] border-[#121212] shadow-2xl' },
    { id: 'gold', name: 'Antique Gold Frame', borderStyle: 'border-[10px] border-amber-600 shadow-2xl' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-5xl bg-stone-900 border border-amber-500/20 rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
        
        {/* Close/Back Buttons */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 z-20 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 hover:text-amber-300 bg-black/60 px-4 py-2 rounded-full transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 text-white hover:bg-amber-500 hover:text-black flex items-center justify-center transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Visualizer Canvas Area */}
        <div className={`flex-1 min-h-[380px] lg:min-h-[500px] flex items-center justify-center relative p-8 transition-colors duration-500 ${
          wallColors.find(c => c.id === wallColor)?.class || 'bg-[#f4eee5]'
        }`}>
          
          {/* Wall Sofa/Furniture Background Silhouette */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-4/5 h-24 bg-black/15 rounded-t-3xl backdrop-blur-xs flex items-center justify-center text-[10px] uppercase tracking-widest text-white/40 pointer-events-none">
            [ Living Room Wall Context ]
          </div>

          {/* Rendered Artwork on Wall */}
          <div 
            style={{ transform: `scale(${scaleFactor})` }}
            className={`relative transition-all duration-300 shadow-2xl rounded-sm ${
              frameStyles.find(f => f.id === frameStyle)?.borderStyle || ''
            }`}
          >
            <img
              src={artwork.localImage}
              alt={artwork.title}
              className="max-h-[260px] lg:max-h-[340px] w-auto object-contain rounded-xs shadow-lg"
            />
            {/* Dimension Overlay Badge */}
            <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 bg-black/80 text-amber-300 text-[10px] font-semibold px-2.5 py-1 rounded-full whitespace-nowrap backdrop-blur-xs border border-amber-500/30">
              {artwork.size}
            </div>
          </div>
        </div>

        {/* Controls Sidebar */}
        <div className="w-full lg:w-80 p-6 bg-stone-900 border-t lg:border-t-0 lg:border-l border-amber-500/15 flex flex-col justify-between">
          <div className="space-y-6">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400">Interactive Preview</span>
              <h3 className="font-cinzel text-xl font-bold text-white mt-0.5">{artwork.title}</h3>
              <p className="text-xs text-stone-400 mt-1">{artwork.size} • {artwork.medium}</p>
            </div>

            {/* Wall Color Selector */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-stone-300 block">
                Wall Color
              </label>
              <div className="grid grid-cols-4 gap-2">
                {wallColors.map((col) => (
                  <button
                    key={col.id}
                    onClick={() => setWallColor(col.id)}
                    className={`h-9 rounded-lg flex items-center justify-center transition-all border ${col.class} ${
                      wallColor === col.id ? 'border-amber-400 ring-2 ring-amber-400/40' : 'border-stone-700'
                    }`}
                    title={col.name}
                  >
                    {wallColor === col.id && <Check className="w-4 h-4 text-amber-500 drop-shadow-md" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Frame Selector */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-stone-300 block">
                Frame Option
              </label>
              <div className="space-y-1.5">
                {frameStyles.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setFrameStyle(f.id)}
                    className={`w-full text-left text-xs p-2.5 rounded-lg border transition-all flex items-center justify-between ${
                      frameStyle === f.id
                        ? 'bg-amber-500/15 border-amber-400 text-white font-medium'
                        : 'bg-stone-800/40 border-stone-800 text-stone-400 hover:border-stone-700'
                    }`}
                  >
                    <span>{f.name}</span>
                    {frameStyle === f.id && <Check className="w-3.5 h-3.5 text-amber-400" />}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Action */}
          <div className="pt-6 border-t border-stone-800 space-y-2">
            <button
              onClick={() => {
                onClose();
                onOpenInquiry(artwork);
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-300 text-black font-bold text-xs uppercase tracking-wider hover:opacity-95 transition-opacity"
            >
              Inquire This Painting
            </button>
            <p className="text-[10px] text-center text-stone-500">
              Custom framing & custom canvas sizing available on request.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
