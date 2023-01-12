import React from "react";

// import'./product.css';
import bery from '../Responsive/picture/bery.jpg';
import bery2 from '../Responsive/picture/bery2.jpg';
import bery3 from '../Responsive/picture/bery3.jpg';

import '../../node_modules/bootstrap/dist/css/bootstrap.css';

export function Products(){
  return(
    <>
    <div className="container-fluid bg-secondary p-5">
      <div className="row p-3">

        <div className="col-lg-4 text-center bg-light p-5">
          <img src={bery} className="col-lg-12 rounded-circle"/>
          <h3 className="p-5">Fresh Fruits</h3>
          <p>Fruit provides many essential nutrients that often are underconsumed, including vitamins C and A and folate, as well as potassium and dietary fiber. </p>
          <button href="#" className="p-1 m-5 bg-light ">Learn More</button>
        </div>

        <div className="col-lg-4 text-center bg-light p-5">
          <img src={bery2} className="col-lg-12 rounded-circle"/>
          <h3 className="p-5">Vegtables</h3>
          <p>Vegetables are parts of plants that are consumed by humans or other animals as food. The original meaning is still commonly used  </p>
          <button href="#" className="p-1 m-5 bg-light ">Learn More</button>
        </div>

        <div className="col-lg-4 text-center bg-light p-5">
          <img src={bery3} className="col-lg-12 rounded-circle"/>
          <h3 className="p-5">Salad Leaves</h3>
          <p>Leaf vegetables, also called leafy greens, pot herbs,greens, or simply greens plant leaves eaten vegetable, sometimes accompanied by tender petioles  </p>
          <button href="#" className="p-1 m-5 bg-light ">Learn More</button>
        </div>


      </div>
    </div>
    </>
  );
}