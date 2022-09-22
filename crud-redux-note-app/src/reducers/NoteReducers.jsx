// import { DatePicker } from "react-datepicker";
import { v4 as uuid } from "uuid";


let initialState= {
    notes: [
        { title: "In Many Ways We're Alike", 
          date: "20/09/22", 
          content: "Destiny is a not a matter of chance, it is a matter of choice",
          id: uuid(),
        },

		{ title: "Wherever You Choose To Go, Go There With All Your Heart", 
          date: "21/09/22",
          content: "Nothing great was ever accomplished without enthusiasm",
          id: uuid(),
        },
    ],
 };

let NoteReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_NOTE":
		  return {...state, notes: [...state.notes, action.payload]}

		case "DELETE_NOTE": 
		  const unDeletedNotes = state.notes.filter((note) =>
		  note.id!== action.payload)
		  return {...state, notes: unDeletedNotes}

		case "EDIT_NOTE":
			const updatedNotes = state.notes.map((note) => {
			  if(note.id === action.payload.id){
				return action.payload
			  }
			  else {return note}
			})
			return {...state, notes: updatedNotes }


		default:
		  return state;
		  
	  }
};

export default NoteReducer;