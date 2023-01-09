import React, { useState } from 'react'

export default function Welcome() {
  const [name,setName]=useState();
  const [lastName,setlastName]=useState();
  const [fullname,setfullName]=useState();

  const InputVal=(event)=>{
    let name=event.target.value;
    console.log(name);
    setName(name); 
  }
  const InputVal2=(event)=>{
    let lastName=event.target.value;
    setlastName(lastName);
  }
  const onSubmit=()=>{
    setfullName(name +" "+lastName);

  }
  return (
    <div>
      <h1>Welcome {fullname}</h1>
      <input type='text' value={name} onChange={InputVal}></input>
      <br/><br/>
      <input type='text' value={lastName} onChange={InputVal2}></input>
      <br/><br/>
      <button onClick={onSubmit}>submit</button>
    </div>
  )
}
