import './Assests/CSS/style.css'
// import './Assests/CSS/registerStyle.css'
// import Nav from './Components/nav'

function App() {
    return (
        <>
            <div class="navbar">
                <ul>
                    <li><a href="#">Login</a></li>
                    <li><a href="#">Register</a></li>
                </ul>
            </div>


                <form action="#" class="login" onsubmit="checkLogin()">
                    <h1>Login</h1>
                    <input type="text" name="Username" id="usernameID" placeholder="Username" class="input" />
                    <input type="password" name="Password" id="passwordID" placeholder="Password" class="input" />
                    <input type="submit" value="Submit" class="submit" />
                </form>

        </>
        // <></> react fragement
    )
}

export default App

