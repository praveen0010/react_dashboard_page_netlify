import React from "react";
import "../styles/revenue.css";
import { FaChevronDown } from "react-icons/fa";
const Revenue = () => {
  const name = ["Courses", "this week"];

  return (
    <div className="r-container">
      <div className="r-text">
        <h1 className="r-h1">Revenue</h1>
        <div className="r-btn-div">
          {name.map((n, i) => {
            return (
              <button key={i} className="r-btn">
                {n}
                <FaChevronDown
                  style={{ marginTop: "2px", paddingTop: "2px" }}
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Revenue;
