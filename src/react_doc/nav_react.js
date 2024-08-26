//import react into the bundle
import React from "react";

const NAV = () =>{
    return(
        <>
      <nav className="navbar bg-dark navbar-expand-lg  navbar-dark">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <a className="navbar-brand" href="#">Start Bootstrap</a>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active " aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled " aria-current="page" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled " aria-current="page" href="#">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled " aria-current="page" href="#">Contact</a>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
        </>
       
    )
}

export default NAV
