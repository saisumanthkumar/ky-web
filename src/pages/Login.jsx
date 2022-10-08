import React, { useContext, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import LoginWithGoogle from '../components/LoginWithGoogle';
import { userContext } from '../Contexts/UserContextProvider';

function Login() {
    const { setisAuth,token,settoken } = useContext(userContext);
    const { REACT_APP_API_URL } = process.env;
    const navigate = useNavigate();

    if(JSON.parse(localStorage.getItem('token'))){
        settoken(JSON.parse(localStorage.getItem('token')));
        axios.post(`${REACT_APP_API_URL}/auth`,token)
        .then(res => {
            if(res.status === 200){
                setisAuth(true);
                navigate("/dashboard");
            }
        })
    } else {
        setisAuth(false);
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
        axios.post(`${REACT_APP_API_URL}/login`,payload)
        .then(res => {
            if(res.status === 200){
                localStorage.setItem('token',JSON.stringify(res.data.token));
                setisAuth(true);
                settoken(res.data.token);
                navigate("/dashboard");
            } else{
                alert('Incorrect email or password');
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