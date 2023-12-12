import React from 'react'
import ChildProp from './ChildProp'

const ParentProp =()=>{
    const name1 = "Soubarnika"
    const eamil = "xyz@gmail.com"

    return(
        <>
        <ChildProp name = {name1} email = {eamil} />
        </>
    )
}

export default ParentProp