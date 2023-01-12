import React from "react";
import './Home1.css';

import { BrowserRouter,Routes,Route } from "react-router-dom";

import { Menu1 } from "./Menu1";

// import logo from '../Responsive/picture/logo.jpg';
// import himg from '../Responsive/picture/homeimg.jpg';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

export function Home1(){
    return(
        <>
        {/* <Menu1/> */}
        
        <div className="bgimg">
            
            <div className="container p-5">
            <div className="row p-5">
            <div className="col-lg-6 p-5">
        <h4 className="text-success pl-5">Fresh Food</h4><br/>

        <h1 className="headc pl-2 ">ORGANIC</h1>

        <p className=" parac text-center mr-5"> Organic food, ecological food or biological food are organic and drinks produced by methods complying standards of organic farming.Organic foods are produced through farming practices that only use natural substances.</p>
        <button href="#" className="bg-success p-1 m-5 btn text-light"> <h5>Learn More</h5> </button>
        </div>
        <div className="col-lg-6"> 
        </div>

        </div>
        </div>
        </div>
        </>
    );
}