import React from "react";
import Payment from "./Payment/Payment";
import rhsStyle from "./RightHandSide.module.css";
import Revenue from "./Revenue/Revenue";

type Props = {};

const RightHandSide = (props: Props) => {
  return (
    <div className={rhsStyle.rhsContainer}>
      <Payment />
      <Revenue />
    </div>
  );
};

export default RightHandSide;
