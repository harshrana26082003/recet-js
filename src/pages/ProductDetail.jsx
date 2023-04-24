import React, { useEffect, useState } from 'react'
import { useParams, useNavigate} from 'react-router-dom'

function ProductDetail() {

  const parms = useParams();
  const[productDetail,setProductDetail]=useState({})
  const navigate = useNavigate()

  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/ ${parms.id}`)
    .then(res=>res.json())
    .then(data=>setProductDetail(data))
  },[])


  return (
    <div className="container py-5">
    <button className='btn btn-primary ' onClick={()=>navigate('/Product')
    }>Back</button>

    <div className='row py-5'>
      <div className='col-md-4'>
        <img src={productDetail.image} width="80%" className='proimg' alt=''></img>
      </div>
      <div className='col-md-8'>
        <h4 className='py-2'> Title: {productDetail.title}</h4>
        <h5 className='py-2'>category: {productDetail.category}</h5>
        <p className='py-2 text-dark'>description: {productDetail.description}</p>
        <h5 className='py-2 text-danger ' >price $: {productDetail.price}</h5>
      </div>
    </div>
  </div>
  )
}

export default ProductDetail
