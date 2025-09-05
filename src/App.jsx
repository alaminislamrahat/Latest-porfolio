import React from 'react'
import Navbar from './section/Navbar'

const App = () => {
  return (
    <div className='relative min-h-screen w-screen overflow-x-auto'>
      <Navbar/>
      <section id='home' className='min-h-screen'/>
      <section id='services' className='min-h-screen bg-amber-500'/>
    </div>
  )
}

export default App