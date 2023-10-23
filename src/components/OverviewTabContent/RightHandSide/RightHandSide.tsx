import React from "react";
import Payment from "./Payment/Payment";
import rhsStyle from "./RightHandSide.module.css";
import Revenue from "./Revenue/Revenue";
import SalesData from "./SalesData/SalesData";
import { Button } from "@material-ui/core";
import { FaPrint } from "react-icons/fa";
import { IconContext } from "react-icons";

type Props = {};

const RightHandSide = (props: Props) => {
  return (
    <IconContext.Provider value={{ color: "black" }}>
      <div className={rhsStyle.rhsContainer}>
        <Payment />
        <Revenue />
        <SalesData year="2023" amount="£50.94 GBP" rate="+3.20" />
        <SalesData year="2022" amount="£40.94 GBP" rate="+2.54" />
        <div className={rhsStyle.analyseButtonContainer}>
          <FaPrint style={{ backgroundColor: "transparent" }} />
          <p className={rhsStyle.printTxt}>Generate Report</p>{" "}
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default RightHandSide;
