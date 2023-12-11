// import './Assests/CSS/register.css'

function nav() {
    return (
        <>
            <div className = "navbar">
                <ul>
                    <li className = "link"><a href="#">Login</a></li>
                    <li className = "link"><a href="#">Register</a></li>
                </ul>
            </div>

            <form action="#" class="registerForm">
                <h1>Register</h1>
                <input type="text" name="Username" id="usernameID" placeholder="Username" class="input" />
                <input type="number" name="Contact" id="number" placeholder="Contact Number" class="input" />
                <input type="email" name="Email" id="emailID" placeholder="Email" class="input" />
                <input type="password" name="Password" id="passwordID" placeholder="Password" class="input" />
                <input type="password" name="Password" id="cpasswordID" placeholder="Confirm Password" class="input" />
                <input type="submit" value="Submit" class="submit" />
            </form>
        </>
    )
}

export default nav