import { useState } from 'react'
import ProductsGrid from './Home/ProductsGrid'
import ProjectIntro from './ProjectIntro'
import {HashRouter,Routes,Route} from 'react-router-dom'
import FullView from './FullView/FullView'
import Home from './Home/Home'

function App() {

  return (
    <>
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/select' element={<FullView />} />
      </Routes>
    </HashRouter>
    </>
  )
}

export default App
