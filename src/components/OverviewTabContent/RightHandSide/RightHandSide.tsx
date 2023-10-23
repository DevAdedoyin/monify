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
        <SalesData />
        <SalesData />
        <div className={rhsStyle.analyseButtonContainer}>
          <FaPrint style={{ backgroundColor: "transparent" }} />
          <p className={rhsStyle.printTxt}>Print Analysis</p>{" "}
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default RightHandSide;
