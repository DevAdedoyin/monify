import React from "react";
import tspTable from "./TopSellingProductTable.module.css";
import { FaPaypal, FaCreditCard } from "react-icons/fa";

type Props = {};

const TopSellingProductTable = (props: Props) => {
  const tableData = {
    headerTitle: ["PRODUCT NAME", "DATE", "TRANSACTION ID", "AMOUNT", "SALES"],
    tableItem: [
      {
        icon: FaPaypal,
        paymentTitle: "Paypal Payment",
        transactionType: "Withdraw",
        date: "Jan 18, 2023",
        time: "09:30 PM",
        transactionId: "Pay-3083-23",
        amount: "12,409 GBP",
        sales: "Delivered",
        color: "plum",
      },
      {
        icon: FaCreditCard,
        paymentTitle: "Mercury Inc",
        transactionType: "Transfered",
        date: "Dec 12, 2022",
        time: "23:12 PM",
        transactionId: "Mer-1249-23",
        amount: "8,456 GBP",
        sales: "Delivered",
        color: "#00FF7F",
      },
    ],
  };
  return (
    <div className={tspTable.tableHeaderContainer}>
      <table>
        <tr className={tspTable.tableHeaderRow}>
          {tableData.headerTitle.map((data, index) => {
            return (
              <th className={tspTable.tableHeader} key={index}>
                {index === 0 ? (
                  <div className={tspTable.checkInputIndex1Container}>
                    <div className={tspTable.checkInputIndex1InnerContainer}>
                      <div className={tspTable.checkInput}></div>
                      {data}
                    </div>
                  </div>
                ) : (
                  <p className={tspTable.headerData}>{data}</p>
                )}
              </th>
            );
          })}
        </tr>
        {tableData.tableItem.map((data, index) => {
          return (
            <tr
              key={index}
              style={{
                borderBottom:
                  index === 0 ? "1px solid rgba(70, 67, 67, 0.6)" : "",
              }}
            >
              <td>
                <div className={tspTable.prdNameContainer}>
                  <div className={tspTable.prdNameInnerContainer}>
                    <div className={tspTable.checkInput}></div>
                    <div
                      style={{ backgroundColor: data.color }}
                      className={tspTable.tspIconBackground}
                    >
                      <data.icon
                        color="black"
                        fill="black"
                        style={{
                          height: "0.7rem",
                          width: "0.7rem",
                          backgroundColor: "transparent",
                        }}
                      />
                    </div>

                    <div className={tspTable.tspPaymentContainer}>
                      <p className={tspTable.paymentTitle}>
                        {data.paymentTitle}
                      </p>
                      <p className={tspTable.transactionType}>
                        {data.transactionType}
                      </p>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className={tspTable.dateTimeContainer}>
                  <p className={tspTable.tspDate}>{data.date}</p>
                  <p className={tspTable.tspTime}>{data.time}</p>
                </div>
              </td>
              <td className={tspTable.transactionId}>{data.transactionId}</td>
              <td className={tspTable.tspAmount}>{data.amount}</td>
              <td>
                <p className={tspTable.tspSales}>{data.sales}</p>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default TopSellingProductTable;
