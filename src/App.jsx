 import React from 'react'
import './App.css'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Porducts from './Components/Porducts'
import Testimonials from './Components/Testimonial'
import Footer from './Components/Footer'
import Homepage from './Components/Homepage'
import Contact from './Components/Contact'
import MakeOrder from './Components/MakeOrder'
 import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'
import ProdcutsPage from './Components/ProductsPage'
 

function App() {
 

  return (
    <>
     

      <BrowserRouter >
         <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/order-services' element={<MakeOrder/>} />
            <Route path='/products' element={<ProdcutsPage/>} />
            
             
      </Routes>
    </BrowserRouter>

    </>
    
  )
}

export default App
