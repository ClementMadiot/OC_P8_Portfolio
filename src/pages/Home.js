import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Service from '../components/Service'
import Portfolio from '../components/Portfolio'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import AboutMe from '../components/AboutMe'
// import NavSideBar from '../components/NavSideBar'

const Home = () => {
  return (
    <div>
      <NavBar />
      {/* <NavSideBar/> */}
      <Header />
      <AboutMe />
      <Portfolio />
      <Skills />
      <Service />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
