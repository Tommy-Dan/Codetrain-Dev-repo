import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { AddNewExpense } from "../actions/Action";




function AddExpense() {
  const dispatch = useDispatch();
  const [item, setItem] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddNewExpense({ id: uuidv4(), item, category, amount, date }));
    setItem("");
    setCategory("");
    setAmount("");
    setDate("");
  };

  return (
    <>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicTitle">
        <Form.Label>Product/Item </Form.Label>
        <Form.Control type="text"
          name="item"
          id="item"
          value={item}
          onChange={(e) => setItem(e.target.value)} required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicTitle">
         <Form.Select 
          name="category"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          aria-label="Select product category" className="select">
            <option className="txt-f">Select product category</option>
            <option value="fooddrink">Food and Drink</option>
            <option value="accommodation">Accommodation</option>
            <option value="transportation">Transportation</option>
            <option value="housingrent">Housing and Rent</option>
            <option value="miscellaneous">Miscellaneous</option>
         </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicTitle">
        <Form.Label>Amount </Form.Label>
        <Form.Control type="text" placeholder="Enter Amount in GH₵"
          name="amount"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)} required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDate">
        <Form.Label>Date</Form.Label>
        <Form.Control type="date"
          name="date"
          id="date"
          value={date}
          required
          onChange={(e) => setDate(e.target.value)}/>
      </Form.Group>
      
      <Button id="btn-save" variant="success" type="submit"  
              onClick={handleSubmit}> Add Item 
      </Button>
    </Form>
    </>
  );
}

export default AddExpense;
