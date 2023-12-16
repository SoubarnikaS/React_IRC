import {Routes,Route} from 'react-router-dom'
import About from './Components/Pages/About';
import Home from './Components/Pages/Home';
import Navbar from './Components/Pages/Navbar';
import Contact from './Components/Pages/Contact';

function App(){
    return(
        <>
        <Navbar/>
        <Routes>
            <Route path ='/' element = {<Home/>}/>
            <Route path ='/about' element = {<About/>}/>
            <Route path ='/contact' element = {<Contact/>}/>
        </Routes>
        </>
    )
}

export default App;