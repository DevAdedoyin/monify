import React from "react";
import Balance from "./Balance/Balance";
import SalesActivity from "./SalesActivity/SalesActivity";
import lhsStyle from "./LeftHandSide.module.css";
import TopSellingProducts from "./TopSellingProducts/TopSellingProducts";

type Props = {};

const LeftHandSide = (props: Props) => {
  return (
    <div className={lhsStyle.lhsContainer}>
      <Balance />
      <SalesActivity />
      <TopSellingProducts />
    </div>
  );
};

export default LeftHandSide;
