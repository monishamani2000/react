import React from "react";
import {Link} from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle';

export  function Menu1(){
return(
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
    
        <Link to="/" className="nav-link"><b>Home</b></Link>
      </li>
      <li className="nav-item">
        <Link to="/Work" className="nav-link "><b>Work</b></Link>
      </li>
      <li className="nav-item">
        <Link to="/Form" className="nav-link"><b>Form</b></Link>
      </li>
      <li className="nav-item">
        <Link to="/About" className="nav-link"><b>About</b></Link>
      </li>
      <li className="nav-item">
        <Link to="/Testimonial" className="nav-link"><b>Testimonial</b></Link>
      </li>
      <li className="nav-item">
        <Link to="/Products" className="nav-link"><b>Product</b></Link>
      </li>
      <li className="nav-item">
        <Link to="/Conclusion" className="nav-link"><b>Conclusion</b></Link>
      </li>
    </ul>
  </div> 
</nav>
</>
);
}