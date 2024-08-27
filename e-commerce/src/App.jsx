import { useState } from 'react'
import ProductsGrid from './Home/ProductsGrid'
import ProjectIntro from './ProjectIntro'
import {HashRouter,Routes,Route} from 'react-router-dom'
import FullView from './FullView/FullView'
import Home from './Home/Home'
import Navbar from './Navbar/Navbar'
import Manufacture from './Manufacture/Manufacture'

function App() {

  return (
    <>
    <HashRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/select' element={<FullView />} />
        <Route path='/add' element={<Manufacture />} />
      </Routes>
    </HashRouter>
    </>
  )
}

export default App
