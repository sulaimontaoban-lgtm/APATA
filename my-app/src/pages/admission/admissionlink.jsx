import React from "react";
import Header from "../../components/header";
import Headerb from "../../components/headerb";
import Herobox from "../../components/herobox";
import imgg from "../../images/admission.png"
import imggg from "../../images/gra.png"
import Footer from "../../components/footer";
import Faqs from "../../components/faqs";
import Element from "../../components/element";
import Edge from "../../components/edge";
import Life from "../../components/life";
import Admin from "./admin";
import Add from "./add";



const Admissionlink = () => {
     const backk = {
            backgroundImage: ` linear-gradient(0deg, rgba(209, 37, 17, 0.2), rgba(209, 37, 17, 0.2)),url(${imgg})`,
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
        <Herobox text= "Admission" who={are} back={backk} hom={homm} lin="/" aboutt="/Admission"   home="Home  >" about="Admission" />
        <Admin/>
        <Add/>
        <Faqs/>
        <Footer/>
        
        </>
    );
}



export default Admissionlink