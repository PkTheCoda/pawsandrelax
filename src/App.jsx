import { useState } from 'react'
import Homepage from './Pages/Homepage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';


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
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
