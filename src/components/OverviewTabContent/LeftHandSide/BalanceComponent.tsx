import React from "react";
import BalanceStyle from "./BalanceCompnent.module.css"

type Props = {
  title: string;
  icon: string;
  balance: string;
  rate: string;
};

const BalanceComponent = (props: Props) => {
  return (
    <div className={BalanceStyle.balanceItemContainer}>
      <div className={BalanceStyle.iconContainer}>
        <img src={props.icon} className={BalanceStyle.balIcon} />
      </div>
      <div className={BalanceStyle.balIcon}>
        <p>{props.title}</p>
        <h3>
          {props.balance}
          <span>{props.rate}</span>
        </h3>   
      </div>
    </div>
  );
};

export default BalanceComponent;
