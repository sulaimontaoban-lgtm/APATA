import React from "react";
import {Col, Container, Row} from 'react-bootstrap';
import line from "../../images/line2.png"
import Read from "../../images/read.png"

const Grown = () => {
   const genn ={ 
        fontFamily: "Fredoka",
        fontWeight: "600",
        fontStyle: "SemiBold",
        fontSize: "40px",
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
        color: 'white'
    }
    
    return(
       <>
        <div style={{ backgroundColor: "#039932", marginTop: "100px"}}>
          <Container>
            <Row className="d-flex justify-content-between py-5" style={{marginTop: "100px"}}>
              <Col md={6} xs={12} lg={6}>
              <p style={genn}>We started with 10 children and now has grown to over 2,000+ children.</p>
              <img src={line} className="mt-5 mb-5" alt="" />
              <p style={ipsum}>Lorem ipsum dolor sit amet consectetur. Pellentesque ultrices malesuada sit eget amet egestas. Convallis vel maecenas lobortis nisi pharetra sed sit commodo elit. Congue enim faucibus nisl egestas penatibus tellus eget hac. Arcu pretium sit lacus cursus dictumst elit eu rhoncus tellus. Lorem ipsum dolor sit amet consectetur. Pellentesque ultrices malesuada sit eget amet egestas. Convallis vel maecenas lobortis nisi pharetra sed sit commodo elit. Congue enim faucibus nisl egestas penatibus tellus eget hac. Arcu pretium sit lacus cursus dictumst elit eu rhoncus tellus. <br /><br /> Lorem ipsum dolor sit amet consectetur. Pellentesque ultrices malesuada sit eget amet egestas. Convallis vel maecenas lobortis nisi pharetra sed sit commodo elit. Congue enim faucibus nisl egestas penatibus tellus eget hac. Arcu pretium sit lacus cursus dictumst elit eu rhoncus tellus.</p>
              </Col>
              <Col md={6} xs={12} lg={6} className="d-flex  flex-column">
              <img src={Read} alt="" />
              </Col>
            </Row>
           </Container>
         </div>
       </>
    );
}



export default Grown