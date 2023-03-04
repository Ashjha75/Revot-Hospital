import React, { useState } from "react";
import BarChart from "./BarChart";
import { motion } from "framer-motion";
import LineChart from "./LineChart";
import { Data } from "./ChartDatas.js";
const ReportsData = () => {
  const [userData] = useState({
    labels: Data.map((data) => data.year),
    datasets: [
      {
        label: "Number Of Patients",
        data: Data.map((data) => data.userGain),
        backgroundColor: ["#add9e0", "#0f102a", "#f3ba2f", "#2a71d0"],
      },
    ],
  });
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 2 } }}
      exit={{ opacity: 0 }}
    >
      <main className="flex justify-center items-center bg-[#f4f3ef]">
        <div className="w-[65%] h-[35%] mt-28 ">
          <BarChart ChartData={userData}></BarChart>
          <LineChart ChartData={userData}></LineChart>
        </div>
      </main>
    </motion.div>
  );
};

export default ReportsData;
