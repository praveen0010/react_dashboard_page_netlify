import React from "react";
import { HiOutlineHome } from "react-icons/hi";
import { GiStarFormation } from "react-icons/gi";
import { FaUniversity } from "react-icons/fa";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { FaAward } from "react-icons/fa";
import { SiPreact } from "react-icons/si";
import "../styles/sidebar.css";
const Sidebar = () => {
  const menulogo = [
    {
      menulog: <HiOutlineHome className="icon" />,
      menulogo_text: "Home",
    },
    {
      menulog: <FaAward className="icon" />,
      menulogo_text: "Courses",
    },
    {
      menulog: <GiStarFormation className="icon" />,
      menulogo_text: "Events",
    },
    {
      menulog: <FaUniversity className="icon" />,
      menulogo_text: "Insititutions",
    },
    {
      menulog: <HiOutlineCurrencyRupee className="icon" />,
      menulogo_text: "Revenue",
    },
    {
      menulog: <TbBrandGoogleAnalytics className="icon" />,
      menulogo_text: "Analytics",
    },
  ];
  return (
    <>
      <div className="s-container">
        <div className="s-logo">
          <span className="s-logo-span">
            <SiPreact className="s-icon" />
          </span>
        </div>
        {menulogo.map((logo) => {
          return (
            <div key={logo.menulogo_text} className="s-menu-item">
              <span className="s-menu-span">{logo.menulog}</span>
              <p className="s-menu-text">{logo.menulogo_text}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Sidebar;
