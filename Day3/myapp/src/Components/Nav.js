

const Nav = () => {
    return (
        <>
            <div className="navbar">
                <div class="patterns">
                    <svg width="100%" height="100%">

                        <text x="4%" y="7%" text-anchor="middle">
                            UNote
                        </text>
                    </svg>
                </div>

                <ul className="nav">
                    <li className="link"><a href="#">Sign In</a></li>
                    <li className="link"><a href="#">Sign Up</a></li>
                </ul>
            </div>
        </>
    )
}
export default Nav;