import React from 'react'
import Login from './Compoants/Login'
import "./App.css";
import { useSelector } from 'react-redux';
import { selectUser } from './fetrue/Userslice';
import Logout from './Compoants/Logout';
const App = () => {
  const user = useSelector(selectUser);
  return (
    <div> {user ? <Logout/> : <Login />}</div>
  )
}

export default App