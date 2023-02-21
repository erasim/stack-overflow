import { combineReducers } from "redux";


import userRole from "./roleReduser";
import authReducer from "./auth";
import currentUserReducer from "./currentUser";
import questionsReducer from "./questions";




const reducerss=combineReducers({
   
    // userRole,
    authReducer, 
    currentUserReducer,
    questionsReducer
    

})

export default reducerss