import React from "react";
import Header from "../../components/header";
import Headerb from "../../components/headerb";
import Herobox from "../../components/herobox";
import imgg from "../../images/galery.png"
import imggg from "../../images/gra.png"
import All from "../../components/all";
import VideoGallery from "../../components/videogallery";
import Edges from "../../components/edges";
import Footer from "../../components/footer";
import imge from "../../images/picture.png"





const Picturelink = () => {
     const backk = {
            backgroundImage: ` linear-gradient(0deg, rgba(3, 153, 50, 0.2), rgba(3, 153, 50, 0.2)),url(${imgg})`,
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
        <Herobox text= "Picture Gallery" who={are} back={backk} hom={homm} lin="/" aboutt="/Gallery" abo="/Gallery"  home="Home >" about="Gallery >" yho="Picture Gallery" />
        <All/>
        <VideoGallery/>
        <Edges/>
        <Footer/>
        </>
    );
}



export default Picturelink