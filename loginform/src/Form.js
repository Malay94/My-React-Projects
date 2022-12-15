import React from 'react'
import axios from 'axios';


class Form extends React.Component {
  state={name :'' ,email :'' ,Gender:'',mobile:'',password:''} 

  handleChange =(event)=>{
    this.setState({[event.target.name]:event.target.value});
  }

  handleSubmit=(event)=>{
    event.preventDefault();
   
    let formData=new FormData();
    formData.append('st_name',this.state.name);
    formData.append('st_gender',this.state.Gender);
    formData.append('st_email',this.state.email);
    formData.append('st_mobileno',this.state.mobile);
    formData.append('st_password',this.state.password);

    axios.post('https://akashsir.in/myapi/crud/student-add-api.php',formData)
    .then(function(response){
      console.log(response);

      if(response.data.flag == 1){
        var msg = response.data.msg;
        console.log(msg);
      }
    }).catch(function(response){
      console.log(response);
    })
  }

  render(){
  return (
  <>
    <form onSubmit={this.handleSubmit}>
       Name : <input type="text" name='name' onChange={this.handleChange}/><br/>
       Email : <input type="email" name='email' onChange={this.handleChange}/><br/> 
       Gender :<br/>
        <input type="radio" name='Gender' onChange={this.handleChange}/> Male<br/>
        <input type="radio" name='Gender' onChange={this.handleChange}/> Female<br/>
       Mobile : <input type="text" name='mobile' onChange={this.handleChange}/><br/>
       password : <input type="password" name='password' onChange={this.handleChange}/><br/>
       <input type="Submit" style={{backgroundColor:'blue',color:'white'}}/>   
        </form>
    </>
  )
}
}

export default Form;