import React, { useState } from 'react';
import {Link} from 'react-router-dom';

function Login() {
    const [payload, setpayload] = useState({
        "username":"",
        "password":""
    })

    const handleChange = (e) => {
        setpayload({...payload, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(payload)
        setpayload({
            "username":"",
            "password":""
        })
    }

    return (
        <div className="log-form">
            <h2>Login to your account</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username : </label>
                <input type="text" name='username'  required={true} value={payload.username} onChange={handleChange} placeholder="username"/>
                <br />
                <label htmlFor="password">Password : </label>
                <input type="password" name='password' value={payload.password} onChange={handleChange} placeholder="password"/>
                <br />
                <p>Don't have one? <Link to='/register'>Sign Up</Link></p>
                <input type="submit" value={"Login"} />
            </form>
        </div>
    )
}

export default Login