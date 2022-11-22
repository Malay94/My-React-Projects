import React from "react";
import './App.css';


class Login extends React.Component{
    constructor(props){
      super(props);
      this.state={
      username : "",
      password : "",
      errors:{},
     }   }  

     onChange = (e) =>{
      this.setState({[e.target.name]:e.target.value});
     }

     setData(){
     let a = this.state.username;
      let b = this.state.password;
      localStorage.setItem("username", a);
      localStorage.setItem("password",b);
      alert("Data is set");
     }
     
     getData(){
      let mydata = localStorage.getItem("username");
      if(mydata == this.state.username){
        alert("Data is : " +mydata);
      }
      else{
        alert("Please set proper username")
      }

      let mypass = localStorage.getItem("password");
      if(mypass == this.state.password){
        alert("Data is : " +mypass);
      }
      else{
        alert("Please set proper password")
      }
      if (mydata == this.state.username && mypass == this.state.password){
      alert("You are welcome");
     }
     else{
       alert("please Check the value");
     }
    }
     formValidation = () =>{
      const {username,password}=this.state;
      let isValid=true;
      const errors={};
     if(!username) {
      errors.username="Enter Username";
      isValid=false;        
     }
     if(!password){
      errors.password="Enter the password";
      isValid=false;
     }
     this.setState({errors});
     return isValid;
    }    

    onSumit =(e)=>{
      e.preventDefault();
      const isValid = this.formValidation();
      if(isValid){
      console.log("onSubmit",this.state);
      this.setState({username:"",password:"",errors:{}});
    }}

    onSignUp =(e)=>{
      if(this.get){
      console.log("onSubmit",this.state);
      this.getState({username:"",password:"",errors:{}});
    }}

     render(){
      const {username, password, errors}= this.state;
     return(<React.Fragment>
    <div  className='loginItem'>
    <form onSubmit={this.onSumit}>
      {Object.keys(errors).map((key) => {return <div style={{color:'red'}} key={key}>
      {errors[key]}
      </div>})}
    <h1>Welcome To Site</h1> 
    UserName:<br/><input type="text" value={username} name="username" onChange={this.onChange.bind(this)}></input><br/><br/>
    PassWord:<br/><input type="password" value={password} name="password" onChange={this.onChange.bind(this)}></input><br/><br/>
    <input type="Submit" value="Register" onClick={this.setData.bind(this)}></input>
    <input type="button" value="Login" onClick={this.getData.bind(this)}></input>
    <h4>If you want to fill form <a href='/Form'>Fill form</a></h4>
    </form>
    </div>
  </React.Fragment>
);
}
}
export default Login;
