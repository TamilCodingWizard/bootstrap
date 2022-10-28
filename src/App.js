import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'

function App() {
  return (
    <Container>

      {/* Headings */}
        <h1>Hello world</h1>
        <h3>Hello world</h3>
        <p>Hello world</p>
        <p className="h1 text-muted">Hello world</p>
      {/* Display Headings */}
       {/* 1...5 */}
        <h1 className="display-1">Hello world</h1>
        <h1 className="display-3">Hello world</h1>
        <h1 className="display-5">Hello world</h1>

      {/* Lead and muted-text */}
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus assumenda, est nemo sed voluptatem dolorem voluptates rerum quis necessitatibus amet repudiandae a odio hic provident quaerat? Maiores asperiores neque commodi.</p>
        <p className="lead text-muted">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, maxime! Quis, quibusdam. Iusto itaque eveniet quos error voluptatibus excepturi inventore sapiente culpa deserunt mollitia. Eaque veritatis laboriosam quod in fugiat!</p>
      {/* Text Alignment */}

        <h3 className="display-5 text-center">Hello world</h3>
        <h3 className="display-5 text-end">Hello world</h3>

      {/* Text Transform */}
        <p className="text-capitalize">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus rerum alias ipsam nesciunt cum iure error assumenda. Maxime amet, omnis nulla corrupti inventore pariatur ad dicta totam velit possimus id.</p>
        <p className="text-uppercase">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus rerum alias ipsam nesciunt cum iure error assumenda. Maxime amet, omnis nulla corrupti inventore pariatur ad dicta totam velit possimus id.</p>

      {/* Font Size */}
          <h6 className="fs-6">Hello world</h6>

      {/* Font Weight and styles */}
          <p className="fw-bold">Hello world</p>
          <p className="fst-italic">Hello world</p>

      {/* Text Decoration */}
           <p className="text-decoration-underline">Hello world</p>
           <a href="#" className="text-decoration-none"> Hello</a>
      <Image src={require('./assets/one.jpg')} fluid thumbnail></Image>
    </Container>
  );
}

export default App;
