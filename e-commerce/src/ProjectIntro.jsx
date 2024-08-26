import React from 'react'
import image from './assets/image.png'

function ProjectIntro() {
  return (
    <>
    <div className='d-flex p-3 align-items-center justify-content-around'>
        <div className='container card px-3 py-2 mt-5'>
            <h1 className='fw-bolder text-primary'>E-secure</h1>
            <p className='text-muted m-0'>A simple e-commerce website to improve online shopping security</p>
            <p className='text-muted'>Built with React</p>
            <p className='intro-text'>
            This anti-counterfeiting system for e-commerce was designed to achieve 99% accuracy in product authenticity verification. The project implemented unique identifiers for products and dynamically updated ownership records, ensuring transparency and security, effectively combating counterfeiting.
            </p>
        </div>
        <div className=" text-center container px-3 py-2 d-md-block align-items-center pt-5 justify-content-center d-flex d-none">
            <img className='intro-img img-fluid' src={image} alt="" />
        </div>
    </div>
    <div className="container mb-5">
        <button className="btn btn-primary">Explore 👍</button>
    </div>
    </>
  )
}

export default ProjectIntro