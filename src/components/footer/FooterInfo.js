import React from 'react';
import './FooterInfo.css';
import facebook from "../../facebook.svg";
import instagram from "../../instagram.svg";
import twitter from "../../twitter.svg";

export class FooterComponent extends React.Component {
  
 render(){ 
  return (
   <div className="SocialMediaInfo"> 
   <p className="Follow-Text">Follow us on: </p>    
    <img src={facebook} alt="fb" className="Fb-Icon" />
    <img src={instagram} alt="insta" className="Insta-Icon" />
    <img src={twitter} alt="twiter" className="Twitter-Icon" />
    <p className="Contact-Text">Contact Us: <br></br> Phone: +4075 896 456 <br></br> E-mail: uranus@gmail.com</p>
    </div>
    )
}
}

 