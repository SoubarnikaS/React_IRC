import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Carosel from '../Assests/Images/wonderBloom.webp';
import NavBar from '../Components/NavBar';

const Register = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (password === confirmPassword) {
            navigate('/login');
            setUsername("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
        } else {
            
            alert('Passwords do not match');
            setUsername("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
        }
    };

    return (
        <>
            <NavBar />
            <div className="registerWrapper">
                <div className="register">
                    <form action="#" className="registerF" onSubmit={handleSubmit}>
                        <p className="header">Register</p>
                        <input type="text" id="userR" className="registerInput" placeholder='Username' required value={username} onChange={handleUsernameChange}/>
                        <input type="email" id="emailR" className="registerInput" placeholder='Email' required value={email} onChange={handleEmailChange} />
                        <input type="password" id="passR" className="registerInput" placeholder='Password' required value={password} onChange={handlePasswordChange} />
                        <input type="password" id="passCR" className="registerInput" placeholder='Confirm Password' required value={confirmPassword} onChange={handleConfirmPasswordChange} />
                        <input type="submit" id="submitR" className="buttonR" value="Register" />
                    </form>
                </div>
                <div className="carosel">
                    <img src={Carosel} alt='Img' />
                </div>
            </div>
        </>
    );
};

export default Register;
