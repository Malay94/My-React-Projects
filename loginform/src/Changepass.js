import React from 'react'
// ApI:- https://akashsir.in/myapi/crud/student-change-password-api.php
class Changepass extends React.Component{
  constructor() {
    super();
    this.state = {
      pass:'',
      oldpass:'',
      confirmPassword: "",
    }
   }
  //  componentDidMount(){
  //   let a =localStorage.getItem('st_password');
  //   if (this.state.oldpass!=a){
  //     alert("You write wrong password");
  //   }
  //  }
  handleChange =(event)=>{
    this.setState({[event.target.name]:event.target.value});
  }
  
   onSubmit=(e)=>{
    e.preventDefault();
    let a = localStorage.getItem('st_password');
    let isValid=true;
    if (this.state.oldpass == a){
      localStorage.removeItem('st_password');
      console.log("You old password is remove password");
      isValid=true;
    }else{
      alert("You write wrong password");
      isValid=false;
    }
    let b = this.state.pass;
    let c = this.state.confirmPassword;
    if(b==c){
      localStorage.setItem('st_password',this.state.pass);
      alert("You change our password")
    }
    else{
      console.log("error");
    }
   }
   render(){
    const{oldpass,pass,confirmPassword}=this.state;
  return (
    <div>
      <br/>
     
     Old Password:- <input type="password" name='oldpass' value={oldpass} onChange={this.handleChange}/><br/><br/>
     New Password:- <input type="password" name='pass' value={pass} onChange={this.handleChange}/><br/><br/>
     confirm Password:-<input type="password" name='confirmPassword' value={confirmPassword} onChange={this.handleChange}/><br/><br/><br/>
      <button type="submit" name='Submit' onClick={this.onSubmit.bind(this)}>Submit</button>
     
    </div>
  )
}
}

export default Changepass 