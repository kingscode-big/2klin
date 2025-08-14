 import React from 'react'
import './App.css'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Porducts from './Components/Porducts'
import Testimonials from './Components/Testimonial'
import Footer from './Components/Footer'
import Homepage from './Components/Homepage'
 import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'

function App() {
 

  return (
    <>
     

      <BrowserRouter >
         <Routes>
            <Route path='/' element={<Homepage />} />
            
             
      </Routes>
    </BrowserRouter>

    </>
    
  )
}

export default App
