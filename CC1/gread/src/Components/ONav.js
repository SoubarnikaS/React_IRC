import { Link } from "react-router-dom";

const ONav = () => {
    return (
        <>
            <header class="Onavigation">
                <ul class="naviLinks">
                    <Link to='/' className="NavLink">
                        <li class="brand">
                            goodReads
                        </li>
                    </Link>
                </ul>
                <ul class="logout">
                    <Link to='/' >
                        <li className="newLinks">
                            <button>Logout</button>
                        </li>
                    </Link>
                </ul>
            </header>
        </>
    )
}

export default ONav;

