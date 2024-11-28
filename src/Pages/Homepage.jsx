import React from 'react'
import Hero from '../Components/Hero'
import Services from '../Components/Services'
import PreFooter from '../Components/PreFooter'
import About from '../Components/About'
import Pricing from '../Components/Pricing'
import TestimonialBlob from '../Components/TestimonialBlob'
import Footer from '../Components/Footer'



const Homepage = () => {
  return (
    <>
        <Hero />
        {/* <About /> */}
        <Services />
        <Pricing />
        <TestimonialBlob />
        <PreFooter />
        <Footer />
    </>
  )
}

export default Homepage