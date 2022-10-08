import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import AccountCheckMiddleware from './components/AccountCheckMiddleware';
import NavBar from './components/NavBar';
import UserContextProvider from './Contexts/UserContextProvider';
import CompleteProfile from './pages/CompleteProfile';
import Dashboard from './pages/Dashboard';
import Error from './pages/Error';
import Login from './pages/Login';
import Register from './pages/Register';
import PrivateRoute from './components/PrivateRoute';

function Router() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />}/>
          <Route path='/complete-profile' element={<CompleteProfile />}/>
          <Route element={<PrivateRoute />}>
            <Route path='/dashboard' element={<Dashboard />}/>
          </Route>
          <Route path='/api/google/callback' element={<AccountCheckMiddleware />}/>
          <Route path='*' element={<Error />}/>
        </Routes>
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default Router;
