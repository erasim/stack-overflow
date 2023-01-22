import {Link } from "react-router-dom";
import logo from "../assets/logo.png";
import search from "../assets/search.svg";
import Avatar from "../component/Avatar/Avatar";

function Navbar() {
	const User = null;
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
			M
			<button className='nav-item nav-links'>Logout</button>
				</>
        }    
			</div> 
		</nav>
	);
}

export default Navbar;
