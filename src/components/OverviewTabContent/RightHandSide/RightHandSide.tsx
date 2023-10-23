import React from "react";
import Payment from "./Payment/Payment";
import rhsStyle from "./RightHandSide.module.css";
import Revenue from "./Revenue/Revenue";
import SalesData from "./SalesData/SalesData";
import { Button } from "@material-ui/core";
import { FaPrint } from "react-icons/fa";

type Props = {};

const RightHandSide = (props: Props) => {
  return (
    <div className={rhsStyle.rhsContainer}>
      <Payment />
      <Revenue />
      <SalesData />
      <SalesData />
      <div className={rhsStyle.analyseButtonContainer}>
        <FaPrint style={{ backgroundColor: "transparent" }} color="#000" />
        <p className={rhsStyle.printTxt}>Print Analysis</p>{" "}
      </div>
    </div>
  );
};

export default RightHandSide;
