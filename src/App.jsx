import React from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Work from './components/Work'

const App = () => {
  return (
    <div className='bg-site bg-no-reapeat bg-cover overflow-hidden '>
        <Header/>
        <Banner/>
         <Navbar/>
         <About/>
         <Services/>
         <Work/>
         <Contact/>
         
    </div>
  )
}

export default App
