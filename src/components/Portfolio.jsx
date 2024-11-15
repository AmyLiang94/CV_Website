import React from 'react';
import MoneyManagement from "../assets/portfolio/MoneyManagement.png"
import installNode from "../assets/portfolio/installNode.jpg"
import TouristSite from "../assets/portfolio/TouristSite.png"
import Battleship from "../assets/portfolio/Battleship.png"
import Quiz_application from "../assets/portfolio/Quiz_application.png"
import reactWeather from "../assets/portfolio/reactWeather.jpg"



const Portfolio = () => {

    const portfolio = [
        {
            id: 1,
            
            src: Quiz_application,
            href: 'https://github.com/AmyLiang94/Quiz-application'
        },
        {
            id: 2,
            src: TouristSite,
            href: 'https://github.com/AmyLiang94/Newcastle-Travel-Web-App'
            
        },
        {
            id: 3,
            src: Battleship,
            href: 'https://github.com/benblack90/Battleships',
            
        },
        {
            id: 4,
            src: MoneyManagement,
            href: 'https://youtu.be/DyVhWUyiJUs',
            
        },
        {
            id: 5,
            src: installNode
        },
        {
            id: 6,
            src: reactWeather
        },
    ]

  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:min-h-screen'>

    <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='font-signature text-4xl font-bold inline border-b-4 border-gray-500'>
                Portfolio
            </p>
            <p className='py-6'>Check out some of my work right here</p>
        </div>
        <div  className='grid grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
        {
            portfolio.map(({id, src, href}) => (

                <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <a href={href} target='_blank' rel='noopener noreferrer'>    
                    <img 
                      src={src} 
                      alt=''
                      className='rounded-md duration-200 hover:scale-105'
                      />
                    <div className='flex items-center justify-center'>
                        <button className='w-1/2 justify-center py-3 m-4 duration-200 hover:scale-105'>More</button>
                    </div>
                    </a>
                </div>

            ))}
        </div>
    </div>

    </div>
  )
}

export default Portfolio