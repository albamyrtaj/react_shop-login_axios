import React from "react";
import logo from '../Images/footer-logo.svg'
import fb from '../Images/facebook.png'
import ig from '../Images/instagram.png'
import tw from '../Images/twitter.png'
import y from '../Images/youtube.png'

export const Footer = () => {

    return(
        <footer>
        <div className="footer-content">

        <div className="address">  
        <h5>Address</h5>  
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3588.686625186075!2d-97.51225538502342!3d25.91267038356845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x866f946c3ccf2d9f%3A0xa399028458e085c4!2s444%20W%20Elizabeth%20St%2C%20Brownsville%2C%20TX%2078520%2C%20Stati%20Uniti!5e0!3m2!1sit!2sit!4v1652359240405!5m2!1sit!2sit" >
            </iframe>
         </div>
   
       <div className="centro">
            <div className="socialIcons">
            <img className="social" src={fb} alt="Logo" />      
            <img className="social" src={ig} alt="Logo" />
            <img className="social" src={tw} alt="Logo" />
            <img className="social" src={y} alt="Logo" />     
         </div>
             <div className="tel">
             your.favorite.shop@gmail.it | +39 350 25 89 053
         </div>
         <div className="privacy">
         Copyright © 2005 - 2022.   
         <br/>
         Ecommerce® is a registered trademark of Confluence Distribution, Inc.
         </div>
       </div>

        <div className="logo">
         <img className="logoF" src={logo} alt="Logo" />
         </div>

        </div>
        </footer>
        
    )

};
