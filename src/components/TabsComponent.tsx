import React from "react";
import TabStyle from "./TabsComponent.module.css";

type Props = {};

function TabsComponent({}: Props) {
  return (
    <div className={TabStyle.tabContainer}>
      <div className={TabStyle.tabContentContainer}>
        <p className={TabStyle.tab0}>Overview</p>
        <p className={TabStyle.tabs}>Clients</p>
        <p className={TabStyle.tabs}>Account</p>
        <p className={TabStyle.tabs}>Payments</p>
      </div>
      <div className={TabStyle.manageContainer}>
        <p className={TabStyle.manageTxt}>Manage</p>
      </div>
    </div>
  );
}

export default TabsComponent;
