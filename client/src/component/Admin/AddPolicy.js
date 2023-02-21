import React, { useState } from 'react'
import { policyAdd } from '../state/questions';
import './AddPolicy.css'
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate} from "react-router-dom"

const AddPolicy = () => {

const [text1, setText1]=useState('');
const [text2, setText2]=useState('');
const [text3, setText3]=useState('');
const [text4, setText4]=useState('');
const [text5, setText5]=useState('');
const [text6, setText6]=useState('');
const [text7, setText7]=useState('');
const [text8, setText8]=useState('');
const [text9, setText9]=useState('');
const navigate = useNavigate()
const dispatch = useDispatch()
const AddNewPolicy=(e)=>{
    e.preventDefault()
    
    dispatch(policyAdd({ text1, text2,text3,text4,text5,text6,text7,text8,text9}, navigate));
}
  return (
    <div className='addpolicy-main'>
        <p>No.1</p>
        <input type='text' className='addpolicy-box1' onChange={(e) => setText1(e.target.value)} />
   {console.log('addPolicy=>', text1)}
        <p>No.-2</p>
        <input type='text' className='addpolicy-box1' onChange={(e) => setText2(e.target.value)} />
        <p>No.-3</p>
        <input type='text' className='addpolicy-box1' onChange={(e) => setText3(e.target.value)}/>
        <p>No.-4</p>
        <input type='text' className='addpolicy-box1' onChange={(e) => setText4(e.target.value)} />
        <p>No.-5</p>
        <input type='text' className='addpolicy-box1'  onChange={(e) => setText5(e.target.value)}/>
        <p>No.-6</p>
        <input type='text' className='addpolicy-box1'  onChange={(e) => setText6(e.target.value)}/>
        <p>No.-7</p>
        <input type='text' className='addpolicy-box1'  onChange={(e) => setText7(e.target.value)}/>
        <p>No.-7</p>
        <input type='text' className='addpolicy-box1' onChange={(e) => setText8(e.target.value)}/>
        <p>No.-9</p>
        <input type='text' className='addpolicy-box1' onChange={(e) => setText9(e.target.value)}/>
        <p></p>
        <button onClick={AddNewPolicy}>Submit</button>
    </div>
  )
}

export default AddPolicy