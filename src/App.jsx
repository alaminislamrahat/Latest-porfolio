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

gsap.registerPlugin(ScrollTrigger)
const App = () => {

  return (
    <ReactLenis root className='relative min-h-screen w-screen '>
      <Navbar />

      <Hero />
      <ServiceSummery />
      <Services />
      <About />
      <Works />
      <section className='min-h-screen'></section>
    </ReactLenis>
  )
}

export default App