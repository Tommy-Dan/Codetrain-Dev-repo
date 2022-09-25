import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteIcon, editIcon } from "../icons";
import { Card, Col, Button, Modal } from "react-bootstrap";
import { DeleteExpense } from "../actions/Action";
import EditExpenseForm from "./EditExpenseForm";

function ExpenseItem() {
  const dispatch = useDispatch();
  const { expenses } = useSelector((store) => store);

  const [show, setShow] = useState(false);
  const [editExpense, setEditExpense] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = (data) => {
    setEditExpense(data);
    setShow(true);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Expenses </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditExpenseForm editExpense={editExpense} hide={handleClose} />
        </Modal.Body>
      </Modal>
      
      {expenses?.map((expense) => {
        const { id, item, category, amount, date } = expense;

        return (
          <div>
              <Col>
				        <Card>
				        	<Card.Body key={id}>
                    
				        		<Card.Title className="mgr-space">Product/Item:<span>{item}</span></Card.Title>
				        		<Card.Subtitle className="mgr-space">Category:<span>{category}</span></Card.Subtitle>
				        		<Card.Subtitle className="mgr-space">Amount:<span>GH¢ {amount}</span></Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted d-mgr">Date:
                       <span>{date}</span>  
				        		</Card.Subtitle>

				        		<Button size="sm" variant="success" className="edit-btn" 
                     onClick={() => handleShow(expense)}>{editIcon}</Button>
				        		<Button size="sm" variant="danger" style={{marginLeft: "25px"}}  className="delete-btn"
                     onClick={() => dispatch(DeleteExpense(id))}>{deleteIcon}</Button>
    
				        	</Card.Body>
				        </Card>
			        </Col>
          </div>
        );
      })}
    </>
  );
}

export default ExpenseItem;
