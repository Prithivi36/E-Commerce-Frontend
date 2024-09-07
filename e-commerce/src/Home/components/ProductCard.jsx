import React from 'react'
import apple from '../../assets/Apple.jpg'
import samsung from '../../assets/Samsung.jpg'
import { useNavigate } from 'react-router'
import shopSlice from '../../StateManagement/Slice';
import { useDispatch } from 'react-redux'
function ProductCard(props) {
  const navigator=useNavigate()
  const dispatch=useDispatch()
  console.log(shopSlice.actions)
  function handleClick(){
    dispatch(
      shopSlice.actions.setFullPage(
        {
          name:props.product.productName,
          price:props.product.price,
          owner:props.product.owner,
          desc:props.product.description,
          code:props.product.uniqCode,
          id:props.product._id
        }
      )
    )
    navigator("/select")
  }
  return (
    <>
    <div className='prod-container col  mb-2 p-3 d-inline-block'>
        <img className='prod-img' src={apple} alt="" />
        <p className='prod-name mx-0'>{props.product.productName}</p>
        <p className='text-silent'>sold by {props.product.owner}</p>
        <p className='mx-0 text-success fw-bolder'>${props.product.price}</p>
        <button onClick={handleClick} className='btn btn-primary'>Buy Now</button>
    </div>
    
    </>
  )
}

export default ProductCard