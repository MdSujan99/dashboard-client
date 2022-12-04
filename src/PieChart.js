// import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { Chart } from "react-google-charts";
import moment from "moment";

function PieChart(props) {
  // const [startDate, setStartDate] = useState("");
  // const [endtDate, setEndtDate] = useState("");

  console.log("data");
  console.log(props.data);

  var ontime = 0;
  var early = 0;
  var late = 0;
  var unknown = 0;

  props.data.forEach((result) => {
    const promiseDate = moment(result.promiseDate);
    const actualDate = moment(result.deliveredDate.substring(0, 10));
    // console.log("promiseDate: " + promiseDate);
    // console.log("actualDate: " + actualDate);
    const diff = actualDate.diff(promiseDate, "days");
    // console.log("diff: " + diff);
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

  console.log("ontime: " + ontime);
  console.log("late: " + late);
  console.log("early: " + early);
  console.log("unknown: " + unknown);

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
    // <Form>
    //   <Form.Label for>Start Date</Form.Label>
    //   <Form.Control type="date" />
    //   <Form.Label>End Date</Form.Label>
    //   <Form.Control type="date" />
    //   <Button>Get View</Button>
    // </Form>
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
