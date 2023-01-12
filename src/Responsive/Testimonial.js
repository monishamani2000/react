import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

import './testi.css';
import cow from '../Responsive/picture/cow.jpg';

export function Testimonial(){
    return(
        <>
        <div className="container-fluid bg-secondary">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        {/* <div className="col-lg-12"> */}
                            <img src={cow} className="tcow col-lg-12"/>
                    </div>
                    {/* </div> */}
                    <div className="col-lg-6 p-5 bg-light">
                        <h3 className="text-success pl-5">Happy Farming</h3><br/>
                        <h1 className="text-warning pl-2">Happy Animals</h1>

                        <p className="text-center">Sumatran tigers are the rarest and smallest subspecies of tiger in the world and are currently classed as critically endangered. 
                        Tigers are both good swimmers and climbers with powerful muscular The dove has symbol of peace and innocence 
                         In ancient Greek mythology symbol of love and the renewal of life and in ancient </p>
                    
                       <button href="#" className="p-1 m-5 buttn text-dark">Learn More</button>
                    </div>
                </div>
            </div>
            </div>

        </>
        );
}