let initialStore = {
  expenses: [],
};

let ExpenseReducer = (state = initialStore, action) => {
  console.log(state.expenses);
  switch (action.type) {
    case "ADD_NEW_EXPENSE":
      return { ...state, expenses: [...state.expenses, action.payload] };

    case "DELETE_EXPENSE":
      const transaction = state.expenses.filter((item) => item.id !== action.payload);
      return { ...state, expenses: transaction };

    case "EDIT_EXPENSE":
      const temp = state.expenses.map((item) => {
        if (item.id === action.payload.data.id) {
          return action.payload.data;
        } else {
          return item;
        }
      });

      return { ...state, expenses: temp };
    default:
      return state;
  }
};

export default ExpenseReducer;
