import React from 'react'
import Navbar from './Navbar'
import { motion } from "framer-motion"


const Header = () => {
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden' style={{backgroundImage:"url('/home3.jpg')"}} id='Header'>
      <Navbar/>
      <motion.div 
      initial={{opacity:0,y:200}}
      transition={{duration:2}}
      whileInView={{opacity:1, y:0}}
      viewport={{once:true}}
      className='container text-center mx-auto py-20 px-6 md:px-20 lg:px-32 text-white backdrop-brightness-75 '>
        <h2 className='text-5xl sm:text-6xl text-white  md:text-[52px] inline-block max-w-3xl font-semibold pt-20'>“Selling more than just houses, we’re selling dreams.”        </h2>
        <div className='space-x-6 mt-16'>
            <a href="#Project" className= ' hover:bg-gray-400 font-semibold  bg-blue-500 border-gray-300 px-8 py-3 rounded'>Projects</a>
            <a href="#Contact" className= 'font-semibold bg-blue-500 hover:bg-gray-400 border-gray-300 px-8 py-3 rounded'>Contact Us</a>

        </div>
      </motion.div>
    </div>
  )
}

export default Header