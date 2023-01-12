import React from "react";
import { BrowserRouter,Routes,Route} from 'react-router-dom';

// import './form.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import fgimg from '../Responsive/picture/formimg.jpg';

export function Form(){
    return(
        <>
        <div className="container-fluid bg-secondary">
            {/* <div className="container"> */}
                <div className="row p-5">
                    <div className="col-lg-6">
                        <div className="col-lg-12">
                            <img src={fgimg} className="fgimg"/>
                        </div>
                    </div>
                    <div className="col-lg-6 p-5 bg-light">
                        <h3 className="text-danger pl-2">Organic Farm</h3><br/>
                        <h1 className="text-danger pl-2">OUR PROMISE</h1>
                        <p className="text-center">Organic foods are hormone and GMO-free, contain fewer pesticides (if any), use fewer preservatives and often contain a higher level of nutrients.
                                         Organic diets we know lead to less pesticide and antibiotic.It is a method of farming system which primarily aimed at cultivating the land and raising crops in such a way, as to keep the soil alive and in good health </p>
                        <button href="#" className="bg-warning p-1 m-5 fbtn tex-light">Learn More</button>

                    </div>
                </div>
            </div>
        {/* </div> */}
        </>
    );
}