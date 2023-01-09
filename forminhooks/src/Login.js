import React, { useState } from 'react'

export default function Login() {
  const [username,setUserName]= useState();
  const [pass,setPass]=useState();

  let Inval=(event)=>{
    const username=event.target.value;
    setUserName(username);
  }
  
  let Inval2=(event)=>{
    const pass=event.target.value;
    setPass(pass);
  }
  let sub=(event)=>{
    event.preventDefault();
    console.log('You have clicked submit'); 
    setUserName(username);
    setPass(pass); 
    console.log(username + ' '+ pass); 
  }
  return (
    <div>
      <form onSubmit={sub}>
      <h1>I am Login</h1>
      <br/><br/>
      Username(Email):-<input type='text' value={username} onChange={Inval} autoComplete='off'></input>
      <br/><br/>
      Password:-<input type='password' value={pass} onChange={Inval2} autoComplete='off'></input><br/><br/>
      <button type='submit'>Submit</button><br/><br/>
      </form>
    </div>
  )
}
