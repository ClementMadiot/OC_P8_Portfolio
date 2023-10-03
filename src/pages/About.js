import React from 'react'
import NavBar from '../components/NavBar'
import Skills from '../components/Skills'
import Footer from '../components/Footer'
import AboutMe from '../components/AboutMe'
import Contact from '../components/Contact'

const About = () => {
  return (
    <div>
      <NavBar />
      <AboutMe />
      <Skills />
      <Contact/>
      <Footer />
    </div>
  )
}

export default About
