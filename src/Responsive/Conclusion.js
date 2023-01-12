import React from "react";
import './conclu.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';

import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import { Menu1 } from "./Menu1";

import con from './picture/conimg.jpg';

 export function Conclusion(){
    return(
      <>
      {/* <Menu1/> */}
 <div className="container-fluid bg-light">
    <div className="container">
        <div className="row p-5">

            <div className="col-lg-6 p-5 bg-light">
    <h3 className=" text-success">ORGANIC FARM</h3>
    <h2 className="head">Of Oragnic Food</h2>
    <p className="para">Organic foods are hormone and GMO-free, contain fewer pesticides (if any), use fewer preservatives and often contain a higher level of nutrients.
        Organic diets we know lead to less pesticide and antibiotic exposure, but nutritionally, they are about the same.</p>
        
        <button href="#" className="bg-warning p-1 m-5 btn text-light"> <h5>Learn More</h5> </button>
        </div>
        <img src={con} className="img col-lg-6" width="20px"/>
 </div>
 </div>
 </div>
      </>
      );
    }