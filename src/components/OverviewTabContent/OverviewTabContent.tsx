import React from "react";
import OverviewTabStyle from "./OverviewTabContent.module.css";
import LeftHandSide from "./LeftHandSide/LeftHandSide";
import RightHandSide from "./RightHandSide/RightHandSide";

type Props = {};

const OverviewTabContent = (props: Props) => {
  return (
    <div className={OverviewTabStyle.OverviewTabContainer}>
      <LeftHandSide />
      <RightHandSide />
    </div>
  );
};

export default OverviewTabContent;
