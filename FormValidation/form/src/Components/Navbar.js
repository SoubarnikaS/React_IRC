import { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
const NavBar = () => {
    const [visible, setVisible] = useState(false);
    const toggle = () => {
        setVisible(!visible)
    }


    const email = useRef(null)
    const password = useRef(null)
    const Cpassword = useRef(null)
    const mNum = useRef(null);
    const Age = useRef(null);
    

    const [errors,setErrors] = useState({
        email: '', 
        password: '',
        Cpassword: '',
        Age:'',
        contact: '',
    })

    const SignUp = (e) => {
        e.preventDefault();

        const formData = {
            email: email.current.value,
            password: password.current.value,
            Cpassword: Cpassword.current.value,
            Age:Age.current.value,
            
        }
       
        if(formData.email.length === 0)
        {
            setErrors({ ...errors,email: 'Email is Empty!'});
        }
        else if(formData.email.length < 16)
        {
            setErrors({...errors,email: 'Email must be atleast 6 characters'});
        }
        else 
        {
            setErrors({ ...errors,email: ''});
        }

        if (formData.Age < 5) {
            setErrors({ ...errors, Age: 'Must be at least 5 years old' });
        } else {
            setErrors({ ...errors, Age: '' });
        }

        if(formData.password !== formData.Cpassword){
            setErrors({...errors,Cpassword: 'Password Mismatch'});
        }else {
            setErrors({ ...errors,Cpassword: '' });
        }

        const contactRegex = "^[0-9]{10}$";
        if (!contactRegex.test(formData.contact)) {
            setErrors({ ...errors, contact: 'Invalid Contact Number' });
        } else {
            setErrors({ ...errors, contact: '' });
        }

        email.current.value = ''
        password.current.value = ''
        Cpassword.current.value = ''
        Age.current.value = ''
        mNum.current.value = '';
       
    }
   
    return (
        <>
            <div>
                <div className="navbar">
                    <div className="navtitle">
                        
                    </div>
                    <ul className="navlinks">
                        <li onClick={toggle}>
                            Register
                        </li>
                    </ul>
                </div>
                {visible ? (
                    <div className='card-wrapper'>
                        <div className="">
                            <h2 className="auth-title"></h2>
                            <form className="auth-container " onSubmit={SignUp}>
                                <input type="email" name="" id="email" placeholder="Email" className="auth-input" ref={email} />
                                {
                                    errors.email === '' ?
                                    ''
                                    :
                                    <span className='error-comp'>
                                        {errors.email}
                                    </span>
                                }
                                <input type="password" name="" id="password" placeholder="Password" className="auth-input" ref={password} />
                                <input type="password" name="" id="Cpassword" placeholder="Confirm Password" className="auth-input" ref={Cpassword} />
                                {
                                    errors.Cpassword === '' ?
                                    ''
                                    :
                                    <span className='error-comp'>
                                        {errors.Cpassword}
                                    </span>
                                }
                                <input type='number' placeholder='Contact Number' id = "contact" className='auth-input' ref = {mNum}/>
                                <input type = 'number' placeholder='Age' id = 'Age' className='auth-input' ref = {Age}/>
                                {
                                    errors.Age === '' ?
                                    ''
                                    :
                                    <span className='error-comp'>
                                        {errors.Age}
                                    </span>
                                }
                                <span className='btn-container'>
                                    <input type="submit" value="Register" className="auth-btn w-50" />
                                    <Link to = '/register'>
                                    <input type="submit" value="Login" className="auth-btn w-50" />
                                    </Link>
                                </span>
                            </form>
                        </div>
                    </div>
                ) : ('')
                }
            </div>
          
        </>
    )
}

export default NavBar