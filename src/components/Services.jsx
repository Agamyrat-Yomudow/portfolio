import React from 'react'
import { BsArrowUpRight } from 'react-icons/bs'
import {motion}from 'framer-motion'
import { fadeIn } from '../variants'

const Services = () => {
    const services=[
        {
            name:'developer',
            description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam iure commodi cupiditate, deleniti saepe rerum,',
            Link:'Learn more'
        },
        {
            name:'developer',
            description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam iure commodi cupiditate, deleniti saepe rerum,',
            Link:'Learn more'
        },
        {
            name:'developer',
            description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam iure commodi cupiditate, deleniti saepe rerum,',
            Link:'Learn more'
        }
    ]
  return (
    <section className='section' id='services'>
        <div className='container mx-auto'>
            <div className='flex flex-col lg:flex-row'>
                <motion.div
                 variants={fadeIn('right', 0.3)} 
                 initial='hidden' 
                 whileInView={'show'} 
                 viewport={{once: false,amount:0.7}} 
                className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mb-12 lg:mb-0 mix-blend-lighten'>
                    <h2 className='mb-6 h2 text-accent'>What I do.</h2>
                    <h3 className='h3 max-w-[455px] mb-16'>I'm a Freelance front-end developer with over 5 years of experiance</h3>
                    <button className='btn btn-sm'>see my work</button>
                </motion.div>
                <motion.div className='flex-1'
                 variants={fadeIn('left', 0.5)} 
                 initial='hidden' 
                 whileInView={'show'} 
                 viewport={{once: false,amount:0.7}} 
                >
                    <div>
                        {services.map((service,index)=>(
                            <div className='border-b border-white/20 flex h-[146px] mb-[38px]' key={index}>
                                <div className='max-w-[476px]'>
                                    <h4 className='text-[20px] tracking-wider font-primary font-bold mb-6'>{service.name}</h4>
                                    <p className='font-secondary leading-tight'>{service.description}</p>
                                </div>
                                <div className='flex flex-col items-end flex-1'>
                                    <a className='h-9 w-9 btn mb-[42px] flex items-center justify-center ' href="">
                                        <BsArrowUpRight/>
                                    </a>
                                    <a className='text-gradient text-smmotion.' href="">{service.Link}</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default Services
