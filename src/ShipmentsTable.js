import Axios from "axios";
import { useState, useEffect } from "react";
// import ShipmentList from "./ShipmentList.js";s
import Table from "./Table.js";

function ShipmentsTable() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedData, setLoadedData] = useState([]);

  // var shipments = [];

  useEffect(() => {
    setIsLoading(true);
    // get the json result of all record in table shipments
    Axios.get("http://localhost:3001/getShipments")
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
      <h3>Shipments Table</h3>
      {/* <ShipmentList shipments={loadedData} /> */}
      <Table data={loadedData} columns={columns} />
    </div>
  );
}

export default ShipmentsTable;
