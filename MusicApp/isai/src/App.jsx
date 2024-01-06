import {Route, Routes} from 'react-router-dom'
import Homes from './Components/Homes'
import './assets/CSS/Home.css'
import './assets/CSS/Navbar.css'
import './assets/CSS/Content.css'

function App() {
  return (
    <>
      <Routes>
        <Route path = '/' element = {<Homes/>}/>
      </Routes>
    </>
  )
}

export default App
