"use client";
import dynamic from "next/dynamic";
import React from "react";

// Dynamically import Chart to avoid SSR issues
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const PolarAreaChart = () => {
  const options = {
    chart: {
      type: "pie",
    },
    series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
    stroke: {
      colors: ["#fff"],
    },
    fill: {
      opacity: 0.8,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  return (
    <div id="chart">
      <Chart options={options} series={options.series} type="pie"  />
    </div>
  );
};

export default PolarAreaChart;
