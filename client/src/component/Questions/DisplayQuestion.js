import React from 'react'
import "./questions.css"
import LeftSidebar from '../LeftSidebar/LeftSidebar'
import RightSidebar from '../RightSidebar/RightSidebar'
import QuestionDetails from './QuestionDetails'

const DisplayQuestion = () => {
    return (
        <div className="container-1">
            <LeftSidebar />
            <div className="container-2">
                <QuestionDetails />
                <RightSidebar />
            </div>
        </div>
    )
}

export default DisplayQuestion
