import React, { useState } from 'react';
import { Search, Filter, Eye, MessageCircle, ArrowRight } from 'lucide-react';
import { ARTWORKS_DATA } from '../data/artworks';

export default function CollectionPage({ navigateTo, onOpenInquiry }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [availabilityFilter, setAvailabilityFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  const categories = ['All', 'Original Oils & Acrylics', 'Spiritual & Mythological', 'Abstract & Charcoal'];

  const filteredArtworks = ARTWORKS_DATA.filter((art) => {
    const matchesCategory = selectedCategory === 'All' || art.category === selectedCategory;
    const matchesAvailability = availabilityFilter === 'All' || art.availability === availabilityFilter;
    const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          art.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesAvailability && matchesSearch;
  }).sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
  });

  return (
    <div className="pt-28 pb-20 px-4 lg:px-8 max-w-7xl mx-auto space-y-10 animate-fade-in">
      
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Complete Gallery</span>
        <h1 className="font-serif-heading text-4xl sm:text-5xl font-bold text-white">
          Original Fine Art Collection
        </h1>
        <p className="text-stone-300 text-sm sm:text-base font-light">
          Explore all 15 hand-painted physical artworks on canvas board. Every piece includes a wax-sealed Certificate of Authenticity.
        </p>
      </div>

      {/* Filter & Search Toolbar */}
      <div className="glass-panel p-5 rounded-2xl border border-amber-500/20 space-y-4">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by painting title or theme..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-stone-900 border border-stone-800 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-amber-400 transition-colors"
            />
          </div>

          {/* Availability & Sort Dropdowns */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <select
              value={availabilityFilter}
              onChange={(e) => setAvailabilityFilter(e.target.value)}
              className="w-full sm:w-auto px-3.5 py-2.5 rounded-xl bg-stone-900 border border-stone-800 text-xs text-stone-300 focus:outline-none focus:border-amber-400 cursor-pointer"
            >
              <option value="All">All Status (Available & Sold)</option>
              <option value="Available">Available Only</option>
              <option value="Sold Out">Sold Out</option>
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full sm:w-auto px-3.5 py-2.5 rounded-xl bg-stone-900 border border-stone-800 text-xs text-stone-300 focus:outline-none focus:border-amber-400 cursor-pointer"
            >
              <option value="featured">Featured First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>

        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-stone-800/60 pb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-amber-500 text-black shadow-md shadow-amber-500/20'
                  : 'bg-stone-900 text-stone-400 hover:text-white hover:bg-stone-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

      </div>

      {/* Artwork Grid */}
      {filteredArtworks.length === 0 ? (
        <div className="text-center py-20 glass-panel rounded-2xl border border-stone-800 space-y-3">
          <p className="text-stone-400 text-sm">No artworks matched your search criteria.</p>
          <button
            onClick={() => { setSelectedCategory('All'); setAvailabilityFilter('All'); setSearchQuery(''); }}
            className="text-xs font-bold text-amber-400 uppercase tracking-wider underline"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtworks.map((art) => (
            <div
              key={art.id}
              className="group glass-panel rounded-2xl overflow-hidden border border-amber-500/15 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              
              {/* Image Box */}
              <div 
                className="relative overflow-hidden cursor-pointer aspect-4/5 bg-stone-950"
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

              {/* Card Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 
                    onClick={() => navigateTo(`artwork/${art.slug}`)}
                    className="font-cinzel text-xl font-bold text-white hover:text-amber-300 cursor-pointer transition-colors"
                  >
                    {art.title}
                  </h3>
                  <p className="text-xs text-stone-400 mt-1">{art.size} • {art.medium}</p>
                  <p className="text-xs text-stone-300/80 mt-2 line-clamp-2 leading-relaxed">
                    {art.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-800/60 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-semibold text-stone-500 block">Price</span>
                    <span className="text-base font-bold text-amber-300">
                      ₹{art.price.toLocaleString('en-IN')}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">

                    <button
                      onClick={() => navigateTo(`artwork/${art.slug}`)}
                      className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-300 text-black font-bold text-xs uppercase tracking-wider hover:opacity-95 transition-opacity"
                    >
                      View
                    </button>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>
      )}

    </div>
  );
}
