import React from "react";
import Common from "./Common";
import web from '../images/robo1.png'
function About() {
    return (
        <>
            <Common 
             name ='Welcome To About Page'
             visit='/Contact'
             btname='Contact Us'
             imgsrc={web}
            />
        </>
    )
};

export default About;