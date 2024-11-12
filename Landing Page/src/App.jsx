import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Feature from './components/Feature.jsx'
import Workzflow from './components/Workzflow.jsx'

const App = () => {
  return (
    <>
    <Navbar/>
    <div className="max-w-7xl mx-auto pt-20 px-6">
    <Hero/> 
    <Feature/>
    <Workzflow/>
    </div>
    </>
  )
}

export default App