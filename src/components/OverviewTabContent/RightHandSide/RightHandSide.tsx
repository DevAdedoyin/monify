import React from "react";
import Payment from "./Payment/Payment";
import rhsStyle from "./RightHandSide.module.css";

type Props = {};

const RightHandSide = (props: Props) => {
  return (
    <div className={rhsStyle.rhsContainer}>
      <Payment />
    </div>
  );
};

export default RightHandSide;
