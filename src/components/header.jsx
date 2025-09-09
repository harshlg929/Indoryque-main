
import React, { useEffect, useState } from "react";
import BuildIcon from "@mui/icons-material/Build";
import { logo1, logo3 } from "./../images/index";

const menuItems = [
  { name: "Home", link: "#home" },
  // { name: "New Register", link: "/register" },
  {
    name: "Services",
    link: "#services"
    // dropdown: true,
    // subItems: [
    //   { type: "header", label: "All Services" },
    //   { type: "divider" },
    //   { name: "Product Development", link: "#services", icon: <BuildIcon className="me-2" /> },
    //   { name: "Another Action", link: "#action2" },
    // ],
  },
  { name: "About", link: "#about" },
  { name: "Contact", link: "#contact" },
  // {
  //   name: "More",
  //   link: "#more"
    // dropdown: true,
    // subItems: [
    //   { name: "Action", link: "#action1" },
    //   { name: "Another Action", link: "#action2" },
    // ],
  // },
];

const Header = () => {
  const [isOpen, setIsOpen,] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
        setOpenDropdown(null);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#000" }}>
      <div className="container">
        {/* <a className="navbar-brand text-primary" href="#">
          Indoryque Globa
        </a> */}
        <img
          src={logo1}
          alt={"logo"}
          width={'160'}
          height={'80'}
        />
        {/* <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded={isOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        {/* <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {menuItems.map((item, index) =>
              item.dropdown ? (
                <li className="nav-item" key={index}>
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id={`dropdown${index}`}
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded={openDropdown === index ? "true" : "false"}
                  >
                    {item.name}
                  </a>
                  <ul className={`dropdown-menu ${openDropdown === index ? "show" : ""}`}
                    aria-labelledby={`dropdown${index}`}>
                    {item.subItems.map((subItem, subIndex) =>
                      subItem.type === "header" ? (
                        <li className="dropdown-header" key={subIndex}>{subItem.label}</li>
                      ) : subItem.type === "divider" ? (
                        <li key={subIndex}>
                          <hr className="dropdown-  divider" />
                        </li>
                      ) : (
                        <li key={subIndex}>
                          <a className="dropdown-item" href={subItem.link}>
                            {subItem.icon && subItem.icon} {subItem.name}
                          </a>
                        </li>
                      )
                    )}
                  </ul>
                </li>
              ) : (
                <li className="nav-item" key={index}>
                  <a className="nav-link" href={item.link}>
                    {item.name}
                  </a>
                </li>
              )
            )}
          </ul>
        </div> */}
      </div>
    </nav>
  );
};

export default Header;
