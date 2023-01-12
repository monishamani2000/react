import React from "react";
import './notify.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{faCircleCheck} from '@fortawesome/free-solid-svg-icons';
import{faBell} from '@fortawesome/free-solid-svg-icons';

import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import { Menu } from "../menu/menu";

export function Notify() {
    return(
    <>
    <Menu/>
    <div className="container-fluid p-5 text-center">
        <h1>Notifications</h1>
        <div className='row p-2'>
           <div className="col-lg-4"> </div>
           <div className="col-lg-4 bg-primary m-2 text-center">

           <h4 className="m-3"><FontAwesomeIcon icon={faCircleCheck} className="one"/> Information Message</h4>
                </div>
                </div>

                <div className='row p-2'>
           <div className="col-lg-4"> </div>
           <div className="col-lg-4 bg-success m-2 text-center">

           <h4 className="m-3"><FontAwesomeIcon icon={faCircleCheck} className="one"/> Success Message</h4>
                </div>
                </div>

                <div className='row p-2'>
           <div className="col-lg-4"> </div>
           <div className="col-lg-4 bg-warning m-2 text-center">

           <h4 className="m-3"><FontAwesomeIcon icon={faBell} className="one"/> warning Message</h4>
                </div>
                </div>

                <div className='row p-2'>
           <div className="col-lg-4"> </div>
           <div className="col-lg-4 bg-danger m-2 text-center">

           <h4 className="m-3"><FontAwesomeIcon icon={faBell} className="one"/> Error Message</h4>
                </div>
                </div>
                
    </div>
   </>
    );
    }
