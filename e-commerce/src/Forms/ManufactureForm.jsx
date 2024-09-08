import React from 'react'
import { addProduct } from '../API/Api';

function ManufactureForm() {

    const [prod,setProd]=React.useState({
        productName:'',
        price:'',
        uniqCode:'',
        owner:'Apple',
        image:'',
        description:'',
        count:0
    })

    function handleSubmit(){
        addProduct(prod).then(
            res=>console.log(res.data)
        )
    }

    function handleChange(e){
        const {name,value}=e.target;
        setProd({...prod,[name]:value})
    }

    function imageToBase64(e){
        const file=e.target.files[0];
        console.log(e.target)
        const reader=new FileReader();
        reader.readAsDataURL(file);
        reader.onload=()=>{
            setProd({...prod,image:reader.result})
        }
    }
    console.log(prod)
  return (
    <div className='contrainer p-5'>
        <h6 className='fw-bolder text-center text-primary mb-3'>Add new Poduct</h6>
            <div className="form-group d-flex flex-column gap-3 fw-bolder text-primary">
                <div className="">
                    <label className='ms-2 text-dark' htmlFor="name">Product Name</label>
                    <input onChange={handleChange} name='productName' type="text" className="form-control col-4" id="name"  placeholder="Enter product name"/>
                </div>
                <div className="">
                    <label className='ms-2 text-dark' htmlFor="price">Product Price</label>
                    <input onChange={handleChange} name='price' type="number" className="form-control" id="price"  placeholder="Enter product price"/>
                </div>
                <div className="">
                    <label className='ms-2 text-dark' htmlFor="desc">Product description</label>
                    <input onChange={handleChange} name='description' type="text" className="form-control" id="desc"  placeholder="Enter product description"/>
                </div>
                <div className="">
                    <label className='ms-2 text-dark' htmlFor="img">Product Image</label>
                    <input onChange={imageToBase64} type="file" className="form-control" id="img"  placeholder="Enter product image"/>
                </div>
                <div className="">
                    <label className='ms-2 text-dark' htmlFor="count">Product Count</label>
                    <input onChange={handleChange} name='count' type="number" className="form-control" id="count"  placeholder="Enter production count"/>
                </div>

                <button onClick={handleSubmit} className="btn btn-primary mt-3 rounded-5 d-inline-block">Sell</button>
            </div>
    </div>
  )
}

export default ManufactureForm