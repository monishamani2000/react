import React from "react";
import './cong.css';

import person from '../image/congrats-profile.png';
import watch from '../image/download-watch.jpg';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';

import { Menu } from "../menu/menu";

export  function Congr(){
    return(
        <>
        <Menu/>
        <div className="backgr-img">
        <h1>Congratulations</h1>
        <div className="backcolor bg-primary ml-5 mr-5">
            <img src={person} className="personimg"/>
            <h2>Kiran V</h2>
            <p>Vishnu Institute of Computer Education and technology,Bangalore</p>
            
            <img src={watch} className="personimg"/>
            <div className="watchimg">

            </div>
        </div>
        </div>
        </>

    );
}
