import React from "react";
import {Container, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import aboutt from  '../pages/about/aboutlink';
import img1 from '../images/vec1.png'
import img2 from '../images/vec2.png'

const Herobox = (props) => {
   

    
    return(
        <>
        <div style={props.back}>
          <Container>
            <div className="d-flex justify-content-between" >
              <div  style={{marginTop: "-100px"}}>
                <img src={img2} alt="" className="img-fluid"/>
              </div>
              <div  style={{marginTop: "-50px"}}>
                <img src={img1} alt="" className="img-fluid"/>
              </div>
              
            </div>
            <p className="mt-5" style={props.who}>{props.text}</p>
            <div className="d-flex justify-content-center gap-3 text-light">
             
               <Link to={props.lin}  style={props.hom}>{props.home}</Link>
               <Link to={props.abo} style={props.hom}>{props.about}</Link>
               <Link to={props.aboutt} style={props.hom}>{props.yho}</Link>
              </div>
             
          </Container>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="all-for"><path fill="white" fill-opacity="1" d="M0,160L60,144C120,128,240,96,360,106.7C480,117,600,171,720,181.3C840,192,960,160,1080,149.3C1200,139,1320,149,1380,154.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>

        </>
    );
}



export default Herobox