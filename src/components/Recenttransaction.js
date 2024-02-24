import React from "react";
import "../styles/Recenttransaction.css";
import { LiaAwardSolid } from "react-icons/lia";
import { GiStarFormation } from "react-icons/gi";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";

const Recenttransaction = () => {
  return (
    <div className="re-container">
      <div>
        <div className="re-text">
          <div className="re-f-text">
            <h1>Recent Transactions</h1>
          </div>
          <div className="re-s-text">
            <h4>Show all transactions</h4>
          </div>
        </div>

        <table className="rer-table">
          <thead>
            <tr>
              <th className="rth">
                <input type="checkbox" />
              </th>
              <th className="rth">Received from</th>
              <th className="rth">Paid for</th>
              <th className="rth">Through</th>
              <th className="rth">Amount</th>
              <th className="rth"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="chk1 rw-ro">
              <td className="re1"></td>
              <td className="re1">
                <div className="re-m-d">
                  <LiaAwardSolid className="re-icon" />
                  <div className="re-txt">
                    <span className="re-name">Siddharth R</span>
                    <span className="re-date-mon">
                      Jun 10, 2021 at 10.00 AM
                    </span>
                  </div>
                </div>
              </td>
              <td className="re1">
                <div className="re-txt">
                  <span className="re-name">Festival of UX/UI Design</span>
                  <span className="re-date-mon">Term fees</span>
                </div>
              </td>
              <td>Cash</td>
              <td style={{ color: "green" }}>₹12,345.00+</td>
              <td>...</td>
            </tr>
            <tr>
              <td>
                <input style={{ marginLeft: "13px" }} type="checkbox" />
              </td>
              <td>
                <div className="re-m-d">
                  <div>
                    <GiStarFormation className="re-icon" />
                  </div>
                  <div className="re-txt">
                    <span className="re-name">Siddharth R</span>
                    <span className="re-date-mon">
                      Jun 10, 2021 at 10:00 AM
                    </span>
                  </div>
                </div>
              </td>
              <td>
                <div className="re-txt">
                  <span className="re-name">Festival of UX/UI Design</span>
                  <span className="re-date-mon">Term fees</span>
                </div>
              </td>
              <td>Online</td>
              <td style={{ color: "green" }}>₹12,345.00+</td>
              <td>...</td>
            </tr>
            <tr>
              <td></td>
              <td>
                <div className="re-m-d">
                  <div>
                    <HiOutlineCurrencyRupee className="re-icon" />
                  </div>
                  <div className="re-txt">
                    <span className="re-name">
                      Siddharth R <button className="re-btn">Refund</button>
                    </span>
                    <span className="re-date-mon">
                      Jun 10, 2021 at 10:00 AM
                    </span>
                  </div>
                </div>
              </td>
              <td>
                <div className="re-txt">
                  <span className="re-name">Festival of UX/UI Design</span>
                  <span className="re-date-mon">Term fees</span>
                </div>
              </td>
              <td>Online</td>
              <td style={{ color: "red" }}>₹12,345.00-</td>
              <td>...</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Recenttransaction;
