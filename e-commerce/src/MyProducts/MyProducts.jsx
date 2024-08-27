import React from 'react'
import ProdCard from './ProdCard'

function MyProducts() {
  return (
    <div className='container p-2'>
        <div className="card p-3">
            <h3 className='mb-3 text-center my-md-4'>My Products</h3>
            <div className="row gap-3 justify-content-center ">
                <ProdCard />                
                <ProdCard />                
                <ProdCard />                
                <ProdCard />                
            </div>
        </div>
    </div>
  )
}

export default MyProducts