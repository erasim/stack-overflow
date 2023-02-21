/** @format */

import React, { useState } from "react";
import loginimage from "../../assite/images/login-pic-left-side2.svg";
import userIcon from "../../assite/images/user-icon.png";
import passIcon from "../../assite/images/password-icon.png";
import { NavLink, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { login } from "../state/auth";
import { useDispatch } from "react-redux";
import { setUserRole } from "../state/action-creater";

const SignIn = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordShown, setPasswordShown] = useState(false);
	const newUrl = window.location.pathname;
	const array = newUrl.split("/");
	const role = array[array.length - 1];
	// console.log(role);
	dispatch(setUserRole(role));
	const PassShow = () => {
		if (!passwordShown) {
			setPasswordShown(true);
		} else {
			setPasswordShown(false);
		}
	};
	const LogIn = (e) => {
		e.preventDefault();
		// signInWithEmailAndPassword(auth, email, password)

		// 	.then((userCredential) => {
		// 		// Signed in
		// 		const user = userCredential.user;
		// 		navigate("/home");
		// 	})
		// 	.catch((error) => {
		// 		const errorCode = error.code;
		// 		const errorMessage = error.message;
		// 		console.log(errorCode, errorMessage);
		// 	});
		dispatch(login({ email, password }, navigate));
	};
	return (
		<div className='login-cantainer'>
			<div className='Left-login'>
				<img src={loginimage} alt='mainimg' />
			</div>
			<div className='Right-login'>
				<h1>Log In</h1>
				<div className='login-type-navbar'>
					<NavLink
						to='/login/hr'
						className='login-type'
						activeClassName='active'>
						<p>HR</p>
					</NavLink>
					<NavLink
						to='/login/Recruiter'
						className='login-type'
						activeClassName='active'>
						<p>Recruiter</p>
					</NavLink>
					<NavLink
						to='/login/employee'
						className='login-type'
						activeClassName='active'>
						<p>Employee</p>
					</NavLink>
				</div>
				<div>
					<img
						src={userIcon}
						className='login-username-icon'
						alt='usermane-img'
					/>
					<input
						type='text'
						className='login-input-username'
						placeholder='username'
						name='username'
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div>
					<img
						src={passIcon}
						className='login-password-icon'
						alt='password-img'
						onClick={PassShow}
					/>

					<input
						type={passwordShown ? "text" : "password"}
						className='login-input-password'
						placeholder='password'
						name='password'
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<div className='login-checkbox-box'>
					<input type='checkbox' />
					<h5 className='login-remember-me'>Remember me</h5>
					<h5 className='login-forget-password'>Forget password?</h5>
				</div>
				<br />
				<button className='login-button' onClick={LogIn}>
					Log in
				</button>
			</div>
		</div>
	);
};

export default SignIn;
