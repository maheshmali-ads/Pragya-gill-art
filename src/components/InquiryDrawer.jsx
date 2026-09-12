import React, { useState } from 'react';
import { X, MessageCircle, Mail, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { ARTIST_BIO } from '../data/artworks';

export default function InquiryDrawer({ artwork, isOpen, onClose }) {
  if (!isOpen || !artwork) return null;

  const [inquiryType, setInquiryType] = useState('original'); // 'original' or 'print' or 'commission'
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleWhatsAppSend = (e) => {
    e.preventDefault();
    const typeLabel = inquiryType === 'original' ? 'Original Artwork Purchase' : inquiryType === 'print' ? 'Fine Art Print Order' : 'Custom Commission Inquiry';
    const text = `Hello Pragya! I am interested in "${artwork.title}" (${artwork.size}, ${artwork.medium}).
- Interest Type: ${typeLabel}
- Name: ${name || 'Art Enthusiast'}
- Phone/WhatsApp: ${phone || 'N/A'}
- City/Location: ${city || 'N/A'}
- Message/Custom Notes: ${notes || 'Looking forward to details on availability and shipping.'}`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/919528701683?text=${encoded}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-xs animate-fade-in">
      <div className="relative w-full max-w-md bg-stone-900 border-l border-amber-500/20 h-full p-6 overflow-y-auto flex flex-col justify-between">
        
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-stone-800">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400">Direct Studio Inquiry</span>
              <h3 className="font-cinzel text-lg font-bold text-white mt-0.5">{artwork.title}</h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-stone-800 text-stone-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Artwork Summary Pill */}
          <div className="my-5 p-3 rounded-xl bg-stone-800/50 border border-stone-800 flex items-center gap-3">
            <img
              src={artwork.localImage}
              alt={artwork.title}
              className="w-16 h-16 object-cover rounded-lg border border-amber-500/30 shrink-0"
            />
            <div className="text-xs">
              <p className="font-semibold text-white">{artwork.title}</p>
              <p className="text-stone-400">{artwork.size} • {artwork.medium}</p>
              <p className="text-amber-400 font-bold mt-0.5">₹{artwork.price.toLocaleString('en-IN')}</p>
            </div>
          </div>

          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
              <h4 className="font-cinzel text-xl font-bold text-white">Inquiry Redirected!</h4>
              <p className="text-xs text-stone-300">
                Your WhatsApp chat has opened with Pragya Gill's studio team. If your app didn't open automatically, click below:
              </p>
              <a
                href={ARTIST_BIO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 text-black font-bold text-xs uppercase tracking-wider"
              >
                <MessageCircle className="w-4 h-4" />
                Open WhatsApp Now
              </a>
            </div>
          ) : (
            <form onSubmit={handleWhatsAppSend} className="space-y-4">
              
              {/* Type Option */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-stone-300 block">
                  I am inquiring about:
                </label>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  {[
                    { id: 'original', label: 'Original Art' },
                    { id: 'print', label: 'Art Print' },
                    { id: 'commission', label: 'Custom Art' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setInquiryType(item.id)}
                      className={`py-2 px-1 rounded-lg border text-center font-medium transition-all ${
                        inquiryType === item.id
                          ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                          : 'bg-stone-800/40 border-stone-800 text-stone-400 hover:border-stone-700'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Form Inputs */}
              <div>
                <label className="text-xs font-medium text-stone-400 block mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ananya Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-stone-800 border border-stone-700 text-white text-xs focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-stone-400 block mb-1">WhatsApp / Phone Number</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-stone-800 border border-stone-700 text-white text-xs focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-stone-400 block mb-1">Delivery City / Country</label>
                <input
                  type="text"
                  placeholder="e.g. Mumbai, India / London, UK"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-stone-800 border border-stone-700 text-white text-xs focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-stone-400 block mb-1">Specific Room / Custom Framing Request</label>
                <textarea
                  rows={2}
                  placeholder="e.g. Need help choosing frame color for living room wall."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-stone-800 border border-stone-700 text-white text-xs focus:outline-none focus:border-amber-400"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-emerald-500 text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20"
              >
                <MessageCircle className="w-4 h-4" />
                Send Studio WhatsApp Inquiry
              </button>

            </form>
          )}

        </div>

        {/* Footer Note */}
        <div className="pt-6 border-t border-stone-800 text-[10px] text-stone-500 space-y-1">
          <div className="flex items-center gap-1.5 text-stone-400 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>Official Pragya Gill Studio Channel</span>
          </div>
          <p>Hand-signed authenticity certificate & worldwide insured packaging included.</p>
        </div>

      </div>
    </div>
  );
}
