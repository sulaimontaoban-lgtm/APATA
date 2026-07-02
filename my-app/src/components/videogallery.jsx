import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import img from "../images/picture.png";

const ImageGallery = () => {
  return (
    <Container className="py-4">
      <Row className="g-4">

        <Col xs={12} md={6}>
          <div className="hover-zoomin">
            <img src={img} alt="img" />
          </div>
        </Col>

        <Col xs={12} md={6}>
          <div className="hover-zoomin">
            <img src={img} alt="img" />
          </div>
        </Col>

        <Col xs={12} md={6}>
          <div className="hover-zoomin">
            <img src={img} alt="img" />
          </div>
        </Col>

        <Col xs={12} md={6}>
          <div className="hover-zoomin">
            <img src={img} alt="img" />
          </div>
        </Col>

        <Col xs={12} md={6}>
          <div className="hover-zoomin">
            <img src={img} alt="img" />
          </div>
        </Col>

        <Col xs={12} md={6}>
          <div className="hover-zoomin">
            <img src={img} alt="img" />
          </div>
        </Col>

        <Col xs={12} md={6}>
          <div className="hover-zoomin">
            <img src={img} alt="img" />
          </div>
        </Col>

        <Col xs={12} md={6}>
          <div className="hover-zoomin">
            <img src={img} alt="img" />
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className="hover-zoomin">
            <img src={img} alt="img" />
          </div>
        </Col>

        <Col xs={12} md={6}>
          <div className="hover-zoomin">
            <img src={img} alt="img" />
          </div>
        </Col>

      </Row>
    </Container>
  );
};

export default ImageGallery;
