import React, { useState } from "react";
import { image1, image2, image3, projectplanning, projectowner } from "./../images";
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';

const productInfo = [
  {
    title: "Think like a customer",
    caption:
      "Excellence starts with understanding each other. We ask the right questionslistening and learning to get better every day. We simplify the complex and are trusted to deliver solutions that add value and create a bigger impact for our colleagues and customer.",
    image: projectplanning,
    icon: <TipsAndUpdatesOutlinedIcon/>
  },
  { title: "Act like an owner",
    caption:"We stay agile, each one of us is responsible for driving success. We use our initiative, taking calculated and thoughtful risks to progress. We champion our ideas and stay flexible to make them happen. We know that every action adds up",
    details: "test2",
    image: projectowner,
    icon: <HandshakeOutlinedIcon/> },
  { title: "Win as a Team",
    caption:"Unlocking potential takes working as one global community. Staying united by our purpose to achieve our collective goals. We collaborate, encouraging others to perform at their best, welcoming new perspectives.",
     image: image3,
     icon: <MilitaryTechIcon/> },
  { title: "Increase in productivity",
    caption:" powered software development improved efficiency for a photography products company",
     image: image3,
     icon: <ProductionQuantityLimitsIcon/>},
];

const Ourwork = () => {
  const renderProduct = (item) => {
    return (
      <div className="col-12 col-md-4 col-sm-12 mx-4 ">
        <div className="work-card">
          <div className="work-image">
            <img className="work-img" src={item.image} alt={"Image"} />
          </div>
          <div className="my-3 px-4 work-icon">{item.icon}</div>
             
          <h4 className="work-title text-primary px-4">{item.title}</h4>
          <div className="px-4">
            <p className="box-caption" >{item.caption}</p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div
      id="works"
      className="my-5 col-12 col-lg-12 col-sm-12 col-md-12 container"
    >
      <h2 className="text-primary text-center">Our work</h2>
      <div
        className="d-flex"
        style={{
          overflowX: "auto",
          width: "100%",
          maxWidth: "100%",
        }}
      >
        {productInfo.map((item) => { 
          return renderProduct(item);
        })}
      </div>
    </div>
  );
};

export default Ourwork;
