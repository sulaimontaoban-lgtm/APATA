import React from "react";
import {Col, Container, Row} from 'react-bootstrap';
import imge from "../images/touch.png"
import { CiPlay1 } from "react-icons/ci";




const Edge = (props) => {
    
   
    const buttonStyle = {
    backgroundColor: "red",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderTopRightRadius: "30px",
    borderBottomLeftRadius: "30px",
    fontSize: "20px",
    fontFamily: "Open Sans",
    fontWeight: "600",
    cursor: "pointer",
    
  };
  
    return(
       <>
        
          <button className="buu" style={props.buttonStyle}>{props.bot}</button>
       </>
    );
}



export default Edge