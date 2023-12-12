import { useState } from 'react';
// import {Route} from 'react';
import { useNavigate } from 'react-router-dom';
import Carosel from '../Assests/Images/Carosel.webp';
import NavBar from '../Components/NavBar';

const Login = () => {

    const history = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === 'Zaynaa' && password === '1234') {
            // <Route path = '/register'></Route>
            history('/home')
        } else {
            setUsername("");
            setPassword("");
            alert('Invalid username or password');
        }
    };
    return (
        <>
            <NavBar />
            <div className="loginWrapper">
                <div className="login">
                    <form action="#" class="loginF" onSubmit={handleSubmit}>
                        <p class="header">Login</p>
                        <input type="text" id="userN" class="loginInput" placeholder='Username' required value={username} onChange={handleUsernameChange} />
                        <input type="password" id="passW" class="loginInput" placeholder='Password' required value={password} onChange={handlePasswordChange} />
                        <input type="submit" id="submitL" class="buttonL" value="Login" />
                    </form>
                    {/* <div class = "navi">
                        <Link to ='/register'>
                            <p class = "new">New to goodReads? Register</p>
                        </Link>
                    </div> */}
                </div>
                <div className="carosel">
                    <img src={Carosel} alt='Img' />
                </div>
            </div>
        </>
    )
}

export default Login;