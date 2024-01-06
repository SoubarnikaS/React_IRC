import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavBar from './Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        if (email === 'Zaynaa' && password === '1234') {
            toast.success('Login Successful!', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });

            setTimeout(() => {
                history('/');
            }, 1800);
        } else {
            toast.error('Incorrect Username/Password', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    };

    return (
        <>
            <NavBar />
            <div className='card-wrapper'>
                <div className="">
                    <h2 className="auth-title"></h2>
                    <form className="auth-container " onSubmit={handleLogin}>
                        <input type="text" name="email" id="email" placeholder="Email" className="auth-input" value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password" name="password" id="password" placeholder="Password"  className="auth-input" value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <span className='btn-container'>
                            <input type="submit" value="Login" className="auth-btn w-50" />
                            <Link to='/register'>
                                <input type="submit" value="Register" className="auth-btn w-50" />
                            </Link>
                        </span>
                    </form>
                </div>
            </div>
            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </>
    );
};

export default Register;
