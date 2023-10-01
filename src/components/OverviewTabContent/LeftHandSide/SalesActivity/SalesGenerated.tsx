import React from "react";
import sgStyle from "./SalesGenerated.module.css"

type Props = {};

const SalesGenerated = (props: Props) => {
  return (
    <div className={sgStyle.sgcontainer}>
      <div className={sgStyle.sgAmountContainer}>
        <p className={sgStyle.sgTitle}>Sales Generated</p>
        <h2 className={sgStyle.sgAmount}>£32,419 GBP</h2>
      </div>
      <div className={sgStyle.sgReportContainer}>
        <p className={sgStyle.sgReport}>View Report</p>
      </div>
    </div>
  );
};

export default SalesGenerated;
