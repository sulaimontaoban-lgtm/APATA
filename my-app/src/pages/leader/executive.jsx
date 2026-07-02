import React from "react";
import {Col, Container, Row} from 'react-bootstrap';
import image1 from "../../images/Mask.png"
const Executive = () => {
   const see={
        width: '100%'
    }
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
        fontSize: "40px",
        lineHeight: "100%",
        letterHpacing: "0%",
        color: '#030065',
    }
    const lorem={
        fontFamily: "Fredoka",
        fontWeight: 400,
        fontStyle: "Regular",
        fontSize: "15px",
        leadingTrim: "NONE",
        lineHeight: "22px",
        letterSpacing: "0%",
    }
    
    return(
      
       <>
          <Container>
            <Row className="d-flex justify-content-between">
              <Col md={6} xs={12} lg={6}>
              <img style={see}  src={image1} alt="" />
              </Col>
              <Col md={6} xs={12} lg={6} className="d-flex  flex-column justify-content-center">
              <p style={gen}>Mrs Folajogun Apata</p>
              <p style={mon}>Executive Director, Apata Montessori School</p>
              <p style={lorem}>Lorem ipsum dolor sit amet consectetur. Pellentesque ultrices malesuada sit eget amet egestas. Convallis vel maecenas lobortis nisi pharetra sed sit commodo elit. Congue enim faucibus nisl egestas penatibus tellus eget hac. Arcu pretium sit lacus cursus dictumst elit eu rhoncus tellus. Lorem ipsum dolor sit amet consectetur. Pellentesque ultrices malesuada sit eget amet egestas. Convallis vel maecenas lobortis nisi pharetra sed sit commodo elit. Congue enim faucibus nisl egestas penatibus tellus eget hac. Arcu pretium sit lacus cursus dictumst elit eu rhoncus tellus.</p>
              </Col>
            </Row>
          </Container>

       </>
    );
}



export default Executive