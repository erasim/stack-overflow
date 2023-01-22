/** @format */

import { useSelector, useDispatch } from "react-redux";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import copy from "copy-to-clipboard";

// import { postAnswer, deleteQuestion, voteQuestion } from '../../actions/questions'
import DisplayAnswer from "./DisplayAnswer";
import Avatar from "../Avatar/Avatar";
import upVotes from "../../assets/triangle-up.svg";
import downVotes from "../../assets/down-fill.svg";

const QuestionDetails = () => {
	// const questionsList = useSelector((state) => state.questionsReducer)
	// const User = useSelector((state) => state.currentUserReducer)
	const User = "1";
	// console.log(questionsList)
	const { id } = useParams();
	const history = useNavigate();
	// const dispatch = useDispatch()
	const location = useLocation();
	// const url = "http://localhost:3000"
	const url = "/";

	// const [answerBody, setAnswerBody] = useState('')

	// const handlePostAns = (e, answerLength) => {
	//     e.preventDefault()
	//     // console.log(answerLength)
	//     if(User === null){
	//         alert("Login or signup to answer a question")
	//         history.push('/Auth')
	//     }else{
	//         dispatch(postAnswer({ id, noOfAnswers: answerLength + 1, answerBody, userAnswered: User.result.name }))
	//     }
	// }

	// const handleEnter = (e) => {
	//     if(e.key === 'Enter'){
	//         setAnswerBody(answerBody + "\n")
	//     }
	// }

	// const handleCopy = () => {
	//     copy(url + location.pathname)
	//     alert("Copied url "+url+location.pathname)
	// }

	// const handleDelete = () => {
	//     dispatch(deleteQuestion(id, history))
	// }

	const handleUpVote = () => {
		// dispatch(voteQuestion(id, 'upVote'))
	};
	const handleDownVote = () => {
		// dispatch(voteQuestion(id, 'downVote'))
	};
	var questionsList = [
		{
			_id: "1",
			upVotes: 3,
			downVotes: 2,
			questionTitle: "what is a function",
			questionBody: "It meant to be",
			questionTags: ["java", "node js", "react js", "mongodb"],
			userPosted: "mano",
			userId: 1,
			askedOn: "jan 1",
			answer: [
				{
					answerBody: "Answer",
					userAnswered: "kumar",
					answeredOn: "jan 2",
					userId: 2,
				},
			],
		},
		{
			_id: "2",
			upVotes: 3,
			downVotes: 2,
			questionTitle: "what is a function",
			questionBody: "It meant to be",
			questionTags: ["java", "node js", "react js", "mongodb"],
			userPosted: "mano",
			userId: 2,
			askedOn: "jan 1",
			answer: [
				{
					answerBody: "Answer",
					userAnswered: "kumar",
					answeredOn: "jan 2",
					userId: '2',
				},
			],
		},
		{
			_id: "3",
			upVotes: 3,
			downVotes: 2,
			questionTitle: "what is a function",
			questionBody: "It meant to be",
			questionTags: ["java", "node js", "react js", "mongodb"],
			userPosted: "mano",
			userId: 3,
			askedOn: "jan 1",
			answer: [
				{
					answerBody: "Answer",
					userAnswered: "kumar",
					answeredOn: "jan 2",
					userId: 2,
				},
			],
		},
	];

	return (
		<div className='question-details-page'>
			{questionsList === null ? (
				<h1>Loading...</h1>
			) : (
				<>
					{questionsList
						.filter((question) => question._id === id)
						.map((question) => (
							<div key={question._id}>
								<section className='question-details-container'>
									<h1>{question.questionTitle}</h1>
									<div className='question-details-container-2'>
										<div className='question-votes'>
											<img src={upVotes} alt='uppic' width='18' />
											<p>{question.upVotes - question.downVotes}</p>
											<img src={downVotes} alt='uppic' width='18' />
										</div>
										<div style={{ width: "100%" }}>
											<p className='question-body'>{question.questionBody}</p>
											<div className='question-details-tags'>
												{question.questionTags.map((tag) => (
													<p key={tag}>{tag}</p>
												))}
											</div>
											<div className='question-actions-user'>
												<div>
													<button type='button'>Share</button>
													{User?.result?._id === question?.userId && (
														<button type='button'>Delete</button>
													)}
												</div>
												<div>
													<p>asked {moment(question.time).fromNow()}</p>
													<Link
														to={`/User/${question?.userId}`}
														className='user-link'
														style={{ color: "#0086d8" }}>
														<Avatar
															value={question.userPosted
																.charAt(0)
																.toUpperCase()}
															backgroundColor='orange'
															px='8px'
															py='5px'
														/>
														<div>{question.userPosted}</div>
													</Link>
												</div>
											</div>
										</div>
									</div>
								</section>
								{
									question.noOfAnswers !== 0 && (
									<section>
									    <h3>{question.noOfAnswers} Answers</h3>
									    <DisplayAnswer key={question._id} question={question}/>
									</section> )
								}
								<section className="post-ans-container">
                                <h3>Your Answer</h3>
                                <form >
                                    <textarea name="answerBody" id="" rows="10"  ></textarea><br />
                                    <input type="submit" className='post-ans-btn' value="Post Your Answer"/>
                                </form>
                                <p>
                                    Browse other questions tagged 
                                    { question.questionTags.map((tag) => (
                                        <Link to='' key={tag} className="ans-tag"> {tag} </Link>
                                    )) }
                                    or 
                                    <Link to='/AskQuestion' style={{textDecoration: "none", color: "#009dff"}}> ask your own question.</Link>
                                </p>
                            </section>
							</div>
						))}
				</>
			)}
		</div>
	);
};

export default QuestionDetails;
