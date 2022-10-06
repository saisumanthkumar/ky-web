import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import LoginWithGoogle from '../components/LoginWithGoogle';

function Login() {
    const { REACT_APP_API_URL } = process.env
    const token = JSON.parse(localStorage.getItem('token'))
    const navigate = useNavigate();
    if(token){
        axios.post(`${REACT_APP_API_URL}/auth`,token)
        .then(res => {
            if(res.status === 200){
                navigate("/dashboard")
            }
        })
    }
    
    const [payload, setpayload] = useState({
        "email":"",
        "password":""
    })

    const handleChange = (e) => {
        setpayload({...payload, [e.target.name]: e.target.value})
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post(`${REACT_APP_API_URL}/login`,payload)
        .then(res => {
            if(res.status === 200){
                localStorage.setItem('token',JSON.stringify(res.data.token))
                navigate("/dashboard")
            } else{
                alert('Incorrect email or password')
            }
        })
        .catch((error) => {
            console.log(error);
          });
    }

    return (
        <div className="log-form">
            <h2>Login to your account</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email : </label>
                <input type="text" name='email'  required={true} value={payload.email} onChange={handleChange} placeholder="email"/>
                <br />
                <label htmlFor="password">Password : </label>
                <input type="password" name='password' value={payload.password} onChange={handleChange} placeholder="password"/>
                <br />
                <input type="submit" value={"Login"} />
            </form>

            <p>( or )</p>

            <LoginWithGoogle />
        </div>
    )
}

export default Login