import React from 'react'
import apple from '../assets/Apple.jpg'
import Verification from '../Home/components/Verification'
import ProductsGrid from '../Home/ProductsGrid'
import { useSelector } from 'react-redux'
function FullView() {
  const details=useSelector(
    state=>state.shop.fullpage
  )
  console.log(details)
  return (
    <>
    <div className='container d-md-flex align-items-center gap-5'>
        <img className='full-prod-img' src={details.image} alt="" />
        <div className="info-prod">
            <p className='fw-bolder  mb-0 text-primary'>{details.owner}</p>
            <h2 className='fw-bold'>{details.name}</h2>
            <p className='prod-desc'>{details.desc}</p>
            <h1 className='text-success mb-0 d-inline-block'>$ {details.price} USD</h1>
            <button className="btn mb-3 btn-primary rounded-5 ms-5">Buy Now</button>
        </div>
    </div>
    <div className="row">
      <div className="d-inline-block col mb-5">
        <Verification code={details.code} />
      </div>
      <div className="d-inline-block col">
        <ProductsGrid subhead={"More you might like"} />
      </div>
    </div>
    </>
  )
}

export default FullView