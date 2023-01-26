/** @format */

import { useSelector, useDispatch } from "react-redux";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
// import copy from "copy-to-clipboard";

import { postAnswer } from "../../action/questions";
// import DisplayAnswer from "./DisplayAnswer";
import Avatar from "../Avatar/Avatar";
import upVotes from "../../assets/triangle-up.svg";
import downVotes from "../../assets/down-fill.svg";

const QuestionDetails = () => {
	const questionsList = useSelector((state) => state?.questionsReducer?.data);
	const User = useSelector((state) => state.currentUserReducer);

	const { id } = useParams();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [answerBody, setanswerBody] = useState(' ');

	const handlePostAns = (e,answerlength) => {
		e.preventDefault();
	
		// if(User === null){
		//     alert("Login or signup to answer a question")
		//     navigate('/Auth')
		// }else if (!answer ===' '){
		// 		alert("Write the answer before Submit Answer")

		// }

		// else{
		dispatch(
			postAnswer({
				id,
				noOfAnswers: answerlength+1,
				answerBody,
				userAnswered: User.result.name,
			})
		);
		// }
	};

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
	//     // dispatch(deleteQuestion(id, history))
	// }

	// const handleUpVote = () => {
	// 	// dispatch(voteQuestion(id, 'upVote'))
	// };
	// const handleDownVote = () => {
	// 	// dispatch(voteQuestion(id, 'downVote'))
	// };

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

											<p>{question.upVote.length - question.downVote.length}</p>

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
								{question.noOfAnswers !== 0 && (
									<section>
										<h3>{question.noOfAnswers} Answers</h3>
										{/* <DisplayAnswer key={question._id} question={question} /> */}
									</section>
								)}
								<section className='post-ans-container'>
									<h3>Your Answer</h3>
									<form
										onSubmit={
											// (e) => {
											handlePostAns
										// 	(e, question.answer.length);
										// }
											}>
										<textarea
											name='answerBody'
											id=''
											rows='10'
											onChange={(e) => setanswerBody(e.target.value)} ></textarea>
										<br />
										<input
											type='submit'
											className='post-ans-btn'
											value='Post Your Answer'
										/>
									</form>
									<p>
										Browse other questions tagged
										{question.questionTags.map((tag) => (
											<Link to='' key={tag} className='ans-tag'>
												{" "}
												{tag}{" "}
											</Link>
										))}
										or
										<Link
											to='/AskQuestion'
											style={{ textDecoration: "none", color: "#009dff" }}>
											{" "}
											ask your own question.
										</Link>
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
