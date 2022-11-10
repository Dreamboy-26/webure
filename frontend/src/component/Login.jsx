
import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import axios from "axios"
import "../styles/login.css"

const Login = () => {
  const [loginData, setLoginData] = useState({});
const navigate=useNavigate()
  const handleLoginForm = (e) => {
    const { name, value } = e.target;

    setLoginData({ ...loginData, [name]: value });
  };

  const handleLoginSubmit =async(e) => {
    e.preventDefault();
await axios.post("http://localhost:5000/login",loginData)
.then((res)=>{
  let id=res.data._id
  navigate(`/dashboard/${id}`)
})

  };

  return (
    <form onSubmit={handleLoginSubmit} className="loginForm">
      <div>
        <h1 className="loginHeading">Login</h1>
        <div>
          {/* <span>Email</span> */}
          <input  className="logininput" type="text" name="username" onChange={handleLoginForm} placeholder="Enter Email" />
        </div>
        <div>
          {/* <span>Password</span> */}
          <input type="password" className="logininput" name="password" onChange={handleLoginForm} placeholder="Enter Password" />
        </div>
        <input className="loginButton" type="submit" value="Login" />
      </div>
    </form>
  );
};

export default Login;
