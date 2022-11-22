import React from 'react';
import {BrowserRouter as Router,Routes,Route,Link, Form} from 'react-router-dom';
import Login from './Login';
import  FillForm  from './FillForm';


function App() {
  return (
     <>
      <Router>
      <Link to="/FillForm">Form |</Link>
      <Link to="/Login"> Login</Link>
      <Routes>
       <Route path='/FillForm' element={<FillForm/>}/>
       <Route path="/Login" element={<Login/>}/>
      </Routes> 
    </Router>  
  </>
  )
  }
  
  export default App;