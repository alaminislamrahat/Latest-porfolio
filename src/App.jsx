import Navbar from './section/Navbar'
import Hero from './section/Hero'
import ServiceSummery from './section/ServiceSummery'
import Services from './section/Services'
import gsap from 'gsap'
import { ScrollSmoother } from 'gsap/all'
import { useGSAP } from '@gsap/react'
import ReactLenis from 'lenis/react'
// gsap.registerPlugin(ScrollSmoother)
const App = () => {
  // useGSAP(() => {
  //   ScrollSmoother.create({
  //     smooth: 3,
  //     effects: true
  //   })
  // })

  return (
    <ReactLenis root className='relative min-h-screen w-screen '>
      <Navbar />
      {/* <div id="smooth-wrapper">
        <div id="smooth-content"> */}
          <Hero />
          <ServiceSummery />
          <Services />
          
          <section className='min-h-screen'></section>
          <section className='min-h-screen'></section>
          <section className='min-h-screen'></section>
        {/* </div>
      </div> */}

    </ReactLenis>
  )
}

export default App