import React from 'react'
import ProductCard from './components/ProductCard'
import ProjectIntro from '../ProjectIntro'

function ProductsGrid(props) {
  return (
    <>
    <h5 className='fw-bolder ms-5'>{props.subhead}</h5>
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