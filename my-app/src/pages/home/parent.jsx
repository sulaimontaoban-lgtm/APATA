import React from "react";
import imgg from "../../images/what.png"
import { CiPlay1 } from "react-icons/ci";
import { Col, Row } from "react-bootstrap";



const Parent = () => {

  //   const section = {
  //     display: "flex",
  //     flexWrap: "wrap",
  //     width: "100%",
  //     boxSizing: "border-box",
  //     alignItems: "stretch",  
  //     marginTop: "150px"
  //   }



  //   const imgWrapper = {
  //     position: "relative",
  //     flex: "1 1 300px",    
  //     minWidth: "300px",
  //     maxWidth: "600px",    
  //     marginBottom: "20px", 
      
  //   }


  //   const image = {
  //     width: "100%",
      
  //   };


  //   const playBtn = {
  //     position: "absolute",
  //     top: "50%",
  //     left: "50%",
  //     transform: "translate(-50%, -50%)",
  //     background: "transparent",
  //     border: "3px solid white",
  //     width: "60px",
  //     height: "60px",
  //     borderRadius: "50%",
  //     fontSize: "22px",
  //     cursor: "pointer",
  //     display: "flex",
  //     justifyContent: "center",
  //     alignItems: "center",
  //     color: "white"
  //   }

    

    const label = {
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

    const title = {
      fontFamily: "Fredoka",
      fontWeight: 600,
      fontStyle: "SemiBold",
      fontSize: 40,
      leadingTrim: "NONE",
      lineHeight: "100%",
      letterSpacing: "0%",
      color: "white"

    }

    const stars = {
      color: "#FFB800",
      fontSize: "20px",
    }

    const text = {
      marginTop: "15px",
      fontFamily: "Fredoka",
      fontWeight: 400,
      fontStyle: "Regular",
      fontSize: '16px',
      lineHeight: '22px',
      letterSpacing: "0%",
      color: "white",
      width: "318px"


    }

    const author = {
      marginTop: "20px",
      fontWeight: "bold",
      color: "white"
    }

    const quote = {
      fontSize: "65px",
      textAlign: "right",
      color: "white",

    }

    const dots = {
      display: "flex",
      gap: "10px",
      
    }

    
    const activeDot = {
      width: "28.5px",
      height: "10px",
      background: "#FF5A5F",
      borderRadius: "30%",
    }
  const dot = {
      width: "12px",
      height: "10px",
      background: "#ffffff66",
      borderRadius: "30%",
    }
    const playBtn = {
     width: "50px",
     height: "50px",
     background: "transparent",
     border: "4px solid white",
      borderRadius: "100%",
      fontSize: "22px",
      cursor: "pointer",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center"


      
    }
  //   const contentWrapper = {
  //     maxWidth: "500px",  
  //     width: "100%",     
  //   }



  return (
    <Row className="gap-0 gap-lg-0" style={{marginTop: "100px"}}>
      <Col md={5} lg={5}>
  <div
    style={{
      position: "relative",
      height: "80vh",
      width: "100%",
    }}
  >
    {/* Image */}
    <img
      src={imgg}
      alt="Kids in class"
      style={{
        height: "100%",
        width: "110%",
        objectFit: "cover",
        display: "block",
      }}
    />

    {/* Gradient overlay */}
    <div
      style={{
        position: "absolute",
        inset: 0,
        background:
          "linear-gradient(0deg, rgba(209, 37, 17, 0.2), rgba(209, 37, 17, 0.2))",
      }}
    />

    {/* Play button (centered) */}
    <p
      className="play-btn"
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        margin: 0,
        zIndex: 2,
        cursor: "pointer",
      }}
    >
      <p className="text-light" style={playBtn}><CiPlay1 /></p>
    </p>
  </div>
</Col>

      <Col md={7} lg={7} style={{backgroundColor: "#030065"}}>
      <div className="pt-5 px-3 px-md-5" style={{padding: "10px"}}>
        <p style={label}>Testimonial</p>
      <h2 style={title}>Parent says</h2>
      <div className="mt-5" style={stars}>★★★★★</div>
      <p style={text}>Lorem ipsum dolor sit amet consectetur. Mauris urna sapien semper nibh. Habitant interdum quisque pellentesque nulla elementum in pretium nisl  interdum quisque pellentesque nulla elementum in pretium nisl.</p>
       <p style={author}>– Mrs Grace Cole</p>
       <div style={quote}>❞</div>
       <div style={dots} className="d-none d-lg-flex">
           <div style={activeDot}></div>
          <div style={dot}></div>
          <div style={dot}></div>
            <div style={dot}></div>
       </div>
      </div>
      </Col>
    </Row>



  
    // <section style={section} className=" mb-5">
    //   <Col md={6}>
    //     <div style={imgWrapper} className="d-flex align-items-end">
    //       <img src={imgg} alt="Kids in class" style={image}/>
    //       <button style={playBtn}><CiPlay1 /></button>
    //     </div>
    //     </Col>
    //     <div className="card ">
    //       <p style={label}>Testimonial</p>
    //       <h2 style={title}>Parent says</h2>

    //       <div style={stars}>★★★★★</div>
    //         <div style={contentWrapper}>
    //         <p style={text}>
    //             Lorem ipsum dolor sit amet consectetur. Mauris urna sapien semper nibh. Habitant interdum quisque pellentesque nulla elementum in pretium nisl  interdum quisque pellentesque nulla elementum in pretium nisl.
    //         </p>
    //         </div> 
          

    //       <p style={author}>– Mrs Grace Cole</p>

    //       <div style={quote}>❞</div>

    //       <div style={dots}>
    //         <div style={activeDot}></div>
    //         <div style={dot}></div>
    //         <div style={dot}></div>
    //         <div style={dot}></div>
    //       </div>
    //     </div>
    // </section>
  );
};

export default Parent;
