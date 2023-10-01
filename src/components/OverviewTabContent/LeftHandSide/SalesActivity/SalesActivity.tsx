import React from "react";
import SalesActivityTab from "./SalesActivityTab";
import SalesActivityStyle from "./SalesActivity.module.css";

type Props = {};

const SalesActivity = (props: Props) => {
  return (
    <div className={SalesActivityStyle.salesContainer}>
      <SalesActivityTab />
    </div>
  );
};

export default SalesActivity;
