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
        display: false, // Hide vertical grid lines
      },
    },

    y: {
      border: { dash: [4, 4] },
      grid: {
        color: "grey", // Change the color of horizontal grid lines
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
    },
  ],
};

type Props = {};

function SalesChart({}: Props) {
  return (
    <div
      style={{
        width: "100%",
        height: 300,
        display: "block",
        backgroundColor: "transparent",
      }}
    >
      <Line
        options={options}
        data={data}
        style={{ backgroundColor: "transparent" }}
      />
    </div>
  );
}

export default SalesChart;
