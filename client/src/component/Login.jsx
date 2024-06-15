import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [user, setUser] = useState({ uniqueID: "", password: "" });
  const [msg, setMsg] = useState("");
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(user);
      const response = await axios.post("http://localhost:8000/auth/login", user);
      console.log(response.data);
      setMsg(response.data.msg);
      if (response.data.login) {
        history.push("/profile");
      }
    } catch (error) {
      setMsg("Login failed");
    }
  };

  return (
    <div className="col-lg-6 col-md-8 col-12 mx-auto">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email or Username:</label>
          <input type="text" name="uniqueID" value={user.uniqueID} onChange={handleChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={user.password} onChange={handleChange} required />
        </div>
        <button type="submit">Login</button>
      </form>
      {msg && <p>{msg}</p>}
    </div>
  );
};

export default Login;
