import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../Contexts/UserContextProvider';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

function AccountCheckMiddleware() {
    const [searchParams, setSearchParams] = useSearchParams();
    const { setisAuth, token, settoken, setgoogleCompleteProfile } = useContext(userContext);
    const navigate = useNavigate();
    const {REACT_APP_API_URL} = process.env;
    let code = searchParams.get("code")

    const getTokens = (auth_code) => {
        axios.post(`${REACT_APP_API_URL}/api/google/callback`, {
            "auth_code": auth_code
        })
        .then(function (response) {
            if(response.status === 200){
                localStorage.setItem('token',JSON.stringify(response.data.token));
                settoken(response.data.token);
                setisAuth(true);
                navigate("/dashboard")
            } else if (response.status === 201){
                settoken(response.data.token);
                setgoogleCompleteProfile(true);
                navigate("/complete-profile")
            } else {
                alert("Something went Wrong! Please log in again")
                navigate("/")
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    useEffect(() => {
      getTokens(code);
    }, [])
  return (
    <div>Loading....</div>
  )
}

export default AccountCheckMiddleware