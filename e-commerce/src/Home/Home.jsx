import React from 'react'
import ProjectIntro from '../ProjectIntro'
import ProductsGrid from './ProductsGrid'

function Home() {
  return (
    
    <>
    <ProjectIntro/>
    <ProductsGrid suhead={"Inspired by your browsing history"} />
    </>
  )
}

export default Home