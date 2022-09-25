import "./App.css";
import AddExpense from "./components/AddExpense";
import ExpensesContainer from "./components/ExpensesContainer";
import { Container, Col, Row } from "react-bootstrap";

function App() {
  return (
    <>
    <Container style={{ marginTop: "30px" }}>
      <Row>
        <Col md={12}>
          <h2 id="ed">Maggi's Expenses Tracker App</h2>
        </Col>
      </Row>
      <Row>
      <Col md={4}><AddExpense /></Col>
      <Col md={8}><ExpensesContainer /></Col>
      </Row>
    </Container>
      
      
    </>
  );
}

export default App;
