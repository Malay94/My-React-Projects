import './App.css';
import React,{ useState } from 'react';


function App() {
  const state = useState();
   
  let [count , setCount]= useState(0);
  let Inc=()=>{
  setCount(count+1);
  console.log("increse", count++);
}
let Dec=()=>{
  setCount(count - 1);
  console.log("Decrese");
}
  return (<> 
   <button onClick={Inc}> + </button>
    {count}
   <button onClick={Dec}> - </button>
  </>
  );
}

export default App;
