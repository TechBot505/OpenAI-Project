import React, { useState } from 'react';

export default function Input() {

  const [chat ,setchat]= useState("");
  const [res, setres]=useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setres(true);
    
  }
  return (
    <div className="dev">
        <form type="post">
            <label>Enter the URL:</label>
            <input type="text" onChange={(e)=>{setchat(e.target.value)}}></input>
            <button type="submit" onClick={handleSubmit}>Find Summary</button>
            
        </form>
        <div className="ans">
        <h1>Summary</h1>
        <p className='ot'>{res ?chat:<h1></h1>}</p>
    </div>
    </div>
  )
}
