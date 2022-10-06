import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import AccountCheckMiddleware from './components/AccountCheckMiddleware';
import NavBar from './components/NavBar';
import CompleteProfile from './pages/CompleteProfile';
import Dashboard from './pages/Dashboard';
import Error from './pages/Error';
import Login from './pages/Login';
import Register from './pages/Register';

function Router() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />}/>
        <Route path='/complete-profile' element={<CompleteProfile />}/>
        <Route path='/user' element={<Dashboard />}/>
        <Route path='/api/google/callback' element={<AccountCheckMiddleware />}/>
        <Route path='*' element={<Error />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
