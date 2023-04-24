import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./Product.css"

function Product() {
  const[storelist,setStoreList]=useState([]);
  const[load,setISLoad]=useState(true);

  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products`)
            .then(resp=>resp.json())
            .then(data=>{
              setStoreList(data)
              setISLoad(false)
            })
  },[])





  if (load) {
      return(<>
        <div className="container py-5">
       <h2>Products</h2>
       <div className='row'>
       <div className='col-md-4'>
       <div class="card" aria-hidden="true">
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title placeholder-glow">
      <span class="placeholder col-6"></span>
    </h5>
    <p class="card-text placeholder-glow">
      <span class="placeholder col-7"></span>
      <span class="placeholder col-4"></span>
      <span class="placeholder col-4"></span>
      <span class="placeholder col-6"></span>
      <span class="placeholder col-8"></span>
    </p>
    <a class="btn btn-primary disabled placeholder col-6"></a>
  </div>
</div>
        </div>
        <div className='col-md-4'>
       <div class="card" aria-hidden="true">
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title placeholder-glow">
      <span class="placeholder col-6"></span>
    </h5>
    <p class="card-text placeholder-glow">
      <span class="placeholder col-7"></span>
      <span class="placeholder col-4"></span>
      <span class="placeholder col-4"></span>
      <span class="placeholder col-6"></span>
      <span class="placeholder col-8"></span>
    </p>
    <a class="btn btn-primary disabled placeholder col-6"></a>
  </div>
</div>
        </div>
        <div className='col-md-4'>
       <div class="card" aria-hidden="true">
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title placeholder-glow">
      <span class="placeholder col-6"></span>
    </h5>
    <p class="card-text placeholder-glow">
      <span class="placeholder col-7"></span>
      <span class="placeholder col-4"></span>
      <span class="placeholder col-4"></span>
      <span class="placeholder col-6"></span>
      <span class="placeholder col-8"></span>
    </p>
    <a class="btn btn-primary disabled placeholder col-6"></a>
  </div>
</div>
        </div>
       </div>
       
        </div>
        </>
      );
  }

  return (
    <div className="container py-5">
      <h2>Products</h2>
      <hr></hr>
      <div className='row'>
      {

        storelist.map((item)=>{
          const{id,image,title,price,category}= item;
          return<div className='col-md-4 mb-3'>
            <div className='card'>
              <img src={image} className='pro-img'></img>
              <div className='card-body'>
                <h6 className='py-1 text-truncate'>Title: {title}</h6>
                <h5>category: {category}</h5>
                <h5 className='text-danger'>price$: {price}</h5>
                <Link to={`/Product/${id}`} className='btn btn-primary'>More Details</Link>
              </div>
            </div>
          </div>
        })
      }

      </div>
      </div>

  )
}

export default Product
