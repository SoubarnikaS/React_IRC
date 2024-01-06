import React from 'react'
import Content from './Content'
import { Search } from 'lucide-react';
import { Home } from 'lucide-react';  

const Homes = () => {
  return (
    <>
      <div className='homeBodyM'>
        <div className='sidePanelM'>
          <div className='topSide'>
            <div className='homeM'>
              <Home />    Home
            </div>
            <div className='searchM'>
              <Search />  Search
            </div>
          </div>
          <div className='bottomSide'>

          </div>
        </div>
        <div className='mainM'>

          <Content />
        </div>
      </div >
    </>
  )
}

export default Homes