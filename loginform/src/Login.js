import axios from 'axios';
import React from 'react'

class Login extends React.Component{
  state={email :'' ,password :'' , username:''}
 
  change = (event) => {
    this.setState({[event.target.name] : [event.target.value]});
  }

  handleSubmit=(event)=>{
    event.preventDefault()
    let formdata=new FormData();
    formdata.append('st_email',this.state.email);
    formdata.append('st_password',this.state.password);
   
    axios.post('https://akashsir.in/myapi/crud/student-login-api.php',formdata)
    .then(res=>{
      if(res.data.flag === "1"){
        var msg = res.data;
        console.log(msg);
       let a = localStorage.setItem("st_id",res.data.st_id);
       let b = localStorage.setItem("st_username",res.data.st_name);
      }
      else{
        console.log("Enter Proper Password");
      }
    })
  }
  render(){
  return (
    <div>
      <form onSubmit={this.handleSubmit.bind(this)}>
      username:<input type="text" name='email' onChange={this.change.bind(this)}/><br/><br/>
      Password:<input type="password" name='password' onChange={this.change.bind(this)}/><br/><br/>
      <input type="Submit" value="Login"/>
      </form>
    </div>
  )
}
}

export default Login;