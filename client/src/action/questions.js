import * as api from '../component/api/index'

export const fetchAllQuestions = () => async (dispatch) =>{
    try {
        const { data } = await api.getAllQuestions()

        dispatch({ type: 'FETCH_ALL_QUESTIONS', payload: data})
    } catch (error) {
        console.log(error.message)
    }
}

export const askQuestion = (questionData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.postQuestion(questionData)
        dispatch({ type: 'POST_QUESTION', payload: data})
        dispatch(fetchAllQuestions())
        console.log("massage on post Question ");
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}

// export const deleteQuestion = (id, history) => async (dispatch) => {
//     try{
//         const { data } = await api.deleteQuestion(id)
//         dispatch({ type: 'DELETE_QUESTION', payload:data })
//         dispatch(fetchAllQuestions())
//         history.push('/')
//     } catch (error) {
//         console.log(error)
//     }
// }

// export const voteQuestion = (id, value) => async (dispatch) => {
//     try{
//         const { data } = await api.voteQuestion(id, value)
//         console.log(data)
//         dispatch({ type: 'VOTE_QUESTION', payload:data })
//         dispatch(fetchAllQuestions())
//     } catch(error){
//         console.log(error)
//     }
// }

export const postAnswer = (answerData) => async (dispatch) => {
    try {

      
        const { id, noOfAnswers, answerBody, userAnswered } = answerData;
        
        const { data } = await api.postAnswer( id, noOfAnswers, answerBody, userAnswered )
        dispatch({ type: 'POST_ANSWER', payload: data})
        dispatch(fetchAllQuestions())
    } catch (error) {
        console.log(error)
    }
}

// export const deleteAnswer = (id, answerId, noOfAnswers) => async (dispatch) => {
//     try{
//         const { data } = await api.deleteAnswer(id, answerId, noOfAnswers)
//         dispatch({ type: 'DELETE_ANSWER', payload:data })
//         dispatch(fetchAllQuestions())
//     } catch (error) {
//         console.log(error)
//     }
// }