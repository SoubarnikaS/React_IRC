import {useState} from 'react'

const Temp =()=>{

    const [data, setData] = useState({
        username: '',
        password: ''
    })
    // prevState, afterState

    //store the data in the property of the state while it's changing
    const handleChange =(e)=>{
        // alert("CHANGED")
        setData({...data,[e.target.id]:e.target.value}) //spread operator to append with the previous character. if spread operator is not used then the previous character will be discarded
        //e.target.id fetches the value from id and store it in the username
        // console.log(data)
    }
    
    //submit the changes to backend
    const handleSubmit =(e)=>{
        e.preventDefault() //-> prevents the reload of the page when form is submitted
        alert("SUBMITTED")

    }
    return(
        <>
            <form onSubmit = {handleSubmit}>
                <input type = "text" placeholder = "Username" id = "uname" onChange = {handleChange}></input>
                <input type = "password" placeholder = "Password" id = "pswd" onChange = {handleChange}></input>
                <input type = "submit" value = "Login" />
            </form>
        </>
    )
}

export default Temp