import React from "react";

// import './Home1.css';

import goat from '../Responsive/picture/goat.jpg';
import veg from '../Responsive/picture/veg.jpg';
import apple from '../Responsive/picture/apple.jpg';
 
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

export function Work(){
    return(
        <>
        <div className="container-fluid bg-success p-5">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h1 className="text-light">HOW IT WORKS?</h1>
                    <p className="text-light"> organic farming, agricultural system that uses ecologically based pest controls and biological fertilizers derived largely from animal and plant wastes and nitrogen-fixing cover crops.</p>
                </div>
            <div className="col-lg-4">
                <img src={goat} className="col-lg-12"/>
            </div>
            <div className="col-lg-4">
                <div className="col-lg-12 bg-light p-5 text-center">
                    <h4>Oragnic Farming</h4><br/>
                    <p>Organic farming, also known as ecological farming or biological farming, is an agricultural system that uses fertilizers of organic origin such as compost manure, green manure.
                        Arable crops are generally annual.</p>
                </div>
            </div>

            <div className="col-lg-4">
                <img src={veg} className="col-lg-12"/>
            </div>
            <div className="col-lg-4">
                <div className="col-lg-12 bg-light p-5 text-center">
                    <h4>Animal Husbandry</h4><br/>
                    <p>Animals that are raised for meat, fibre, milk, or other products. It includes day-to-day care, selective breeding, and the raising </p>
                </div>
            </div>

            <div className="col-lg-4">
                <img src={apple} className="col-lg-12"/>
            </div>
            <div className="col-lg-4">
                <div className="col-lg-12 bg-light p-5 text-center">
                    <h4>Arable Farming</h4><br/>
                    <p>Arable land is any land capable of being ploughed and used to grow crops. Alternatively, for the purposes of agricultural statistics,</p>
            </div>
            </div>
            </div>
        </div>
        </>
    
    );
}
