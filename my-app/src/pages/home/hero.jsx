import React from "react";
import imgg from "../../images/heroo.png"
import {Container} from 'react-bootstrap';
import img1 from "../../images/com.png"   

const Hero = () => {
    const back = {
        backgroundImage: `url(${imgg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "flex-start",
        height: "650px",
        width: "100%",
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
    const apata = {
        fontFamily: 'Fredoka',
        fontWeight: 700,
        fontStyle: 'Bold',
        fontSize: '70px',
        leadingTrim: 'NONE',
        lineHeight: '100%',
        letterSpacing: '0%',
        color: '#030065',

    }
    const olu = {
        backgroundColor: '#FFFFFFCC',
        maxWidth: 645,
        height: 351,
        marginTop: '160px',
        angle: '0 deg',
        opacity: 1,
        gap: '24px',
        borderTopRightRadius: '50px',
        borderBottomLeftRadius: '50px',
        padding: '40px',

    }
    const play ={
        fontFamily: 'Fredoka',
        fontWeight: '400',
        fontStyle: 'Regular',
        fontSize: '24px',
        lineHeight: '100%',
        letterSpacing: '0%',
        color: '#030065',

    }
    return(
        <div style={back}>
          <Container>
            <div style={olu}>
            <p style={wel}>Welcome to</p>
            <p style={apata}>Apata Montessori</p>
            <p style={apata}>School</p>
            <p style={play}>Play. <span style={{color: '#D12511'}}>Learn.</span> <span style={{color: '#2BC9FB'}}> Grow.</span></p>
          </div>
          <div className="d-flex justify-content-end align-items-end text-align-end mt-5">
            <img  src={img1} alt="" />
          </div>
          </Container>
          
        </div>
    );
}



export default Hero