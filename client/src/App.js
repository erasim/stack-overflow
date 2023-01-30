import React, { useEffect } from 'react';
import './App.css';
import './component/Navbar.css'
import Routing from './component/Routing';
import { fetchAllQuestions } from './action/questions';
import { useDispatch } from 'react-redux';



function App() {
  const dispatch = useDispatch()
useEffect(()=>{
dispatch(fetchAllQuestions())
},[dispatch])



  return (
    <>
      <Routing/>

    </>
  );
}

export default App;
