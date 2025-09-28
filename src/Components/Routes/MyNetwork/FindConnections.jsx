import React from "react";
import MyNetwork from "./MyNetwork";
import UserLogo from "../../Sidebar/Icons/UserLogo.svg";

export default function FindConnections() {
  const ColorArray = [
    "Red",
    "Purple",
    "Pink",
    "Green",
    "Yellow",
    "Orange",
    "Gray",
  ];
  function RandomColor() {
    return ColorArray[Math.floor(Math.random() * ColorArray.length)];
  }
  return (
    <>
      <div className="Main">
        <MyNetwork />
        <div className="MyConnections">
          <div className="Connection">
            <div className={`UserBackground ${RandomColor()}`}>
              <img src={UserLogo}></img>
            </div>
            <div className="ConnectionInfo">
              <h2>Name</h2>
              <h3 className="Job">Job</h3>
              <h3 className="Company">Company</h3>
            </div>
            <div className="ButtonOptions">
              <button className="MessageButton">Message</button>
              <button className="AddButton">Add</button>
            </div>
            <div className="BottomInfo">
              <div className="MutualAndAttended">
                <h4>
                  <span>👥</span> 23 mutual connections
                </h4>
                <h4>
                  <span>🎯</span> 5 events attended
                </h4>
              </div>
            </div>
            <button className="ViewProfile">View Profile</button>
          </div>
          <div className="Connection">
            <div className={`UserBackground ${RandomColor()}`}>
              <img src={UserLogo}></img>
            </div>
            <div className="ConnectionInfo">
              <h2>Name</h2>
              <h3 className="Job">Job</h3>
              <h3 className="Company">Company</h3>
            </div>
            <div className="ButtonOptions">
              <button className="MessageButton">Message</button>
              <button className="AddButton">Add</button>
            </div>
            <div className="BottomInfo">
              <div className="MutualAndAttended">
                <h4>
                  <span>👥</span> 23 mutual connections
                </h4>
                <h4>
                  <span>🎯</span> 5 events attended
                </h4>
              </div>
            </div>
            <button className="ViewProfile">View Profile</button>
          </div>
          <div className="Connection">
            <div className={`UserBackground ${RandomColor()}`}>
              <img src={UserLogo}></img>
            </div>
            <div className="ConnectionInfo">
              <h2>Name</h2>
              <h3 className="Job">Job</h3>
              <h3 className="Company">Company</h3>
            </div>
            <div className="ButtonOptions">
              <button className="MessageButton">Message</button>
              <button className="AddButton">Add</button>
            </div>
            <div className="BottomInfo">
              <div className="MutualAndAttended">
                <h4>
                  <span>👥</span> 23 mutual connections
                </h4>
                <h4>
                  <span>🎯</span> 5 events attended
                </h4>
              </div>
            </div>
            <button className="ViewProfile">View Profile</button>
          </div>
        </div>
      </div>
    </>
  );
}
