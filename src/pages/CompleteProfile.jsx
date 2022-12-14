import React,{ useContext, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { userContext } from '../Contexts/UserContextProvider';
import axios from 'axios';

function CompleteProfile() {
    const {REACT_APP_API_URL} = process.env;
    const navigate = useNavigate();
    const { token, googleCompleteProfile, setgoogleCompleteProfile} = useContext(userContext);

    if(!googleCompleteProfile){
        alert("Unauthorized Access");
        navigate("/");
    }

    const [payload, setpayload] = useState({
        "name":"",
        "email":"",
        "password":"",
        "mobileNumber":"",
        "gender":"",
        "college":"",
        "token":token
    })

    const handleChange = (e) => {
        setpayload({...payload, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`${REACT_APP_API_URL}/completeProfile`,payload)
        .then(res => {
            if (res.status === 200){
                alert("successfully registered");
                setgoogleCompleteProfile(false);
                navigate("/");
            } else{
                alert(res.data.errorMessage);
            }
        })
        
    }
    return (
        <div className="register-form">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name : </label>
                <input type="text" name='name' value={payload.name} onChange={handleChange} placeholder="name" required={true}/>
                <br />
                <label htmlFor="mail">Email-ID : </label>
                <input type="email" name='email' value={payload.email} onChange={handleChange} placeholder="Email" required={true}/>
                <br />
                <label htmlFor="password">Password : </label>
                <input type="password" name='password' value={payload.password} onChange={handleChange} placeholder="password" required={true}/>
                <br />
                <label htmlFor="mobileNumber">Mobile Number : </label>
                <input type="" name='mobileNumber' value={payload.mobileNumber} onChange={handleChange} placeholder="Mobile Number" required={true}/>
                <br />
                <span>Gender : </span>
                <input type="radio" id="html" name="gender" value="Male" onChange={handleChange} />
                <label htmlFor="html">Male </label>
                <input type="radio" id="css" name="gender" value="Female" onChange={handleChange} />
                <label htmlFor="css">Female</label>
                <br />
                <label htmlFor="college">College : </label>
                <input type="text" name='college' value={payload.college} onChange={handleChange} placeholder="college" required={true}/>
                <br />
                <input type="submit" value={"Done"} />
            </form>
        </div>
    )
}

export default CompleteProfile