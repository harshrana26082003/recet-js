import React from 'react'
import"./Logout.css"
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from '../fetrue/Userslice'

const Logout = () => {

    const user =useSelector(selectUser);



  const dispatch =useDispatch();
  const handlelLogout=(e)=>{
    e.preventDefalut()

    
    dispatch(logout())

  }
  return (
    <div className='logout'>
        <h1>Welcome<span className='user_name'>{user.name}</span>
        </h1>{""}
        <button className='logout-button' onClick={(e)=>handlelLogout(e)}>
            Logout
        </button>
    </div>
  )
}

export default Logout