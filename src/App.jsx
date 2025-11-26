import { useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Why from './components/Why'
import Testi from './components/Testi'
import Footer from './components/Footer'

function App(){

  return(
    <div className="w-full min-h-screen bg-linear-to-r from-blue-400 to-emerald-400">
      <Nav></Nav>
      <Hero></Hero>
      <Why></Why>
      <Testi></Testi>
      <Footer></Footer>
    </div>
  )
}

export default App