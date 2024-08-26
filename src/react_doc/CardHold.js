//import react into the bundle
import React from "react";

import Card from "./Card";
const CardHold = () => {
    return(
        <>
        <div className="container mb-4">
            <div className="row   rounded-5">
  <div className="col">
    <Card></Card>
  </div>
  <div className="col">
  <Card></Card>
  </div>
  <div className="col">
  <Card></Card>
  </div>
  <div className="col">
  <Card></Card>
  </div>
</div></div>
        </> 
    )
}

export default CardHold