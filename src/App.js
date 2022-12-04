import { useState, useEffect } from "react";
import Axios from "axios";

import ShipmentsBetweenTwoDates from "./ShipmentsBetweenTwoDates";
// import MostReliableCarrier from "./MostReliableCarrier";
import ShipmentsTable from "./ShipmentsTable";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [apiUri, setApiUri] = useState("http://localhost:8080/shipment/track/");
  const [isLoading, setIsLoading] = useState(true);
  const [loadedData, setLoadedData] = useState([]);

  const getApi =
    "http://localhost:8080/shipment/tracking?promiseDate=2022-12-05";
  const postApi = "http://localhost:8080/shipment/track/";

  const handleGet = (event) => {
    event.preventDefault();
    console.log("updating the uri");

    setApiUri(getApi);
    // uri = "http://localhost:8080/shipment/tracking?promiseDate=2022-12-04"
  };

  const offlineResponse = [
    {
      orderId: 1001001,
      shipmentId: "1001001",
      tenant: "nextuple",
      orderDateTime: "2022-10-31T07:00:00",
      promiseDate: "2022-12-04",
      shipDateTime: "2022-11-05T00:00:00",
      packageWeight: "1.1 lbs",
      deliveryAddressZipCode: "273008",
      carrier: "fedex",
      trackingNumber: "149331877648230",
      shipmentStatus: "In transit",
      deliveredDate: "2023-12-31T00:00:00",
    },
    {
      orderId: 1001002,
      shipmentId: "1001002",
      tenant: "nextuple",
      orderDateTime: "2022-10-31T07:00:00",
      promiseDate: "2022-12-04",
      shipDateTime: "2022-11-05T00:00:00",
      packageWeight: "1.0 lbs",
      deliveryAddressZipCode: "273008",
      carrier: "dhl",
      trackingNumber: "1234567890",
      shipmentStatus: "out for delivery",
      deliveredDate: "2022-09-01T00:00:00",
    },
    {
      orderId: 1001003,
      shipmentId: "1001003",
      tenant: "nextuple",
      orderDateTime: "2022-10-31T07:00:00",
      promiseDate: "2022-12-04",
      shipDateTime: "2022-11-05T00:00:00",
      packageWeight: "1.0 lbs",
      deliveryAddressZipCode: "273008",
      carrier: "dhl",
      trackingNumber: "123456789",
      shipmentStatus: "delivered",
      deliveredDate: "2022-03-18T09:59:59",
    },
    {
      orderId: 1001004,
      shipmentId: "1001004",
      tenant: "nextuple",
      orderDateTime: "2022-10-31T07:00:00",
      promiseDate: "2022-12-04",
      shipDateTime: "2022-11-05T00:00:00",
      packageWeight: "1.0 lbs",
      deliveryAddressZipCode: "273008",
      carrier: "fedex",
      trackingNumber: "403934084723025",
      shipmentStatus: "In transit",
      deliveredDate: "2023-12-31T00:00:00",
    },
    {
      orderId: 1001005,
      shipmentId: "1001005",
      tenant: "nextuple",
      orderDateTime: "2022-10-31T07:00:00",
      promiseDate: "2022-12-04",
      shipDateTime: "2022-11-05T00:00:00",
      packageWeight: "1.0 lbs",
      deliveryAddressZipCode: "273008",
      carrier: "fedex",
      trackingNumber: "377101283611590",
      shipmentStatus: "Delivery exception",
      deliveredDate: "2023-12-31T00:00:00",
    },
    {
      orderId: 1001006,
      shipmentId: "1001006",
      tenant: "nextuple",
      orderDateTime: "2022-10-31T07:00:00",
      promiseDate: "2022-12-04",
      shipDateTime: "2022-11-05T00:00:00",
      packageWeight: "1.0 lbs",
      deliveryAddressZipCode: "273008",
      carrier: "dhl",
      trackingNumber: "123456781",
      shipmentStatus: "delivered",
      deliveredDate: "2022-08-05T19:35:00",
    },
  ];

  const batchRequest = {
    mainRequest: [
      {
        orderId: 1001004,
        shipmentId: "1001004",
        tenant: "nextuple",
        orderDateTime: "2022-10-31T07:00:00",
        promiseDate: "2022-12-05",
        shipDateTime: "2022-11-05T00:00:00",
        packageWeight: "1.0 lbs",
        deliveryAddressZipCode: "273008",
        carrier: "fedex",
        trackingNumber: "403934084723025",
        shipmentStatus: "",
        deliveredDate: "",
      },
      {
        orderId: 1001005,
        shipmentId: "1001005",
        tenant: "nextuple",
        orderDateTime: "2022-10-31T07:00:00",
        promiseDate: "2022-12-05",
        shipDateTime: "2022-11-05T00:00:00",
        packageWeight: "1.0 lbs",
        deliveryAddressZipCode: "273008",
        carrier: "fedex",
        trackingNumber: "377101283611590",
        shipmentStatus: "",
        deliveredDate: "",
      },
    ],
  };

  useEffect(() => {
    setIsLoading(true);
    if (apiUri === getApi) {
      // perform get call
      console.log("perfomring date filter");
      Axios.get(apiUri)
        .then((response) => {
          console.log("get successful; response:");
          console.log(response);
          return response.data;
        })
        .then((data) => {
          setIsLoading(false);
          console.log("data:");
          console.log(data);
          setLoadedData(data);
        })
        .catch((err) => {
          setIsLoading(false);
          console.log(err);
          console.log("api error: using offlineResponse");
          setLoadedData(offlineResponse);
        });
    } else if (apiUri === postApi) {
      // perform post call
      console.log("perfomring track shipments");
      Axios.post(apiUri, batchRequest)
        .then((response) => {
          console.log("post successful; response:");
          console.log(response);
          return response.data;
        })
        .then((data) => {
          setIsLoading(false);
          console.log("data:");
          console.log(data);
          setLoadedData(data);
        })
        .catch((err) => {
          setIsLoading(false);
          console.log(err);
          console.log("api error: using offlineResponse");
          setLoadedData(offlineResponse);
        });
    } else {
      console.log("something wrong with apiUri: " + apiUri);
    }

    // get the json result of all record in table shipments
  }, [apiUri]);

  if (isLoading) {
    return <h1>Loading Dashboard</h1>;
  }

  return (
    <div className="App">
      <Container className="m-0">
        <Row>
          <Col>
            <Card className="m-3">
              <ShipmentsBetweenTwoDates data={loadedData} />
              {/* <ShipmentsBetweenTwoDates trackResults={offlineResponse} /> */}
            </Card>
          </Col>
          <Col>
            <Card className="m-3">
              {/* <MostReliableCarrier data={loadedData} /> */}
              <form onSubmit={handleGet}>
                <Form.Group className="m-2">
                  <Form.Label htmlFor="inputDate">Promise Date</Form.Label>
                  <Form.Control id="inputDate" type="date" />
                  <Button type="submit" variant="primary" className="m-2">
                    Get
                  </Button>
                </Form.Group>
              </form>
            </Card>
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
