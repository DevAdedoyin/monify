import React from "react";
import DHStyle from "./DashboardHeader.module.css";

// type Props = {}

function DashboardHeader() {
  return (
    <div className={DHStyle.headerContainer}>
      <div className={DHStyle.inputContainer}>
        <input placeholder="Search Anything" />
      </div>
      <div className={DHStyle.headerDetailsContainer}></div>
    </div>
  );
}

export default DashboardHeader;
