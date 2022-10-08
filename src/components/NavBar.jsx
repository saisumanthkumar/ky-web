import React,{ useContext } from 'react'
import { userContext } from '../Contexts/UserContextProvider'

function NavBar() {
  const { isAuth,setisAuth , settoken } = useContext(userContext)

  const logout = () => {
    setisAuth(false);
    settoken(null);
    localStorage.removeItem('token');
  }

  return (
    <div className="nav-bar">
      <h1>Welcome to Kashiyatra 2023</h1>
      <ul>
        <li><a href="/">Home</a></li>
        {!isAuth &&<li><a href="/register">Register</a></li>}
        {isAuth && <li><button onClick={logout}>Logout</button></li>}
      </ul>
    </div>
  )
}

export default NavBar