import React from "react";
import Header from "../../components/header";
import Headerb from "../../components/headerb";
import Herobox from "../../components/herobox";
import imgg from "../../images/blog.png"
import imggg from "../../images/gra.png"
import All from "../../components/all";
import Day from "./day";
import One from "./one";
import Footer from "../../components/footer";





const Bloglink = () => {
     const backk = {
            backgroundImage: ` linear-gradient(0deg, rgba(3, 0, 101, 0.4), rgba(3, 0, 101, 0.4)),url(${imgg})`,
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
        <Herobox text= "Blog" who={are} back={backk} hom={homm} lin="/"  abo="/Blog"  home="Home >" about="Blog " />
        <Day/>
        <One/>
        <Footer/>
        </>
    );
}



export default Bloglink