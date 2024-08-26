import React from 'react'
import apple from './assets/Apple.jpg'
import samsung from './assets/Samsung.jpg'
function ProductCard() {
  return (
    <>
    <div className='card p-3 d-inline-block'>
        <img className='prod-img' src={apple} alt="" />
        <p className='prod-name'>Product Name Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, veniam?</p>
        <p>Product Price</p>
        <button className='btn btn-primary'>Buy Now</button>
    </div>
    
    </>
  )
}

export default ProductCard