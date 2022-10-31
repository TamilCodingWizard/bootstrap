import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container>
       {/* display */}
       {/* hide and show */}
       <p className="m-3 p-3 text-bg-primary d-block">Display</p>
       {/* flex */}
       <div className="d-flex flex-column align-items-end">
          <p className="m-2 p-2 text-bg-primary w-50 align-self-start">Flex</p>
          <p className="m-2 p-2 text-bg-primary w-50">Flex</p>
          <p className="m-2 p-2 text-bg-primary w-50">Flex</p>
       </div>

       <div className="d-flex justify-content-center">
          <p className="m-2 p-2 text-bg-primary w-25 ">Flex</p>
          <p className="m-2 p-2 text-bg-primary w-25">Flex</p>
          <p className="m-2 p-2 text-bg-primary w-25">Flex</p>
       </div>
      
      {/* Stack */}
      <div className="vstack gap-1 align-items-center">
        <p className="m-3 p-3 text-bg-secondary w-50">Vstack</p>
        <p className="m-3 p-3 text-bg-secondary w-50">Vstack</p>
        <p className="m-3 p-3 text-bg-secondary w-50">Vstack</p>
      </div>

      <div className="hstack justify-content-center gap-1">
          <p className="m-2 p-2 text-bg-secondary w-25 ">Hstack</p>
          <p className="m-2 p-2 text-bg-secondary w-25">Hstack</p>
          <p className="m-2 p-2 text-bg-secondary w-25">Hstack</p>
       </div>
     
      {/* shadow */}
      <div className="shadow-none bg-light m-3 p-3">Shadow</div>
      
    </Container>
  );
}

export default App;
