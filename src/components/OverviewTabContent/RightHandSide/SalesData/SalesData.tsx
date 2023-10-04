import React from "react";
import { FaAngleUp } from "react-icons/fa";
import SalesStyle from "./SalesData.module.css";


type Props = {};

const SalesData = (props: Props) => {
  return (
    <div className={SalesStyle.salesDataContainer}>
      <h3 className={SalesStyle.salesDataTxt}>Sales Data</h3>
      <div className={SalesStyle.yearContainer}>
        <p className={SalesStyle.yearHeader}>Yearly</p>
        <p className={SalesStyle.year}>2023</p>
      </div>
      <div className={SalesStyle.salesDataRateContainer}>
        <p className={SalesStyle.ratePrice}>£40.94 USD</p>
        <p className={SalesStyle.rate}>+2.54</p>

        <FaAngleUp
          className={SalesStyle.salesIconColor}
          fill="green"
          style={{ backgroundColor: "transparent" }}
        />
      </div>
      <div className={SalesStyle.containerOfColors}>
        <div className={SalesStyle.sunContainer}>
          <p className={SalesStyle.dayOfTheWeek}>Sun</p>
          <div className={SalesStyle.sunColorCode}></div>
        </div>
        <div className={SalesStyle.monContainer}>
          <p className={SalesStyle.dayOfTheWeek}>Mon</p>
          <div className={SalesStyle.monColorCode}></div>
        </div>
        <div className={SalesStyle.tueContainer}>
          <p className={SalesStyle.dayOfTheWeek}>Tue</p>
          <div className={SalesStyle.tueColorCode}></div>
        </div>
        <div className={SalesStyle.wedContainer}>
          <p className={SalesStyle.dayOfTheWeek}>Wed</p>
          <div className={SalesStyle.wedColorCode}></div>
        </div>
        <div className={SalesStyle.thuContainer}>
          <p className={SalesStyle.dayOfTheWeek}>Thu</p>
          <div className={SalesStyle.thuColorCode}></div>
        </div>
        <div className={SalesStyle.friContainer}>
          <p className={SalesStyle.dayOfTheWeek}>Fri</p>
          <div className={SalesStyle.friColorCode}></div>
        </div>
        <div className={SalesStyle.satContainer}>
          <p className={SalesStyle.dayOfTheWeek}>Sat</p>
          <div className={SalesStyle.satColorCode}></div>
        </div>
      </div>
      <div className={SalesStyle.yearRange}>Sept 30th - Oct 30, 2023</div>
    </div>
  );
};

export default SalesData;
