import React from 'react';
import portfolio from '../data/portfolio';
import PortfolioItem from './PortfolioItem';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


function Portfolio() {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center scroll-p-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {portfolio.map((project, index) => (
                <PortfolioItem
                    key={index}
                    imgUrl={project.imgUrl}
                    title={project.title}
                    stack={project.stack}
                    link={project.link}
                    blurb={project.blurb}
                />    
            ))}
        </div>
    </div>
  )
}

export default Portfolio