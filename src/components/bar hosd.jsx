import React from 'react';
import img from "../logo.png";
import img2 from "../Profile.png";

export default function Bar() {
  return (
    <div className="navbar">
        <div id="logo" style={{display: 'flex'}}>
          <img height={60} width={60} style={{borderRadius: '50%', marginLeft: '5px'}} src={img}/>
          <img height={60} width={60} style={{borderRadius: '50%', marginLeft: '5px'}} src={img2}/>
        </div>
        <div id="name"> Summarize</div>
    </div>
  )
}
