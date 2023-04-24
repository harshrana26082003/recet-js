import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function CocktailDetail() {
  const parms =  useParams()
  const navigate = useNavigate()

  const[cocktailDetail,setCocktailDetail] = useState({});
  const [loading,IsLoading]=useState(true)
  useEffect(()=>{
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${parms.id}`).then((resp)=>resp.json()).then((data)=>
    {
      setCocktailDetail(data.drinks[0])
      IsLoading(false)
    })
  },[])
if(loading){
  return(
    <div className="container py-5">
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
</div>
</div>
  );

}

  return (
    <div className="container py-5">
    <button className='btn btn-primary ' onClick={()=>navigate('/Cocktail')
    }>Back</button>
    <div className='row py-5'>
      <div className='col-md-4'>
        <img src={cocktailDetail.strDrinkThumb} width="100%" alt=''></img>
      </div>
      <div className='col-md-8'>
        <h2 className='py-2'>Drink name: {cocktailDetail.strIngredient2}</h2>
        <h5 className='py-2'>Drink name: {cocktailDetail.strDrink}</h5>
        <p className='py-2'>Category: {cocktailDetail.strCategory}</p>
        <p >Details: {cocktailDetail.strInstructions}</p>
        <p >State: {cocktailDetail.strAlcoholic}</p>
      </div>
    </div> 
    </div>
  )
}

export default CocktailDetail
