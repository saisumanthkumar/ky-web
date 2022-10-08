import React, { useContext, useEffect } from 'react'
import {useNavigate} from 'react-router-dom';
import { userContext } from '../Contexts/UserContextProvider';
import axios from 'axios';

function Dashboard() {
  const { setisAuth, token, settoken,userInfo,setuserInfo } = useContext(userContext);
  if(JSON.parse(localStorage.getItem('token'))){
    settoken(JSON.parse(localStorage.getItem('token')));
  } else {
    setisAuth(false);
  }

  const {REACT_APP_API_URL} = process.env;
  const navigate = useNavigate();

  const Auth = () => {
    if(!token){ navigate("/"); }
    else { setisAuth(false); }
    axios.post(`${REACT_APP_API_URL}/auth`,token)
      .then(res => {
        if(res.status !== 200){
          setisAuth(false);
          navigate("/");
        } else {
          setisAuth(true);
          setuserInfo(res.data)
        }
      })
  }

  useEffect(() => {
    Auth()
    const interval = setInterval(() => {
      Auth()
    }, 3000);
    return () => {
        clearInterval(interval);
    };
}, [])  

  return (
    <>
    <h1>User Dashboard</h1>
    { userInfo }
    </>
  )
}

export default Dashboard