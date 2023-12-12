import Landing from './Components/Landing'
import Home from './Components/Home'
import Login from './Components/Login'
import Register from './Components/Register'
import './Assests/CSS/Landing.css'
import './Assests/CSS/Home.css'
import './Assests/CSS/NavBar.css'
import './Assests/CSS/ONav.css'
import './Assests/CSS/Login.css'
import './Assests/CSS/Register.css'

import { Route, Routes } from 'react-router-dom';



const App=()=>{
  return(
    <>
    <Routes>
      <Route path = "/" element = {<Landing/>}/>
      <Route path = "/home" element = {<Home/>}/>
      <Route path = "/login" element = {<Login/>}/>
      <Route path = "/register" element = {<Register/>}/>

    </Routes>
    
    </>
  )
}

export default App;