import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { EditExpense } from "../actions/Action";



function EditExpenseForm({ editExpense, hide }) {
  const dispatch = useDispatch();

  const [item, setItem] = useState(editExpense.item);
  const [category, setCategory] = useState(editExpense.category);
  const [amount, setAmount] = useState(editExpense.amount);
  const [date, setDate] = useState(editExpense.date);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(EditExpense({ id: editExpense.id, category, amount, date }));
    hide();
  };

  return (
    <>
      
      <Form>
				<Form.Group className="mb-3" controlId="formBasicProduct">
					<Form.Label>Product/Item </Form.Label>
					<Form.Control
						type="text"
            name="item"
            id="item"
            value={item}
            onChange={(e) => setItem(e.target.value)}/>
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

      <Form.Group className="mb-3" controlId="formBasicAmount">
        <Form.Label>Amount </Form.Label>
        <Form.Control type="text" placeholder="Enter Amount in GH₵"
          name="amount"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
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

				<Button id="btn-save" type="submit" onClick={handleSubmit}>Save</Button>
			</Form>
    </>
  );
}

export default EditExpenseForm;
