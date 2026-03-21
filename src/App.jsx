import { useState } from 'react'
import { useEffect } from 'react'
import { BrowserRouter, Router, Route } from 'react-router-dom'

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
