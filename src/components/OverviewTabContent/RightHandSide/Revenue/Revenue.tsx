import React from "react";
import RevenueStyle from "./Revenue.module.css"

type Props = {};

const Revenue = (props: Props) => {
  return (
    <div className={RevenueStyle.revenueContainer}>
      <div className={RevenueStyle.productAndRevenueContainer}>
        <div className={RevenueStyle.totalProductContainer}>
          <p className={RevenueStyle.totalProductHeader}>Total Product</p>
          <h3 className={RevenueStyle.totalProduct}>29.2k</h3>
        </div>
        <div className={RevenueStyle.totalProductContainer}>
          <p className={RevenueStyle.totalProductHeader}>Revenue</p>
          <h3 className={RevenueStyle.totalProduct}>£5,029,290</h3>
        </div>
      </div>
      <div className={RevenueStyle.totalProductContainer}>
        <p className={RevenueStyle.totalProductHeader}>
          Total Collection This Month
        </p>
        <h3 className={RevenueStyle.totalProduct}>2.9M</h3>
      </div>
      <div className={RevenueStyle.revenueColorCodeContainer}>
        <div className={RevenueStyle.greenCode}></div>
        <div className={RevenueStyle.goldenYellowCode}></div>
        <div className={RevenueStyle.blackCode}></div>
      </div>
    </div>
  );
};

export default Revenue;
