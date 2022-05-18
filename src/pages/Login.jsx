import { React, useState } from "react";
import { userLogin } from "../Backend/function";
import { useNavigate } from "react-router-dom";


export const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [psw, setPsw] = useState("");

  function logIn() {

    userLogin({ username: user, password: psw }).then((result) => {
     
      if (result.data) {
        localStorage.setItem("user", JSON.stringify(result.data[0]));
      }
  
      console.log(result.data);
      console.log("Successfully Logged in ");
      navigate("/user");
     } );
  }
  return (
    <div className="container-form">
    
      <div id="main">
        <h2>Login to your account</h2>
        <div className="input">
          <label htmlFor="username">Username or Email</label>
          <input
            type="text"
            id="username"
            onChange={(e) => setUser(e.target.value)}
           
          />
        </div>
        <div className="input">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPsw(e.target.value)}
            
          />
        </div>
        <button type="submit" disabled={!user || !psw}  onClick={logIn}>
          Login
        </button>
      </div>
    </div>
  );
};
