import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Napoleon Vuong",
      headerLinks: [
        { title: "Home", path: '/' },
        { title: "About", path: '/about' },
        { title: "Contact", path: '/contact' }
      ],
      home: {
        title: "Be Relentless",
        subTitle: "Projects that make a difference",
        text: 'Checkout my projects below'
      },
      about: {
        title: "About Me",
      },
      contact: {
        title: "Contact Information"
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg='transparent' expand='lg'>
            <Navbar.Brand>Napoleon Vuong</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"></Navbar.Toggle>
            <NavbarCollapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to='/'>Home</Link>
                <Link className="nav-link" to='/about'>About</Link>
                <Link className="nav-link" to='/contact'>Contact</Link>

              </Nav>
            </NavbarCollapse>

          </Navbar>
        </Container>
      </Router>
    );
  }
}

export default App;
