import React from "react";
import {Col, Container, Row} from 'react-bootstrap';
import imge from "../../images/touch.png"
import { CiPlay1 } from "react-icons/ci";




const Edge = () => {
    const touch = {
        height: "500px",
        width: "100%",
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${imge})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: "150px",
        alignItems: "center",
        textAlign: "center"
};
 const playBtn = {
     
     
      background: "transparent",
      border: "5px solid white",
      width: "48px",
      height: "38px",
      borderRadius: "20%",
      fontSize: "22px",
      cursor: "pointer",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center"


      
    }
    
  
    return(
       <>
        <div style={touch}>
          <p className="text-light" style={playBtn}><CiPlay1 /></p>
        </div>
       </>
    );
}



export default Edge