import React from 'react'
import Navbar from './section/Navbar'
import Hero from './section/Hero'

const App = () => {
  return (
    <div className='relative min-h-screen w-screen overflow-x-auto'>
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default App