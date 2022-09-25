import React from "react";


function IncomeExpense({ transactions }) {
    const amount = transactions.map((expense) => Number(expense.amount));
    const earn = amount
    .filter((item) => item > 0)
    .reduce((acc, item) => acc + item, 0);

    const expenses = amount
    .filter((item) => item < 0)
    .reduce((acc, item) => acc + item, 0);

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Earning</h4>
                <p className="money plus">+GH₵{earn}</p>
            </div>
            <div>
                <h4>Expenses</h4>
                <p className="money minus">GH₵{expenses}</p>
            </div>
        </div>
    );
}

export default IncomeExpense