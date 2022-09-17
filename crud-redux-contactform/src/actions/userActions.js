export const addContact = (newContact) => {
	return {
		type: "ADD_CONTACT",
		payload: newContact,
	};
};

export const RemoveContact = (contact_id) => {
  return {
    type: "DELETE_CONTACT",
    payload: contact_id,
  }
}
export const updateContact = (contactData)=>{
  return{
    type: "UPDATE_CONTACT",
    payload: {contactData}
  }


}
