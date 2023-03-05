import React from 'react';

import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';


function App() {


  return (
    <>
      <Navbar />
      
      <div className="bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter mx-auto ">
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

export default App
