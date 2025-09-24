import React from "react";
import MyNetwork from "./MyNetwork";
import UserLogo from "../../Sidebar/Icons/UserLogo.svg";

export default function MyConnections() {
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
          </div>
          <div className="Connection">
            <div className={`UserBackground ${RandomColor()}`}>
              <img src={UserLogo}></img>
            </div>
          </div>
          <div className="Connection">
            <div className={`UserBackground ${RandomColor()}`}>
              <img src={UserLogo}></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
