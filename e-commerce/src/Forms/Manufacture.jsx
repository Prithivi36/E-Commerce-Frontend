import React from 'react'

function Manufacture() {
  return (
    <div className='contrainer p-5'>
        <h6 className='fw-bolder text-center text-primary mb-3'>Add new Poduct</h6>
            <div className="form-group d-flex flex-column gap-3 fw-bolder text-primary">
                <div className="">
                    <label className='ms-2 text-dark' htmlFor="name">Product Name</label>
                    <input type="text" className="form-control col-4" id="name"  placeholder="Enter product name"/>
                </div>
                <div className="">
                    <label className='ms-2 text-dark' htmlFor="price">Product Price</label>
                    <input type="number" className="form-control" id="price"  placeholder="Enter product price"/>
                </div>
                <div className="">
                    <label className='ms-2 text-dark' htmlFor="desc">Product Price</label>
                    <input type="number" className="form-control" id="desc"  placeholder="Enter product description"/>
                </div>
                <div className="">
                    <label className='ms-2 text-dark' htmlFor="code">Product Code</label>
                    <input type="text" className="form-control" id="code"  placeholder="Enter product code"/>
                </div>
                <div className="">
                    <label className='ms-2 text-dark' htmlFor="img">Product Image</label>
                    <input type="file" className="form-control" id="img"  placeholder="Enter product image"/>
                </div>

                <button className="btn btn-primary mt-3 rounded-5 d-inline-block">Sell</button>
            </div>
    </div>
  )
}

export default Manufacture