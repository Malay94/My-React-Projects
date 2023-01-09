import React from 'react';
import {BrowserRouter as Router,Routes,Route,Link }from 'react-router-dom'
import Form from './Form';
import Login from './Login';
import Logout from './Logout';
import Welcome from './Welcome';

function App() {
  return (
    <>
      <h1>Hi I am Hooks</h1>
      <Router>
      <Link to="/Login">Login ||</Link>
      <Link to="/Form">Form ||</Link>
      <Link to="/Welcome">Welcome Page||</Link>
      <Link to="/Logout">Logout ||</Link>
      <Routes>
      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/Form' element={<Form/>}></Route>
      <Route path='/Welcome' element={<Welcome/>}></Route>
      <Route path='/Logout' element={<Logout/>}></Route>
      </Routes>
      </Router>
    </>
  );
}

export default App;
