export const dispatchContact = (contact) => {
  return {
    type: "SET_USER",
    payload: contact,
  };
};
