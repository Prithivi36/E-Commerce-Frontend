import React from 'react'
import ProductCard from './components/ProductCard'
import ProjectIntro from '../ProjectIntro'
import { getProducts } from '../API/Api'
import { useDispatch, useSelector } from 'react-redux'

function ProductsGrid(props) {

  const dispatch=useDispatch();

  React.useEffect(()=>{
      dispatch(getProducts())
      console.log('log')
  },[])
  const products=(useSelector(state=>state.shop.products))
  return (
    <>
    <h5 className='fw-bolder ms-5'>{props.subhead}</h5>
        <div className='row py-3 px-5 gap-2 grid  justify-content-around '>
          {products.map((product)=><ProductCard key={product._id} product={product}/>)}
            
        </div>
    </>
  )
}

export default ProductsGrid