import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const BarChart = ({ ChartData }) => {
  return (
    <div className="scale-110 md:scale-75   mt-10 mb-24">
      <Bar data={ChartData} height={330} />
    </div>
  );
};

export default BarChart;
