import React from "react";
import {Col, Container, Row} from 'react-bootstrap';
import imge from "../images/touch.png"
import { CiPlay1 } from "react-icons/ci";




const Edge = () => {
    const full ={
    backgroundColor: "#2BC9FB",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    flexDirection: "column",
    marginTop: "100px",
  }
    const want ={ 
        fontFamily: "Fredoka",
        fontWeight: "600",
        fontStyle: "SemiBold",
        fontSize: "40px",
        lineHeight: "100%",
        letterHpacing: "0%",
        color: 'white',
        
    }
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
        <div className="p-5" style={full}>
          <p className="mt-3" style={want}>Want to give your child an edge?</p>
          <button className="buu" style={buttonStyle}>GET IN TOUCH WITH US</button>
        </div>
       </>
    );
}



export default Edge