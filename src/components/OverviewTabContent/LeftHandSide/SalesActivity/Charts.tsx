import React from "react";
import {
  Tooltip,
  Legend,
  YAxis,
  XAxis,
  CartesianGrid,
  Line,
  LineChart,
} from "recharts";

type Props = {};

const Charts = (props: Props) => {
  const data = [
    { name: "Jan", amount: 10 },
    { name: "Feb", amount: 25 },
    { name: "Mar", amount: 20 },
    { name: "Apr", amount: 45 },
    { name: "May", amount: 50 },
    { name: "Jun", amount: 40 },
    { name: "Jul", amount: 20 },
    { name: "Aug", amount: 10 },
    { name: "Sept", amount: 12 },
    { name: "Oct", amount: 55 },
  ];

  return (
    <div>
      <LineChart width={800} height={300} data={data}>
        <Line
          type="monotone"
          dataKey="amount"
          stroke="#00FF7F"
          strokeWidth={2}
        />
        <CartesianGrid stroke="ccc" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
      </LineChart>
    </div>
  );
};

export default Charts;
