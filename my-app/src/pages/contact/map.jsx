import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import img1 from "../../images/map.png";

const Mapp = () => {
  return (
    <Container className="mb-5">
      <Row className="g-0">
        {/* MAP SECTION */}
        <Col xs={12} md={8}>
          <div style={{ width: "100%", height: "400px" }}>
            <iframe className="mss"
              title="map"
              src="https://www.google.com/maps?q=Abule%20Egba%20Lagos&output=embed"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                display: "block",
                
              }}
              loading="lazy"
              allowFullScreen
            />
          </div>
        </Col>

        {/* IMAGE SECTION */}
        <Col xs={12} md={4}>
          <div  style={{ width: "100%", height: "400px" }}>
            <img
              className="mms"
              src={img1}
              alt="Location preview"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                
              }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Mapp;
