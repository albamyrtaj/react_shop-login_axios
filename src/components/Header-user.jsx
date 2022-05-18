import { React, useEffect, useState } from "react";
import shopper from "../Images/shopping.svg";
import { Link } from "react-router-dom";


export const HeaderU = () => {

    const [user, setUser] = useState({});

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user")));
        console.log(JSON.parse(localStorage.getItem("user")));
        console.log(user);
      }, []);


  return (
    <div className="container-header">
      <div className="left-side-header">
       <div className="user-info">
            <p>
              {user.nome} {user.cognome}
            </p>
          </div>
      </div>
      <div className="center-header">
        <h2>Lorem Ipsum</h2> <img className="svg-header" src={shopper}></img>
      </div>
      <div className="logo-login">
       
      <Link className="link-user" to="/">
              Logout
            </Link>
      </div>
    </div>
  );
  }
  
