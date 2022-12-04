// import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { Chart } from "react-google-charts";
import moment from "moment";

function PieChart(props) {
  console.log("data");
  console.log(props.data);

  var ontime = 0;
  var early = 0;
  var late = 0;
  var unknown = 0;

  props.data.forEach((result) => {
    const promiseDate = moment(result.promiseDate);
    const actualDate = moment(result.deliveredDate.substring(0, 10));
    const diff = actualDate.diff(promiseDate, "days");
    if (diff === 0) {
      ontime++;
    } else if (diff < 0) {
      early++;
    } else if (diff > 0) {
      late++;
    } else {
      unknown++;
    }
  });

  // console.log("ontime: " + ontime);
  // console.log("late: " + late);
  // console.log("early: " + early);
  // console.log("unknown: " + unknown);

  const data = [
    ["Shipments", "Delivery"],
    ["On Time Delivery", ontime],
    ["Early Delivery", early],
    ["Late Delivery", late],
    ["Unknown", unknown],
  ];

  const options = {
    title: "Shipments",
    pieSliceText: "none",
  };

  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}

export default PieChart;
