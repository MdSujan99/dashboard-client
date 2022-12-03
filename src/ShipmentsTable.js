import Axios from "axios";
import { useState, useEffect } from "react";
// import ShipmentList from "./ShipmentList.js";s
import Table from "./Table.js";
import Button from "react-bootstrap/Button";

function ShipmentsTable() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedData, setLoadedData] = useState([]);

  // var shipments = [];

  useEffect(() => {
    setIsLoading(true);
    // get the json result of all record in table shipments
    Axios.post(
      "http://localhost:8080/shipment/track/",
      {
        mainRequest: [
          {
            orderId: 1001001,
            shipmentId: "1001001",
            tenant: "nextuple",
            orderDateTime: "2022-10-31T07:00:00",
            promiseDate: "2022-11-10",
            shipDateTime: "2022-11-05T00:00:00",
            packageWeight: "1.1 lbs",
            deliveryAddressZipCode: "273008",
            carrier: "DHL",
            trackingNumber: "1234567890",
            shipmentStatus: "",
            deliveredDate: "",
          },
        ],
      }
      // {
      //   headers: { "Access-Control-Allow-Origin": "*" },
      // }
    )
      .then((response) => {
        console.log("successful");
        console.log(response);
        return response.data;
      })
      .then((data) => {
        setIsLoading(false);
        console.log("data:");
        console.log(data[0]);
        setLoadedData(data[0]);
      });
  }, []);

  if (isLoading) {
    return <p>Loading table data</p>;
  }

  const columns = [
    // { heading: " orderId " },
    { heading: " shipmentId " },
    { heading: " tenant " },
    { heading: " orderDateTime " },
    { heading: " promiseDate " },
    { heading: " shipDateTime " },
    { heading: " packageWeight " },
    { heading: " deliveryAddressZipCode " },
    { heading: " carrier " },
    { heading: " trackingNumber " },
    { heading: " shipmentStatus " },
    { heading: " deliveredDate " },
  ];

  return (
    <div>
      {/* <ShipmentList shipments={loadedData} /> */}
      <Table
        columns={Object.keys(loadedData)}
        // columns={columns}
        data={loadedData}
        // data={Object.values(loadedData)}
      />
      <Button>Reload Shipments Table</Button>
    </div>
  );
}

export default ShipmentsTable;
