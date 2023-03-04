import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = ({ ChartData }) => {
  return (
    <div className="scale-110 md:scale-75  mb-48">
      <Line data={ChartData} height={330}></Line>
    </div>
  );
};

export default LineChart;
