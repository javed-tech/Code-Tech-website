import React from "react";
import Common from "./Common";
import web from '../images/robo.png'
function Home() {
    return (
        <>
            <Common
            name ='Grow Your Business With'
            visit='/Service'
            btname='Get Started'
            imgsrc={web}
            />
        </>
    )
};

export default Home;