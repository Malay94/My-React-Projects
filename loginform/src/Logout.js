import axios from 'axios';
import React from 'react'


class Logout extends React.Component {
    constructor(){
        super();
        this.state={
            userid:"",
        }
    }

    click =(e)=>{
        e.preventDefault();
        let id = localStorage.getItem("st_id");
      console.log(id);
      this.setState({
        userid:id,
      })
      
    let formdata=new FormData();
    formdata.append('st_id',this.state.id)

    axios.post("https://akashsir.in/myapi/crud/student-delete-api.php",formdata)
    .then(res =>{
        console.log(res);
        if(res.data.flag === "1"){
            localStorage.removeItem("st_id");
            localStorage.removeItem("st_username");
        }
    })
    }
    render(){
  return (
    <div>
      <h1>Do you want to Logout ??</h1>
      <input type="button" value="Logout" onClick={this.click.bind(this)}/>
    </div>
  )
}
}


export default Logout