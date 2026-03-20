import React from 'react'
import Home from './pages/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Kampaniya from './pages/Kampaniya/Kampaniya'
import Stores from './pages/Stores/Stores'
import Corporate from './pages/Corporate/Corporate'


const App = () => {
  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/kampaniya' element={<Kampaniya />} />
          <Route path='/mağazalar' element={<Stores />} />
          <Route path='/korporativ-satislar' element={<Corporate />} />
        </Route>
      </Routes>
    </BrowserRouter>

    
  )
}

export default App