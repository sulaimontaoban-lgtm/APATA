import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import img from "../../images/celeb.png"; // replace with your image
import img1 from "../../images/nig.png"; // replace with your image
import { MdDateRange } from "react-icons/md";
import { InputGroup, } from "react-bootstrap";
import { FiSearch } from "react-icons/fi";

const BlogPage = () => {
  const cardStyle = {
    backgroundColor: "#fff",
    borderRadius: "20px",
    marginBottom: "30px",
    boxShadow: "0px 4px 20px rgba(0,0,0,0.05)",
  };

  const imageWrapper = {
    position: "relative",
    borderRadius: "12px",
    overflow: "hidden",
  };

   const dateBadge = {
    position: "absolute",
    bottom: "10px",
    right: "10px",
    backgroundColor: "#E11900",
    color: "#fff",
    padding: "18px 10px",
    fontSize: "12px",
    textAlign: "center",
    lineHeight: "14px",
     borderTopRightRadius: "30px",
    borderBottomLeftRadius: "30px",
  };



  const title = {
    color: "#0B0B5C",
    fontFamily: "Fredoka",
    fontWeight: '600',
    fontStyle: 'Semibold',
    fontSize: '30px',
    lineHeight: '100%',
    letterSpacing: '0%',
    color: "#030065",
    marginTop: "12px",
  };

  const text = {
    fontFamily: "Fredoka",
    fontWeight: '400',
    fontStyle: 'Regular',
    fontSize: '15px',
    lineHeight: '100%',
    letterSpacing: '0%',
    color: "#666",
  };

  const sideCard = {
    display: "flex",
    gap: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",             
    marginBottom: "15px",
  };

  const sideBox = {
    backgroundColor: "#2BC9FB",
    borderRadius: "16px",
    padding: "15px",
    color: "#fff",
  };
  const why ={
    fontFamily: "Fredoka",
    fontWeight: '400',
    fontStyle: 'Regular',
    fontSize: '20px',
    lineHeight: '100%',
    letterSpacing: '0%',
    color: "#030065",
  }

  return (
    <Container className="py-5">
      <Row>

        <Col lg={8}>
          {[1, 2, 3, 4].map((_, i) => (
            <div key={i} style={cardStyle }  className="sep">
              <div style={imageWrapper}>
                <img src={img} alt="" style={{ width: "100%" }} />
                          <div style={{
                              top: "0",
                              position: "relative",
                              right: "0",
                              backgroundColor: "#D12511",
                              color: "#fff",
                              width: "90px",
                              height: "90px",
                              borderTopLeftRadius: "20px",
                              borderBottomRightRadius: "20px",
                              flexDirection: "row",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              textAlign: "center",
                               fontSize: "12px",
                              padding: "15px",
                              boxSizing: "border-box",
                              marginTop: "-40px",
                              left: "600px", 
                            }}>
            <svg xmlns="http://www.w3.org/2000/svg" style={{width: "100px"}} fill="#002080" viewBox="0 0 16 16">
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
            </svg>

           <strong style={{ fontSize: "20px", lineHeight: "16px" }}>29th <br />Sept 2024</strong>
         </div>

              </div>

              <div className="px-5 pb-5">
                <h5 style={title}>
                2024 National Day Celebration: Our Nigeria, Our Future… Building Tomorrow Together
              </h5>

              <p style={text}>
               Lorem ipsum dolor sit amet consectetur. Pellentesque ultrices malesuada sit eget amet egestas. Convallis vel maecenas lobortis nisi pharetra sed sit commodo elit. Congue enim faucibus nisl eg us tellus eget hac. Arcu pretium sit lacus cursus dictumst.......
              </p>
              </div>
            </div>
          ))}
        </Col>

        {/* RIGHT SIDEBAR */}
        <Col lg={4}>
         <Container className="d-flex justify-content-center mt-4">
      <InputGroup
        style={{
          maxWidth: "700px",
          width: "150%",
          backgroundColor: "#fff",
          borderRadius: "10px",
          border: "1px solid #E5E5E5",
          padding: "6px 14px",
          marginBottom: "30px",
        }}
      >
        <Form.Control
          type="text"
          placeholder="Search"
          style={{
            border: "none",
            outline: "none",
            boxShadow: "none",
            fontSize: "16px",
            color: "#999",
          }}
        />

        <InputGroup.Text
          style={{
            background: "transparent",
            border: "none",
            color: "#999",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          <FiSearch />
        </InputGroup.Text>
      </InputGroup>
    </Container>
          <div style={sideBox}>
            <h6 style={{ fontWeight: "700", marginBottom: "40px", color: "#030065"}}>
              Other Post
            </h6>

            <div style={sideCard} >
              <img src={img1} width={"99px"} height={"100px"} style={{ borderRadius: "30px" }} alt="" />
             <div>
                <small style={why}>Why children need a Healthy Environment</small>
                <br />
                <small>2nd Oct, 2024</small>
              </div>
            </div>
            <hr className="mb-4 mt-4"/>
             <div style={sideCard}>
              <img src={img1} width={"99px"} height={"100px"} style={{ borderRadius: "30px" }} alt="" />
             <div>
                <small style={why}>Why children need a Healthy Environment</small>
                <br />
                <small>2nd Oct, 2024</small>
              </div>
            </div>
             <hr className="mb-4 mt-4"/>
             <div style={sideCard}>
              <img src={img1} width={"99px"} height={"100px"} style={{ borderRadius: "30px" }} alt="" />
             <div>
                <small style={why}>Why children need a Healthy Environment</small>
                <br />
                <small>2nd Oct, 2024</small>S
              </div>
            </div>
            <hr className="mb-4 mt-4"/>
             <div style={sideCard}>
              <img src={img1} width={"99px"} height={"100px"} style={{ borderRadius: "30px" }} alt="" />
             <div>
                <small style={why}>Why children need a Healthy Environment</small>
                <br />
                <small>2nd Oct, 2024</small>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BlogPage;
