import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

function Dashboard() {

  const token = JSON.parse(localStorage.getItem('token'))
  const {REACT_APP_API_URL} = process.env
  const navigate = useNavigate();

  const isAuth = () => {
    if(!token){ navigate("/") }
    axios.post(`${REACT_APP_API_URL}/auth`,token)
    .then(res => {
      if(res.status !== 200){
        navigate("/")
      }
    })
  }

  useEffect(() => {
    isAuth()
    const interval = setInterval(() => {
      isAuth()
    }, 3000);
    return () => {
        clearInterval(interval);
    };
}, [])
  

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard