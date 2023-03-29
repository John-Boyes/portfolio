import React from 'react'

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center py-6">
      <p className="font-bold text-xl md:text-2xl mb-3 dark:text-orange-500">Technolust Ninja</p>
      <p className="text-sm max-w-xl mb-6">
      Obsessed with finding solutions to ITs most difficult problems. I use my nearly 10 years of experience and thirst for knowledge to research and develop projects that improve efficiency and ROI.
        </p>
      <p className="text-sm max-w-xl mb-6">
        This portfolio website was created using React, Vite, and TailwindCSS. It also utilizes Github Actions for auto-deployment.
        </p>
    </div>
  )
}

export default Intro;