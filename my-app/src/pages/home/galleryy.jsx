import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import img1 from "../../images/Wha6.png"
import img2 from "../../images/Wha7.png"
import img3 from "../../images/Wha8.png"
import img4 from "../../images/Wha9.png"
import img5 from "../../images/Wha10.png"




const Galleryy = () => {

    return(
        <div>
        <Row className="mb-5 cap">
           <Col md={2} xs={12} sm={6}>
               <img width={"100%"}  src={img1} alt=""/>
           </Col>
           <Col md={3} xs={12} sm={6}>
              <img width={"100%"}   src={img2} alt=""/> 
           </Col>
           <Col md={3} xs={12} sm={6} className="d-flex flex-column gap-3">
                <img width={"100%"}   src={img3} alt=""/>
                <img width={"100%"} className="img-fluid" src={img4} alt=""/>
           </Col>
           <Col md={4} xs={12} sm={6}>
                <img width={"100%"}  src={img5} alt=""/>
           </Col>
        </Row>
        </div>
    )
    }


    export default Galleryy;