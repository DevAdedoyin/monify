import React from "react";
import tspStyle from "./TopSellingProducts.module.css";
import { GoKebabHorizontal } from "react-icons/go";
import TopSellingProductTable from "./TopSellingProductTable";

type Props = {};

const TopSellingProducts = (props: Props) => {
  return (
    <div className={tspStyle.tspContainer}>
      <div className={tspStyle.tspHeaderContainer}>
        <p className={tspStyle.tspTitle}>Top Selling Products</p>
        <GoKebabHorizontal
          style={{ color: "white", backgroundColor: "transparent" }}
        />
      </div>
      <TopSellingProductTable />
    </div>
  );
};

export default TopSellingProducts;
