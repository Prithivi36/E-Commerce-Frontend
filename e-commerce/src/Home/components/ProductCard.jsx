import React from 'react'
import apple from '../../assets/Apple.jpg'
import samsung from '../../assets/Samsung.jpg'
import { useNavigate } from 'react-router'
function ProductCard() {
  const navigator=useNavigate()
  return (
    <>
    <div className='prod-container col  mb-2 p-3 d-inline-block'>
        <img className='prod-img' src={apple} alt="" />
        <p className='prod-name mx-0'>Product Name Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, veniam?</p>
        <p className='mx-0'>$ 500 USD</p>
        <button onClick={()=>navigator("/select")} className='btn btn-primary'>Buy Now</button>
    </div>
    
    </>
  )
}

export default ProductCard