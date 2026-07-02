import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaClock, FaPhone, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Header = () => {

  return (
    <div style={{ backgroundColor: "#030065", padding: "8px 0", color: "#fff" }}>
      <Container>
        <Row className="text-md-start gap-0">
          <Col xs={7} md={3} className="mb-2 mb-md-0 d-flex">
            <FaClock className="me-0 mt-1 me-md-1 text-danger" />
            7:00am - 4:00pm Mon - Fri
          </Col>
          
          <Col xs={5} md={3} className="mb-2 mb-md-0 ">
            <FaPhone className="text-danger" style={{ marginRight: "8px" }} />
            0802 322 6976
          </Col>
          <Col xs={12} md={4} className="mb-2 mb-md-0">
            <FaMapMarkerAlt className="text-danger" style={{ marginRight: "8px" }} />
            22 Da Silva St. Ikeja, Lagos 101232, Lagos
          </Col>
          <Col  md={2} className="text-md-end d-none d-md-flex ">
            <a href="#" style={{ color: "#fff", margin: "0 5px" }}><FaFacebookF className="text-danger"/></a>
            <a href="#" style={{ color: "#fff", margin: "0 5px" }}><FaInstagram className="text-danger"/></a>
            <a href="#" style={{ color: "#fff", margin: "0 5px" }}><FaYoutube className="text-danger"/></a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Header;