
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img from "../../images/app.png"
import Buutton from "../../components/buutton"

const Blog = () => {
  const cardStyle = {
    display: "flex",
    border: "1px solid #ccc",
    borderRadius: "8px",
    overflow: "hidden",
    fontFamily: "sans-serif",
    backgroundColor: "transparent"
  };

  const dateStyle = {
    backgroundColor: "#030065",
    color: "#fff",
    writingMode: "vertical-rl",
    transform: "rotate(180deg)",
    padding: "20px",
    textAlign: "center",
    fontWeight: "bold",
  };

  const contentStyle = {
    padding: "24px",
    flex: 1,
  };

  const titleStyle = {
    color: "#030065",
    fontWeight: "700",
    fontSize: "18px",
    margin: "16px 0 8px",
  };

  const metaStyle = {
    display: "flex",
    gap: "16px",
    fontSize: "14px",
    color: "#333",
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
    const part = {
        fontFamily: "Fredoka",
        fontWeight: "600",
        fontStyle: "SemiBold",
        fontSize: "40px",
        lineHeight: "100%",
        letterHpacing: "0%",
        textAlign: "center",
        color: '#030065',

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
    marginTop: "50px",
    fontFamily: "Fredoka",
    fontWeight: "400",
    fontStyle: "SemiBold",
    fontSize: "16px",
    lineHeight: "100%",
    letterHpacing: "0%",    
  };

  return (
   
    <Container  style={{ marginTop: "150px" }}>
        <Row className=" mb-5">
            <Col>
                <div className="align-items-center d-flex flex-column">
                <p style={wel}>Blog</p>
                <p style={part}>Get Every Single Updates  <br className="d-none d-md-block" /> Latest News & Blog</p>
                </div>
                <div className="maq mt-5">
                  <div className="maqs">
                   <div className="d-flex flex-column sep">
                    <img className="sep" src={img} alt="" />
                    <div style={cardStyle} className="sepp">
                    <div style={dateStyle}>24 September 2024</div>
                    <div style={contentStyle}>
                      <div style={metaStyle}>
                        <span>👤 Maryanne</span>
                        <span>💬 04 Comments</span>
                      </div>
                      <h4 style={titleStyle}>Tips to understand your child better as a parent</h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur. Mauris urna sapien semper nibh.
                        Habitant interdum quisque pellentesque nulla elementum.
                      </p>
                    </div>
                </div>
                   </div>
                    <div className="d-flex flex-column sep">
                    <img src={img} alt=""/>
                    <div style={cardStyle} className="sepp">
                    <div style={dateStyle}>24 September 2024</div>
                    <div style={contentStyle}>
                      <div style={metaStyle}>
                        <span>👤 Maryanne</span>
                        <span>💬 04 Comments</span>
                      </div>
                      <h4 style={titleStyle}>Tips to understand your child better as a parent</h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur. Mauris urna sapien semper nibh.
                        Habitant interdum quisque pellentesque nulla elementum.
                      </p>
                    </div>
                </div>
                   </div>
                  <div className="d-flex flex-column sep">
                    <img src={img} alt=""/>
                    <div style={cardStyle} className="sepp">
                    <div style={dateStyle}>24 September 2024</div>
                    <div style={contentStyle}>
                      <div style={metaStyle}>
                        <span>👤 Maryanne</span>
                        <span>💬 04 Comments</span>
                      </div>
                      <h4 style={titleStyle}>Tips to understand your child better as a parent</h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur. Mauris urna sapien semper nibh.
                        Habitant interdum quisque pellentesque nulla elementum.
                      </p>
                    </div>
                </div>
                   </div>
                  <div className="d-flex flex-column sep">
                    <img src={img} alt="" />
                    <div style={cardStyle} className="sepp">
                    <div style={dateStyle}>24 September 2024</div>
                    <div style={contentStyle}>
                      <div style={metaStyle}>
                        <span>👤 Maryanne</span>
                        <span>💬 04 Comments</span>
                      </div>
                      <h4 style={titleStyle}>Tips to understand your child better as a parent</h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur. Mauris urna sapien semper nibh.
                        Habitant interdum quisque pellentesque nulla elementum.
                      </p>
                    </div>
                </div>
                   </div>
                    
                  </div>
                </div>
                <div className="align-items-center d-flex flex-column">
                  <Buutton bot="VIEW MORE" buttonStyle={buttonStyle}/>
                </div>
            </Col>
        </Row>
    </Container>
    

    
  );
};

export default Blog;


