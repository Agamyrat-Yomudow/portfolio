import React from 'react'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { fadeIn } from '../variants'
import { motion } from 'framer-motion'


const About = () => {
    const [ref, InView] = useInView({
        threshold: 0.5
    })
    return (
        <section className='section' id='about' ref={ref}>
            <div className='container mx-auto'>
                <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>


                    <motion.div
                    variants={fadeIn('right',0.3)}
                    initial={'hidden'}
                    whileInView={'show'}
                    viewport={{once:false, amount:0.3}}
                    className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'>

                    </motion.div>
                    <motion.div
                    variants={fadeIn('left',0.5)}
                    initial={'hidden'}
                    whileInView={'show'}
                    viewport={{once:false, amount:0.3}}
                    className='flex-1'>
                        <h2 className='h2 text-accent'>
                            About me.
                        </h2>
                        <h3 className='h3  mb-4'>
                            I'm a Freelance front-end developer with over 5 years of experience
                        </h3>
                        <p className='mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quaerat recusandae provident et? Qui dolor aliquam vitae totam sapiente, facere accusamus, incidunt quis est omnis tempora voluptas ducimus, illum dignissimos!</p>
                        <div className='flex gap-6 lg:gap-10 mb-12'>
                            <div>
                                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                                    {InView ? <CountUp start={0} end={13} duration={3} /> : null}
                                </div>
                                <div className='font-primary text-sm tracking-[2px]'>
                                    Years of <br />
                                    Experience
                                </div>
                            </div>
                            <div>
                                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                                    {InView ? <CountUp start={0} end={13} duration={3} /> : null}

                                </div>
                                <div className='font-primary text-sm tracking-[2px]'>
                                    Projects <br />
                                    Compleated
                                </div>
                            </div>
                            <div>
                                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                                    {InView ? <CountUp start={0} end={13} duration={3} /> : null}
                                </div>
                                <div className='font-primary text-sm tracking-[2px]'>
                                    Satisified <br />
                                    Clients
                                </div>
                            </div>

                        </div>
                        <div className='flex items-center gap-x-8'>
                            <button className='btn btn-lg'>Contact me</button>
                            <a className='text-gradient btn-link' href="">My portfolio</a>
                        </div>
                    </motion.div>
                </div >

            </div>
        </section>
    )
}

export default About
