import React from 'react';
import img from "../logo.png";

export default function Bar() {
  return (
    <div className="navbar">
        <div id="logo">
          <img height={60} width={60} style={{borderRadius: '50%'}} src={img}/>
        </div>
        <div id="name"> Summarize</div>
    </div>
  )
}
