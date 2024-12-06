import { useState } from 'react'
import Homepage from './Pages/Homepage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

import Contact from './Pages/Contact';


function App() {

  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route 
            index
            element={<Homepage />}
          />

          <Route 
            route="/contact"
            element={<Contact />}
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
