import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase/firebase';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

const Home = () => {
  const [email , setEmail]=useState('');
  const navigate = useNavigate();
  const Role = useSelector(state => state.role)
 
  const signOutUser = (user) => {
    if(user)
    signOut(auth)
  navigate('/login')
}
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
          // console.log("home page", user.email);
            if (user) {
              console.log(user);
              setEmail(user.email)
           
            } else {
              // User is signed out
              console.log("user is logged out")
            }
          });
         
    }, [])
 
  return (
    <section className='form-login'>        
    <h1>Welcome to our Home Page</h1>
    {/* <h3>Your role is {Role.role}</h3> */}
    <h1>{email}</h1>
    <button onClick={ signOutUser}>Sign out</button>
    </section>
  )
}

export default Home