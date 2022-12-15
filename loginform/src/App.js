import React from 'react';
import {BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import './App.css';
import Changepass from './Changepass';
import Form from './Form';
import Homepage from './Homepage';
import Login from './Login';
import Logout from './Logout';

function App() {
  return (
   <>
   <h1>API Form</h1>
   <Router>
    <Link to="/Form">Form || </Link>
    <Link to="/Login">Login ||</Link>
    <Link to="/Homepage">Homepage ||</Link>
    <Link to="/Changepass">ChangePassword ||</Link>
    <Link to="/Logout">Logout </Link>
    <Routes>
      <Route path="/Form" element={<Form/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Homepage" element={<Homepage/>}/>
      <Route path="/Changepass" element={<Changepass/>}/>
      <Route path='/Logout' element={<Logout/>}/>
    </Routes>
   </Router>
   </>
  );
}

export default App;
