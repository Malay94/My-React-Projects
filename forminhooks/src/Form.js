import React, { useEffect, useState } from 'react'


export default function Form() {
  const [name,setName]=useState({
    fname:'',
    lname:'',
    email:'',
    age:'',
    pass:'',
  })

  const inputEve =(event)=>{
      const value=event.target.value;
      const name=event.target.name;
        setName((preval)=>{
           console.log(preval);
            return{
              ...preval,
              [name]:value,
            }
       });
  }
  const subme=(event)=>{
    event.preventDefault();
  
  }
  return (
    
    <div>
      <form onSubmit={subme}>
      <h1>I am Form</h1>
      First Name:-<input type="text"  name='fname' value={setName.fname} placeholder='First Name' onChange={inputEve}></input><br/>
      Last Name:-<input type="text" name='lname' value={setName.lname} placeholder='Last Name' onChange={inputEve}></input><br/>
      Email:-<input type="email"  name='email' value={setName.email} autoComplete='off' placeholder='abc@gmail.com' onChange={inputEve}></input>
      <br/>
      Age:-<input type="number" value={setName.age} name='age' placeholder='Age' onChange={inputEve}></input><br/>
      Password:-<input type="password" value={setName.pass} name='pass' placeholder='Password' onChange={inputEve} autoComplete='off'></input><br/>
      <button type='submit'>submit</button>      </form></div>
  )
}
 