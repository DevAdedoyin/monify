import React from "react";
import SalesActivityTab from "./SalesActivityTab";
import SalesActivityStyle from "./SalesActivity.module.css";
import SalesGenerated from "./SalesGenerated";

type Props = {};

const SalesActivity = (props: Props) => {
  return (
    <div className={SalesActivityStyle.salesContainer}>
      <SalesActivityTab />
      <SalesGenerated />
    </div>
  );
};

export default SalesActivity;
