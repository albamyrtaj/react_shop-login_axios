
import React from "react";
import { RoutesComponents } from "./Router/RouterComponents";
import { BrowserRouter } from "react-router-dom";
import "./Styles/Styles.scss";
import { User } from "./pages/User";

export const App = () => {
  return (
    <>
    
     <BrowserRouter>
       <RoutesComponents/>
     </BrowserRouter>
     {/* <User/> */}
      
    </>
  );
};
