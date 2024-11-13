import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full  overflow-hidden' id='Footer'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
            <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                <img className='h-[260px] w-[300px] ' src={assets.Logomain} alt="" />
                <p className='text-gray-400 mt-4'>
                With years of experience in the Lucknow real estate market, our team has in-depth knowledge of local property trends, pricing, and upcoming developments.
                </p>
            </div>
            <div className='w-full md:w-1/5 mb-8 md:mb-0'>
                <h3 className='text-white text-lg font-semibold mb-4'>Company</h3>
                <ul className='flex flex-col gap-2 text-gray-400'>
                    <a href="#Header" className='hover:text-white'>Home</a>
                    <a href="#About" className='hover:text-white'>About</a>
                    <a href="#Contact" className='hover:text-white'>Contact Us</a>
                    <a href="#" className='hover:text-white'>Privacy Policy</a>

                </ul>
            </div>
            <div className='w-full md:w-1/3'>
            <h3 className='text-white text-lg font-semibold mb-4'>Subscribe to Our Newsletter</h3>
            <p className='text-gray-400 mb-4 max-w-80'>The latest News, Articles and resources sent to your inbox weekly.</p>
            <div className='flex gap-2'>
                <input type="email" placeholder='Enter Your Email' className='p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto' />
                <button className='py-2 px-4 rounded bg-blue-500 text-white'>Subscribe</button>
            </div>
            </div>
        </div>
        <div className='border-t border-gray-700 py-4 mt-10 text-center text-gray-300'>
           Copyright 2024 © Nirman Real Estate. All Right Reserved.
        </div>

    </div>
  )
}

export default Footer