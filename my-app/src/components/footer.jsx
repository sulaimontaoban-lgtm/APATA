import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SchoolLogo from '../images/logo2.png'; 
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'; 
import { FiYoutube } from "react-icons/fi";  
import imgg1 from '../images/FB.png';
import imgg2 from '../images/Whap.png';
import { MdDateRange } from "react-icons/md";

const Footer = () => {
    const img = {
        width: 141,
        height: 86,
        angle: '0 deg',
        opacity: 1,
        top: '-3px',
        left: '-32px',

    }
    const env = {
        fontFamily: 'Fredoka',
        fontWeight: 400,
        fontStyle: 'Regular',
        fontSize: '14px',
        lineHeight: '100%',
        letterSpacing: '0%',
        AlignItems: 'center',
        display: 'flex',
        justifyContent: 'center',

    }
    const quick = {
        fontFamily: 'Fredoka',
        fontWeight: 400,
        fontStyle: 'Regular',
        fontSize: '18px',
        leadingTrim: 'NONE',
        lineHeight: '100%',
        letterSpacing: '0%',
        color: '#D12511',

    }
    const foot = {
        fontFamily: 'Fredoka',
        fontWeight: 400,
        fontStyle: 'Regular',
        fontSize: '18px',
        leadingTrim: 'NONE',
        lineHeight: '22px',
        letterSpacing: '0%',

    }




  return (
    <footer className="apata-footer pt-5 pb-3 text-light" style={{backgroundColor: '#030065'}}>
      <Container>
        <Row>
          <Col md={4} className="mb-4 mb-md-0">
            <div className="footer-logo mb-3">
              <img src={SchoolLogo} alt="" className="img-fluid" style={{ maxWidth: '150px' }} />
            </div>
            <p style={foot} className='mt-4'>
             We raise children with balance self esteem who can stand anywhere in the world.
            </p>
            <div className='d-flex gap-4 mt-3'>
              <a href="#" aria-label="Instagram"style={{color: 'red',}}><FaInstagram /></a>
              <a href="#" aria-label="Facebook" style={{color: 'red'}}><FaFacebookF /></a>
              <a href="#" aria-label="Twitter"style={{color: 'red',}}><FiYoutube /></a>
            </div>
          </Col>
          <Col md={2} xs={6} className="mb-4 mb-md-0">
            <p style={quick}>QUICK LINKS</p>
            <div className="links d-flex flex-column flex-start gap-4 mt-4">
              <a href="/" className='links'>HOME</a>
              <a href="/About">ABOUT</a>
              <a href="/Blog">BLOG</a>
              <a href="/contact">CONTACT</a>
            </div>
          </Col>
          <Col md={2}  xs={6} className="mb-4 mb-md-0">
            <p style={quick}>PROGRAMS</p>
            <div className="links d-flex flex-column flex-start gap-4 mt-4">
              <a href="/Todler">TODDLER</a>
              <a href="/Primary">PRIMARY</a>
              <a href="/Elementary">ELEMENTARY</a>
            </div>
          </Col>
          <Col md={4}>
            <p style={quick}>RECENT BLOG POSTS</p>
            <div className="d-flex gap-4 mt-4">
              <img style={img} src={imgg1} alt="" />
              <div className='d-flex flex-column gap-0' style={env}>
                <p><MdDateRange className='text-danger mb-1'/> 24 September 2024</p>
               <p>Why every child need a Healthy Environment</p>
              </div>
            </div>
            <div className="d-flex gap-4 pt-4 mt-4 border-top border-danger">
              <img style={img} src={imgg2} alt="" />
              <div className='d-flex flex-column gap-0' style={env}>
                <p><MdDateRange className='text-danger mb-1'/> 24 September 2024</p>
               <p>Why every child need a Healthy Environment</p>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="mt-5 pt-3  copyright-row">
          <Col className="text-center">
            <p className="copyright-text">
              © 2024 Apata Montessori Schools. All rights reserved
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;