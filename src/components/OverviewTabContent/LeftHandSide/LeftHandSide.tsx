import React from "react";
import Balance from "./Balance/Balance";
import SalesActivity from "./SalesActivity/SalesActivity";
import lhsStyle from "./LeftHandSide.module.css";

type Props = {};

const LeftHandSide = (props: Props) => {
  return (
    <div className={lhsStyle.lhsContainer}>
      <Balance />
      <SalesActivity />
    </div>
  );
};

export default LeftHandSide;
