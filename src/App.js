import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <Container>
      
      <Row md={5}>
        <Col className="text-bg-primary border">1 of 3</Col>
        <Col xs={6} className="text-bg-primary border">2 of 3</Col>
        <Col className="text-bg-primary border">3 of 3</Col>
      </Row>
     
     
    </Container>
  );
}

export default App;
