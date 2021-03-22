import React, {useState} from 'react';
import {Message} from './message.js'
import './App.css';

function App() {
  let[count,setCount]=useState(1)
  let[isMorning,setMorning]=useState(true)
  return (
    <div className={`box ${isMorning ? 'dayLight':''}`}>
      <h1>Day Time {isMorning?'Morning':'Night'}</h1>
      <Message counter={count}/>
      <br/>
      <button onClick={()=> setCount(count+1)}>Update counter</button>
      <button onClick={()=> setMorning(!isMorning)}>Update Day</button>
    </div>
  );
}

export default App;
