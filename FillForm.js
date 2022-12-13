import React from "react";

// function Form(){
  // const [name , setName]=React.useState("Enter Your Name");
  // const [surname,setSurname]=React.useState("Enter Your SurName");
  // const [email, setEmail]=React.useState("Enter Your Email");
  // const [mobile, setMobile]=React.useState("Enter Your Mobile");
 
  // React.useState((event)=>{
  //  console.log("Component Loaded..");
  // })
  // const handleonName=(event)=>{
  //   setName(event.target.name);
  // }
  // const handleonSurame=()=>{
  //   setSurname(event.target.surname);
  // }
  // const handleonEmail=()=>{
  //   setEmail(event.target.email);
  // }
  // const handleonMobile=()=>{
  //   setMobile(event.target.mobile);
  // }
 
class Form extends React.Component{
constructor(props){
  super(props);
  this.state={
    name : "",
    surname :"",
    email :"",
    mobile:"",
    errors:{}
  }
}

onChange = (e) =>{
  this.setState({[e.target.name]:e.target.value});
 }
 
 setData(){
   let a = this.state.name;
   let b = this.state.surname;
   let c = this.state.email;
   let d = this.state.mobile;
   localStorage.setItem("name", a);
   localStorage.setItem("surname",b);
   localStorage.setItem("email", c);
   localStorage.setItem("mobile",d);
   console("Data is set");
  }
  

  formValidation = () =>{
    const {name,surname,mobile,email}=this.state;
    let isValid=true;
    const errors={};
   if(!name) {
    errors.name="Enter Name";
    isValid=false;        
   }
   if(!surname){
    errors.surname="Enter the surname";
    isValid=false;
   }
   if(mobile.length != 10) {
    errors.mobile="Please set propar no.";
    isValid=false;
   }
   if(!mobile) {
    errors.mobile="Enter mobile";
    isValid=false;   
   }
   if(isValid.email != true) {
    errors.email="Please set propar email.";
    isValid=false;
   }
   if(!email){
    errors.email="Enter the email";
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
    this.setState({name:"",surname:"",mobile:"",email:"", errors:{}});
  }}
  
  

render(){
  const {name, surname,email,mobile, errors}= this.state;
    return(<React.Fragment>
 <form onSubmit={this.onSumit}>
      {/* {Object.keys(errors).map((key) => {return <div style={{color:'red'}} key={key}>
      {errors[key]}
      </div>})} */}
  <div>
    <label>Name</label>
    <div className="col-sm-10">
      <input type="text" value={name} name="name" onChange={this.onChange.bind(this)}/>
      <br/><span className='error' style={{color:'red'}}>{errors.name}</span>
    </div>
  </div>
  <div>
    <label>Surname</label>
    <div >
      <input type="text" value={surname} name="surname" onChange={this.onChange.bind(this)}/>
      <br/> <span className='error' style={{color:'red'}}>{errors.surname}</span>
    </div>
  </div>
  <div>
    <label>Email</label>
    <div>
      <input type="text"  value={email} name="email" onChange={this.onChange.bind(this)}/>
      <br/>
      <span className='error' style={{color:'red'}}>{errors.email}</span>
    </div>
  </div>
  <div>
    <label>Mobile</label>
    <div>
      <input type="number" value={mobile} name="mobile" onChange={this.onChange.bind(this)}/>
     
      <br/> <span className='error' style={{color:'red'}}>{errors.mobile}</span>
    </div>
  </div>
  <fieldset>
    <legend>Gender</legend>
    <div>
      <div>
        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="Male" checked/>
        <label className="form-check-label" for="gridRadios1">
          Male
        </label>
      </div>
      <div>
        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="Female"/>
        <label className="form-check-label" for="gridRadios2">
          Female
        </label>
      </div>
      
    </div>
  </fieldset>
  <div>
    <div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="gridCheck1"/>
        <label className="form-check-label" for="gridCheck1">
         You have accept all turms and condition.
        </label>
      </div>
    </div>
  </div>
  <button type="submit" className="btn btn-primary" onClick={this.setData.bind(this)}>Sign in</button>
</form>

        </React.Fragment>)
}
}
export default Form;