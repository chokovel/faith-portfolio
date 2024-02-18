import React from 'react'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Services from './components/services/Services'
import Projects from './components/projects/Projects'
import Clientel from './components/clients/Clientel'
import News from './components/news/News'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
      <Hero/>
      <Services/>
      <About/>
      <Projects/>
      <Clientel/>
      <News/>
      <Contact/>
      <Footer/>  
      
    </>
  )
}

export default App
