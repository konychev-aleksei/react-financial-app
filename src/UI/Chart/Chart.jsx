import React from "react";
import style from "./style.module.scss";
import ReactApexChart from "react-apexcharts";

export const StyledChart = ({ data }) => {
  let amounts = [],
    dates = [];

  if (data.length) {
    amounts[data.length - 1] = data[data.length - 1].amount;
    for (let i = data.length - 2; i >= 0; --i) {
      amounts[i] = amounts[i + 1] + data[i].amount;
    }
  }

  dates = data.map((item) => item.date);

  const chartData = {
    series: [
      {
        name: "Amount",
        data: amounts,
      },
    ],
    options: {
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: dates,
      },
      fill: {
        type: "gradient",
        gradient: {
          gradientToColors: ["#fe6b8b"],
          shadeIntensity: 1,
          type: "horizontal",
          opacityFrom: 1,
          opacityTo: 1,
          stops: [1000],
        },
      },
    },
  };

  return (
    <div className={style.wrapper}>
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type={"line"}
        height={"100%"}
      />
    </div>
  );
};
