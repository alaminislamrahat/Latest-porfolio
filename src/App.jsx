import Navbar from './section/Navbar'
import Hero from './section/Hero'
import ServiceSummery from './section/ServiceSummery'
import Services from './section/Services'

const App = () => {
  return (
    <div className='relative min-h-screen w-screen overflow-x-auto'>
      <Navbar/>
      <Hero/>
      <ServiceSummery/>
      <Services/>
     
    </div>
  )
}

export default App