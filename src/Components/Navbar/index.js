import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
// import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';


function MyNavbar() {
  
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Please select what we would like to know</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" href="#home"><Button variant="success">Home</Button>{' '}</NavLink>
            <NavLink to="/about" href="#about me"><Button variant= "success">About me</Button>{' '}</NavLink>
            <NavLink to="/contact"href="#contact"><Button variant ="success">Contact</Button>{' '}</NavLink>
            <NavLink to="/portfolio"href="#portfolio" ><Button variant ="success">Portfolio</Button></NavLink>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.0">Resume</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Project 1: Movie Search Engine</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Project 2: Online Farmers Market, Veggiebook
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Note-Taker</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;

// import React from 'react';

// function Navigation({ activeSection, setActiveSection }) {
//   return (
//     <nav>
//       <ul>
//         <li className={activeSection === 'About Me' ? 'active' : ''} onClick={() => setActiveSection('About Me')}>About Me</li>
//         <li className={activeSection === 'Portfolio' ? 'active' : ''} onClick={() => setActiveSection('Portfolio')}>Portfolio</li>
//         <li className={activeSection === 'Contact' ? 'active' : ''} onClick={() => setActiveSection('Contact')}>Contact</li>
//         <li className={activeSection === 'Resume' ? 'active' : ''} onClick={() => setActiveSection('Resume')}>Resume</li>
//       </ul>
//     </nav>
//   );
// }

// export default Navigation;
