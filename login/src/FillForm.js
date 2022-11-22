import React from "react";

function Form(){
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
 
    return(<>
<form>
  <div>
    <label>Name</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" />
    </div>
  </div>
  <div>
    <label>Surname</label>
    <div class="col-sm-10">
      <input type="text" class="form-control"/>
    </div>
  </div>
  <div>
    <label>Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control"/>
    </div>
  </div>
  <div>
    <label>Mobile</label>
    <div class="col-sm-10">
      <input type="number" class="form-control"/>
    </div>
  </div>
  <fieldset>
    <legend>Gender</legend>
    <div>
      <div>
        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="Male" checked/>
        <label class="form-check-label" for="gridRadios1">
          Male
        </label>
      </div>
      <div>
        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="Female"/>
        <label class="form-check-label" for="gridRadios2">
          Female
        </label>
      </div>
      
    </div>
  </fieldset>
  <div>
    <div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck1"/>
        <label class="form-check-label" for="gridCheck1">
         You have accept all turms and condition.
        </label>
      </div>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Sign in</button>
</form>

        </>)
}

export default Form;