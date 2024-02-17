import React from 'react'
import { fadeIn } from '../variants'
import {motion} from 'framer-motion'
const Contact = () => {
  return (
    <section className='section py-16 lg:section' id='contact'>
       <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
            <motion.div
             variants={fadeIn('right', 0.5)} 
             initial='hidden' 
             whileInView={'show'} 
             viewport={{once: false,amount:0.7}} 
             className='flex-1 flex justify-start items-center'>
                <h4 className='text-accent text-xl uppercase font-medium mb-2 tracking-wide '>Get in touch</h4>
                <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
                    Let's work <br /> together!
                </h2>
            </motion.div>
            <motion.form 
             variants={fadeIn('left', 0.5)} 
             initial='hidden' 
             whileInView={'show'} 
             viewport={{once: false,amount:0.7}} 
            className='flex-1 flex flex-col p-6 gap-y-6 items-start pb-24 border rounded-2xl' action="">
                <input type="text" className='bg-transparent outline-none w-full placeholder:text-white focus:border-accent border-b py-3' placeholder='Your name' />

                <input type="text" className='bg-transparent outline-none w-full placeholder:text-white focus:border-accent border-b py-3' placeholder='Your email' />
                <textarea placeholder='your message'  className='resize-none mb-12  bg-transparent outline-none w-full placeholder:text-white focus:border-accent border-b py-3'></textarea>
                <button className='btn btn-lg'>send message</button>
            </motion.form>
        </div>
       </div>
    </section>
  )
}

export default Contact
