import React, { Component } from "react";
import { connect } from "react-redux";
import IncomeBalance from "../components/IncomeBalance";
import AddExpenses from "../components/AddExpenses";
import ExpensesList from "../components/ExpensesList";
import IncomeExpense from "../components/IncomeExpense";
import { addExpense, editExpense, deleteExpense } from "../actions/Actions";



export class Main extends Component {
   render() {
    const {expenses, addExpense, editExpense, deleteExpense } = this.props;
    return (
        <div className="container">
            <IncomeBalance expenses={expenses} />
            <IncomeExpense expenses={expenses} />
            <ExpensesList expenses={expenses} editExpense={(id) => editExpense(id)}
                          deleteExpense={(id) => deleteExpense(id)} 
            />
            <AddExpenses 
              addExpense={(expense) => addExpense(expense)}
              id={expenses[0] ? expenses[0].id + 1 : 1}
            />
        </div>
    );
   }
}

const mapStateToProps = (state) => ({
    expenses: state.expense,
});

const mapDispatchToProps = (dispatch) => ({
    addExpense: (expense) => dispatch(addExpense(expense)),
    editExpense: (id) => dispatch(editExpense(id)),
    deleteExpense: (id) => dispatch(deleteExpense(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);