import Navbar from './section/Navbar'
import Hero from './section/Hero'
import ServiceSummery from './section/ServiceSummery'

const App = () => {
  return (
    <div className='relative min-h-screen w-screen overflow-x-auto'>
      <Navbar/>
      <Hero/>
      <ServiceSummery/>
    </div>
  )
}

export default App