import React from 'react'
import Navbar from './components/Navbar'
import Welcome from './components/Welcome'
import About from './components/About'
import Tecnologies from './components/Tecnologies'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'


const App = () => {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bc-cyan-300 selection:text-cyan-900'>
      
  <div className='fixed top-0 -z-10 h-full w-full'>
  {/* BACKGROUND */}
  
  <div
    className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950
    bg-[radial-gradient(ellipse_80%_100%_at_60%_-20%,rgba(0,51,51,0.3),rgba(0,102,102,0))]"></div>



  </div>
      <div className='container mx-auto px-8'>
      <Navbar />
      <Welcome/>
      <About/>
      <Tecnologies/>
      <Experience/>
      <Projects/>
      <Contact/>
      </div>
    </div>
  )
}

export default App