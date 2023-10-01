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
                  <div className={tspTable.headerPos1}>
                    <div className={tspTable.checkInput}></div>
                    <p className={tspTable.prdName}>{data}</p>
                  </div>
                ) : (
                  data
                )}
              </th>
            );
          })}
        </tr>
        {tableData.tableItem.map((data, index) => {
          return (
            <tr key={index}>
              <td>
                <div>
                  <data.icon />
                  <p>{data.paymentTitle}</p>
                  <p>{data.transactionType}</p>
                </div>
              </td>
              <td>
                <div>
                  <p>{data.date}</p>
                  <p>{data.time}</p>
                </div>
              </td>
              <td>{data.transactionId}</td>
              <td>{data.amount}</td>
              <td>{data.sales}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default TopSellingProductTable;
