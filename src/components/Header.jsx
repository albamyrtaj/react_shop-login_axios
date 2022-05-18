import React from "react";
import shopper from "../Images/shopping.svg";
import login from "../Images/icons8-login-64.png";
import search from "../Images/search.svg";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate =  useNavigate();
  function logIn(){
    
      navigate("/login")
    
   
  }
  return (
    <div className="container-header">
      <div className="left-side-header">
        <label>
          <input type="text" placeholder="search" />
        </label>
        <img className="svg-search" src={search}></img>
      </div>
      <div className="center-header">
        <h2>Lorem Ipsum</h2> <img className="svg-header" src={shopper}></img>
      </div>
      <div className="logo-login">
        <button className="button-login" onClick={logIn}> <h5>Sign in</h5> </button>
        <img className="login-header" src={login}></img>
      </div>
    </div>
  );
};
