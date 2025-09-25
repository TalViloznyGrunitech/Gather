import { useEffect, useState } from "react";
import "./Menu.css";
import SiteIcon from "./Icons/SiteIcon.svg";
import CloseMenu from "./Icons/Close.png";

export default function Menu() {
  function MenuClose() {
    console.log("Menu was closed");
  }
  useEffect(() => {
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
    };
  }, []);

  return (
    <>
      <div className="MenuContainer HideMenu">
        <div className="Menu">
          <div className="LogoContainer">
            <img src={SiteIcon}></img>
            <h1>Gather</h1>
            <button onClick={MenuClose}>
              <img className="CloseMenu" src={CloseMenu}></img>
            </button>
          </div>
          <div className="MenuLine"></div>
        </div>
      </div>
    </>
  );
}
