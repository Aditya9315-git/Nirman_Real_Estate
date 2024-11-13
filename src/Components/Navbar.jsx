import React, { useEffect, useState } from 'react'
import {assets} from '../assets/assets'
import { motion } from "framer-motion"

const Navbar = () => {
    const [showmobilemenu , setshowsmobilemenu]=useState(false)

    useEffect(()=>{
        if(showmobilemenu){
            document.body.style.overflow='hidden'
        }else{
            document.body.style.overflow='auto'
        }
        return()=>{
            document.body.style.overflow='auto'
        };
    },[showmobilemenu])

  return (
    <div className='absolute top-0 left-0 w-full z-10'>
        <motion.div
        initial={{opacity:0,y:100}}
        transition={{duration:1.5}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true}}
         className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
            <img className='h-20 w-40 rounded-lg' src={assets.Logomain} alt="" />
            <ul className='hidden md:flex gap-7 text-white'>
                <a href="#Header" className='cursor-pointer hover:text-gray-400'>Home</a>
                <a href="#About" className='cursor-pointer hover:text-gray-400'>About</a>
                <a href="#Projects" className='cursor-pointer hover:text-gray-400'>Projects</a>
                <a href="#TrustedBuyers" className='cursor-pointer hover:text-gray-400'>Trusted Buyers</a>
            </ul>
            <a href="#Contact">            
                <button className='hidden md:block  hover:text-white   hover:bg-blue-400 bg-white px-8 py-2 rounded-full'>Contact Us</button>
            </a>

            <img  onClick={()=> setshowsmobilemenu(true)} src={assets.menu_icon} className='md:hidden w-7 cursor-pointer' />
        </motion.div>


        <div className={`md:hidden ${showmobilemenu ?'fixed w-full': 'h-0 w-0' }  right-0 top-0 bottom-0 overflow-hidden  bg-gray-500 transition-all`}>
            <div className='flex justify-end p-6 cursor-pointer'>
                <img onClick={()=> setshowsmobilemenu(false)}   src={assets.cross_icon} className='w-6  ' alt="" />
            </div>
            <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium text-white'>
                <a onClick={()=> setshowsmobilemenu(false)}  href="#Header" className='px-4 py-2 rounded-full inline-block'>Home</a>
                <a onClick={()=> setshowsmobilemenu(false)} href="#About" className='px-4 py-2 rounded-full inline-block'>About</a>
                <a onClick={()=> setshowsmobilemenu(false)}  href="#Projects" className='px-4 py-2 rounded-full inline-block'>Projects</a>
                <a onClick={()=> setshowsmobilemenu(false)}  href="#TrustedBuyers" className='px-4 py-2 rounded-full inline-block'>Trusted Buyer</a>

            </ul>
        </div>

    </div>
  )
}

export default Navbar