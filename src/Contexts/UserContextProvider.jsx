import React,{ useState,createContext } from 'react';
import axios from 'axios';

export const userContext = createContext(null);

function UserContextProvider({ children }) {
  const [isAuth, setisAuth] = useState(false);
  const [userInfo, setuserInfo] = useState(null);
  const [token, settoken] = useState(null);
  const [googleCompleteProfile, setgoogleCompleteProfile] = useState(false);

  const value = {
    isAuth,
    setisAuth,
    userInfo,
    setuserInfo,
    googleCompleteProfile,
    setgoogleCompleteProfile,
    token,
    settoken
  }
  return (
    <userContext.Provider value={value}> { children } </userContext.Provider>
  )
}

export default UserContextProvider