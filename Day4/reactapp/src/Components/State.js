import React from 'react'
import { useState } from 'react'

const State =()=>{
    const [data, setData] = useState(0);
    // const [data, setData] = useState({
    //     name:'sou'
        
    // });

    const inc=()=>{
        setData(data + 1)
    }
    const dec=()=>{
        setData(data - 1)
    }
    return(
        <>
            <button onClick = {inc}>Increase</button>
            <p>{data}</p>
            <button onClick = {dec}>Decrease</button>

        </>
    )
}

export default State;