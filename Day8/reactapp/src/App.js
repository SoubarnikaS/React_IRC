import {Routes,Route} from 'react-router-dom'
import Users from './Components/Pages/Users';
import AddUser from './Components/Pages/AddUser';
import EditUser from './Components/Pages/EditUser';
import './Assests/CSS/Core.css'

function App() {
  return (
    <>
      <Routes>
        <Route path = '/' element={<Users/>}/>
        <Route path = '/add' element={<AddUser/>}/>
        <Route path = '/edit/:id' element={<EditUser/>}/>
      </Routes>

    </>
  );
}

export default App;
