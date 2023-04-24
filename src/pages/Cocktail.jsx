import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Cocktail() {

  const [cocktailList ,setCocktailList]=useState([])
  const [loading, setLoading]=useState(true)
  const [searchvalue,setSearchValue]=useState("")

  useEffect(()=>{
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchvalue}`)
    .then((Resp)=>Resp.json())
    .then((data)=>{
      setCocktailList(data.drinks);
      setLoading(false);
      }
    )
  },[searchvalue])

  if(loading){
    return (
       <div className="container py-5">
    <h2>cocktail List</h2>
    <div className='row'>
      <div className='col-md-4'>
    <div className="card" aria-hidden="true">
  <img src="..." className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title placeholder-glow">
      <span className="placeholder col-6" />
    </h5>
    <p className="card-text placeholder-glow">
      <span className="placeholder col-7" />
      <span className="placeholder col-4" />
      <span className="placeholder col-4" />
      <span className="placeholder col-6" />
      <span className="placeholder col-8" />
    </p>
    <a className="btn btn-primary disabled placeholder col-6" />
  </div>
</div>

      </div>
      <div className='col-md-4'>
    <div className="card" aria-hidden="true">
  <img src="..." className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title placeholder-glow">
      <span className="placeholder col-6" />
    </h5>
    <p className="card-text placeholder-glow">
      <span className="placeholder col-7" />
      <span className="placeholder col-4" />
      <span className="placeholder col-4" />
      <span className="placeholder col-6" />
      <span className="placeholder col-8" />
    </p>
    <a className="btn btn-primary disabled placeholder col-6" />
  </div>
</div>

      </div>
      <div className='col-md-4'>
    <div className="card" aria-hidden="true">
  <img src="..." className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title placeholder-glow">
      <span className="placeholder col-6" />
    </h5>
    <p className="card-text placeholder-glow">
      <span className="placeholder col-7" />
      <span className="placeholder col-4" />
      <span className="placeholder col-4" />
      <span className="placeholder col-6" />
      <span className="placeholder col-8" />
    </p>
    <a className="btn btn-primary disabled placeholder col-6" />
  </div>
</div>
 </div>
    </div>
    
    </div>
    
    ) 
  }






  return (
    <div className="container py-5">
    <h2>cocktail List</h2>
    <input value={searchvalue} placeholder='Search Your drinks...' className='form-control' onChange={(e)=> setSearchValue(e.target.value)}/>
    <hr/>
    <div className='row'>

  
    {
      cocktailList.map((item)=>{
        const { idDrink,strDrinkThumb,strInstructions,strIngredient2,strCategory}=item;
        return <div className='col-md-4 col-6 mb-3' key={idDrink}>
          <div className='card'>
            <img src={strDrinkThumb} alt=''></img>
            <div className='card-body'>
              <h5>{strIngredient2}</h5>
              <span className='text-secondary'>{strCategory}</span>
              <p className='text-truncate'>{strInstructions}</p> 
              <Link to={`/Cocktail/${idDrink}`} className='btn btn-primary'>Read More</Link>
            </div>
          </div>
        </div>
      })
    }  
    </div>
    </div>
  )
}

export default Cocktail
