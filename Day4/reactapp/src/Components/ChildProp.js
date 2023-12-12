import React from 'react'

const ChildProp = (props)=> {
    return(
        <>
        <h1>Hello!, I'm {props.name}</h1>
        <h4>Email: {props.email}</h4>
        </>
    )

}

export default ChildProp