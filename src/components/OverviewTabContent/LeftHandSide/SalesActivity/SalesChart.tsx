import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import salesChartStyle from "./SalesChart.module.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
];

const options = {
  scales: {
    x: {
      grid: {
        display: false,
      },
    },

    y: {
      border: { dash: [4, 4] },
      grid: {
        color: "grey",
        tickWidth: 2,
        tickBorderDash: [2, 3],
        tickLength: 10,
        offset: true,
      },
      //   borderDash: [10, 10],
      beginAtZero: true, // Start the Y-axis at zero
    },
  },
};

export const data = {
  labels,
  datasets: [
    {
      label: "Sales($ thousands)",
      data: [10, 25, 20, 45, 50, 45, 40, 20, 10, 12, 55],
      backgroundColor: "transparent",
      borderColor: "#00FF7F",
      tension: 0.4,
      //   borderWidth: "100%",
    },
  ],
};

type Props = {};

function SalesChart({}: Props) {
  return (
    <div className={salesChartStyle.salesChartContainer}>
      <Line
        options={options}
        data={data}
        style={{ backgroundColor: "transparent" }}
      />
    </div>
  );
}

export default SalesChart;
