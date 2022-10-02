import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Error from './pages/Error';
import Login from './pages/Login';
import Register from './pages/Register';

function Router() {
  return (
    <BrowserRouter>
    <div className="nav-bar">
      <h1>Welcome to Kashiyatra 2023</h1>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/register">Register</a></li>
      </ul>
    </div>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Register />}/>
      <Route path='/user' element={<Dashboard />}/>
      <Route path='*' element={<Error />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default Router;
