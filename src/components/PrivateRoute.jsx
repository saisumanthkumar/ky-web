import React, { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom'
import { userContext } from '../Contexts/UserContextProvider';

function PrivateRoute() {
    const { isAuth } = useContext(userContext);
    return (
        isAuth ? <Outlet /> : <Navigate to="/" />
    )
}

export default PrivateRoute