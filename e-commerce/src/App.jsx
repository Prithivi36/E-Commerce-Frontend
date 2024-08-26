import { useState } from 'react'
import ProductsGrid from './Home/ProductsGrid'
import ProjectIntro from './ProjectIntro'
import {HashRouter,Routes,Route} from 'react-router-dom'

function App() {

  return (
    <>
    
    <ProjectIntro />
    <ProductsGrid />
    </>
  )
}

export default App
