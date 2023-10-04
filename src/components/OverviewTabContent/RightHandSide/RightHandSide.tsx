import React from "react";
import Payment from "./Payment/Payment";
import rhsStyle from "./RightHandSide.module.css";
import Revenue from "./Revenue/Revenue";
import SalesData from "./SalesData/SalesData";

type Props = {};

const RightHandSide = (props: Props) => {
  return (
    <div className={rhsStyle.rhsContainer}>
      <Payment />
      <Revenue />
      <SalesData />
    </div>
  );
};

export default RightHandSide;
