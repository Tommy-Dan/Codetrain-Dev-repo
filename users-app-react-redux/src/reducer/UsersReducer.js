import { v4 as uuid } from "uuid";


let initialState = {
	users: [
		{ name: "John", email: "jon@gmail.com", gen: "14", id: uuid()},
		{ name: "Elom", email: "ellom@gmail.com", gen: "15", id: uuid()},
		{ name: "Grace", email: "grace@gmail.com", gen: "20", id: uuid()},
		{ name: "Kojo", email: "kojogmail.com", gen: "22", id: uuid()},
	],
};

let UsersReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_USER":
			return {...state, users: [...state.users, action.payload]};
			case "DELETE_USER":
				const unDeletedUsers = state.users.filter((user)=>user.id !== action.payload)
				return {...state, users: unDeletedUsers }

			case "UPDATE_USER":
				const updateUser = state.users.map((user)=>{
					if(user.id===action.payload.userData.id){
						return action.payload.userData
					}
					else {return user}
				})
				return {...state, users: updateUser }
			
			default:
				return state;
	}
};


export default UsersReducer;
