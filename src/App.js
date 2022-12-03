import { useState, useEffect } from "react";
import Axios from "axios";

import ShipmentsBetweenTwoDates from "./ShipmentsBetweenTwoDates";
import MostReliableCarrier from "./MostReliableCarrier";
import ShipmentsTable from "./ShipmentsTable";
import { Container, Row, Col } from "react-bootstrap";

// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedData, setLoadedData] = useState([]);

  const batchRequest = {
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
        carrier: "Fedex",
        trackingNumber: "149331877648230",
        shipmentStatus: "",
        deliveredDate: "",
      },
      {
        orderId: 1001002,
        shipmentId: "1001002",
        tenant: "nextuple",
        orderDateTime: "2022-10-31T07:00:00",
        promiseDate: "2022-11-10",
        shipDateTime: "2022-11-05T00:00:00",
        packageWeight: "1.0 lbs",
        deliveryAddressZipCode: "273008",
        carrier: "DHL",
        trackingNumber: "1234567890",
        shipmentStatus: "",
        deliveredDate: "",
      },
    ],
  };

  const trackShipmentsUri = "http://localhost:8080/shipment/track/";

  useEffect(() => {
    setIsLoading(true);
    // get the json result of all record in table shipments
    Axios.post(trackShipmentsUri, batchRequest)
      .then((response) => {
        console.log("successful; response:");
        console.log(response);
        return response.data;
      })
      .then((data) => {
        setIsLoading(false);
        console.log("data:");
        console.log(data);
        setLoadedData(data);
      });
  }, []);

  if (isLoading) {
    return <p>Loading table data</p>;
  }

  return (
    <div>
      <Container className="bg-grey">
        <Row>
          <Col>
            <ShipmentsBetweenTwoDates data={loadedData} />
          </Col>
          <Col>
            <MostReliableCarrier
              carrier={"testCarrier"}
              countDeliveredOnTime={"x"}
              countPromised={"y"}
              data={loadedData}
            />
          </Col>
        </Row>
        <Row>
          <ShipmentsTable data={loadedData} />
        </Row>
      </Container>
    </div>
  );
}

export default App;
