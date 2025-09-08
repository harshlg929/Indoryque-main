import React, { useState } from "react";

const Industries = () => {
  return (
    <div className=" col-12 col-lg-4 col-sm-12 col-md-12 my-5">
      <h2 className="text-primary text-center">Industries</h2>
      <div className="col-md-12 my-5 mx-4">
        <div className="industries-card">
            <ul className="container industries-box">
                <li>Banking & Financial</li>
                <li>EdTech</li>
                <li>Healthcare</li>
                <li>High-Tech</li>
                <li>Insurance</li>
                <li>Media & Entertainment</li>
                <li>Private Equity Firms</li>
                <li>Travel</li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Industries;
