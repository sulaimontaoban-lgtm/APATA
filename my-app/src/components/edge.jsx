import React from "react";
import {Col, Container, Row} from 'react-bootstrap';
import imge from "../images/touch.png"
import { CiPlay1 } from "react-icons/ci";
import Buutton from "./buutton"




const Edge = (props) => {
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
     width: "48px",
     height: "38px",
     background: "transparent",
     border: "5px solid white",
      borderRadius: "30%",
      fontSize: "22px",
      cursor: "pointer",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center"


      
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
        <div style={touch}>
          <p className="text-light" style={playBtn}><CiPlay1 /></p>
        </div>
        <div className="p-5" style={props.full}>
          <p className="mt-3" style={want}>Want to give your child an edge?</p>
          <Buutton bot="GET IN TOUCH WITH US" buttonStyle={buttonStyle}/>
        </div>
       </>
    );
}



export default Edge