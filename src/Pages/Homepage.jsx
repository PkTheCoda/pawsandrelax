import React from 'react'
import Hero from '../Components/Hero'
import Services from '../Components/Services'
import Footer from '../Components/Footer'
import About from '../Components/About'
import Pricing from '../Components/Pricing'
import TestimonialBlob from '../Components/TestimonialBlob'



const Homepage = () => {
  return (
    <>
        <Hero />
        {/* <About /> */}
        <Services />
        <Pricing />
        <TestimonialBlob />
        <Footer />
    </>
  )
}

export default Homepage