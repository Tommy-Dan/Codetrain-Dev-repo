export const ADD_EXPENSE = "ADD_EXPENSE"
export const EDIT_EXPENSE = "EDIT_EXPENSE"
export const DELETE_EXPENSE = "DELETE_EXPENSE"


export const addExpense = (expense) => ({
    type: ADD_EXPENSE,
    payload: expense
})

export const editExpense = (expenseId) => ({
    type: EDIT_EXPENSE,
    payload: expenseId
})

export const deleteExpense = (expenseId) => ({
    type: DELETE_EXPENSE,
    payload: expenseId
})