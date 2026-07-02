import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import img1 from "../../images/Wha1.png"
import img2 from "../../images/Wha2.png"
import img3 from "../../images/Wha3.png"
import img4 from "../../images/wha4.png"
import img5 from "../../images/Wha5.png"




const Gallery = () => {
    const wel = {
        fontFamily: 'Fredoka',
        fontWeight: 400,
        fontStyle: 'Regular',
        fontSize: '20px',
        leadingTrim: 'NONE',
        lineHeight: '100%',
        letterSpacing: '0%',
        textDecoration: 'underline',
        textDecorationStyle: 'solid',
        textDecorationOffset: '0%',
        textDecorationThickness: '0%',
        color: '#D12511',
    }
    const part = {
        fontFamily: 'Fredoka',
        fontWeight: 600,
        fontStyle: 'SemiBold',
        fontSize: '40px',
        lineHeight: ' 100%',
        letterSpacing: '0%',
        color: '#030065',

    }

    return(
        <div style={{marginTop: "100px"}}>
            <div className="align-items-center d-flex flex-column">
            <p style={wel}>Our gallery</p>
            <p style={part}>Explore our gallery</p>
            </div>
        <Row className="mb-3 cap mt-5">
           <Col md={4} xs={12} sm={6} className="align-items-end d-flex">
               <img width={"100%"} c src={img1} alt=""/>
           </Col>
           <Col md={3} xs={12} sm={6} className="d-flex flex-column gap-3 align-items-end">
              <img width={"100%"}   src={img2} alt=""/>
              <img width={"100%"}  src={img3} alt=""/>
           </Col>
           <Col md={3} xs={12} sm={6} className="align-items-end d-flex">
                <img width={"100%"}  src={img4} alt=""/>
           </Col>
           <Col md={2} xs={12} sm={6} className="align-items-end d-flex">
                <img width={"100%"}  src={img5} alt=""/>
           </Col>
        </Row>
        </div>
    )
    }


    export default Gallery;