import React from 'react'
import {Link} from 'react-router-dom';

const Nav = () => {
  return (
    <>
    <ul>
        <Link to ='/home'>
        <li>Home</li>
        </Link>
        <Link to = '/about'>
        <li>About</li>
        </Link>
        <Link to = '/counter'>
        <li>Counter</li>
        </Link>
            
    </ul>
    </>
  )
}

export default Nav