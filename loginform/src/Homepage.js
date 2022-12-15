import React from 'react'

class Homepage extends React.Component{
 constructor(){
  super();
  this.state={
    username:'',userid:''
  }
 }
  componentDidMount(){
  let a =localStorage.getItem("st_id");
  let b =localStorage.getItem("st_username");
  this.setState({
     username: b ,
     userid: a,  
  })
 }
   render()
   {
    return(
      <>
      <h1>HI {this.state.username}</h1>
      <h2>Your id is {this.state.userid}</h2>
      </>
    )
   }

}

export default Homepage;