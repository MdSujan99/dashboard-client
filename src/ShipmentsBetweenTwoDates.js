import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function ShipmentsBetweenTwoDates() {
  const [startDate, setStartDate] = useState("");
  const [endtDate, setEndtDate] = useState("");

  return (
    <Form>
      <Form.Label for>Start Date</Form.Label>
      <Form.Control type="date" />
      <Form.Label>End Date</Form.Label>
      <Form.Control type="date" />
      <Button>Get View</Button>
    </Form>
  );
}

export default ShipmentsBetweenTwoDates;
