import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { IoMailUnread } from "react-icons/io5";
import { MdNotificationsNone } from "react-icons/md";
import "../styles/navbar.css";
import vk from "../assets/vk.jpg";
const Navbar = () => {
  return (
    <nav>
      <div className="n-container">
        <div className="n-arows">
          <span className="n-rarow">
            <MdKeyboardArrowLeft />
          </span>
          <span className="n-rarow">
            <MdKeyboardArrowRight />
          </span>
        </div>
        <div>
          <span className="n-searchicon">
            <IoSearch />
          </span>
          <input
            className="n-search"
            type="text"
            placeholder="Search for courses,skills,certifications and peers....."
          />
        </div>
        <div className="n-mail">
          <span className="n-imail">
            <IoMailUnread />
          </span>
          <span className="n-inoti">
            <MdNotificationsNone />
          </span>
          <span className="profile-icon">
            <img
              className="imgp"
              src={vk}
              alt="profile"
              width="35"
              height="35"
            />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
