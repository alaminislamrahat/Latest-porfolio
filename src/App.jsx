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
      <ContactSummery/>
      <Contact/>
    </ReactLenis>
  )
}

export default App