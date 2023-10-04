import React from 'react'
import NavBarAbout from '../components/NavBarAbout'
import Skills from '../components/Skills'
import Footer from '../components/Footer'
import AboutMe from '../components/AboutMe'
import Contact from '../components/Contact'


const About = () => {
  return (
    <div>
      <NavBarAbout/>
      <AboutMe />
      <Skills />
      <Contact/>
      <Footer />
    </div>
  )
}

export default About
