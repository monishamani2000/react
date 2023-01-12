import React from "react";
import './tech.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';

import data from '../image/images.jpg';
import dot from '../image/dottt.jpg';
import vrrimg from '../image/vrimg.png';
import spimg from '../image/sppimg.jpg';
import { Menu } from "../menu/menu";

export  function Technology(){
    return(
        <>
        <Menu/>
       <div className="container mt-4">   

            <div>  
            <h2 className=" text-center">Learn 4.0 Technologies</h2>
                <h5 className="text-center">Get trained by alumni of IIT and top companies like Amazon,Microsoft,Intel,Qualcomm,etc.
                    Learn directly from professional involved in product Development.The top skills in demand Artificial Intelligence. Networking Development.</h5>
            </div>

             <div className="container row">
             <div className="one mt-5  col-lg-6">
                <h2 className="head1 text-dark">Data Scientist</h2> 
                <p className="para p-2">Data scientist's job is to analyze data for actionable insights.
                 Specific tasks include: Identifying the data-analytics problems </p>
                 <img src={data} className="dataa" width="200px"/>
             </div>

             <div className=" two mt-5  col-lg-6 ">
                <h2 className="head1 text-dark">Dot Developer</h2> 
                <p className="para p-2">NET Software Developer is a software developer who specialises in building software for Microsoft's Windows platform.
                 They work with programming languages compatible with Microsoft's</p>
                 <img src={dot} className="doot" width="200px"/>
             </div>

             <div className=" three  col-lg-6 mt-5">
                <h2 className="head1 text-dark">VR Developer</h2> 
                <p className="para p-2"> VR developer creates whole new digital settings that users can see through a device like the Oculus headset, 
                but an AR developer uses mobile apps to create a layer of digital experience in our reality</p>
                 <img src={vrrimg} className="vrr "  width="200px"/>
             </div>

             <div className=" four col-lg-6 mt-5">
                <h2 className="head1 text-dark">Software Developer</h2> 
                <p className="para p-5">Software developers typically do the following: Analyze users' needs and then design and develop software to meet those needs. </p>
                 <img src={spimg} className="spp" width="200px"/>
             </div>

             </div>
             </div>
        </>

        );
}