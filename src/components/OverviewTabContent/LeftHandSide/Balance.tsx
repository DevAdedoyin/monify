import React from "react";
import BalanceComponent from "./BalanceComponent";
import avbal from "../../../assets/images/avbal.png";
import penbal from "../../../assets/images/penbal.png";

type Props = {};

const Balance = (props: Props) => {
  const balanceContent = [
    {
      title: "Available Balance",
      icon: avbal,
      balance: "£20,435",
      rate: "↑ 8.0",
    },
    {
      title: "Pending Balance",
      icon: penbal,
      balance: "£3,478",
      rate: "↓ 2.0",
    },
  ];
  return (
    <div>
      {balanceContent.map((data, index) => {
        return (
          <BalanceComponent
            title={data.title}
            icon={data.icon}
            balance={data.balance}
            rate={data.rate}
          />
        );
      })}
    </div>
  );
};

export default Balance;
