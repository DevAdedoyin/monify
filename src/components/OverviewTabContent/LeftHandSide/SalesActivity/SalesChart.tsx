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
  plugins: {
    legend: {
      position: "bottom",
    },
  },
};

export const data = {
  labels,
  datasets: [
    {
      label: "React",
      data: [10, 20, 15, 35, 9, 45, 20, 49, 23, 45],
      backgroundColor: "#2196F3",
      borderColor: "#2196F3",
    },
  ],
};

type Props = {};

function SalesChart({}: Props) {
  return (
    <div style={{ width: 600, height: 300 }}>
      <Line data={data} />
    </div>
  );
}

export default SalesChart;
