import React from "react";
import {Col, Container, Row} from 'react-bootstrap';
import line from "../../images/line2.png"
import values from "../../images/values.png"
import vision from "../../images/vision.png"
import target from "../../images/target.png"
import eye from "../../images/eye.png"


const Vision = (props) => {
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
    }
    
    return(
       <>
       
          <Container>
            <Row style={{marginTop: "100px"}}>
              <Col md={5} xs={12} lg={5}>
              <div className="shadow p-4">
              <p style={genn}> <img src={vision} alt="" />Vision</p>
              <p style={ipsum}>Lorem ipsum dolor sit amet consectetur. Pellentesque ultrices malesuada sit eget amet egestas. Convallis vel maecenas lobortis nisi pharetra sed sit commodo elit. Congue enim faucibus nisl egestas penatibus tellus eget hac.</p>
              </div>
              <div className="shadow p-4 mt-3">
              <p style={genn}> <img src={values} alt="" />Mission</p>
              <p style={ipsum}>Lorem ipsum dolor sit amet consectetur. Pellentesque ultrices malesuada sit eget amet egestas. Convallis vel maecenas lobortis nisi pharetra sed sit commodo elit. Congue enim faucibus nisl egestas penatibus tellus eget hac.</p>
              </div>
              </Col>
              <Col md={5} xs={12} lg={5}>
              <div className="shadow  d-flex flex-column" style={{padding: '80px 50px'}}>
              <p style={genn}> <img src={target} alt="" />Core Values</p>
              <p style={ipsum}><span style={{color: 'blue', width: '100%', height: '20vh'}}></span><svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 5 C57 5 60 15 67 18 C74 21 85 20 90 27 C95 34 90 43 90 50 C90 57 95 66 90 73 C85 80 74 79 67 82 C60 85 57 95 50 95 C43 95 40 85 33 82 C26 79 15 80 10 73 C5 66 10 57 10 50 C10 43 5 34 10 27 C15 20 26 21 33 18 C40 15 43 5 50 5Z" fill="#22C7F2"/>
              </svg>Curosity</p>
              <p style={ipsum}><span></span><svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 5 C57 5 60 15 67 18 C74 21 85 20 90 27 C95 34 90 43 90 50 C90 57 95 66 90 73 C85 80 74 79 67 82 C60 85 57 95 50 95 C43 95 40 85 33 82 C26 79 15 80 10 73 C5 66 10 57 10 50 C10 43 5 34 10 27 C15 20 26 21 33 18 C40 15 43 5 50 5Z" fill="#22C7F2"/>
              </svg>Imagination</p>
              <p style={ipsum}><svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 5 C57 5 60 15 67 18 C74 21 85 20 90 27 C95 34 90 43 90 50 C90 57 95 66 90 73 C85 80 74 79 67 82 C60 85 57 95 50 95 C43 95 40 85 33 82 C26 79 15 80 10 73 C5 66 10 57 10 50 C10 43 5 34 10 27 C15 20 26 21 33 18 C40 15 43 5 50 5Z" fill="#22C7F2"/>
              </svg>Independence</p>
              <p style={ipsum}><svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 5 C57 5 60 15 67 18 C74 21 85 20 90 27 C95 34 90 43 90 50 C90 57 95 66 90 73 C85 80 74 79 67 82 C60 85 57 95 50 95 C43 95 40 85 33 82 C26 79 15 80 10 73 C5 66 10 57 10 50 C10 43 5 34 10 27 C15 20 26 21 33 18 C40 15 43 5 50 5Z" fill="#22C7F2"/>
              </svg>Integrity</p>
              <p style={ipsum}><svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 5 C57 5 60 15 67 18 C74 21 85 20 90 27 C95 34 90 43 90 50 C90 57 95 66 90 73 C85 80 74 79 67 82 C60 85 57 95 50 95 C43 95 40 85 33 82 C26 79 15 80 10 73 C5 66 10 57 10 50 C10 43 5 34 10 27 C15 20 26 21 33 18 C40 15 43 5 50 5Z" fill="#22C7F2"/>
              </svg>Respect</p>
              <p style={ipsum}><svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 5 C57 5 60 15 67 18 C74 21 85 20 90 27 C95 34 90 43 90 50 C90 57 95 66 90 73 C85 80 74 79 67 82 C60 85 57 95 50 95 C43 95 40 85 33 82 C26 79 15 80 10 73 C5 66 10 57 10 50 C10 43 5 34 10 27 C15 20 26 21 33 18 C40 15 43 5 50 5Z" fill="#22C7F2"/>
              </svg>Responsibility</p>
              </div>
              
              </Col>
              <Col md={2}>
              <img src={eye} alt="" className="kali" style={{height: '466px'}}/>
              </Col>
              
              
            </Row>
           </Container>
       </>
    );
}



export default Vision