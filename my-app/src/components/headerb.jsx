import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from 'react-router-dom';
import Logo from "../images/logo.png";

function Headerb() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [expanded, setExpanded] = useState(false);

  const buttonStyle = {
    backgroundColor: "red",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderTopRightRadius: "30px",
    borderBottomLeftRadius: "30px",
    fontSize: "20px",
    fontFamily: "Open Sans",
    fontWeight: "600",
    cursor: "pointer",
    
  };

  const linkStyle = {
    fontFamily: "Fredoka",
    fontWeight: 400,
    fontSize: "16px",
    color: "#030065",
  };

  return (
    <Navbar expanded={expanded} collapseOnSelect expand="lg" style={{ backgroundColor: "#FFFFFF" }}>
      <Container>
        <Navbar.Brand as={Link} to="/"><img src={Logo} alt="My Image" /></Navbar.Brand>
        <Navbar.Toggle className="custom-toggler" aria-controls="responsive-navbar-nav" aria-expanded={expanded} onClick={() => setExpanded(!expanded)} style={{borderColor: expanded ? "transparent" : "green",}}>
            <span style={{   fontSize: 25,   color: expanded ? "black" : "green",   fontWeight: "bold", }}>
              {expanded ? "❌" : "☰"}
            </span>
          </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto" style={linkStyle}>
            <Nav.Link as={Link} to="/" className="fw-bold " style={{color: "#030065"}}>HOME</Nav.Link>

             <NavDropdown title="ABOUT" id="nav-dropdown-1" className={`fw-bold rotate-dropdown ${openDropdown === "about" ? "open" : ""}`} show={openDropdown === "about"} onToggle={(isOpen) => setOpenDropdown(isOpen ? "about" : null)}>
              <NavDropdown.Item as={Link} to="/About" className="fw-bold bg-transparent" style={{color: "#030065"}}>WHO WE ARE</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Leader" className="fw-bold bg-transparent" style={{color: "#030065"}}>LEADERSHIP</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="PROGRAMS" id="nav-dropdown-2" className={`fw-bold rotate-dropdown ${openDropdown === "programs" ? "open" : ""}`} show={openDropdown === "programs"} onToggle={(isOpen) => setOpenDropdown(isOpen ? "programs" : null)}>
              <NavDropdown.Item Item as={Link} to="/Todler" className="fw-bold bg-transparent" style={{color: "#030065"}}>TODDLER</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Primary" className="fw-bold bg-transparent" style={{color: "#030065"}}>PRIMARY</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Elementary" className="fw-bold bg-transparent" style={{color: "#030065"}}>ELEMENTRY</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/Admission" className="fw-bold"  style={{color: "#030065"}}>ADMISSION</Nav.Link>
            <NavDropdown title="GALLERY" id="nav-dropdown-3" className={`fw-bold rotate-dropdown ${openDropdown === "gallery" ? "open" : ""}`} show={openDropdown === "gallery"} onToggle={(isOpen) => setOpenDropdown(isOpen ? "gallery" : null)}>
              <NavDropdown.Item as={Link} to="/Picture" className="fw-bold bg-transparent" style={{color: "#030065"}}>PICTURE GALLERY</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Video"  className="fw-bold bg-transparent" style={{color: "#030065"}}>VIDEO GALLERY</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/Blog" className="fw-bold" style={{color: "#030065"}}>BLOG</Nav.Link>
            <Nav.Link as={Link} to="/Contact" className="fw-bold" style={{color: "#030065"}}>CONTACT</Nav.Link>
          </Nav>

          <Nav>
            <button className="buu" style={buttonStyle}>SCHOOL PORTAL</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Headerb;
