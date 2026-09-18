import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WallVisualizerModal from './components/WallVisualizerModal';
import InquiryDrawer from './components/InquiryDrawer';

import HomePage from './pages/HomePage';
import CollectionPage from './pages/CollectionPage';
import ArtworkDetailPage from './pages/ArtworkDetailPage';
import AboutPage from './pages/AboutPage';
import CommissionPage from './pages/CommissionPage';
import ContactPage from './pages/ContactPage';

import { ARTWORKS_DATA } from './data/artworks';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState('home');
  const [selectedWallArt, setSelectedWallArt] = useState(null);
  const [isWallModalOpen, setIsWallModalOpen] = useState(false);
  const [selectedInquiryArt, setSelectedInquiryArt] = useState(null);
  const [isInquiryDrawerOpen, setIsInquiryDrawerOpen] = useState(false);

  // Sync hash routing e.g. #collections or #artwork/warrior-within
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      setCurrentRoute(hash);
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (route) => {
    window.location.hash = route;
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const handleOpenWallModal = (artwork) => {
    setSelectedWallArt(artwork);
    setIsWallModalOpen(true);
  };

  const handleOpenInquiry = (artwork) => {
    setSelectedInquiryArt(artwork || ARTWORKS_DATA[0]);
    setIsInquiryDrawerOpen(true);
  };

  // Determine current page view
  let pageContent = null;

  if (currentRoute === 'home' || currentRoute === '') {
    pageContent = (
      <HomePage
        navigateTo={navigateTo}
        onOpenWallModal={handleOpenWallModal}
        onOpenInquiry={handleOpenInquiry}
      />
    );
  } else if (currentRoute === 'collections') {
    pageContent = (
      <CollectionPage
        navigateTo={navigateTo}
        onOpenWallModal={handleOpenWallModal}
        onOpenInquiry={handleOpenInquiry}
      />
    );
  } else if (currentRoute.startsWith('artwork/')) {
    const slug = currentRoute.replace('artwork/', '');
    pageContent = (
      <ArtworkDetailPage
        slug={slug}
        navigateTo={navigateTo}
        onOpenWallModal={handleOpenWallModal}
        onOpenInquiry={handleOpenInquiry}
      />
    );
  } else if (currentRoute === 'about') {
    pageContent = <AboutPage navigateTo={navigateTo} />;
  } else if (currentRoute === 'commission') {
    pageContent = <CommissionPage />;
  } else if (currentRoute === 'contact') {
    pageContent = <ContactPage />;
  } else {
    pageContent = (
      <HomePage
        navigateTo={navigateTo}
        onOpenWallModal={handleOpenWallModal}
        onOpenInquiry={handleOpenInquiry}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#0c0d10] text-[#e6e2dd] flex flex-col justify-between selection:bg-amber-500 selection:text-black">
      <Navbar currentRoute={currentRoute} navigateTo={navigateTo} />
      
      <main className="flex-1">
        {pageContent}
      </main>

      <Footer navigateTo={navigateTo} />

      {/* Global Modals */}
      <WallVisualizerModal
        artwork={selectedWallArt}
        isOpen={isWallModalOpen}
        onClose={() => setIsWallModalOpen(false)}
        onOpenInquiry={handleOpenInquiry}
      />

      <InquiryDrawer
        artwork={selectedInquiryArt}
        isOpen={isInquiryDrawerOpen}
        onClose={() => setIsInquiryDrawerOpen(false)}
      />
    </div>
  );
}
