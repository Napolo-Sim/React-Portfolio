import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

import Footer from './components/Footer/Footer'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

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
        title: "Web Dev Projects!",
        subTitle: "Feel free to take a look around.",
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
          <Navbar sticky="top" className="border-bottom" bg='white' expand='lg'>
            <Navbar.Brand>Napoleon Vuong's React Portfolio</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"></Navbar.Toggle>
            <NavbarCollapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to='/'>Home</Link>
                <Link className="nav-link" to='/about'>About</Link>
                <Link className="nav-link" to='/contact'>Contact</Link>
              </Nav>

            </NavbarCollapse>
          </Navbar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/about" exact render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/contact" exact render={() => <ContactPage title={this.state.contact.title} />} />

          <Footer>

          </Footer>

        </Container>
      </Router>
    );
  }
}

export default App;
