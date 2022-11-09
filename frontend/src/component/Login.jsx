
import React, { useState } from "react";

const Login = () => {
  const [loginData, setLoginData] = useState({});

  const handleLoginForm = (e) => {
    const { name, value } = e.target;

    setLoginData({ ...loginData, [name]: value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleLoginSubmit}>
      <div>
        <h1>Login</h1>
        <div>
          <span>Email</span>
          <input type="text" name="email" onChange={handleLoginForm} />
        </div>
        <div>
          <span>Password</span>
          <input type="password" name="password" onChange={handleLoginForm} />
        </div>
        <input type="submit" value="Login" />
      </div>
    </form>
  );
};

export default Login;
