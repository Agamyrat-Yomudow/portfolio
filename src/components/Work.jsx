import React from 'react'
import Img1 from '../assets/portfolio-img1.png'
import Img2 from '../assets/portfolio-img2.png'
import Img3 from '../assets/portfolio-img3.png'
import {motion} from 'framer-motion'
import { fadeIn } from '../variants'

const Work = () => {
    return (
        <section className='section' id='work'>
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row gap-x-10'>
                    <motion.div 
                     variants={fadeIn('right', 0.5)} 
                     initial='hidden' 
                     whileInView={'show'} 
                     viewport={{once: false,amount:0.7}} 
                    className='flex-1 flex flex-col  gap-y-12 mb-10 lg:mb-0'>
                        <div>

                            <h2 className='h2 leading-tight text-accent'>My latest <br />Work.</h2>
                            <p className='max-w-sm mb-16'> Qui nemo nam consequuntur corrupti aperiam sequi dolores, aut cupiditate dolore. Recusandae labore aliquid possimus doloremque provident totam. </p>
                            <button className='btn btn-sm'>view all Projects</button>
                        </div>
                        <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                            <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt="" />
                            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                               <span className='text-gradient'>UI/UX Design</span> 
                            </div>
                            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>

                                <span className='text-3xl text-white'>Project Title</span>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                     variants={fadeIn('left', 0.5)} 
                     initial='hidden' 
                     whileInView={'show'} 
                     viewport={{once: false,amount:0.7}} 
                    className='flex-1 flex flex-col gap-y-10'>
                    <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                            <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt="" />
                            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                               <span className='text-gradient'>UI/UX Design</span> 
                            </div>
                            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>

                                <span className='text-3xl text-white'>Project Title</span>
                            </div>
                        </div>
                        <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                            <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt="" />
                            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                               <span className='text-gradient'>UI/UX Design</span> 
                            </div>
                            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>

                                <span className='text-3xl text-white'>Project Title</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Work
