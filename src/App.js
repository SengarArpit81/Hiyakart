import React from 'react'
import Navbarr from './Components/Navbar/Navbar';
import { Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Homepage from './Components/Homepage/Homepage';
const App = () => {
  return (
    <div>

      <Navbarr />
    
      <Footer />

    </div>
  )
}

export default App;
