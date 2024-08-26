import React from 'react'
import apple from '../assets/Apple.jpg'
import Verification from '../Home/components/Verification'
function FullView() {
  return (
    <>
    <div className='container d-md-flex align-items-center gap-5'>
        <img className='full-prod-img' src={apple} alt="" />
        <div className="info-prod">
            <p className='fw-bolder  mb-0 text-primary'>Apple World</p>
            <h2 className='fw-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, deserunt!</h2>
            <p className='prod-desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae iusto laboriosam odit nesciunt enim alias aspernatur consectetur animi ea aperiam, dolorem magnam sint aut, praesentium repellendus. Accusantium odit amet iusto?</p>
            <h1 className='text-success mb-0 d-inline-block'>$ 500 USD</h1>
            <button className="btn mb-3 btn-primary rounded-5 ms-5">Buy Now</button>
        </div>
    </div>
    <Verification />
    </>
  )
}

export default FullView