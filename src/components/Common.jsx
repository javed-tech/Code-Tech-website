import React from 'react'
import {NavLink} from 'react-router-dom'
function Common(props) {
    return (
        <>
            <section id="header " className="d-flex align-items-center">
                <div className="container-fluid nav-bg">
                    <div className="row">
                        <div className="col-10 mx-auto ">
                            <div className=" row my-5">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column ">
                                    <h1>
                                        {props.name} <strong className="brand-name">CodeTech</strong>
                                    </h1>
                                    <h2 className="my-3">
                                        We Are The Team Of Talented Developer Makng Websites.
                                </h2>
                                    <div className=" mt-3">
                                        <NavLink  to={props.visit} className="startbtn">{props.btname}</NavLink>
                                    </div>
                                </div>
                                <div className=" header-img col-sm-6 order-1 order-lg-2 ">
                                        <div className="animated">
                                        <img src={props.imgsrc} alt="Common Img" />
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Common
