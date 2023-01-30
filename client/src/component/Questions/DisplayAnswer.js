import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
// import copy from 'copy-to-clipboard'

import './questions.css'
import Avatar from '../Avatar/Avatar'
// import { deleteAnswer } from '../../actions/questions'

const DisplayAnswer = ({question}) => {

    const dispatch = useDispatch()
    const location = useLocation()
    // const url = "http://localhost:3000"
    const url = "/";
    const { id } = useParams()
    console.log("id", id);
    const User = useSelector((state) => state.currentUserReducer)
   
    console.log(question)
    // const handleCopy = () => {
    //     copy(url + location.pathname)
    //     alert("Copied url "+url+location.pathname)
    // }

    const handleDelete = (answerId, noOfAnswers) => {
        // dispatch(deleteAnswer(id, answerId, noOfAnswers - 1))
    }

    return (
        <div>
            {
                question.answer.map(ans => (
                    <div className="display-ans" key={ans._id}>
                        <p>{ans.answerBody}</p>
                        <div className='question-actions-user'>
                            <div>
                                <button type="button" >Share</button>
                                <Link to={`/AskQuestion/${id}`} className="edit-question-btn">Edit</Link>
                                { User?.result?._id === ans.userId && (
                                    <button type="button" >Delete</button>
                                ) }
                            </div>
                            <div>
                                <p>asked {moment(ans?.answeredOn).fromNow()}</p>
                                <Link to={`/User/${ans?.userId}`} className='user-link' style={{color: "#0086d8"}}>
                                    <Avatar value={ans.userAnswered.charAt(0).toUpperCase()} backgroundColor="lightGreen" px="8px" py="5px"/> 
                                    <div>{ans.userAnswered}</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default DisplayAnswer
