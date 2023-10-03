import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Service from '../components/Service'
import Portfolio from '../components/Portfolio'
import Skills from '../components/Skills'

const Home = () => {
  return (
    <div>
      <NavBar />
      <Header/>
      <Service/>
      <Portfolio/>
      <Skills/>
      <Footer/>
    </div>
  )
}

export default Home
