import React from 'react';

import Intro from './Intro';
import Portfolio from './Portfolio';
import Timeline from './Timeline';
import Contact from './Contact';
import Footer from './Footer';


function Main() {


  return (
    <>
      <div className="
        bg-gradient-to-bl from-sky-50 via-rose-100 to-sky-500
        dark:from-stone-800 dark:to-sky-900 text-stone-900 
             dark:text-stone-300 min-h-screen font-inter mx-auto ">
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
          <Contact />
            <div id='Timeline' class="section" >
            </div>
          <Footer />
            <div id='Timeline' class="section" >
            </div>
        </div>
      </div>
    </>
  )
}

export default Main
