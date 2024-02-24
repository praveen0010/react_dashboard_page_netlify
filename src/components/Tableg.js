import React from "react";
import "../styles/tableg.css";
import { FaArrowUp } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
const Tableg = () => {
  const [thisweek, week] = ["{this week}", "{week}"];
  const data = [
    {
      sno: "1",
      cname: "Beginner PHP course",
      amt: "₹s14,000",
    },
    {
      sno: "2",
      cname: "PHP Workshop with Anna University",
      amt: "₹10,000",
    },
    {
      sno: "3",
      cname: "Advanced PHP course",
      amt: "₹8,000",
    },
    {
      sno: "4",
      cname: "Advanced PHP course",
      amt: "₹8,000",
    },
    {
      sno: "5",
      cname: "Advanced PHP course",
      amt: "₹8,000",
    },
  ];
  return (
    <div className="tab-container">
      <div className="tab-box">
        <div className="tab-f-table">
          <div className="tab-t-text">
            <div className="tab-f text">
              <h1 className="t32000">₹32,000</h1>
              <p className="tab-f-p">Earnings {thisweek}</p>
            </div>
            <div className="tab-s-text">
              <h1 className="t4">
                <FaArrowUp style={{ color: "green", fontSize: "25px" }} />
                4%
              </h1>
              <p className="tab-s-p">Previous{week}</p>
            </div>
          </div>
          <h3 className="Top-selling-courses">Top selling courses</h3>
          <table>
            <tbody>
              {data.map((item, i) => {
                return (
                  <tr key={i} className="tab-tr">
                    <td className="tab-sno">{item.sno}</td>
                    <td className="tab-cname">{item.cname}</td>
                    <td className="tab-amt">{item.amt}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="graph">
          <div className="g-text">
            <h3>Courses sales for {thisweek}</h3>
          </div>
          <div className="grp-amtsplit">
            <div className="grp1amt">
              <h3>₹32,000</h3>

              <div className="mcon">
                <div className="con">
                  <FaCircle className="graph-icon" />
                  <div className="graph-div-border"></div>
                </div>
                <div className="grap-online">Online</div>
              </div>
            </div>
            <div className="grp1amt">
              <h3>₹14,000</h3>

              <div className="mcon">
                <div>
                  <FaCircle
                    style={{ color: "rgb(82, 19, 74)" }}
                    className="graph-icon"
                  />
                  <div
                    style={{ borderBlockColor: "rgb(82, 19, 74)" }}
                    className="graph-div-border"
                  ></div>
                </div>
                <div className="grap-online">Offline</div>
              </div>
            </div>
            <div className="grp1amt">
              <h3>--</h3>

              <div className="mcon">
                <div>
                  <FaCircle
                    style={{ color: "#a04593" }}
                    className="graph-icon"
                  />
                  <div
                    style={{ borderBlockColor: "#a04593" }}
                    className="graph-div-border"
                  ></div>
                </div>
                <div className="grap-online">Hybrid</div>
              </div>
            </div>
            <div className="grp1amt">
              <h3>₹500</h3>

              <div className="mcon">
                <div>
                  <FaCircle style={{ color: "white" }} className="graph-icon" />
                  <div
                    style={{ borderBlockColor: "orange" }}
                    className="graph-div-border"
                  ></div>
                </div>
                <div className="grap-online">Historical averages</div>
              </div>
            </div>
          </div>
          <div className="graph">
            <div>
              <div className="sep-for-ul-div">
                <ul className="ulli">
                  <li className="lii">800</li>
                  <li className="lii">600</li>
                  <li className="lii">400</li>
                  <li className="lii">200</li>
                  <li className="lii">0</li>
                </ul>
                <div className="vertical-line">
                  <div className="mon"></div>
                  <div className="tue"></div>
                  <div className="wen"></div>
                  <div className="thus"></div>
                  <div className="fri"></div>
                  <div className="sat"></div>
                  <div className="sun"></div>
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <span
                  style={{
                    display: "inline",
                    position: "relative",
                    right: "90px",
                    top: "10px",
                  }}
                >
                  Monday
                  <h5>18/08</h5>
                </span>
                <span
                  style={{
                    display: "inline",
                    position: "relative",
                    right: "70px",
                    top: "10px",
                  }}
                >
                  Tuesday
                  <h5>19/08</h5>
                </span>
                <span
                  style={{
                    display: "inline",
                    position: "relative",
                    right: "55px",
                    top: "10px",
                  }}
                >
                  Wednesday
                  <h5>20/08</h5>
                </span>
                <span
                  style={{
                    display: "inline",
                    position: "relative",
                    right: "50px",
                    top: "10px",
                  }}
                >
                  Thursday
                  <h5>21/08</h5>
                </span>
                <span
                  style={{
                    display: "inline",
                    position: "relative",
                    right: "36px",
                    top: "10px",
                  }}
                >
                  Friday
                  <h5>22/08</h5>
                </span>
                <span
                  style={{
                    display: "inline",
                    position: "relative",
                    right: "5px",
                    top: "10px",
                  }}
                >
                  Saturday
                  <h5>23/08</h5>
                </span>
                <span
                  style={{
                    display: "inline",
                    position: "relative",
                    right: "-15px",
                    top: "10px",
                  }}
                >
                  Sunday
                  <h5>24/08</h5>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tableg;
