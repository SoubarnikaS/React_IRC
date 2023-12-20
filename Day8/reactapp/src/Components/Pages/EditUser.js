import React from 'react'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { editUser, getUserid } from '../../Sevices/Api';

const EditUser = () => {

  const {id} = useParams()
  console.log(id);
  const navigate = useNavigate();

  const [data, setData] = useState({
    username: '',
    password: ''
  })
  
  const fetchUser =async()=>{
    

    try{
      const res = await getUserid(id);
      setData(res.data)
    }
    catch(e){
      console.log(e)
    }
  }


  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value })
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      const res2 = await editUser(id,data)
      console.log(res2.status)
      if(res2.status === 200)
      {
        alert('user updated')
        navigate('/')
      }
    }
    catch(e){
      console.log(e);
    }
    
  }


  return (
    <>
        <form onSubmit={handleSubmit}>
        <input type = 'text' value = {data.username} id = 'username' placeholder='username' onChange={handleChange}/>
        <input type = 'password'  value = {data.password} id = 'password' placeholder='password' onChange={handleChange}/>
        <button type = 'submit' class = 'submit'>Edit</button>
    </form>
    </>
  )
}

export default EditUser