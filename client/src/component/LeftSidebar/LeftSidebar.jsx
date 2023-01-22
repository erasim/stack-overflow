import React from 'react'
import './LeftSidebar.css'
import { NavLink } from 'react-router-dom'
import Globe from '../../assets/Globe.svg'

const LeftSidebar = () => {
  return (
    <div className='left-sidebar'>
      <nav className='side-nav'>
        <NavLink to='/' className='side-nav-links' activeClassName='active'>
          <p>Home</p>
        </NavLink>
        <div className='side-nav-div'>
          <div><p>Public</p></div>
          <NavLink  to='/Questions' className='side-nav-links'style={{paddingLeft:'14px'}}>
            <img src={Globe} alt="Globe" />
            <p style={{paddingLeft:"10px"}}>Question</p>
          </NavLink>
          <NavLink to='/Users' className='side-nav-links' activeClassName='active' >
            <p>Users</p>
            
          </NavLink>
          <NavLink to='/tags' className='side-nav-links' activeClassName='active' >
            <p>tags</p>
            
          </NavLink>

        </div >
      </nav>
    </div>
  )
}

export default LeftSidebar