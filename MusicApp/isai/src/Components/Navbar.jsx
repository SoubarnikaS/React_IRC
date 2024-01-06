import React from 'react'
import { Bell } from 'lucide-react';
import { UserRound } from 'lucide-react';

const Navbar = () => {
  return (
    <>
      <div className='navM'>
        <div className='navv'>
          <div className='navLinks'>
            <Bell strokeWidth={2.6}/>
          </div>
        </div>
        <div className='navv'>
          <div className='navLinks'>
            <UserRound strokeWidth={2.6}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar