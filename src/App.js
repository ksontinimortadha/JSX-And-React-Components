// src/App.js
import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import ImageComponent from './components/Image';
import Button from 'react-bootstrap/Button';
import productData from './product';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const firstName = 'Ksontini Mortadha'; // Replace with your first name

function App() {
  return (
    <Container className="mt-1">
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#Store">My Store</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#products">Products</Nav.Link>
            <Nav.Link href="#shopping">Shopping list</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search products..."
              className="me-2"
              aria-label="Search" data-bs-theme="light"
            />
            <Button variant="outline-light" >Search</Button>
          </Form>
        </Container>
      </Navbar>
      <br></br>
      <Card style={{ width: '18rem' }}>
        <ImageComponent />
        <Card.Body>
          <Name />
          <Price />
          <Description />
        <Button variant="primary">Buy Now</Button>
        </Card.Body>
      </Card>
      <br></br>
      <>
      {[
        'primary'
      ].map((variant) => (
        <Alert key={firstName} firstName={firstName}>
          Hello, {firstName ? firstName : 'there'} !
        </Alert>
      ))}
    </>    
    </Container>
  );
}

export default App;
