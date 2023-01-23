/** @format */
import React, { useState } from "react";
import "./auth.css";
import icon from "../../assets/icon.png"
import AboutAuth from "./AboutAuth";
import { login, signup } from "../../action/auth";
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'




const Auth = () => {
	
	const [isSignup, setIsSignup] = useState(false);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const dispatch =useDispatch()
	const navigate = useNavigate()
	const handleSwitch = () => {
		setIsSignup(!isSignup);
	};

	const handleSubmit=(e)=>{
		e.preventDefault();
		if(!isSignup){
			if(!email && !password){
				alert("Enter Email and Password")
			}
		}
			if(isSignup){
			if(!name){
				alert("Enter a name to Continue")
			}
		
			dispatch(signup({name, email,password}, navigate));
			console.log({name, email,password});
		}else{
			dispatch(login({email,password}, navigate));
			
		}
	}    




	return (
		<div className='auth'>
			<section className='auth-section'>
				{isSignup && <AboutAuth />}
				<div className='auth-container-2'>
					{!isSignup && (
						<img src={icon} alt='stack-overflow' className='login-logo' />
					)}
					<form onSubmit={handleSubmit}>
						{isSignup && (
							<label htmlFor='name'>
								<h4>Display Name</h4>
								<input type='text' name='name' id='name' onChange={(e)=>{setName(e.target.value)}}/>
							</label>
						)}
						<label htmlFor='email'>
							<h4>Email</h4>
							<input type='email' name='email' id='email' onChange={(e)=>{setEmail(e.target.value)}}/>
						</label>
						<label htmlFor='Password'>
							<div style={{display:"flex", justifyContent:"space-between"}}>
								<h4>Password</h4>
								{!isSignup && <p style={{ color: "#007ac6", fontSize:"13px"}}>forget password</p>}
							</div>

							<input type='Password' name='Password' id='Password' onChange={(e)=>{setPassword(e.target.value)}}/>
							{isSignup && (
								<p style={{ color: "#666767", fontSize: "13px" }}>
									Passwords must contain at least eight
									<br />
									characters, including at least 1<br /> letter and 1 number.
								</p>
							)}
						</label>
						{isSignup && (
							<label htmlFor='check'>
								<input type='checkbox' id='check' />
								<p style={{ fontSize: "13px" }}>
									Opt-in to receive occasional <br />
									product updates, user research invitations,
									<br />
									company announcements, and digests.
								</p>
							</label>
						)}

						<button type='submit' className='auth-btn'>
							{isSignup ? "Sign up" : "Log in"}
						</button>
						{isSignup && (
							<p style={{ color: "#666767", fontSize: "13px" }}>
								By clicking “Sign up”, you agree to our
								<span style={{ color: "#007ac6" }}>
									terms of <br />
									service
								</span>{" "}
								,<span style={{ color: "#007ac6" }}> privacy policy</span> and
								<span style={{ color: "#007ac6" }}> cookie policy</span>
							</p>
						)}
					</form>
					<p>
						{!isSignup ? "already have an account?" : "Don't have an account"}

						<button
							type='button'
							className='handle-switch-btn'
							onClick={handleSwitch}>
							{isSignup ? "log in" : "sign up"}
						</button>
					</p>
				</div>
			</section>
		</div>
	);
};

export default Auth;
