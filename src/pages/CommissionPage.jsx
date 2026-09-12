import React, { useState } from 'react';
import { Sparkles, MessageCircle, CheckCircle2, ArrowRight, ShieldCheck, Palette, Layers } from 'lucide-react';
import { ARTIST_BIO } from '../data/artworks';

export default function CommissionPage() {
  const [step, setStep] = useState(1);
  const [artTheme, setArtTheme] = useState('Portrait & Figurative');
  const [canvasSize, setCanvasSize] = useState('24 × 20 inches');
  const [colorPalette, setColorPalette] = useState('Warm Gold & Terracotta');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const themeOptions = ['Portrait & Figurative', 'Spiritual & Mythological', 'Abstract & Texture', 'Custom Story Concept'];
  const sizeOptions = ['8 × 10 inches (Compact)', '24 × 18 inches (Medium)', '24 × 20 inches (Large)', 'Custom Statement Size'];
  const paletteOptions = ['Warm Gold & Terracotta', 'Deep Crimson & Charcoal', 'Celestial Blue & Gold Leaf', 'Monochrome Charcoal & White'];

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hello Pragya! I would like to request a Custom Art Commission:
- Theme: ${artTheme}
- Size: ${canvasSize}
- Palette: ${colorPalette}
- Client Name: ${name}
- Phone/WhatsApp: ${phone}
- City: ${city}
- Custom Details: ${notes || 'N/A'}`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/919528701683?text=${encoded}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-20 px-4 lg:px-8 max-w-4xl mx-auto space-y-10 animate-fade-in">
      
      {/* Header */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Bespoke Studio Order</span>
        <h1 className="font-serif-heading text-4xl sm:text-5xl font-bold text-white">
          Commission a Custom Painting
        </h1>
        <p className="text-stone-300 text-sm font-light">
          Collaborate directly with Pragya Gill to create a unique physical canvas tailored to your space, dimensions, and vision.
        </p>
      </div>

      {/* Progress Steps */}
      <div className="glass-panel p-4 rounded-2xl border border-amber-500/20 flex items-center justify-between text-xs">
        <div className={`flex items-center gap-2 font-semibold ${step >= 1 ? 'text-amber-400' : 'text-stone-600'}`}>
          <span className="w-6 h-6 rounded-full bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-[10px]">1</span>
          <span className="hidden sm:inline">Theme</span>
        </div>
        <div className="h-[1px] bg-stone-800 flex-1 mx-2" />
        <div className={`flex items-center gap-2 font-semibold ${step >= 2 ? 'text-amber-400' : 'text-stone-600'}`}>
          <span className="w-6 h-6 rounded-full bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-[10px]">2</span>
          <span className="hidden sm:inline">Dimensions</span>
        </div>
        <div className="h-[1px] bg-stone-800 flex-1 mx-2" />
        <div className={`flex items-center gap-2 font-semibold ${step >= 3 ? 'text-amber-400' : 'text-stone-600'}`}>
          <span className="w-6 h-6 rounded-full bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-[10px]">3</span>
          <span className="hidden sm:inline">Palette</span>
        </div>
        <div className="h-[1px] bg-stone-800 flex-1 mx-2" />
        <div className={`flex items-center gap-2 font-semibold ${step >= 4 ? 'text-amber-400' : 'text-stone-600'}`}>
          <span className="w-6 h-6 rounded-full bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-[10px]">4</span>
          <span className="hidden sm:inline">Submit</span>
        </div>
      </div>

      {/* Main Interactive Form Card */}
      <div className="glass-panel p-8 rounded-3xl border border-amber-500/25 space-y-8">
        
        {submitted ? (
          <div className="py-12 text-center space-y-6">
            <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto" />
            <h2 className="font-serif-heading text-3xl font-bold text-white">Commission Request Sent!</h2>
            <p className="text-stone-300 text-sm max-w-md mx-auto">
              Your inquiry has been dispatched to Pragya Gill's WhatsApp studio line. She will respond with a preliminary concept sketch and quote.
            </p>
            <a
              href={ARTIST_BIO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-emerald-500 text-black font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/20"
            >
              <MessageCircle className="w-4 h-4" />
              Open WhatsApp Chat Now
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Step 1: Theme */}
            {step === 1 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <span className="text-[10px] uppercase font-bold text-amber-400 tracking-widest">Step 1 of 4</span>
                  <h3 className="font-serif-heading text-2xl font-bold text-white mt-1">Select Painting Theme & Subject</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {themeOptions.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setArtTheme(t)}
                      className={`p-5 rounded-2xl border text-left transition-all flex items-center justify-between ${
                        artTheme === t
                          ? 'bg-amber-500/15 border-amber-400 text-white font-semibold ring-2 ring-amber-400/30'
                          : 'bg-stone-900 border-stone-800 text-stone-300 hover:border-stone-700'
                      }`}
                    >
                      <span className="text-sm">{t}</span>
                      {artTheme === t && <CheckCircle2 className="w-5 h-5 text-amber-400" />}
                    </button>
                  ))}
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-8 py-3 rounded-full bg-amber-500 text-black font-bold text-xs uppercase tracking-wider flex items-center gap-2"
                  >
                    Next: Canvas Size
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Dimensions */}
            {step === 2 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <span className="text-[10px] uppercase font-bold text-amber-400 tracking-widest">Step 2 of 4</span>
                  <h3 className="font-serif-heading text-2xl font-bold text-white mt-1">Choose Canvas Dimensions</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {sizeOptions.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setCanvasSize(s)}
                      className={`p-5 rounded-2xl border text-left transition-all flex items-center justify-between ${
                        canvasSize === s
                          ? 'bg-amber-500/15 border-amber-400 text-white font-semibold ring-2 ring-amber-400/30'
                          : 'bg-stone-900 border-stone-800 text-stone-300 hover:border-stone-700'
                      }`}
                    >
                      <span className="text-sm">{s}</span>
                      {canvasSize === s && <CheckCircle2 className="w-5 h-5 text-amber-400" />}
                    </button>
                  ))}
                </div>

                <div className="flex justify-between pt-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-6 py-3 rounded-full bg-stone-800 text-stone-300 font-semibold text-xs uppercase tracking-wider"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="px-8 py-3 rounded-full bg-amber-500 text-black font-bold text-xs uppercase tracking-wider flex items-center gap-2"
                  >
                    Next: Color Palette
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Color Palette */}
            {step === 3 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <span className="text-[10px] uppercase font-bold text-amber-400 tracking-widest">Step 3 of 4</span>
                  <h3 className="font-serif-heading text-2xl font-bold text-white mt-1">Select Dominant Color Tones</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {paletteOptions.map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setColorPalette(p)}
                      className={`p-5 rounded-2xl border text-left transition-all flex items-center justify-between ${
                        colorPalette === p
                          ? 'bg-amber-500/15 border-amber-400 text-white font-semibold ring-2 ring-amber-400/30'
                          : 'bg-stone-900 border-stone-800 text-stone-300 hover:border-stone-700'
                      }`}
                    >
                      <span className="text-sm">{p}</span>
                      {colorPalette === p && <CheckCircle2 className="w-5 h-5 text-amber-400" />}
                    </button>
                  ))}
                </div>

                <div className="flex justify-between pt-4">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-6 py-3 rounded-full bg-stone-800 text-stone-300 font-semibold text-xs uppercase tracking-wider"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(4)}
                    className="px-8 py-3 rounded-full bg-amber-500 text-black font-bold text-xs uppercase tracking-wider flex items-center gap-2"
                  >
                    Next: Final Contact Info
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Contact & Submit */}
            {step === 4 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <span className="text-[10px] uppercase font-bold text-amber-400 tracking-widest">Step 4 of 4</span>
                  <h3 className="font-serif-heading text-2xl font-bold text-white mt-1">Contact Details & Final Notes</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-stone-400 block mb-1">Your Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Radhika Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-stone-900 border border-stone-800 text-white text-xs focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium text-stone-400 block mb-1">WhatsApp / Mobile Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-stone-900 border border-stone-800 text-white text-xs focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="text-xs font-medium text-stone-400 block mb-1">City & Delivery Location</label>
                    <input
                      type="text"
                      placeholder="e.g. New Delhi, India"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-stone-900 border border-stone-800 text-white text-xs focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="text-xs font-medium text-stone-400 block mb-1">Room Photo Details or Specific Inspiration</label>
                    <textarea
                      rows={3}
                      placeholder="Describe where the painting will hang or share reference ideas..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-stone-900 border border-stone-800 text-white text-xs focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="flex justify-between pt-4 border-t border-stone-800">
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="px-6 py-3 rounded-full bg-stone-800 text-stone-300 font-semibold text-xs uppercase tracking-wider"
                  >
                    Back
                  </button>
                  
                  <button
                    type="submit"
                    className="px-8 py-3.5 rounded-full bg-emerald-500 text-black font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Submit Custom Commission Inquiry
                  </button>
                </div>
              </div>
            )}

          </form>
        )}

      </div>

    </div>
  );
}
