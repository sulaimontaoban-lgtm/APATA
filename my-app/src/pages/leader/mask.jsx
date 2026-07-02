import React from "react";
import {Col, Container, Row} from 'react-bootstrap';
import image1 from "../../images/Maskb.png"
import image2 from "../../images/Mask2.png"
import image3 from "../../images/Mask3.png"
import image4 from "../../images/Mask4.png"
import image5 from "../../images/Mask5.png"
import image6 from "../../images/Mask6.png"
import image7 from "../../images/Mask7.png"
import image8 from "../../images/Mask8.png"
import image9 from "../../images/Mask9.png"
const Mask = () => {
   
     const mon ={
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
    const gen ={ 
        fontFamily: "Fredoka",
        fontWeight: "600",
        fontStyle: "SemiBold",
        fontSize: "30px",
        lineHeight: "100%",
        letterHpacing: "0%",
        color: '#030065',
    }
   
    
    return(
      
       <>
          <Container>
            <Row>
              <Col md={4} xs={12} lg={4}>
              <img src={image1} alt="" />
              <div className="d-flex flex-column justify-content-center align-items-center mt-3 mb-5">
                <p style={gen}>Mrs Modadelola Olumide</p>
                <p style={mon}>HOD</p>
              </div>
              </Col>
              <Col md={4} xs={12} lg={4}>
              <img src={image2} alt="" />
              <div className="d-flex flex-column justify-content-center align-items-center mt-3 mb-5">
                <p style={gen}>Mr Babatunde Olorunfemi</p>
                <p style={mon}>The School Supervisor 2</p>
              </div>
              </Col>
              <Col md={4} xs={12} lg={4}>
              <img src={image3} alt="" />
              <div className="d-flex flex-column justify-content-center align-items-center mt-3 mb-5">
                <p style={gen}>Mrs Oluwakemi Obute</p>
                <p style={mon}>The school Manager</p>
              </div>
              </Col>
            </Row>
            <Row className="mt-5">
              <Col md={4} xs={12} lg={4}>
              <img src={image4} alt="" />
              <div className="d-flex flex-column justify-content-center align-items-center mt-3 mb-5">
                <p style={gen}>Mrs Abimbola Onasanya</p>
                <p style={mon}>The School Supervisor 3</p>
              </div>
              </Col>
              <Col md={4} xs={12} lg={4}>
              <img src={image5} alt="" />
              <div className="d-flex flex-column justify-content-center align-items-center mt-3 mb-5">
                <p style={gen}>Mrs Naomi Odeyemi</p>
                <p style={mon}>The School Accountant</p>
              </div>
              </Col>
              <Col md={4} xs={12} lg={4}>
              <img src={image6} alt="" />
              <div className="d-flex flex-column justify-content-center align-items-center mt-3 mb-5">
                <p style={gen}>Mrs Ojuekaiye Toyin</p>
                <p style={mon}>The School Supervisor 1</p>
              </div>
              </Col>
            </Row>
            <Row className="mt-5">
              <Col md={4} xs={12} lg={4}>
              <img src={image7} alt="" />
              <div className="d-flex flex-column justify-content-center align-items-center mt-3 mb-5">
                <p style={gen}>Akorede Taiwo Adebowale</p>
                <p style={mon}>The School Supervisor 1</p>
              </div>
              </Col>
              <Col md={4} xs={12} lg={4}>
              <img src={image8} alt="" />
              <div className="d-flex flex-column justify-content-center align-items-center mt-3 mb-5">
                <p style={gen}>Mrs Jegede Ifeoluwa</p>
                <p style={mon}>HOU 1</p>
              </div>
              </Col>
              <Col md={4} xs={12} lg={4}>
              <img src={image9} alt="" />
              <div className="d-flex flex-column justify-content-center align-items-center mt-3 mb-5">
                <p style={gen}>Mrs Ejeh Chidinma</p>
                <p style={mon}>HOU 2</p>
              </div>
              </Col>
            </Row>
            
            
          </Container>

       </>
    );
}



export default Mask