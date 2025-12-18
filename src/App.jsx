import React from 'react'
import Navbar from './sections/navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Experiences from './sections/Experiences'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className='container mx-auto max-w-7xl'>
        <About />
        <Projects />
        <Experiences />
        {/* <Testimonial /> */}
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App