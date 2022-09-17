import { v4 as uuid } from "uuid";


let initialState = {
	contacts: [
		{
		  name: "Tommy",
		  location: "East Legon Hills",
		  phone: "+233 592612429",
		  id: uuid()
		},
		{
		  name: "Kwame",
		  location: "North",
		  phone: "+233504753457",
		  id: uuid(),
		},
		{
		  name: "Jude",
		  location: "Tamale",
		  phone: "+233243830334",
		  id: uuid(),
		},
	  ],
};

let contactReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_CONTACT":
			return { ...state, contacts: [...state.contacts, action.payload] };

		case "DELETE_CONTACT":
				const unDeletedContacts = state.users.filter((contact) => contact.id!==action.payload)
				return {...state, contacts: unDeletedContacts};

		case "UPDATE_CONTACT":
				const updateContact = state.contacts.map((contact)=>{
					if(contact.id===action.payload.contactData.id){
						return action.payload.contactData
					}
					else {return contact}
				})
				return {...state , contacts:updateContact}

		default:
			return state;
	}
};

export default contactReducer;
