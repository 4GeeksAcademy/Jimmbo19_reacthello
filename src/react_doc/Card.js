//import react into the bundle
import React from "react";

const Card = () =>{

    return(
        <>
       <div className="card">
      <img src="https://www.bohemes.cz/wp-content/uploads/2015/05/msn-work-50.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div class="card-footer">
      <a href="#" class="btn btn-primary">Find Out More</a>
    </div>
    </div>
        </>
    )
}

export default Card