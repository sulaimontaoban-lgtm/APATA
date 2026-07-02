import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Buutton from "../../components/buutton"

const Admin = () => {
  const inputStyle = {
    backgroundColor: "#EAF6FF",
    border: "none",
    height: "45px",
    fontSize: "14px",
    marginBottom: "15px",
  };
  const buttonStyle = {
    backgroundColor: 'red',
    color: 'white',
    width: 150,
    height: 39,
    angle: '0 deg',
    opacity: 1,
    gap: '10px',
    borderTopRightRadius: '30px',
    borderBottomLeftRadius: '30px',
    paddingTop: '10px',
    paddingRight: '30px',
    paddingBottom: '10px',
    paddingLeft: '30px',
    cursor: 'pointer',
    border: 'none',
    marginTop: "50px",
    fontFamily: "Fredoka",
    fontWeight: "400",
    fontStyle: "SemiBold",
    fontSize: "16px",
    lineHeight: "100%",
    letterHpacing: "0%",    
  };
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
    const loo = {
        fontFamily: 'Fredoka',
        fontWeight: 400,
        fontStyle: 'Regular',
        fontSize: '15px',
        leadingTrim: 'NONE',
        lineHeight: '22px',
        letterSpacing: '0%',

    }

  return (
    <Container >
      <Row>
        {/* LEFT SIDE */}
        <Col md={6} xs={12}>
          <p style={wel}>
            Welcome to our Admission process
          </p>

          <h2 style={{ color: "#0B1C6D", fontWeight: "700" }}>
            Thank you for your interest <br /> in our school
          </h2>

          <p style={loo}>
            Lorem ipsum dolor sit amet consectetur. Pellentesque ultrices malesuada sit eget amet egestas. Convallis vel maecenas lobortis nisi pharetra sed sit commodo elit. Congue enim faucibus nisl eg us tellus eget hac. Arcu pretium sit lacus cursus dictumst elit eu rhoncus tellus. Pellentesque ultrices malesuada sit eget amet egestas Lorem ipsum dolor sit amet consectetur. Pellentesque ultrices malesuada sit eget amet egestas. Convallis vel maecenas lobortis nisi pharetra sed sit commodo elit. Congue enim faucibus nisl eg us tellus eget hac. Arcu pretium sit lacus cursus dictumst elit eu rhoncus tellus. Pellentesque ultrices malesuada sit eget amet egestas. <br /><br />Lorem ipsum dolor sit amet consectetur. Pellentesque ultrices malesuada sit eget amet egestas. Convallis vel maecenas lobortis nisi pharetra sed sit commodo elit. Congue enim faucibus nisl eg us tellus eget hac. Arcu pretium sit lacus cursus dictumst elit eu rhoncus tellus. Pellentesque ultrices malesuada sit eget amet egestas Lorem ipsum dolor sit amet consectetur. Pellentesque ultrices malesuada sit eget amet egestas. Convallis vel maecenas lobortis nisi pharetra sed sit commodo elit. Congue enim faucibus nisl eg us tellus eget hac. Arcu pretium sit lacus cursus dictumst elit eu rhoncus tellus. Pellentesque ultrices malesuada sit eget amet egestas
          </p>

          
        </Col>
        <Col md={6} xs={12} style={{ marginTop: "30px" }}>
          <h4 style={{ color: "#0B1C6D", fontWeight: "700" }}>
            Start Admission Process
          </h4>

          <p style={{ fontSize: "13px", color: "#777" }}>
            Enter your details below to start your child’s enrolment process
          </p>

          <Form>
            <Form.Control
              type="text"
              placeholder="Enter Child’s Name"
              style={inputStyle}
            />

            <Form.Control
              type="date"
              placeholder="Child’s Date of Birth"
              style={inputStyle}
            />

            <Form.Select defaultValue="Program" style={inputStyle}>
              <option value="Program">Program</option>
              <option value="toddler">Toddler</option>
              <option value="primary">Primary</option> {/* Matches defaultValue */}
              <option value="elementary">Elementary</option>
            </Form.Select>


            <Form.Control
              type="text"
              placeholder="Parent/Guardian’s Full Name"
              style={inputStyle}
            />

            <Form.Control
              type="tel"
              placeholder="Phone Number"
              style={inputStyle}
            />

            <Form.Control
              type="email"
              placeholder="Email Address"
              style={inputStyle}
            />

           <Buutton bot="SEND" buttonStyle={buttonStyle}/>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Admin;
