import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Navbar from "./components/navbar/Navbar"


import Home from './pages/Home';
import Recipies from './pages/Recipies';

function App() {


  return (
    <>
   
    <BrowserRouter>
    <Navbar />
    <Routes>
     
      <Route path='/' element={<Home />}/>
      <Route path='/Recipes' element={<Recipies />} />
    
    

    </Routes>

    </BrowserRouter>
  </>
  )
}

export default App;
