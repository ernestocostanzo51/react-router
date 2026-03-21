import { useState } from 'react'
import { useEffect } from 'react'
import { BrowserRouter, Router, Route } from 'react-router-dom'
import homePage from './pages/homePage'
import chiSiamo from './pages/chiSiamo'
import Prodotti from './pages/Prodotti'

function App() {
  

  return (
    <>
     <BrowserRouter>
     <Router>
      <Route path='/' element={<homePage/>}></Route>
      <Route path='/chisiamo' element={<chiSiamo/>}></Route>
      <Route path='/prodotti' element={<Prodotti/>}></Route>
     </Router>
     </BrowserRouter>
    </>
  )
}

export default App
