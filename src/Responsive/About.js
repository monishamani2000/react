import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

// import './conclu.css';

import abone from './picture/abone.jpg';
import abtwo from './picture/abtwo.jpg';
import abthree from './picture/abthree.jpg';
import abfour from './picture/abfour.jpg';
import { Menu1 } from "./Menu1";


export function About(){
    return(
       <>
       {/* <Menu1/> */}
        <div className="container-fluid bg-success m-1">
            <div className="row p-5">
                <div className="col-lg-12 text-center p-5">
                    <h1 className="text-light">ABOUT OUR FARM</h1>
                    <p className="text-light">Produce can be called organic if it's certified to have grown on soil that had no prohibited substances applied for three years prior to harvest.Prices of organic foods include not only the cost of the food production itself, but also a range of other factors</p>
                </div>
            </div>
        {/* </div> */}
        <div className="row text-center m-1">
            <div className="col-lg-3 bg-light">
                <h3>VEGTABLES</h3>
                <p className="col-lg-12">Lorem ipusum dolor sit amet consectuer adipiscing elit </p>
                <img src={abone} className="col-lg-12"  />
            </div>
            <div className="col-lg-3 bg-light">
                <h3>HOW IT WORKS</h3>
                <p className="col-lg-12">Lorem ipusum dolor sit amet consectuer adipiscing elit </p>
                <img src={abtwo} className="col-lg-12"/>
            </div>
            <div className="col-lg-3 bg-light">
                <h3>FLEXIBILITY</h3>
                <p className="col-lg-12">Lorem ipusum dolor sit amet consectuer adipiscing elit </p>
                <img src={abthree} className="col-lg-12"/>
            </div>
            <div className="col-lg-3 bg-light">
                <h3>FARM PRODUCTS</h3>
                <p className="col-lg-12">Lorem ipusum dolor sit amet consectuer adipiscing elit </p>
                <img src={abfour} className="col-lg-12"/>
            </div>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                {/* <img src={abone} className="col-lg-12"  /> */}
                </div>

                <div className="col-lg-3">
                {/* <img src={abtwo} className="col-lg-12"/> */}
                </div>

                <div className="col-lg-3">
                {/* <img src={abthree} className="col-lg-12"/> */}
                </div>

                <div className="col-lg-3">
                {/* <img src={abfour} className="col-lg-12"/> */}
                </div>


            </div>

        </div>
</div>

        </>
    );
}