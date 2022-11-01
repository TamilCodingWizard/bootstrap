import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from 'react-bootstrap';

function App() {
  return (
    <>
    <Container>
      <div className="text-bg-primary">Hello</div>
    </Container>

    <Container fluid ='lg'>
      <div className="text-bg-secondary mt-3">Fluid</div>
    </Container>
    </>
  );
}

export default App;
