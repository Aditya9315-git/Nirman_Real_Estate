import React, { useEffect, useState } from 'react'
import { assets, projectsData } from '../assets/assets'

const Projects = () => {
    const [currentIndex, setcurrentIndex]= useState(0);
    const [Cardstoshow, setcardstoshow]= useState(1);

    useEffect(()=>{
        const updateCardsToshow=()=>{
            if(window.innerWidth >= 1024){
                setcardstoshow(projectsData.length);
            }else{
                setcardstoshow(1)
            }
        };
        updateCardsToshow();
        window.addEventListener('resize',updateCardsToshow);
        return ()=> window.removeEventListener('resize',updateCardsToshow)
        

    })

    const nextproject= ()=>{
        setcurrentIndex((prevIndex)=>(prevIndex +1) % projectsData.length)
    }
    const prevproject= ()=>{
        setcurrentIndex((prevIndex)=> prevIndex === 0 ? projectsData.length -1 : prevIndex -1)
    }

    return (
        <div className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden' id='Projects'>
            <h1 className='text-2xl sm:text-4xl font-semibold mb-2 text-center '>Projects
            <span className='underline underline-offset-4 decoration-1 under font-light'> Our Sites</span>
            </h1>
            <p className='text-gray-500 max-w-80 text-center mb-8 mx-auto'>Premium Real Estate Projects with Vision and Impact. </p>

            {/* Sliders */}
            <div className='flex justify-end items-center mb-8'>
                <button onClick={prevproject}
                className='p-3 bg-gray-200 rounded mr-2' aria-label='Previous Project'><img src={assets.left_arrow} alt="Previous" /></button>

                <button  onClick={nextproject}
                className='p-3 bg-gray-200 rounded mr-2' aria-label='Previous Project'><img src={assets.right_arrow} alt="Next Projects" /></button>
            </div>

            {/* Projects slider */}
            <div className='overflow-hidden'>
                <div className='flex gap-8 transition-transform duration-500 ease-in-out' style={{transform:`translateX(-${(currentIndex *100)/ Cardstoshow}%)`}}>
                    {projectsData.map((project, index)=>(
                    <div key={index} className='relative flex-shrink-0  w-full sm:w-1/4 '>
                        <img className='w-full h-auto mb-14' src={project.image} alt="" />
                        <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                            <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'>
                                <h2 className='text-sm font-semibold text-gray-800'>{project.title}</h2>
                                <p className='text-gray-500 text-sm'>{project.price} | <span>{project.location}</span></p>
                             
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Projects