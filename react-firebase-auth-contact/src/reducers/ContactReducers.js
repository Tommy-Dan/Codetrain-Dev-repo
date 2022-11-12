let initialStore = {
  contacts: [],
};

let ContactReducer = (state = initialStore, action) => {
  switch (action.type) {
    case "ADD_NEW_CONTACT":
      return { ...state, contacts: action.payload };

    case "DELETE_CONTACT":
      const undeleted = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
      return { ...state, contacts: undeleted };

    case "EDIT_CONTACT":
      const editContact = state.contacts.map((contact) => {
        if (contact.id === action.payload.data.id) {
          return action.payload.data;
        } else {
          return contact;
        }
      });
      return { ...state, contacts: editContact };

    default:
      return state;
  }
};

export default ContactReducer;
