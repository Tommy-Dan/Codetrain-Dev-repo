let initialState = {
  contacts: [],
};

let AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CONTACT":
      return {
        ...state,
        contacts: action.payload,
      };
    default:
      return state;
  }
};

export default AuthReducer;
