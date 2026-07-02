import React from "react";
import Header from "../../components/header";
import Headerb from "../../components/headerb";
import Herobox from "../../components/herobox";
import imgg from "../../images/gallery.png"
import imggg from "../../images/gra.png"
import All from "../../components/all";
import Galleryj from "../../components/galleryj";
import Edges from "../../components/edges";
import Footer from "../../components/footer";
import imge from "../../images/video.png"
import { CiPlay1 } from "react-icons/ci";






const Videolink = () => {
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
    //  const touch = {
    //         height: "300px",
    //         width: "100%",
    //         backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${imge})`,
    //         backgroundSize: "cover",
    //         backgroundPosition: "center",
    //         backgroundRepeat: "no-repeat",
    //         display: 'flex',
    //         justifyContent: 'center',
    //         alignItems: 'center',
    //         marginTop: "20px",
    //         alignItems: "center",
    //         textAlign: "center",
    //         flexDirection: "column",
    //         borderRadius: "20px"
    // };
    //  const playBtn = {
         
         
    //       background: "transparent",
    //       border: "5px solid white",
    //       width: "48px",
    //       height: "38px",
    //       borderRadius: "20%",
    //       fontSize: "22px",
    //       cursor: "pointer",
    //       display: "flex",
    //       justifyContent: "center",
    //       alignItems: "center",
    //       textAlign: "center",
    //       marginBottom: "90px"

    //     }
    //     const inde ={
    //         fontFamily: "Fredoka",
    //         fontWeight: 500,
    //         fontStyle: "Medium",
    //         fontSize: 20,
    //         leadingTrim: "NONE",
    //         lineHeight: "100%",
    //         letterSpacing: 0,
    //         color: "white",
    //         marginBottom: "-100px"
    //     }
    return(
        <>
        <Header/>
        <Headerb/>
        <Herobox text= "Video Gallery" who={are} back={backk} hom={homm} lin="/" aboutt="/Gallery" abo="/Gallery"  home="Home >" about="Gallery >" yho="Video Gallery" />
        <All/>
        <Galleryj />
        <Edges/>
        <Footer/>
        </>
    );
}



export default Videolink