import React from 'react';
import ReactDOM from 'react-dom/client';
import Input from "./input.jsx"

import Bar from "./bar.jsx"
import Sidebar from './sidebar.jsx';

export default function Index() {
    return (
      <div className="sth">
        <Bar />
       <Sidebar/>
        <Input />
          
      </div>
    )
  }


