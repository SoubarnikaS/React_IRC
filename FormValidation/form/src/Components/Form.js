import React, { useRef } from 'react'
export default function Form() {
    // const nameInputRef = useRef(null)
    const emailInputRef = useRef(null)
    const passwordInputRef = useRef(null)
    const handleSubmit = (e)=>{
        e.preventDefault()
        const formData ={
            // name: nameInputRef.current.value,
            email: emailInputRef.current.value,
            password : passwordInputRef.current.value
        }
        console.log(formData)
        // nameInputRef.current.value=''
        emailInputRef.current.value=''
        passwordInputRef.current.value=''
        emailInputRef.current.focus()
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='email' id='email' ref={emailInputRef}/>
            <input type='password' id='password' ref={passwordInputRef}/>
            <input type='submit' value='Sign-Up'/>
        </form>

    </div>
  )
}