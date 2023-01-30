import {Link, useNavigate} from "react-router-dom";
import logo from "../assets/logo.png";
import search from "../assets/search.svg";
import Avatar from "../component/Avatar/Avatar";
import {useSelector, useDispatch} from 'react-redux'
import { useEffect } from "react";
import { setCurrrentUser } from "../action/currentUser";


function Navbar() {
	const dispatch =useDispatch()
	const navigate = useNavigate()
	const User = useSelector((state)=>(state.currentUserReducer));
	useEffect(()=>{
    dispatch(setCurrrentUser(JSON.parse(localStorage.getItem('Profile'))))
	},[dispatch])
	const logout = () => {
		localStorage.removeItem('Profile');
		navigate(0);
	  };
	return (
		<nav className="main-nav">
			<div className='navbar'>
				<Link to='/' className='nav-item nav-btn'>
					<img src={logo} alt='logo' />
				</Link>
				<Link to="/about" className='nav-item nav-btn'>
					About
				</Link>
				<Link to='/products' className='nav-item nav-btn'>
					Products
				</Link>
				<Link to='/team' className='nav-item nav-btn'>
					For Teams
				</Link>
				<form>
					<input type='text' placeholder='search..' />
					<img src={search} alt='search' width='18' className='search-icon' />
				</form>
				{User === null? 
				<Link to='Auth' className='nav-item nav-links'>Log in</Link>
				:<>
			<Avatar/>{(User.result.name).charAt(0).toUpperCase()+(User.result.name).slice(1)}
			<button className='nav-item nav-links' onClick={logout}>Logout</button>
				</>
        }    
			</div> 
		</nav>
	);
}

export default Navbar;
