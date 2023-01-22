/** @format */

import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./HomeMainebar.css";
import QuestionsList from "./QuestionsList";

const HomeMainebar = () => {
	var questionsList = [
		{
			_id: 1,
			votes: 3,
			questionTitle: "what is a function",
			questionBody: "It meant to be",
			questionTags: ["java", "node js", "react js", "mongodb"],
			userPosted: "mano",
			userId:1,
			askedOn: "jan 1",
			answer:[{
				answerBody:"Answer",
				userAnswered:'kumar',
				answeredOn:"jan 2",
				userId:2,
			}]
		},
		{
			_id: 2,
			votes: 3,
			questionTitle: "what is a function",
			questionBody: "It meant to be",
			questionTags: ["java", "node js", "react js", "mongodb"],
			userPosted: "mano",
			userId:2,
			askedOn: "jan 1",
			answer:[{
				answerBody:"Answer",
				userAnswered:'kumar',
				answeredOn:"jan 2",
				userId:2,
			}]
		},
		{
			_id: 3,
			votes: 3,
			questionTitle: "what is a function",
			questionBody: "It meant to be",
			questionTags: ["java", "node js", "react js", "mongodb"],
			userPosted: "mano",
			userId:3,
			askedOn: "jan 1",
			answer:[{
				answerBody:"Answer",
				userAnswered:'kumar',
				answeredOn:"jan 2",
				userId:2,
			}]
		},
		{
			_id: 4,
			votes: 3,
			questionTitle: "what is a function",
			questionBody: "It meant to be",
			questionTags: ["java", "node js", "react js", "mongodb"],
			userPosted: "mano",
			askedOn: "jan 1",
			userId:3,
			answer:[{
				answerBody:"Answer",
				userAnswered:'kumar',
				answeredOn:"jan 2",
				userId:2,
			}]
		},
		{
			_id: 5,
			votes: 3,
			questionTitle: "what is a function",
			questionBody: "It meant to be",
			questionTags: ["java", "node js", "react js", "mongodb"],
			userPosted: "mano",
			userId:5,
			askedOn: "jan 1",
			answer:[{
				answerBody:"Answer",
				userAnswered:'kumar',
				answeredOn:"jan 2",
				userId:2,
			}]
		},
		{
			_id: 6,
			votes: 3,
			questionTitle: "what is a function",
			questionBody: "It meant to be",
			questionTags: ["java", "node js", "react js", "mongodb"],
			userPosted: "mano",
			userId:6,
			askedOn: "jan 1",
			answer:[{
				answerBody:"Answer",
				userAnswered:'kumar',
				answeredOn:"jan 2",
				userId:2,
			}]
		},
	];
 
	const location = useLocation();
	return (
		<div className='main-bar'>
			<br />
			<br />
			
			<div className='main-bar-header'>
				{location.pathname === "/" ? (
					<h1>Top Question</h1>
				) : (
					<h1>All Questiion</h1>
				)}
				<Link to='AskQuestion' className='ask-btn'>
					Ask Question
				</Link>
			</div>
			{questionsList === null ? (
				<h1>Loading....</h1>
			) : 
     <QuestionsList questionsList={questionsList}/>
      }
		
		</div>
	);
};

export default HomeMainebar;
