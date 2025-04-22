import React from "react";
import "./browserWindow.css";

const BrowserWindow = ({ children, className = "" }) => {
  return (
    <div className={`browser-window ${className}`}>
      <div className="top-bar">
        <div className="circles">
          <span className="circle red" />
          <span className="circle yellow" />
          <span className="circle green" />
        </div>
      </div>
      <div className="content">{children}</div>
    </div>
  );
};

export default BrowserWindow;
