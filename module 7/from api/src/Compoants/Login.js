import React, { useState } from 'react'
import "./Login.css"
import { useDispatch } from 'react-redux'
import { login } from '../fetrue/Userslice'

const Login = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const dispatch = useDispatch();

    const handlesubmit =(e)=>{
        e.preventDeafult();

        dispatch(login({
            name:name,
            email:email,
            password:password,
            loggedIn: true,
        }))
    }


    return (
        <div className='login'>
            <form className='login_from' onSubmit={(e)=>handlesubmit(e)}>
                <h1>Login Here</h1>
                <input type='name' placeholder='Enter your Name' value={name} onChange={(e) => setName(e.target.value)} />
                <input type='c' placeholder='Enter your email' value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <input type='password' placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type='submit' className='submit_btn'>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Login