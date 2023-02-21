/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setCurrrentUser } from "../state/currentUser";
const Navbar = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
  const User = useSelector((state)=>(state.currentUserReducer));
	useEffect(()=>{
    dispatch(setCurrrentUser(JSON.parse(localStorage.getItem('Profile'))))
	},[dispatch])
	const Logout = () => {
		localStorage.removeItem('Profile');
    User='';
		navigate('/login');
	  };

	// console.log('profile=>', items);
	return (
		<nav className='navbar navbar-expand-lg bg-body-tertiary'>
			<div className='container-fluid'>
				<Link to='/Home' className='nav-link'>
					Company
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarNavDropdown'
					aria-controls='navbarNavDropdown'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarNavDropdown'>
					<ul className='navbar-nav'>
						<li className='nav-item'>
							<Link to='/addpolicy' className='nav-link' aria-current='page'>
								Admin
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='/policy' className='nav-link'>
								Policy
							</Link>
						</li>
						<li className='nav-item-login'>
              
							{!User ? (
								<Link to='/auth' className='nav-link'>
									Login
								</Link>
							) : (<><Link to='' className='nav-link' >{User.result.name}</Link>	<Link to='/auth' className='nav-link' onClick={Logout}>
              Logout
            </Link></>
							
							)}
						
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
