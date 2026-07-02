import React from "react";
import {Col, Container, Row} from 'react-bootstrap';
import img1 from "../images/line2b.png"
import img2 from "../images/line3.png"
import img3 from "../images/line4.png"


const Element = (props) => {
   const genn ={ 
        fontFamily: "Fredoka",
        fontWeight: "600",
        fontStyle: "SemiBold",
        fontSize: "39px",
        lineHeight: "100%",
        letterHpacing: "0%",
        color: '#030065',
        display: "flex",
        justifyContent: "center"
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
    
    return(
       <>
          <Container>
            <Row className="d-flex justify-content-between text-align-center py-5" style={{marginTop: "50px"}}>
              <Col md={6} xs={12} lg={6}>
              <p style={wel}>Welcome to our Todler Section</p>
              <p style={genn} className="mt-4">We understand that the foundation of a child's education is of utmost importance, hence our section provides the essential foundation  education to children in their early years</p>
              <p style={ipsum}>Lorem ipsum dolor sit amet consectetur. Pellentesque ultrices malesuada sit eget amet egestas. Convallis vel maecenas lobortis nisi pharetra sed sit commodo elit. Congue enim faucibus nisl egestas penatibus tellus eget hac. Arcu pretium sit lacus cursus dictumst elit eu rhoncus tellus. Lorem ipsum dolor sit amet consectetur. Pellentesque ultrices malesuada sit eget amet egestas. Convallis vel maecenas lobortis nisi pharetra sed sit commodo elit. Congue enim faucibus nisl egestas penatibus tellus eget hac. Arcu pretium sit lacus cursus dictumst elit eu rhoncus tellus vel maecenas lobortis nisi pharetra sed sit commodo elit. Congue enim faucibus nisl egestas penatibus tellus eget hac. Arcu</p>
              </Col>
              <Col md={6} xs={12} lg={6}>
              <img width={"100%"} src={props.can} alt="" />
              </Col>
            </Row>
           </Container>
       </>
    );
}



export default Element