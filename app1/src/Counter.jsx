import React, { useState } from 'react'

const Counter = () => {
    const[count,setCount]=useState(0);

  return (
    <>
    <center><h2>I am micro frontend 1</h2></center>
    <button onClick={()=>setCount(p=>p+1)}>Count</button>
    <h3>{count}</h3>
    </>
  )
}

export default Counter