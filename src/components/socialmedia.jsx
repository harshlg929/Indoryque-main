import React, { useState } from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  YouTube,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";

const images = [
  {
    image: <Facebook fontSize="large" color="primary"/>,
    link: "https://facebook.com",
  },
  {
    image: <Twitter fontSize="large" style={{ color: "#1DA1F2" }} />,
    link : "https://twitter.com",
  },
  {
    image: <Instagram fontSize="large" style={{ color: "#C13584" }} />,
    link : "https://instagram.com",
  },
  {
    image: <LinkedIn fontSize="large" color="primary" />,
    link : "https://in.linkedin.com/",
  },

  {
    image: <YouTube fontSize="large" style={{ color: "#FF0000" }} />,
    link : "https://youtube.com"
  },
];

const Socialmedia = () => {
  const renderMedia = (item) => {
    return (
      <IconButton href={item.link} target="_blank">
        {item.image}
      </IconButton>

    );
  };
  return (
    <div
      className="container"
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        margin: "10px",
      }}
    >
      {images.map((item) => {
        return renderMedia(item);
      })}
    </div>
  );
};

export default Socialmedia;
