import React from "react";
import Header from "../../components/header";
import Headerb from "../../components/headerb";
import Herobox from "../../components/herobox";
import imgg from "../../images/meet.png"
import Grown from "../about/grown"
import Vision from "../about/vision"
import Footer from "../../components/footer";
import Faqs from "../../components/faqs";
import Executive from "./executive";
import Mask from "./mask";






const Leaderlink = () => {
     const backk = {
            backgroundImage: `linear-gradient(rgba(209, 37, 17, 0.2), rgba(209, 37, 17, 0.2)), url(${imgg})`,
            backgroundSize: "cover",
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
        <Herobox text= "Meet Our Leadership" who={are} back={backk} hom={homm} lin="/"  aboutt="/leader" abo="/About"  home="Home >" about="About Us >" yho="Leadership" />
        <Executive/>
        <Mask/>
        <Faqs/>
        <Footer/>
        </>
    );
}



export default Leaderlink