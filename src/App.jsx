import Navbar from './section/Navbar'
import Hero from './section/Hero'
import ServiceSummery from './section/ServiceSummery'
import Services from './section/Services'
import gsap from 'gsap'
import { ScrollSmoother, ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'
import ReactLenis from 'lenis/react'
import About from './section/About'
import Works from './section/Works'
import ContactSummery from './section/ContactSummery'
import Contact from './section/Contact'
import { useProgress } from '@react-three/drei'
import { useEffect, useState } from 'react'

gsap.registerPlugin(ScrollTrigger)
const App = () => {

  const { progress } = useProgress();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (progress === 100) {
      setIsReady(true)
    }
  }, [progress])

  return (
    <ReactLenis root className='relative min-h-screen w-screen overflow-x-hidden'>
      {!isReady && (
        <div className='fixed inset-0 z-[999] flex flex-col items-center justify-center bg-black text-white transition-opacity duration-700 font-light '>
          <p className='mb-4 text-xl tracking-widest animate-pulse'>
            {Math.floor(progress)}%
          </p>
          <div className='relative h-1 overflow-hidden rounded w-60 bg-white/20'>
          <div
          style={{width : `${progress}%`}}
           className='absolute inset-0 top-0 left-0 h-full transition-all duration-300 bg-white'></div>
          </div>
        </div>
      )}

      <div className={`${progress === 100 ? "opacity-100" : "opacity-0"} transition-opacity duration-1000`}>
        <Navbar />
        <Hero />
        <ServiceSummery />
        <Services />
        <About />
        <Works />
        <ContactSummery />
        <Contact />
      </div>
    </ReactLenis>
  )
}

export default App