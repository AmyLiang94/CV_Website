import React from 'react';
import Habita from "../assets/portfolio/Habita.png"
import NS from "../assets/portfolio/NS.png"

import Freshers from "../assets/portfolio/Freshers.png"
import NSUSociety from "../assets/portfolio/NSUSociety.png"
import IT from "../assets/portfolio/IT.jpg"
import LeadNSU from "../assets/portfolio/LeadNSU.png"


const Contribute = () => {

    const portfolio = [
        {
            id: 1,
            src: LeadNSU,
            href: 'https://mynsu.co.uk/leadnorthumbria/vote2025',
            description: '2025 Northumbria University Elections'
        },
        {
            id: 2,
            src: NS,
            href: 'https://northernstage.co.uk/',
            description: 'Northern Stage'

        },
        {
            id: 3,
            src: Habita,
            href: 'https://mynsu.co.uk/habita',
            description: 'Habita - bar & restaureant'
        },
        {
            id: 4,
            src: Freshers,
            href: 'https://mynsu.co.uk/Freshers2024',
            description: 'Northumbria Freshers Week 2024'
        },
        {
            id: 5,
            src: NSUSociety,
            href: 'https://mynsu.co.uk/societies',
            description: 'Northumbria University Societies Dashboard'
        },
        {
            id: 6,
            src: IT,
            href: 'https://theitapprentice.com/andy-naisbitt/',
            description: 'IT Apprentice Blog'
        },
    ]

  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:min-h-screen'>

    <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='font-signature text-4xl font-bold inline border-b-4 border-gray-500'>
            Open Source Group Project Contributions
            </p>
            <p className='py-6'>Check out some of my contribute right here</p>
        </div>
        <div  className='grid grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
        {
            portfolio.map(({id, src, href, description}) => (

                <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <a href={href} target='_blank' rel='noopener noreferrer'>    
                    <img 
                      src={src} 
                      alt=''
                      className='rounded-md duration-200 hover:scale-105'
                      />
                    <div className='flex items-center justify-center'>
                        <button className='w-1/2 justify-center py-3 m-4 duration-200 hover:scale-105'>{description}</button>
                    </div>
                    </a>
                </div>

            ))}
        </div>
    </div>

    </div>
  )
}

export default Contribute