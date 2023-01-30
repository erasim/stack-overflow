import React from 'react'
import {
   
    Route,
    Routes
  } from "react-router-dom";
  import Home from './Home/Home';
  import About from './About';
import Navbar from './Navbar';
import Auth from './Auth/Auth';
import QuestionsLink from './Pages/QuestionsLink';
import AskQuestion from './AskQuestion/AskQuestion';
import DisplayQuestion from './Questions/DisplayQuestion';

const Routing = () => {
  return (
   <>
  <div>
    <Navbar/>
   
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Auth" element={<Auth/>} />
          <Route path="/team" element={<Auth/>} />
          <Route path="/Questions" element={<QuestionsLink/>} />
          <Route path="/AskQuestion" element={<AskQuestion/>} />
          <Route path="/Questions/:id" element={<DisplayQuestion/>}/>
          
        </Routes>
      </div>
      
</>
   
   
  )
}

export default Routing