import React from "react";
import Header from "../../components/header";
import Headerb from "../../components/headerb";
import Herobox from "../../components/herobox";
import imgg from "../../images/about.png"
import Well from "./well"
import Grown from "../about/grown"
import Vision from "../about/vision"
import Footer from "../../components/footer";
import Faqs from "../../components/faqs";


const Aboutlink = () => {
     const backk = {
            backgroundImage: `linear-gradient(0deg, rgba(3, 153, 50, 0.2), rgba(3, 153, 50, 0.2)), url(${imgg})`,
            backgroundSize: "cover",
            background: `linear-gradient(direction, color-stop1, color-stop2, ...)`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            display: 'flex',
            flexDirection: 'column',
            justifyContent: "center",
            alignItems: "flex-start",
            alignItems: 'center',
            textAlign: 'center',
            height: "431.09px",
            width: "100%",
    };
    const are ={
        fontFamily: 'Fredoka',
        fontWeight: '700',
        fontStyle: ' Bold',
        fontSize: '70px',
        lineHeight: '100%',
        letterSpacing: '0%',
        color: 'white'

    }
    
   
    
    
    
    const homm={
        fontFamily: "Fredoka",
        fontWeight: 400,
        fontStyle: "Regular",
        fontSize: "18px",
        leadingTrim: "NONE",
        lineHeight: "22px",
        letterSpacing: "0%",
        textDecoration: "none",
        color: "white"
    }
    return(
        <>
        <Header/>
        <Headerb/>
        <Herobox text= "Who We Are" who={are} back={backk} hom={homm} lin="/" aboutt="/About" abo="/Leader"  home="Home >" about="About Us >" yho="Who We Are" />
        <Well/>
        <Grown/>
        <Vision/>
        <Faqs/>
        <Footer/>
        </>
    );
}



export default Aboutlink