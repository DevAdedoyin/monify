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
    { name: "2017", react: 34, angular: 43, vue: 60 },
    { name: "2018", react: 44, angular: 42, vue: 50 },
    { name: "2019", react: 51, angular: 41, vue: 54 },
    { name: "2020", react: 60, angular: 37, vue: 28 },
    { name: "2021", react: 51, angular: 31, vue: 27 },
    { name: "2022", react: 95, angular: 44, vue: 49 },
  ];

  return (
    <div>
      <LineChart width={600} height={300} data={data}>
        <Line
          type="monotone"
          dataKey="react"
          stroke="#2196f3"
          strokeWidth={3}
        />
        <Line
          type="monotone"
          dataKey="react"
          stroke="#f44236"
          strokeWidth={3}
        />
        <Line
          type="monotone"
          dataKey="react"
          stroke="#ffca29"
          strokeWidth={3}
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
