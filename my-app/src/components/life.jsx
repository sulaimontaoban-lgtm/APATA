import React from "react";
import {Col, Container, Row} from 'react-bootstrap';
import img1 from "../images/line2b.png"
import img2 from "../images/line3.png"
import img3 from "../images/line4.png"


const Life = (props) => {
   
   const beu ={ 
        fontFamily: "Fredoka",
        fontWeight: "600",
        fontStyle: "SemiBold",
        fontSize: "35px",
        lineHeight: "100%",
        letterHpacing: "0%",
        color: '#030065',
        
    }
    const ipsum ={
        fontFamily: "Fredoka",
        fontWeight: 400,
        fontStyle: "Regular",
        fontSize: "15px",
        leadingTrim: "NONE",
        lineHeight: "22px",
        letterSpacing: "0%",
        display: "flex",
        justifyContent: "center",
        marginTop: '50px'
    }
    
    
    return(
       <>
          <Container>
            <Row className="d-flex justify-content-between py-5">
              <Col md={6} xs={12} lg={6}>
              <div className="px-4 py-4 mt-3"  style={{backgroundColor: "#039932", borderRadius: "20px"}}>
              <p style={beu}>A Beautiful Environment</p>
              <img src={img1} alt="" className="mt-4" />
              <p style={ipsum} className="text-light">Lorem ipsum dolor sit amet consectetur. Pellentesque ultrices malesuada sit eget amet egestas. Convallis vel maecenas lobortis nisi pharetra sed sit commodo elit. Congue enim faucibus nisl egestas penatibus tellus eget hac. Arcu pretium sit lacus cursus dictumst elit eu rhoncus tellus.</p>
              </div>
              </Col>
              <Col md={6} xs={12} lg={6}>
              <div className="px-4 py-4 mt-3" style={{backgroundColor: "#030065", borderRadius: "20px"}}>
              <p style={beu} className="text-light">Pratical Life Exercise</p>
              <img src={img2} alt="" className="mt-4"/>
              <p style={ipsum} className="text-light">Lorem ipsum dolor sit amet consectetur. Pellentesque ultrices malesuada sit eget amet egestas. Convallis vel maecenas lobortis nisi pharetra sed sit commodo elit. Congue enim faucibus nisl egestas penatibus tellus eget hac. Arcu pretium sit lacus cursus dictumst elit eu rhoncus tellus.</p>
              </div>
              </Col>
            </Row>
            <Row className="d-flex justify-content-between">
              <Col md={6} xs={12} lg={6}>
              <div className="px-4 py-4 mt-3"  style={{backgroundColor: "#d12511", borderRadius: "20px"}}>
              <p style={beu}  className="text-light">Sensorila Education</p>
              <img src={img2} alt="" className="mt-4" />
              <p style={ipsum} className="text-light">Lorem ipsum dolor sit amet consectetur. Pellentesque ultrices malesuada sit eget amet egestas. Convallis vel maecenas lobortis nisi pharetra sed sit commodo elit. Congue enim faucibus nisl egestas penatibus tellus eget hac. Arcu pretium sit lacus cursus dictumst elit eu rhoncus tellus.</p>
              </div>
              </Col>
              <Col md={6} xs={12} lg={6}>
              <div className="px-4 py-4 mt-3" style={{backgroundColor: "#2bc9fb", borderRadius: "20px"}}>
              <p style={beu}>Language</p>
              <img src={img3} alt="" className="mt-4"/>
              <p style={ipsum}>Lorem ipsum dolor sit amet consectetur. Pellentesque ultrices malesuada sit eget amet egestas. Convallis vel maecenas lobortis nisi pharetra sed sit commodo elit. Congue enim faucibus nisl egestas penatibus tellus eget hac. Arcu pretium sit lacus cursus dictumst elit eu rhoncus tellus.</p>
              </div>
              </Col>
            </Row>
           </Container>
       </>
    );
}



export default Life