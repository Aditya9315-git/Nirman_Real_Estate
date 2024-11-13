import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
    return (
        <div className='flex flex-col items-center justify-center mx-auto p-5 md:px-20 lg:px-32 w-full overflow-hidden ' id='About'>
            <h1 className='text-2xl sm:text-4xl font-semibold mb-2'>About <span className='underline underline-offset-4 decoration-1 under font-light'>Our Brand</span></h1>
            <p className='text-gray-500 max-w-80 text-center mb-8'>Your satisfaction, our driving force in real estate. </p>
            <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
                <img src={assets.project1} className='h-[470px] w-full sm:w-1/2 max-w-lg' alt="" />

                <div className='flex flex-col items-center md:items-start mt-4 text-gray-600'>
                    <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
                        <div>
                            <p className='text-4xl font-medium text-gray-800'>10+</p>
                            <p>Projects Completed.</p>
                        </div>
                        <div>
                            <p className='text-4xl font-medium text-gray-800'>5+</p>
                            <p>Years Experience.</p>
                        </div>
                        <div>
                            <p className='text-4xl font-medium text-gray-800'>8+</p>
                            <p>On Going Projects.</p>
                        </div>
                        <div>
                            <p className='text-4xl font-medium text-gray-800'>100+</p>
                            <p>Happy Customes!!</p>
                        </div>
                    </div>
                    <p className='my-5 max-w-lg text-gray-600'>Welcome to Nirman Real Estate – Your Trusted Partner in Property Investment in Lucknow

                        At Nirman Real Estate, we specialize in providing premium residential plots, houses, and commercial properties across the beautiful city of Lucknow. With years of experience in the real estate market, we are dedicated to helping our clients find the perfect property that matches their needs, preferences, and budget.
                        <p className='my-2 max-w-lg'>
                        Our mission is simple: to make real estate investments a seamless and trustworthy experience for every client. Whether you are looking for your dream home, a profitable investment opportunity, or a spacious plot of land to build on, Nirman Real Estate offers expert guidance, transparent transactions, and a wide range of options to suit all your needs.
                        </p>

                    </p>

                </div>
            </div>
        </div>
    )
}

export default About