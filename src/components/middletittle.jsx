import React, { useState } from "react";
import { middletittle } from "./../images";
const handleClick = () => {
  // Add your functionality here
  alert("You clicked React More!");
};

const Middletittle = () => {
  return (
    <div className="container text-center p-4 mb-5 middle-box">
      <div className="col-lg-12 p-2" > 
        <h2 className="text-primary">Work with us in our OneCompany Model</h2>
        <h5> Trust | Agility | Innovation</h5>
      </div>
      <div className="container ">
            <button className="readmore-button" onClick={handleClick}>
        Read More
      </button>
      </div>
      </div>
  );
};

export default Middletittle;
