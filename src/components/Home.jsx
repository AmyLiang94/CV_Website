import React from 'react';
import WebsitePic from "../assets/WebsitePic.png";
import {MdOutlineKeyboardArrowRight} from 'react-icons/md';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div
    name = "home"
    className = "h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white"
    style={{
        "@media (max-width: 768px)":{
            paddingTop: "100px",
        },
    }}
    >
        <div className='max-w-screen-lg mx-auto flex  items-center justify-center h-full px-4 flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl  sm:text-7xl font-bold text-white font-signature' >
                    I'm a Software Developer
                </h2>
                <p className='text-gray-500 py-4 max-w-md font-signature'>
                For me, coding is more than just writing lines of code; it's about using our skills to create meaningful solutions and drive positive change in the world!
                </p>
                <div>
                    <Link 
                    to="portfolio" 
                    smooth 
                    duration={500}
                    className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md 
                    bg-gradient-to-r from-pink-500 to-rose-500 cursor-pointer font-signature'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                        <MdOutlineKeyboardArrowRight size={25}
                        className='ml-1'/>
                        </span>
                    </Link>
                </div>
            </div>
            <div>
                <img src={WebsitePic} alt="my profile" 
                className=" rounded-3xl mx-auto w-2/3 md:w-full"

                />

            </div>
        </div>
    </div>
  )
}

export default Home;

