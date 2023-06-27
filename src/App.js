import React from 'react' 
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import Home from "./page/HomePage.js"
import ContactForm from './page/ContactForm.js' 
import Propos from './page/Propos'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<ContactForm />} />
        <Route path='/propos' element={<Propos />} />
      </Routes>
    </BrowserRouter>
  ) 
} 

export default App 