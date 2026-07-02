import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import img1 from "../../images/group.png"
import Buutton from "../../components/buutton"



const About = () => {
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
    const lore = {
        fontFamily: 'Fredoka',
        fontWeight: 400,
        fontStyle: 'Regular',
        fontSize: '15px',
        leadingTrim: 'NONE',
        lineHeight: '22px',
        letterSpacing: '0%',

    }
    const buttonStyle = {
    backgroundColor: 'red',
    color: 'white',
    width: 161,
    height: 39,
    angle: '0 deg',
    opacity: 1,
    gap: '10px',
    borderTopRightRadius: '20px',
    borderBottomLeftRadius: '20px',
    paddingTop: '10px',
    paddingRight: '30px',
    paddingBottom: '10px',
    paddingLeft: '30px',
    cursor: 'pointer',
    border: 'none',
  };


    return(
        <Container style={{marginTop: "100px"}}>
        <Row className="align-items-center">
            <Col md={6} xs={12}>
                <img src={img1} className="p-0" alt="" width="100%"/>
            </Col>
            <Col md={6} xs={12} className="ps-md-5 ps-sm-0">
                <p style={wel} className="mt-5 mt-md-0">About Apata Montessori School</p>
                <p style={part} >We have been part of the community for over 30 years</p>
                <p style={lore} >Lorem ipsum dolor sit amet consectetur. Pellentesque ultrices malesuada sit eget amet egestas. Convallis vel maecenas lobortis nisi pharetra sed sit commodo elit. Congue enim faucibus nisl egestas penatibus tellus eget hac. Arcu pretium sit lacus cursus dictumst elit eu rhoncus tellus.</p>
                <Buutton bot="Learn More" buttonStyle={buttonStyle}/>
            </Col>
        </Row>
        </Container>
    )
    }


    export default About;