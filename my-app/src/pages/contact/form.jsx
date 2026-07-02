import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaInstagram, FaYoutube,  } from 'react-icons/fa';
import Buutton from "../../components/buutton"
import { AiFillFacebook } from "react-icons/ai";
import { FaSquareInstagram } from "react-icons/fa6";

const Contact = () => {
    const silva={
        fontFamily: 'Fredoka',
        fontWeight: '400',
        fontStyle: 'Regular',
        fontSize: '16px',
        lineHeight: '100%',
        letterSpacing: '0%',
        marginTop: '-10px',
        marginLeft: '22px',

    }
    const loc={
        fontFamily: 'Fredoka',
        fontWeight: 500,
        fontStyle: 'Medium',
        fontSize: '18px',
        lineHeight: '100%',
        letterSpacing: '0%',
        color: '#030065',
    }
    const mes={
        fontFamily: 'Fredoka',
        fontWeight: 600,
        fontStyle: 'SemiBold',
        fontSize: '30px',
        lineHeight: '100%',
        letterSpacing: '0%',
        color: "#030065",
    }
    const input={
        borderTopLeftRadius: "15px",
        borderBottomRightRadius: "15px",
    }
    const loo={
        fontFamily: 'Fredoka',
        fontHeight: 400,
        fontStyle: 'Regular',
        fontSize: '16px',
        lineHeight: '24px',
        letterSpacing: '0%',
        marginBottom: '50px'
    }
    const buttonStyle = {
    backgroundColor: 'red',
    color: 'white',
    width: '179px',
    height: 39,
    angle: '0 deg',
    opacity: 1,
    gap: '10px',
    borderTopRightRadius: '20px',
    borderBottomLeftRadius: '20px',
    padding: '10px 30px 10px 30px',
    cursor: 'pointer',
    border: 'none',
  };
    
       

  return (
    <div style={{ padding: '60px 0' }}>
      <Container>
        <Row className="gy-4">
          <Col xs={12} lg={8}>
            <h5 style={mes}>Send us Message</h5>
            <p style={loo}>
              Lorem ipsum dolor sit amet consectetur. Dictum morbi diam quisque mattis diam non faucibus consectetur. Libero diam nullam mattis adipiscing amet.
            </p>

            <Form>
              <Row className="mb-3">
                <Col xs={12} md={6}>
                  <Form.Control type="text" placeholder="Full Name *" className="mb-3 mb-md-0 py-3" style={input}/>
                </Col>
                <Col xs={12} md={6}>
                  <Form.Control type="email" placeholder="Email Address *"  className="mb-3 mb-md-0 py-3" style={input}/>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col xs={12} md={6}>
                  <Form.Control type="text" placeholder="Phone Number *" className="mb-3 mb-md-0 py-3" style={input}/>
                </Col>
                <Col xs={12} md={6}>
                <Form.Control type="text" placeholder="Subject"  className="mb-3 mb-md-0 py-3" style={input}/>
                </Col>
              </Row>

              <Form.Group className="mb-3 h-100">
                <Form.Control as="textarea" placeholder="Message" style={{ height: "160px", ...input }} />
              </Form.Group>
              <Buutton bot="SEND MESSAGE" buttonStyle={buttonStyle}/>
            </Form>
          </Col>

          <Col xs={12} lg={4}>
            <div style={{ background: '#f8f8f8', padding: '20px', borderRadius: '10px' }}>
              <p className='mt-4' style={loc}><FaMapMarkerAlt style={{ color: '#D32400' }} /> <strong>Location</strong></p>
              <p style={silva}>
                22 Da Silva St, Ifako-Ijaiye, Lagos 101232, Lagos
              </p>

              <p className='mt-4' style={loc}><FaPhoneAlt style={{ color: '#D32400' }} /> <strong>Call Us</strong></p>
              <p style={silva}>
                +234 802 322 8478<br />
                +234 802 322 8478
              </p>
            
              <p className='mt-4' style={loc}><FaEnvelope style={{ color: '#D32400' }} /> <strong>Email</strong></p>
              <p style={silva}>
                info@apatamontessorischool.com
              </p>

              <p className='mt-4' style={loc}><FaEnvelope style={{ color: '#D32400' }} /> <strong>Available</strong></p>
              <p style={silva}>
                7:00am – 4:00pm<br />
                <span style={{ color: 'red' }}>Mon – Fri</span>
              </p>
            
            </div>
            <div className="d-flex justify-content-start  mt-5">
                <div>
                  <p style={loc} className='text-center'><strong>Connect with us:</strong></p>
                </div>
                <div>
                <AiFillFacebook className='text-primary' style={{ marginRight: '10px', width: '28px', height: '28px' }}/>
                <svg  style={{ marginRight: '10px', width: '28px', height: '28px' }} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="igGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stop-color="#FEDA75"/>
                      <stop offset="25%" stop-color="#FA7E1E"/>
                      <stop offset="50%" stop-color="#D62976"/>
                      <stop offset="75%" stop-color="#962FBF"/>
                      <stop offset="100%" stop-color="#4F5BD5"/>
                    </linearGradient>
                  </defs> 
                  <rect x="2" y="2" width="44" height="44" rx="10" fill="url(#igGradient)" />
                  <rect x="13" y="13" width="22" height="22" rx="6" fill="none" stroke="white" stroke-width="3" />
                  <circle cx="24" cy="24" r="6" fill="none" stroke="white" stroke-width="3" />
                  <circle cx="31" cy="17" r="2" fill="white"/>
                </svg>
                <svg style={{ marginRight: '10px', width: '28px', height: '28px' }} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="8" width="44" height="32" rx="8" fill="#FF0000"/>
                  <polygon points="20,16 20,32 32,24" fill="white"/>
                </svg>

              </div>
            </div>
        </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
