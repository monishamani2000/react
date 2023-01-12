import React from "react";
import {Link} from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle';

export  function Menu(){
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
        <Link to="/Cong" className="nav-link "><b>CongratsCard</b></Link>
      </li>
      <li className="nav-item">
        <Link to="/super" className="nav-link"><b>Superover</b></Link>
      </li>
      <li className="nav-item">
        <Link to="/social" className="nav-link"><b>Social Buttons</b></Link>
      </li>
      <li className="nav-item">
        <Link to="/notify" className="nav-link"><b>Notifications</b></Link>
      </li>
      <li className="nav-item">
        <Link to="/tech" className="nav-link"><b>Technologies</b></Link>
      </li>
    </ul>
  </div> 
</nav>
</>
);
}