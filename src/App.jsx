
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Productlist from './components/Productlist'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'


function App() {
  return (
    <div>
      <Navbar/>
       <Hero/>
    <Productlist/>
    <Newsletter/>
    <Footer/>
    </div> 
  )
}

export default App
