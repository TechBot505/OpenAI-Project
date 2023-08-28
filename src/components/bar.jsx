import React from 'react';
import log from "../Logo.png"

export default function Bar() {
  return (
    <div class="navbar">
     <div className="logo"><img src={log} height={100} width={100}/></div>

  <div className="brand" style={{color: '#2d654a'}}>IIT Indore<div className="small">Indian Institute Of Technology Indore</div></div>


</div>
   )
}