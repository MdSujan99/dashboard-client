import Axios from "axios";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
function ShipmentsBetweenTwoDates() {
  const [startDate, setStartDate] = useState("");
  const [endtDate, setEndtDate] = useState("");
  return (
    <Form>
      <Form.Label>Start Date</Form.Label>
      <Form.Control type="date" />
      <Form.Label>End Date</Form.Label>
      <Form.Control type="date" />
      <Button>Get View</Button>
    </Form>
    // <div className="card">
    //   <h3>Shipments Between Two Dates</h3>
    //   <label>Start Date</label>
    //   <input type={Date} name="startDate"></input>
    //   <label>End Date</label>
    //   <input type={Date} name="endDate"></input>
    //   <button>Load Table</button>
    // </div>
  );
}

export default ShipmentsBetweenTwoDates;
