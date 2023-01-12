import React from "react";
import './social.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';

import { Menu } from "../menu/menu";

export function Social(){
    return(
    <>
    <Menu/>
    <div className="back">
        <h1 className="text-light">Social Buttons</h1>

        <button className='but bg-warning btn m-2 text-light'>LIKE</button>
        <button className='but bg-light btn m-2 '>COMMENT</button>
        <button className='but bg-primary btn m-2 text-light'>SHARE</button>
    </div>
    </>
    );

}