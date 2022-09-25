import React from "react";


function IncomeBalance({ expenses }) {
    const amount = expenses.map((expense) => Number(expense.amount));
    const total = amount.reduce((acc, item) => acc + item, 0);

    return (
        <div>
            <h4>Balance</h4>
            <h1>GH₵{total}</h1>
        </div>
    )
}

export default IncomeBalance;