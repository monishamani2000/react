import React from "react";
import './super.css';
import csk from '../image/csk-img.png';
import rcb from '../image/rcb-img.png';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'

import {Menu} from "../menu/menu";

export  function Super(){
    return(
        <>
        <Menu/>
        <div className="bg-color">
        <h1 className="line text-dark mt-5">Super Over League</h1>
        <div className="container-fluid row"></div>
        <div className="backgr bg-dark">
            <img src={csk} className="cskk mb-5 mt-5" width="200vw"/>
            <img src={rcb} className="rcbb mb-5 mt-5 " width="200vw"/>
        </div>
        </div>
       </>
    );
}