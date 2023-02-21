/** @format */
import React, { useEffect } from "react";
import rightArrow from "../../assite/images/right-arrow3.png";
import "./policy.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPolicy } from "../state/questions";


const Policy = () => {
	const policyList = useSelector(state=>state?.questionsReducer?.data ?? []);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	 useEffect(() => {
 dispatch(fetchAllPolicy());
  }, []);
console.log('Policylist=>', policyList);
	
	return (
		
		<div className='policy-main'>
			<div className='policy-main-header'>
				<h1>Company Policies</h1>
			</div>
			<div className='policy-main-header2'>
				<h3>What are Company policies?</h3>
				<p>
					Company policies are guidelines that help employers deal with the help
					safety and accountable T of employees as well as their interactions
					with customers or client Business policies can also be used as a
					guideline for Federal or state regularity requirements, legal issues
					and other situations that can lead to severe consequences for
					employees.
				</p>
			</div>
			<div className='policy-main-card-header'>
				<h3>Here's a list of company policies you may need:</h3>
			</div>
			<div className='policy-main-card-box'>
			{policyList.map((e) => (
				<div className='policy-main-card' key={e.id}>
				
				<p>{e.text1}</p>
				
				<button>
				<Link to={`/policy/${e._id}`} className='question-title-link'>
					SeeMore
				</Link>
					<img src={rightArrow} alt='arrow' />
				</button>
			</div>
			))}

				

				{/* <div className='policy-main-card'>
					<p>Workolace Health and Seftey</p>
					<button onClick={seeMoreHandle}>
						See More
						<img src={rightArrow} alt='arrow' />
					</button>
				</div> */}

				{/* <div className='policy-main-card'>
					<p>Employee code of conduct policy</p>
          <button onClick={seeMoreHandle}>
						See More
						<img src={rightArrow} alt='arrow' />
					</button>
				</div>

				<div className='policy-main-card'>
					<p>Attendance & vacation policies</p>
					<button onClick={seeMoreHandle}>
						See More
						<img src={rightArrow} alt='arrow' />
					</button>
				</div>

				<div className='policy-main-card'>
					<p>Employee disciplinary action policy</p>
					<button onClick={seeMoreHandle}>
						See More
						<img src={rightArrow} alt='arrow' />
					</button>
				</div>

				<div className='policy-main-card'>
					<p>Employee complaint policies</p>
          <button onClick={seeMoreHandle}>
						See More
						<img src={rightArrow} alt='arrow' />
					</button>
				</div>

				<div className='policy-main-card'>
					<p>Substance abuse policies</p>
					<button onClick={seeMoreHandle}>
						See More
						<img src={rightArrow} alt='arrow' />
					</button>
				</div>

				<div className='policy-main-card'>
					<p>Workplace security policies</p>
          <button onClick={seeMoreHandle}>
						See More
						<img src={rightArrow} alt='arrow' />
					</button>
				</div>

				<div className='policy-main-card'>
					<p>Bring your own device policies</p>
					<button onClick={seeMoreHandle}>
						See More
						<img src={rightArrow} alt='arrow' />
					</button>
				</div>

				<div className='policy-main-card'>
					<p>Compensation and benifits policy</p>
          <button onClick={seeMoreHandle}>
						See More
						<img src={rightArrow} alt='arrow' />
					</button>
				</div>

				<div className='policy-main-card'>
					<p>Travel policies</p>
					<button onClick={seeMoreHandle}>
						See More
						<img src={rightArrow} alt='arrow' />
					</button>
				</div>

				<div className='policy-main-card'>
					<p>Emoloyee Fraternization policy</p>
          <button onClick={seeMoreHandle}>
						See More
						<img src={rightArrow} alt='arrow' />
					</button>
				</div>

				<div className='policy-main-card'>
					<p>Inclement Weather Policies</p>
          <button onClick={seeMoreHandle}>
						See More
						<img src={rightArrow} alt='arrow' />
					</button>
				</div>

				<div className='policy-main-card'>
					<p>Employee face Mask policy</p>
					<button onClick={seeMoreHandle}>
						See More
						<img src={rightArrow} alt='arrow' />
					</button>
				</div>

				<div className='policy-main-card'>
					<p>Remote work Policy</p>
					<button onClick={seeMoreHandle}>
						See More
						<img src={rightArrow} alt='arrow' />
					</button>
				</div> */}
			</div>
			<div className='policy-main-header2'>
				<h3>Why are company policies important?</h3>
				<p>
					Company policies put in writing what you expect from your employees.
					These may be related to performance, value or behavior, Additionally,
					company policies can server as pre warning for employees. since they
					outline the consequences of failing to abide by the rules.
				</p>
				<p>
					Company policies are important for a variety of other
					reasons.including:
					<li>Setting expectations</li>
					<li>Keeping management accountable</li>
					<li>Ensuring compliance with the law</li>
					<li>Helping defend against legal claims</li>
					<li>Assisting with fair treatment employees</li>
				</p>
			</div>
		</div>
	);
};

export default  Policy;
