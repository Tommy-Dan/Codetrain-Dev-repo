import React from "react";



function Expenses({ expense, editExpense, deleteExpense }) {
    let sign = expense.amount >= 0 ? "+" : "-";

    return (
        <li className={expense.amount >= 0 ? "plus" : "minus"}>
            {expense.item}
            <span>
                <span style={{ marginRight: 8}}>{expense.category}</span>
                <span style={{ marginRight: 8}}>{expense.date}</span>
                {sign}GH₵{Math.abs(expense.amount)}
            </span>
            <button className="delet-btn" onClick={() => deleteExpense(expense.id)}>
                X
            </button>
            <button className="edit" onClick={() => editExpense(expense.id)}>
               Edit
            </button>
        </li>
    );
}

export default Expenses;