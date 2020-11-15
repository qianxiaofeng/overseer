import React, {useState} from "react";
import Header from "./Header";
import Introduction from "./Introduction";
import Recruit from "./Recruit";
import Contact from "./Contact";
import Footer from "./Footer";

function Home() {
    return (
        <>
           <Header/>
           <Introduction/>
           <Recruit/>
           <Contact/>
           {/*<Footer/>*/}
        </>
    )
}

export default Home;
