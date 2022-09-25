import React from "react";
import Expenses from "./Expenses";



function ExpensesList({ expenses, editExpense, deleteExpense }) {
    expenses = expenses.sort((a, b) => {
        return new Date(b.date) - new Date(a.date)
    })
    return (
        <div>
            <h3>Expenses</h3>
            <ul className="list">
               {expenses.map((expense) => {
                return (
                    <Expenses key={expense.id}
                    expense={expense}
                    editExpense={(id) => editExpense(id)}
                    deleteExpense={(id) => deleteExpense(id)}
                />
                )
               })}
            </ul>
        </div>
    )
}

export default ExpensesList;