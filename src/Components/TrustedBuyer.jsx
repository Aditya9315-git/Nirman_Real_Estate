import React from 'react'
import { assets, testimonialsData } from '../assets/assets'

const TrustedBuyer = () => {
  return (
    <div className='container mx-auto py-10 lg:px-32 w-full overflow-hidden' id='TrustedBuyers'>
        <h1 className='text-2xl sm:text-4xl font-semibold mb-2 text-center'>Customer <span className='underline underline-offset-4 decoration-1 under font-light'>Testimonials</span></h1>
        <p className='text-gray-500 max-w-80 text-center mb-8 mx-auto'>Real Stories from Those Who Found Home with Us..</p>

        <div className='flex flex-wrap justify-center gap-8'>
            {testimonialsData.map((user,index)=>(
                <div key={index} className='max-w-[320px]  border shadow-lg rounded px-8 py-12 text-center'>
                    <img className='w-20 h-20 rounded-full mx-auto mb-4' src={user.image} alt={user.alt} />

                    <h2 className='text-xl text-gray-700 font-medium'>{user.name}</h2>
                    <p className='text-gray-500 mb-4 text-sm'>{user.title}</p>

                    <div className='flex justify-center gap-1 text-red-500 mb-4'>
                    {Array.from({length: user.rating},(item,index)=>(
                        <img key={index} src={assets.star_icon} alt="" />
                    ))}
                    </div>
                    <p className='text-gray-600'>{user.text}</p>
                </div>
            ) )}

        </div>

    </div>
  )
}

export default TrustedBuyer