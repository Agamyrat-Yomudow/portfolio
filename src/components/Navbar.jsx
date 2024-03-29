import React from 'react'
import { Link } from 'react-scroll'
import {BiHomeAlt, BiUser} from 'react-icons/bi'
import {BsBriefcase, BsChatSquareText, BsClipboardData} from 'react-icons/bs'

const Navbar = () => {
  return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
        <div className='container mx-auto'>
            <div className='w-full bg-black/20 h-[96px] backdrop-blur-2xl max-w-[460px] items-center rounded-full mx-auto px-5 flex justify-between text-2xl text-white/50'>
                <Link to='home'
                activeClass='active'
                smooth={true}
                spy={true}
                offset={-200}
                 className='flex h-[60px] w-[60px] cursor-pointer items-center justify-center '>
                    <BiHomeAlt/>
                </Link>
                <Link to='about'
                activeClass='active'
                smooth={true}
                spy={true}
                offset={100}
                 className='flex h-[60px] w-[60px] cursor-pointer items-center justify-center '>
                    <BiUser/>
                </Link>
                <Link to='services'
                activeClass='active'
                smooth={true}
                spy={true}
                className='flex h-[60px] w-[60px] cursor-pointer items-center justify-center '>
                    <BsClipboardData/>
                </Link>
                <Link to='work'
                activeClass='active'
                smooth={true}
                spy={true}
                className='flex h-[60px] w-[60px] cursor-pointer items-center justify-center '>
                    <BsBriefcase/>
                </Link>
                <Link to='contact'
                activeClass='active'
                smooth={true}
                spy={true}
                className='flex h-[60px] w-[60px] cursor-pointer items-center justify-center '>
                    <BsChatSquareText/>
                </Link>
            </div>

        </div>
    </nav>
  )
}

export default Navbar
