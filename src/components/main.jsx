import React, { useState, useEffect} from 'react';

import Intro from './Intro';
import Portfolio from './Portfolio';
import Timeline from './Timeline';
import Footer from './Footer';


function Main() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Function to handle scrolling to the top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Show the button when scrolled down 200px
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="
        bg-gradient-to-bl from-sky-50 via-rose-100 to-sky-500
        dark:from-stone-800 dark:to-sky-900 text-stone-900 
          dark:text-stone-300 min-h-[calc(100vh-16)] font-inter mx-auto">
        <div className='max-w-5xl w-11/12 mx-auto'>
          <Intro />
            <div id='Portfolio' class="section" >
            </div>
          <Portfolio />
            <div id='Timeline' class="section" >
            </div>
          <Timeline />
            <div id='Timeline' class="section" >
            </div>

          {/* Scroll to Top Button */}
          {showScrollButton && (
            <button
              onClick={scrollToTop}
              className="fixed bottom-12 right-12 transition"
              aria-label="Scroll to top"
            >
                <div class="animate-bounce bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
                  <svg class="w-6 h-6 text-violet-500" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                  </svg>
                </div>
            </button>
          )}

          {/* Footer */}

          <Footer />
            <div id='Timeline' class="section" >
            </div>
        </div>
      </div>
    </>
  )
}

export default Main
