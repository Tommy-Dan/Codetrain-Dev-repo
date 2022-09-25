import React, { useState } from "react";
import { v4 as uuid } from "uuid";



function AddExpenses({id, addExpense}){
    const [item, setItem] = useState("");
    const [category, setCategory] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");

    const onSubmit = (e) => {
        e.preventDefault()

        const newExpense = {
            id: uuid(),
            item: item,
            category: category,
            amount: amount,
            date: date
        }
        addExpense(newExpense)
        setItem("")
        setCategory("")
        setAmount(0)
        setDate("")
    }

    return (
        <div>
            <h3>Add Expenses</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label>Item</label>
                    <input value={item} onChange={(e) => setItem(e.target.value)} 
                           placeholder="Enter Item..." type="text"
                    />
                </div>
                <div className="form-control">
                    <label>
                        Select from Category:
                        <select value={category} onChange={(e) => setCategory(e.target.value)}>
                            <option value="fooddrink">Food and Drink</option>
                            <option value="accommodation">Accommodation</option>
                            <option value="transportation">Transportation</option>
                            <option value="housingrent">Housing and Rent</option>
                            <option value="miscellaneous">Miscellaneous</option>
                        </select>
                    </label>
                </div>
                <div className="form-control">
                    <label>Amount</label>
                    <input value={amount} onChange={(e) => setAmount(e.target.value)}
                           placeholder="Enter Amount" type="number" 
                    />
                </div>
                <div className="form-control">
                    <label>Date</label>
                    <input value={date} onChange={(e) => setDate(e.target.value)}
                           placeholder="Select Date" type="date" 
                    />
                </div>
                <button className="btn">Add Item</button>
            </form>
        </div>
    )
}

export default AddExpenses;