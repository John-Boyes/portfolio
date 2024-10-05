import { React, useEffect } from 'react'

//animate on scroll
import AOS from 'aos'
import "aos/dist/aos.css"

function Intro() {
  useEffect(() => {
    AOS.init({duration:1200})
  })
  return (
    <div className="flex items-center justify-center flex-col text-center py-6 min-h-full">
      <p className="font-bold text-xl md:text-2xl mb-3 dark:text-orange-500"
        data-aos="fade-up"
        >
            Technolust Ninja
      </p>
      <p className="text-sm max-w-xl mb-6" data-aos="fade-up">
      Obsessed with finding solutions to ITs most difficult problems. I use my nearly 10 years of experience and thirst for knowledge to research and develop projects that improve efficiency and ROI.
        </p>
      <p className="text-sm max-w-xl mb-6" data-aos="fade-up">
        This portfolio website was created using React, Vite, and TailwindCSS. It also utilizes Github Actions for auto-deployment.
        </p>
        <div class="absolute bottom-12 right-12">
          <div class="animate-bounce bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
            <svg class="w-6 h-6 text-violet-500" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
    </div>
  )
}

export default Intro;