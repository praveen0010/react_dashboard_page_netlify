import React from "react";
import "../styles/button.css";
const Buttons = () => {
  const bnames = ["Overview", "Orders", "Payouts", "Banking"];
  return (
    <div className="b-container">
      {bnames.map((name, i) => {
        return (
          <button key={i} type="button" className=" b-btn">
            {name}
          </button>
        );
      })}
    </div>
  );
};

export default Buttons;
