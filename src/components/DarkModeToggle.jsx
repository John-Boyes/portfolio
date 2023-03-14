import React from 'react';
import { useEffect, useState } from 'react';

function DarkModeToggle() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const sun = (
      <svg 
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        // viewBox="0 0 10 10"
        strokeWidth={2.5}
        stroke="currentColor"
        className='w-6 h-6'
        >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
  )

  const moon = (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      // viewBox="0 0 24 24" 
      strokeWidth={2.5} 
      stroke="currentColor" 
      className="w-6 h-6"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
    </svg>
  )

  if (window.innerWidth < 730) {

  return (
    <>
      <button
        type='button'
        onClick={handleThemeSwitch}
        aria-hidden='true'
        className='p-2 z-10 right-20 top-4 bg-violet-700 dark:bg-orange-500 text-lg p-1 rounded-md'
        >
        {theme === 'dark' ? sun : moon}
      </button>
    </>
  )}
  
    return (
      <>
      <span class="mr-2 text-sm font-medium text-purple-500">
        {moon}
      </span>
      <label class="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" value={ theme === 'dark' ? unchecked : checked } class="sr-only peer" onClick={handleThemeSwitch} />
          <div class="
            w-14 h-7 
            bg-gray-500 
            peer-focus:outline-none 
            peer-focus:ring-2 
            peer-focus:ring-purple-800 
            dark:peer-focus:ring-orange-800 
            rounded-full 
            peer-dark:bg-gray-700
            peer-checked:after:translate-x-full 
            peer-checked:after:border-white 
            after:absolute after:top-0.5 
            after:left-[4px] 
            after:bg-orange-500 
            dark:after:bg-purple-500 
            after:border-gray-300 
            after:border 
            after:rounded-full 
            after:h-6 after:w-6 
            after:transition-all 
            dark:border-gray-600 
            peer-checked:bg-gray-600
            after:content-[''] 
            ">
          </div>
      </label>
        <span class="ml-2 text-sm font-medium text-orange-500">
          {sun}
        </span>

    </>
  )

}


export default DarkModeToggle;