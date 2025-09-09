import React, { useState } from "react";
import BuildIcon from "@mui/icons-material/Build";
import WorkIcon from "@mui/icons-material/Work";
import SecurityIcon from "@mui/icons-material/Security";
import BarChartIcon from "@mui/icons-material/BarChart";
import BusinessIcon from "@mui/icons-material/Business";
import EngineeringIcon from "@mui/icons-material/Engineering";
const servicesmenu = [
  {
    serviceicon: (
      <BuildIcon
        style={{
          fontSize: 55,
        }}
      />
    ),
    servicestitle: "Product Developement",
  },
  {
    serviceicon: (
      <WorkIcon
        style={{
          fontSize: 55,
        }}
      />
    ),
    servicestitle: "Quality Engineering",
  },
  {
    serviceicon: (
      <SecurityIcon
        style={{
          fontSize: 55,
        }}
      />
    ),
    servicestitle: "Experience",
  },
  {
    serviceicon: (
      <BarChartIcon
        style={{
          fontSize: 55,
        }}
      />
    ),
    servicestitle: "Cybersecurity",
  },
  {
    serviceicon: (
      <BusinessIcon
        style={{
          fontSize: 55,
        }}
      />
    ),
    servicestitle: "Data & Analytics",
  },
  {
    serviceicon: (
      <EngineeringIcon
        style={{
          fontSize: 55,
        }}
      />
    ),
    servicestitle: "Mobile & Enterprise Apps",
  },
];

const Services = () => {
  const renderservices = (item) => {
    return (
      <div className="col-md-4">
        <div className="services-card">
        {item.serviceicon}
          <h4 className="services-title">{item.servicestitle}</h4>
        </div>
      </div>
    );
  };
  return (
    <div id="services" className="my-5 col-12 col-lg-8 col-sm-12 col-md-12">
      <h2 className="text-primary">Our Services</h2>
      <div className="col-12 col-lg-12 col-sm-12 col-md-12 my-5">
        <div className="">
          <div className="row">
            {servicesmenu.map((item) => {
              return renderservices(item);
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
