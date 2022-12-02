import Axios from "axios";
import DatePicker from "react-date-picker";
import { useState, useEffect } from "react";
// import ShipmentList from "./ShipmentList.js";s
import Table from "./Table.js";

function ShipmentsBetweenTwoDates() {
  const [startDate, setStartDate] = useState(new Date());
  const [loadedData, setLoadedData] = useState([]);

  // var shipments = [];

  useEffect(() => {
    setIsLoading(true);
    // get the json result of all record in table shipments
    Axios.get("http://localhost:3001/getShipmentsBetweenTwoDeliveryDates", {
      startDate: startDate,
      endDate: endDate,
    })
      // all shipments between two dates
      .then((response) => {
        console.log("successful");
        console.log(response);
        return response.data;
      })
      .then((data) => {
        setIsLoading(false);
        console.log(data);
        setLoadedData(data);
      });
  }, []);

  if (isLoading) {
    return <p>Loading table data</p>;
  }

  const columns = [
    { heading: "Id" },
    { heading: "Carrier" },
    { heading: "Status" },
    { heading: "Promised Date" },
    { heading: "Delivery Date" },
  ];

  return (
    <div>
      <DatePicker />
      {/* <ShipmentList shipments={loadedData} /> */}
      {/* <Table data={loadedData} columns={columns} /> */}
    </div>
  );
}

export default ShipmentsBetweenTwoDates;
