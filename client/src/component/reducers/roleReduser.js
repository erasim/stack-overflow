/** @format */

const userRole = (state = {role:''}, action) => {
	if (action.type === "AddRole") {
		// console.log("check 2")
		return  { ...state, role: action.payload };
	}  else {
		return state;
	}
};
export default userRole;
