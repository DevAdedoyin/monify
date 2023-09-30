import React from "react";
import BalanceStyle from "./BalanceCompnent.module.css";

type Props = {
  title: string;
  icon: string;
  balance: string;
  rate: string;
  color: string;
};

const BalanceComponent = (props: Props) => {
  return (
    <div
      className={BalanceStyle.balanceItemContainer}
      style={{ backgroundColor: props.color }}
    >
      <div className={BalanceStyle.iconContainer}>
        <img src={props.icon} className={BalanceStyle.balIcon} />
      </div>
      <div className={BalanceStyle.balanceRateContainer}>
        <p className={BalanceStyle.balTitle}>{props.title}</p>
        <h3 className={BalanceStyle.balance}>
          {props.balance}
          <span className={BalanceStyle.balRate}>{props.rate}</span>
        </h3>
      </div>
    </div>
  );
};

export default BalanceComponent;
