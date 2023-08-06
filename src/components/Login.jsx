import React from "react";
import App from "../App";
import { useState } from "react";
import Validation from "./Validation";
import { Link } from "react-router-dom";
import axios from "axios";

function Login() {
  // const [values, setvalues] = useState({
  //   name: "",
  //   password: "",
  // });
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess]=useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // setErrors(Validation(values));
    setSuccess(true);
  };
  const handleClick = () => {
    axios
      .post("https://dummyjson.com/auth/login", {
        username: name,
        password: password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        console.log("++++++++++++++++++++++++++++++++", res);
      });
  };
      
  return (
    <>
{success ?(
<section>
<h1> You are logged in!</h1>
<br/>
 <Link to="/" className="btn btn-danger">
  Home
 </Link>
 </section>
):(
    <div className="login-conatiner d-flex mb-20  justify-content-center  bg-primary align-items-center p-3 w-25 m-auto">
      <div className="">
        <form onSubmit={handleSubmit}>
        <div>
          <h2>
            <strong>Login Page</strong>
          </h2>
        </div>
        <div className="mb-3">
          <label>Name</label>
          <input
            required
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name"
            className="form-control"
          ></input>
        </div>
        {/* <div className="form-group mb-3">
            <label className="form-email">Email</label>
            <input required type="email" placeholder="Enter Email"></input>
          </div> */}
        <div className="mb-3">
          <label>Password</label>
          <input
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="form-control"
          ></input>
        </div>
        <div className="form-group mb-3">
        <input type="checkbox"></input>
            <label className="check">Remember me</label>
          </div>
          
        <button onClick={handleClick} className="btn btn-success">
          Login
        </button>
        <p>Don't have account? SignUp</p>
        <Link to="/signup" className="btn btn-danger">
          SignUp
        </Link>
        </form> 
      </div>
    </div>
)}
</>
  );
}

export default Login;
