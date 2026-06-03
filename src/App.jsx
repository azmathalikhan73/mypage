import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Menu, X, Gift, ChevronRight, ChevronLeft } from 'lucide-react';

// Import Pages
import Page1_Welcome from './pages/Page1_Welcome';
import Page2_Letter from './pages/Page2_Letter';
import Page3_Appreciation from './pages/Page3_Appreciation';
import Page4_Awards from './pages/Page4_Awards';
import Page5_GalleryGrid from './pages/Page5_GalleryGrid';
import Page7_GalleryCarousel from './pages/Page7_GalleryCarousel';
import Page8_ThankYou from './pages/Page8_ThankYou';
import Page9_Celebration from './pages/Page9_Celebration';
import Page10_FinalSurprise from './pages/Page10_FinalSurprise';

// Import Global Components
import FloatingParticles from './components/FloatingParticles';

const PAGES = [
  { id: 1, name: "Welcome", title: "Welcome Screen" },
  { id: 2, name: "Letter", title: "Heartfelt Letter" },
  { id: 3, name: "Family", title: "Our Guiding Light" },
  { id: 4, name: "Awards", title: "Mom's Awards" },
  { id: 5, name: "Gallery", title: "Memory Lanes" },
  { id: 6, name: "Portrait", title: "My Mom" },
  { id: 7, name: "Thank You", title: "Gratitude" },
  { id: 8, name: "Celebrate", title: "Make a Wish" },
  { id: 9, name: "Surprise", title: "Final Surprise" },
];

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [direction, setDirection] = useState(0); // -1 for back, 1 for next
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigateTo = (pageNumber) => {
    if (pageNumber === currentPage) return;
    setDirection(pageNumber > currentPage ? 1 : -1);
    setCurrentPage(pageNumber);
    setIsMenuOpen(false);
    // Scroll to top of container when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNext = () => {
    if (currentPage < PAGES.length) {
      navigateTo(currentPage + 1);
    }
  };

  const handleBack = () => {
    if (currentPage > 1) {
      navigateTo(currentPage - 1);
    }
  };

  const handleReplay = () => {
    setDirection(-1);
    setCurrentPage(1);
  };

  // Define transition animation settings
  const containerVariants = {
    enter: (dir) => ({
      x: dir > 0 ? '50vw' : '-50vw',
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 220, damping: 26 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 }
      }
    },
    exit: (dir) => ({
      zIndex: 0,
      x: dir < 0 ? '50vw' : '-50vw',
      opacity: 0,
      scale: 0.98,
      transition: {
        x: { type: 'spring', stiffness: 220, damping: 26 },
        opacity: { duration: 0.3 }
      }
    })
  };

  const renderActivePage = () => {
    switch (currentPage) {
      case 1:
        return <Page1_Welcome onNext={handleNext} />;
      case 2:
        return <Page2_Letter onNext={handleNext} onBack={handleBack} />;
      case 3:
        return <Page3_Appreciation onNext={handleNext} onBack={handleBack} />;
      case 4:
        return <Page4_Awards onNext={handleNext} onBack={handleBack} />;
      case 5:
        return <Page5_GalleryGrid onNext={handleNext} onBack={handleBack} />;
      case 6:
        return <Page7_GalleryCarousel onNext={handleNext} onBack={handleBack} />;
      case 7:
        return <Page8_ThankYou onNext={handleNext} onBack={handleBack} />;
      case 8:
        return <Page9_Celebration onNext={handleNext} onBack={handleBack} />;
      case 9:
        return <Page10_FinalSurprise onReplay={handleReplay} onBack={handleBack} />;
      default:
        return <Page1_Welcome onNext={handleNext} />;
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden bg-gradient-to-tr from-pink-50 via-rose-50/50 to-orange-50/30 selection:bg-pink-200 selection:text-pink-900 pb-16">
      
      {/* Global Animated Background Particles */}
      <FloatingParticles count={28} />

      {/* Main Header / Navigation */}
      <header className="sticky top-0 z-40 bg-white/40 backdrop-blur-md border-b border-pink-100/50 px-4 md:px-8 py-3.5 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigateTo(1)}>
          <span className="relative flex items-center justify-center bg-pink-500 text-white p-1.5 rounded-full shadow-sm">
            <Gift className="w-4 h-4 animate-bounce" />
          </span>
          <span className="font-serif font-bold text-gray-800 text-sm md:text-base tracking-wide flex items-center gap-1.5">
            Mom's Day Scrapbook <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          </span>
        </div>

        {/* Desktop Progress Indicators */}
        <div className="hidden lg:flex items-center gap-1 bg-white/50 px-3 py-1.5 rounded-full border border-pink-100/40 text-xs">
          {PAGES.map((page) => (
            <button
              key={page.id}
              onClick={() => navigateTo(page.id)}
              className={`px-2.5 py-1 rounded-full font-medium transition cursor-pointer ${
                currentPage === page.id
                  ? 'bg-pink-500 text-white shadow-sm'
                  : 'text-gray-500 hover:text-pink-600 hover:bg-pink-50/50'
              }`}
            >
              {page.id}
            </button>
          ))}
        </div>

        {/* Navigation Menu Trigger */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-pink-700 bg-pink-100/80 px-2.5 py-1 rounded-md font-mono">
            Page {currentPage} / 10
          </span>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 bg-pink-500 text-white rounded-full shadow hover:bg-pink-600 cursor-pointer active:scale-90 transition-all"
            title="Menu"
          >
            {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* Navigation Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black z-40"
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-72 md:w-80 bg-white/95 backdrop-blur-md shadow-2xl border-l border-pink-100 z-50 p-6 flex flex-col"
            >
              <div className="flex items-center justify-between border-b border-pink-100/80 pb-4 mb-6">
                <h3 className="font-serif font-bold text-gray-800 text-lg flex items-center gap-1.5">
                  Scrapbook Index <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
                </h3>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-1.5 hover:bg-pink-50 rounded-full cursor-pointer text-gray-400 hover:text-pink-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 space-y-2 overflow-y-auto pr-1">
                {PAGES.map((page) => (
                  <button
                    key={page.id}
                    onClick={() => navigateTo(page.id)}
                    className={`w-full text-left px-4 py-3 rounded-2xl flex items-center justify-between cursor-pointer transition ${
                      currentPage === page.id
                        ? 'bg-pink-500 text-white font-semibold shadow-md'
                        : 'bg-white/40 hover:bg-pink-50 text-gray-700 hover:text-pink-600 border border-transparent hover:border-pink-100'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold ${
                        currentPage === page.id ? 'bg-white text-pink-600' : 'bg-pink-100 text-pink-700'
                      }`}>
                        {page.id}
                      </span>
                      <span className="text-sm font-sans">{page.title}</span>
                    </div>
                    {currentPage === page.id && <Heart className="w-3.5 h-3.5 fill-white text-white" />}
                  </button>
                ))}
              </div>

              <div className="mt-auto border-t border-pink-100/80 pt-4 text-center">
                <p className="text-[10px] text-gray-400 font-mono">
                  Designed with love for Mom ❤️
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Scrapbook Content Frame */}
      <main className="flex-1 flex flex-col justify-center items-center w-full px-2 sm:px-4 md:px-6 relative z-30 pt-4 md:pt-8 pb-10">
        <div className="w-full max-w-5xl overflow-visible relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentPage}
              custom={direction}
              variants={containerVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full h-full"
            >
              {renderActivePage()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Bottom Timeline bar */}
      <footer className="fixed bottom-0 left-0 right-0 z-35 bg-white/45 backdrop-blur-md border-t border-pink-100/40 py-2.5 px-4 flex justify-between items-center shadow-lg">
        <button
          onClick={handleBack}
          disabled={currentPage === 1}
          className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider cursor-pointer border ${
            currentPage === 1
              ? 'border-gray-200 text-gray-300 bg-gray-50 cursor-not-allowed opacity-50'
              : 'border-pink-200 text-pink-600 bg-white/60 hover:bg-pink-100/40 hover:text-pink-700 active:scale-95 transition'
          }`}
          title="Previous Page"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Prev</span>
        </button>

        {/* Global Progress Bar */}
        <div className="flex-1 mx-6 relative h-1.5 bg-pink-100/60 rounded-full overflow-hidden max-w-md hidden sm:block">
          <div 
            className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full transition-all duration-500" 
            style={{ width: `${((currentPage - 1) / (PAGES.length - 1)) * 100}%` }}
          />
        </div>

        {/* Mobile Page indicator */}
        <span className="sm:hidden text-xs font-bold text-pink-700 bg-pink-50 px-2.5 py-1 rounded-full font-mono">
          {currentPage} / {PAGES.length}
        </span>

        <button
          onClick={handleNext}
          disabled={currentPage === PAGES.length}
          className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider cursor-pointer border ${
            currentPage === PAGES.length
              ? 'border-gray-200 text-gray-300 bg-gray-50 cursor-not-allowed opacity-50'
              : 'border-pink-200 text-pink-600 bg-white/60 hover:bg-pink-100/40 hover:text-pink-700 active:scale-95 transition'
          }`}
          title="Next Page"
        >
          <span>Next</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </footer>

    </div>
  );
}
