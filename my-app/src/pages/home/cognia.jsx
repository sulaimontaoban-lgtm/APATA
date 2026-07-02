import React from "react";
import img1 from "../../images/nigeria.png"
import img2 from "../../images/apen.png"
import img3 from "../../images/macte.png"
import img4 from "../../images/cognia.png"
import {Container,Row,Col} from 'react-bootstrap';



const Cognia = () => {
    return(
        <Container>
            <Row className="all" style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:'150px', marginBottom:'100px'}}>
                <Col md={3} className="text-center">
                    <img className="img-fluid" src={img1} alt="" />
                </Col>
                <Col md={3} className="text-center">
                    <img className="img-fluid" src={img2} alt="" />
                </Col>
                <Col md={3} className="text-center">
                    <img className="img-fluid" src={img3} alt="" />
                </Col>
                <Col md={3} className="text-center">
                    <img className="img-fluid" src={img4} alt="" />
                </Col>
            </Row>
        </Container>
    );
}

export default Cognia