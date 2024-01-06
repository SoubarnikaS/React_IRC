import React from 'react'
import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increase =()=> {
        setCount(count + 1);
    }

    const decrease =()=> {
        setCount(count - 1);
    }


  return (
    <>
        <button onClick={increase}>Increase</button>
        <p>{count}</p>
        <button onClick={decrease}>Decrease</button>
    </>
  )
}

export default Counter