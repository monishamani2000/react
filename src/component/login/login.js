import React from "react";
import './login.css';

import '../../../node_modules/bootstrap/dist/css/bootstrap.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";

import picture from '../image/Computer.jpg';

import { Menu } from "../menu/menu";

export function Login(){
    return(
    <>
    <Menu/>
    <div className="bgcolor p-5">
        <div className="bg-light container row p-10">
            <div className="col-lg-6">
            <img src={picture} className="col-lg-10 p-5"/>
            </div>

            <div className="col-lg-6 text-center ">
               <h2>Member Login</h2><br/>
                <div className="d-flex ml-5"> 
                    <FontAwesomeIcon icon={faEnvelope} className="mt-3 pl-5"/>
                    <input type="Email" placeholder="Email" className="m-2 pl-5 bg-light"></input>
                </div><br/><br/>

                <div className="d-flex ml-5"> 
                    <FontAwesomeIcon icon={faLock} className="mt-3 pl-5"/>
                    <input type="Password" placeholder="Password" className="mt-3 pl-5 bg-light"></input>
                </div><br/><br/>
            
 
                <button type="submit" className="ml-3 pr-5 pl-5 bg-primary rounded text-light">LOGIN</button><br/><br/>
                <h5>Forget     <span className="text-success">Username/Password?</span></h5><br/>
    
                 <h5 className="text-primary">Create your Account</h5>

          </div>
        </div>
</div>
</>
    );
}