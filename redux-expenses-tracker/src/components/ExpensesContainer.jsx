import React from "react";
import { Row } from "react-bootstrap";
import ExpenseItem from "./ExpenseItem";




function ExpensesContainer() {
  return (
    
      <Row style={{ marginTop: "30px" }}>
      <ExpenseItem />
      </Row>
   
   
  );
}

export default ExpensesContainer;
