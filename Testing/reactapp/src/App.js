// import logo from './logo.svg';
// import './App.css';
import Navbar from "./Components/Nav"
import About from "./Components/Pages/About";
import Counter from "./Components/Pages/Counter";
import Home from "./Components/Pages/Home";

import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <Routes>
          <Route path = '/' element = {<Navbar/>}/>
          <Route path = '/home' element = {<Home/>}/>
          <Route path = '/about' element = {<About/>}/>
          <Route path = '/counter' element = {<Counter/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
