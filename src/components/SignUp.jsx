import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Validation from './Validation'
function SignUp() {
  const [values, setValues]=useState({
    name:"",
email:"",
password:"",
confirm_password:""
  })
const[errors, setErrors]= useState()
  

const handleInput=(e)=>{
    setValues({...values, [e.target.name]: [e.target.value]})
  }

function handleValidation(e){
  setErrors(Validation(values))
}



  
  
   

 
  const onSubmit=(data)=> {
    alert('SUCCESS!!')
    return false;
}

  return (
    <div
      className="signup-conatiner d-flex mb-200  justify-content-center  
    bg-primary align-items-center p-3 w-25 m-auto"
    >
      <div className="">
         <form onSubmit={handleValidation}>
          <h2>SignUp Page</h2>
          <div className="mb-3">
            <label>Name</label>
            <input
              type="name"
              placeholder="Enter Name"
              onChange={handleInput}
              className="form-control"
            ></input>
          
          </div>
          <div className="mb-3">
            <label >Email</label>
            <input
              type= "email"
              placeholder="Enter Email"
              name= 'email'
              onChange={handleInput}
              className="form-control"
            ></input>
           
          </div>
          
          <div className="mb-3">
            <label>Password</label>
            <input
            
              type="password"
              
              placeholder="Enter password"
              name="password"
              onChange={handleInput}
              className="form-control"
            ></input>
          </div>
          <div className="mb-3">
            <label>Confirm_password</label>
            <input
            
              type="password"
              placeholder="Enter password"
              className="form-control"
              name="confirm_password"
             onChange={handleInput}
             
            ></input>
          
          </div>
          <div>
          <select>
<option value="">Select Gender</option>
<option value="female">Female</option>
<option value="male">Male</option>
<option value="other">Other</option>
</select>
</div>
<br></br>
          <button className="btn btn-success" type="submit">
            Sign Up
          </button>
          <div className="form-group mb-3">
            <input type="checkbox"></input>
            <label className="check">
              You are agree to our terms and condition
            </label>
          </div>
          <Link to="/login" className="btn btn-danger">
            Login
          </Link>
        </form> 

        
      </div>
    </div>
  );
}
export default SignUp;
