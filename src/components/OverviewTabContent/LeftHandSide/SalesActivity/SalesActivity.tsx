import React from "react";
import SalesActivityTab from "./SalesActivityTab";
import SalesActivityStyle from "./SalesActivity.module.css";
import SalesGenerated from "./SalesGenerated";
import Charts from "./Charts";

type Props = {};

const SalesActivity = (props: Props) => {
  return (
    <div className={SalesActivityStyle.salesContainer}>
      <SalesActivityTab />
      <SalesGenerated />
      <Charts />
    </div>
  );
};

export default SalesActivity;
