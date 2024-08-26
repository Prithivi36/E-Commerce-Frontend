import React from 'react'
import ProductCard from './components/ProductCard'

function ProductsGrid() {
  return (
    <>
        
    <h5 className='fw-bolder ms-5'>Inspired by your browsing history</h5>
        <div className='row py-3 px-5 gap-2 grid  justify-content-around '>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
    </>
  )
}

export default ProductsGrid