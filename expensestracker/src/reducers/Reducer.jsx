import { ADD_EXPENSE, EDIT_EXPENSE, DELETE_EXPENSE } from "../actions/Actions";


const initialState = {
    expenses: []
}

const expenseReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_EXPENSE:
            return {
                ...state,
                expenses: [action.payload, ...state.expenses]
            }
        
        case EDIT_EXPENSE:
            return {
                ...state,
                expenses: state.expenses.filter((expense) => expense.id !==action.payload)
            }
        
        case DELETE_EXPENSE:
            return {
                ...state, expenses: state.transaction.filter((expense) => expense.id !== action.payload)
            }
        
        default: return state
    }
}

export default expenseReducer;