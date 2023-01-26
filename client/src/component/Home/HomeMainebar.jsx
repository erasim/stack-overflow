/** @format */

import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import "./HomeMainebar.css";
import QuestionsList from "./QuestionsList";
import { useNavigate } from "react-router-dom";

const HomeMainebar = () => {
	const navigate =useNavigate()
	const User = useSelector((state)=>(state.currentUserReducer));
	const questionsList = useSelector(state=>state?.questionsReducer?.data ?? []);
	// console.log("questions list=>",questionsLis2);
	// var questionsList = [
	// 	{
	// 		_id: 1,
	// 		votes: 3,
	// 		questionTitle: "what is a function",
	// 		questionBody: "It meant to be",
	// 		questionTags: ["java", "node js", "react js", "mongodb"],
	// 		userPosted: "mano",
	// 		userId:1,
	// 		askedOn: "jan 1",
	// 		answer:[{
	// 			answerBody:"Answer",
	// 			userAnswered:'kumar',
	// 			answeredOn:"jan 2",
	// 			userId:2,
	// 		}]
	// 	},
	// 	{
	// 		_id: 2,
	// 		votes: 3,
	// 		questionTitle: "what is a function",
	// 		questionBody: "It meant to be",
	// 		questionTags: ["java", "node js", "react js", "mongodb"],
	// 		userPosted: "mano",
	// 		userId:2,
	// 		askedOn: "jan 1",
	// 		answer:[{
	// 			answerBody:"Answer",
	// 			userAnswered:'kumar',
	// 			answeredOn:"jan 2",
	// 			userId:2,
	// 		}]
	// 	},
	// 	{
	// 		_id: 3,
	// 		votes: 3,
	// 		questionTitle: "what is a function",
	// 		questionBody: "It meant to be",
	// 		questionTags: ["java", "node js", "react js", "mongodb"],
	// 		userPosted: "mano",
	// 		userId:3,
	// 		askedOn: "jan 1",
	// 		answer:[{
	// 			answerBody:"Answer",
	// 			userAnswered:'kumar',
	// 			answeredOn:"jan 2",
	// 			userId:2,
	// 		}]
	// 	},
	// 	{
	// 		_id: 4,
	// 		votes: 3,
	// 		questionTitle: "what is a function",
	// 		questionBody: "It meant to be",
	// 		questionTags: ["java", "node js", "react js", "mongodb"],
	// 		userPosted: "mano",
	// 		askedOn: "jan 1",
	// 		userId:3,
	// 		answer:[{
	// 			answerBody:"Answer",
	// 			userAnswered:'kumar',
	// 			answeredOn:"jan 2",
	// 			userId:2,
	// 		}]
	// 	},
	// 	{
	// 		_id: 5,
	// 		votes: 3,
	// 		questionTitle: "what is a function",
	// 		questionBody: "It meant to be",
	// 		questionTags: ["java", "node js", "react js", "mongodb"],
	// 		userPosted: "mano",
	// 		userId:5,
	// 		askedOn: "jan 1",
	// 		answer:[{
	// 			answerBody:"Answer",
	// 			userAnswered:'kumar',
	// 			answeredOn:"jan 2",
	// 			userId:2,
	// 		}]
	// 	},
	// 	{
	// 		_id: 6,
	// 		votes: 3,
	// 		questionTitle: "what is a function",
	// 		questionBody: "It meant to be",
	// 		questionTags: ["java", "node js", "react js", "mongodb"],
	// 		userPosted: "mano",
	// 		userId:6,
	// 		askedOn: "jan 1",
	// 		answer:[{
	// 			answerBody:"Answer",
	// 			userAnswered:'kumar',
	// 			answeredOn:"jan 2",
	// 			userId:2,
	// 		}]
	// 	},
	// ];
 
	const checkAuth =() =>{
		if(User===null){
			alert("please login to ask Questions")
			navigate('/Auth')
		}else{navigate('/AskQuestion')}
		
	}
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
				<button onClick={checkAuth} className='ask-btn'>
					Ask Question
				</button>
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
