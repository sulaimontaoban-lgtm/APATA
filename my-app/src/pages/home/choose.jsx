import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import img1 from "../../images/image 11.png"
import img2 from "../../images/image 3.png"
import img3 from "../../images/image 2.png"
import img4 from "../../images/image 1.png"
import { IoIosArrowBack } from "react-icons/io";


const Choose = () => {
  const box = {
    backgroundColor: "#fff",
    width: "274px",
    height: "390px",
    padding: "20px 0px",

  };

  const title = {
    fontSize: "20px",
    fontWeight: "700",
    marginTop: "15px",
  };

  const text = {
    fontFamily: "Fredoka",
    fontWeight: 400,
    fontStyle: "Regular",
    fontSize: "15px",
    leadingTrim: "NONE",
    lineHeight: "22px",
    letterSpacing: "0%",

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
        textAlign: "center",
    }
    const part = {
        fontFamily: "Fredoka",
        fontWeight: "600",
        fontStyle: "SemiBold",
        fontSize: "40px",
        lineHeight: "100%",
        letterHpacing: "0%",
        textAlign: "center",
        color: 'white',

    }

  return (
    <>
      
      <div style={{ padding: "0px"}}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#030065" fill-opacity="1" d="M0,160L60,144C120,128,240,96,360,106.7C480,117,600,171,720,181.3C840,192,960,160,1080,149.3C1200,139,1320,149,1380,154.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
        <div style={{backgroundColor: "#030065", marginTop: "-20px",}}>
          <Container>
            <p style={wel} className="pt-5">Why Choose Us</p>
            <p style={part}>Discover Now Why People Come To <br />Apata Montessori School</p>
          <Row className="justify-content-between d-flex can pt-5" style={{marginTop: "-1px"}}>
            
            <Col xs={12} md={3} lg={2} style={box} className="box">
            <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" style={{marginTop: "-120px"}}>
            <path  className="wave-path" d="M0 240
              C 200 300, 400 180, 600 240
              C 800 300, 1000 200, 1200 260
              C 1300 290, 1400 270, 1440 260
              L1440 320
              L0 320
              Z" />
            </svg>

              <div className="px-3 mt-5">
                <img src={img1} width={50} alt="" />
              <h5 style={title} className="pro">Study & Game</h5>
              <p style={text} className="pro">Lorem ipsum dolor sit amet consectetur. Mauris urna sapien semper nibh. Habitant interdum quisque pellentesque nulla elementum in pretium nisl..</p>
              </div>
              <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" style={{marginBottom: "-220px"}} className="position-relative">
                <g transform="scale(1,-1) translate(0,-320)">
                  <path className="wave-path" d="
                    M0 240
                    C 200 300, 400 180, 600 240
                    C 800 300, 1000 200, 1200 260
                    C 1300 290, 1400 270, 1440 260
                    L1440 320
                    L0 320
                    Z" />
                </g>
              </svg>

            </Col>
           
            <Col xs={12} md={3} lg={2} style={box} className="box">
            <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" style={{marginTop: "-120px"}}>
            <path  className="wave-path" d="M0 240
              C 200 300, 400 180, 600 240
              C 800 300, 1000 200, 1200 260
              C 1300 290, 1400 270, 1440 260
              L1440 320
              L0 320
              Z" />
            </svg>

              <div className="px-3 mt-5">
                <img src={img2} width={50} alt="" />
              <h5 style={title} className="pro">A to Z Programs</h5>
              <p style={text} className="pro">Lorem ipsum dolor sit amet consectetur. Mauris urna sapien semper nibh. Habitant interdum quisque pellentesque nulla elementum in pretium nisl..</p>
              </div>
              <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" style={{marginBottom: "-220px"}} className="position-relative">
                <g transform="scale(1,-1) translate(0,-320)">
                  <path className="wave-path" d="
                    M0 240
                    C 200 300, 400 180, 600 240
                    C 800 300, 1000 200, 1200 260
                    C 1300 290, 1400 270, 1440 260
                    L1440 320
                    L0 320
                    Z" />
                </g>
              </svg>

            </Col>

            <Col xs={12} md={3} lg={2} style={box} className="box">
            <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" style={{marginTop: "-120px"}}>
            <path  className="wave-path" d="M0 240
              C 200 300, 400 180, 600 240
              C 800 300, 1000 200, 1200 260
              C 1300 290, 1400 270, 1440 260
              L1440 320
              L0 320
              Z" />
            </svg>

              <div className="px-3 mt-5">
                <img src={img3} width={50} alt="" />
              <h5 style={title} className="pro">Expert Teachers</h5>
              <p style={text} className="pro">Lorem ipsum dolor sit amet consectetur. Mauris urna sapien semper nibh. Habitant interdum quisque pellentesque nulla elementum in pretium nisl..</p>
              </div>
              <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" style={{marginBottom: "-220px"}} className="position-relative">
                <g transform="scale(1,-1) translate(0,-320)">
                  <path className="wave-path" d="
                    M0 240
                    C 200 300, 400 180, 600 240
                    C 800 300, 1000 200, 1200 260
                    C 1300 290, 1400 270, 1440 260
                    L1440 320
                    L0 320
                    Z" />
                </g>
              </svg>

            </Col>

            <Col xs={12} md={3} lg={2} style={box} className="box">
            <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" style={{marginTop: "-120px"}}>
            <path  className="wave-path" d="M0 240
              C 200 300, 400 180, 600 240
              C 800 300, 1000 200, 1200 260
              C 1300 290, 1400 270, 1440 260
              L1440 320
              L0 320
              Z" />
            </svg>

              <div className="px-3 mt-5">
                <img src={img4} width={50} alt="" />
              <h5 style={title} className="pro">Mental Health</h5>
              <p style={text}  className="pro">Lorem ipsum dolor sit amet consectetur. Mauris urna sapien semper nibh. Habitant interdum quisque pellentesque nulla elementum in pretium nisl..</p>
              </div>
              <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" style={{marginBottom: "-220px"}} className="position-relative">
                <g transform="scale(1,-1) translate(0,-320)">
                  <path className="wave-path" d="
                    M0 240
                    C 200 300, 400 180, 600 240
                    C 800 300, 1000 200, 1200 260
                    C 1300 290, 1400 270, 1440 260
                    L1440 320
                    L0 320
                    Z" />
                </g>
              </svg>

            </Col>
          </Row>
        </Container>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#030065" fill-opacity="1" d="M0,256L60,261.3C120,267,240,277,360,282.7C480,288,600,288,720,272C840,256,960,224,1080,224C1200,224,1320,256,1380,272L1440,288L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>

    </>
  );
};

export default Choose;
