import React from "react";
import BalanceComponent from "./BalanceComponent";
import avbal from "../../../../assets/images/avbal.png";
import penbal from "../../../../assets/images/penbal.png";

type Props = {};

const Balance = (props: Props) => {
  const balanceContent = [
    {
      title: "Available Balance",
      icon: avbal,
      balance: "£20,435.23",
      rate: "↑ 8.0",
      color: "#00FF7F",
    },
    {
      title: "Pending Balance",
      icon: penbal,
      balance: "£3,478.43",
      rate: "↓ 2.0",
      color: "plum",
    },
  ];
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        paddingLeft: "2rem",
      }}
    >
      {balanceContent.map((data, index) => {
        return (
          <BalanceComponent
            title={data.title}
            icon={data.icon}
            balance={data.balance}
            rate={data.rate}
            color={data.color}
          />
        );
      })}
    </div>
  );
};

export default Balance;
