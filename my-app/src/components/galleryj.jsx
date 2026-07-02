import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import img from "../images/video.png";
import { CiPlay1 } from "react-icons/ci";

const VideoGallery = () => {

  const card = {
    position: "relative",
    overflow: "hidden",
    borderRadius: "20px",
    cursor: "pointer",
    height: "300px",
  };

  const image = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.5s ease-in-out",
    zIndex: 1,
  };

  const overlay = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0,0.4)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  textAlign: "center",
  zIndex: 2,
  gap: "10px",
};



  const playBtn = {
  width: "48px",
  height: "38px",
  background: "transparent",
  border: "5px solid white",
  borderRadius: "30%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "18px",
  fontWeight: "bold",
  marginTop: "100px",
  transition: "all 0.3s ease",
};

  const handleEnter = (e) => {
  // zoom image
  e.currentTarget.querySelector("img").style.transform  = "scale(1.5)";

  // change play button color
  const btn = e.currentTarget.querySelector(".play-btn");
  if (btn) {
    btn.style.border = "5px solid red";
    btn.style.color = "red";
  }
};

const handleLeave = (e) => {
  // reset image
  e.currentTarget.querySelector("img").style.transform = "scale(1)";

  // reset play button
  const btn = e.currentTarget.querySelector(".play-btn");
  if (btn) {
    btn.style.border = "5px solid white";
    btn.style.color = "white";
  }
};



  return (
    <Container className="py-4">
      <Row className="g-4">

        <Col xs={12} md={6}>
          <div style={card} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
            <img src={img} alt="video" style={image} />
            <div style={overlay}>
              <p className="play-btn" style={playBtn}><CiPlay1 /></p>
              <div style={{marginTop: "100px"}}>Cultural Day 2024</div>
            </div>
          </div>
        </Col>

        <Col xs={12} md={6}>
          <div style={card} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
            <img src={img} alt="video" style={image} />
            <div style={overlay}>
              <p className="play-btn" style={playBtn}><CiPlay1 /></p>
              <div style={{marginTop: "100px"}}>Graduation Ceremony Day 2024</div>
            </div>
          </div>
        </Col>

      </Row>
      <Row className="g-4 mt-4">

        <Col xs={12} md={6}>
          <div style={card} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
            <img src={img} alt="video" style={image} />
            <div style={overlay}>
              <p className="play-btn" style={playBtn}><CiPlay1 /></p>
              <div style={{marginTop: "100px"}}>Cultural Day 2024</div>
            </div>
          </div>
        </Col>

        <Col xs={12} md={6}>
          <div style={card} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
            <img src={img} alt="video" style={image} />
            <div style={overlay}>
             <p className="play-btn" style={playBtn}><CiPlay1 /></p>
              <div style={{marginTop: "100px"}}>Graduation Ceremony Day 2024</div>
            </div>
          </div>
        </Col>

      </Row>
      <Row className="g-4 mt-4">

        <Col xs={12} md={6}>
          <div style={card} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
            <img src={img} alt="video" style={image} />
            <div style={overlay}>
              <p className="play-btn" style={playBtn}><CiPlay1 /></p>
              <div style={{marginTop: "100px"}}>Cultural Day 2024</div>
            </div>
          </div>
        </Col>

        <Col xs={12} md={6}>
          <div style={card} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
            <img src={img} alt="video" style={image} />
            <div style={overlay}>
              <p className="play-btn" style={playBtn}><CiPlay1 /></p>
              <div style={{marginTop: "100px"}}>Graduation Ceremony Day 2024</div>
            </div>
          </div>
        </Col>

      </Row>
      <Row className="g-4 mt-4">

        <Col xs={12} md={6}>
          <div style={card} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
            <img src={img} alt="video" style={image} />
            <div style={overlay}>
             <p className="play-btn" style={playBtn}><CiPlay1 /></p>
              <div style={{marginTop: "100px"}}>Cultural Day 2024</div>
            </div>
          </div>
        </Col>

        <Col xs={12} md={6}>
          <div style={card} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
            <img src={img} alt="video" style={image} />
            <div style={overlay}>
              <p className="play-btn" style={playBtn}><CiPlay1 /></p>
              <div style={{marginTop: "100px"}}>Graduation Ceremony Day 2024</div>
            </div>
          </div>
        </Col>

      </Row>
      <Row className="g-4 mt-4">

        <Col xs={12} md={6}>
          <div style={card} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
            <img src={img} alt="video" style={image} />
            <div style={overlay}>
              <p className="play-btn" style={playBtn}><CiPlay1 /></p>
              <div style={{marginTop: "100px"}}>Cultural Day 2024</div>
            </div>
          </div>
        </Col>

        <Col xs={12} md={6}>
          <div style={card} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
            <img src={img} alt="video" style={image} />
            <div style={overlay}>
              <p className="play-btn" style={playBtn}><CiPlay1 /></p>
              <div style={{marginTop: "100px"}}>Graduation Ceremony Day 2024</div>
            </div>
          </div>
        </Col>

      </Row>
      <Row className="g-4 mt-4">

        <Col xs={12} md={6}>
          <div style={card} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
            <img src={img} alt="video" style={image} />
            <div style={overlay}>
              <p className="play-btn" style={playBtn}><CiPlay1 /></p>
              <div style={{marginTop: "100px"}}>Cultural Day 2024</div>
            </div>
          </div>
        </Col>

        <Col xs={12} md={6}>
          <div style={card} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
            <img src={img} alt="video" style={image} />
            <div style={overlay}>
              <p className="play-btn" style={playBtn}><CiPlay1 /></p>
              <div style={{marginTop: "100px"}}>Graduation Ceremony Day 2024</div>
            </div>
          </div>
        </Col>

      </Row>
    </Container>
  );
};

export default VideoGallery;
