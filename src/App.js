import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container>
      {/* Theme colors and colors usage */}
      <p className="text-bg-primary text-secondary">Hello world</p>
      {/* Light, Dark and muted*/}
      <p className=" text-bg-light">Hello world</p>
      {/* opacity */}
      {/* 25,50,75 and 100 */}
      <p className="text-black-50">Hello world</p>

      {/* ---------------------------------------------------------------------------- */}

      {/* Box Model classes */}

      {/* Padding */}
      {/* 0 - to remove  1...5  auto */}
      <p className="text-bg-warning p-5">Hello world</p>
      <p className="text-bg-warning p-3">Hello world</p>

      {/* t - top, b -bottom, s - start, e - end,x - Horizontal, y- Vertical auto */}
      <p className="text-bg-warning py-3 ">Hello world</p>

      {/* remove */}
      <p className="text-bg-warning p-3 pt-0">Hello world</p>

      {/* ---------------------------------------------------------------------------------- */}

      {/* Margin */}
      {/* 0 - to remove  1...5  auto */}
      <p className="text-bg-info p-3 m-5">Margin</p>
      {/* t - top, b -bottom, s - start, e - end, auto */}
      <p className="text-bg-info p-3 mt-5 mb-0">Margin</p>

      <p className="text-bg-danger m-auto" style={{width:200}}>Hello world</p>

      {/* remove */}

      {/* --------------------------------------------------------------------------------------- */}
      {/* Border */}
      {/* 0 - remove 1...5 - border */}
      <p className="text-bg-info p-3 mt-5 border">Border</p>

      {/* Border Width */}
      <p className="text-bg-info p-3 mt-5 border border-3 border-danger border-bottom-0 border-start-0">Border</p>


      {/* border color and remove*/}

      {/* rounded, pill and circle*/}
      <p className="text-bg-info p-3 mt-5 mb-0 border rounded-pill">Margin</p>

    </Container>
  );
}

export default App;
