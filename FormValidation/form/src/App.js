import React from 'react'
import './Assests/CSS/form.css'
import {Routes, Route} from 'react-router-dom';
import Register from './Components/Register';
import NavBar from './Components/Navbar';
const App = () => {

  return (
    <>
    <Routes>
      <Route path = '/' element={<NavBar/>}/>
      <Route path = '/register' element={<Register/>}/>
    </Routes>
    {/* <WrappedComponentWithLoading/> */}
    </>
  )
}

export default App