
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ChiSiamo from './pages/ChiSiamo'
import Prodotti from './pages/Prodotti'
import DefLayout from './layout/autlet'

function App() {
  

  return (
     <BrowserRouter>
     <Routes>
      <Route element={<DefLayout />}>
      <Route path="/" element={<HomePage/>} />
      <Route path="/chiSiamo" element={<ChiSiamo/>} />
      <Route path="/prodotti" element={<Prodotti/>} />
      </Route>
     </Routes>
     </BrowserRouter>
  )
}

export default App
