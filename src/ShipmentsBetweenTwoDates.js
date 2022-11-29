import Axios from "axios";
import { useState, useEffect } from "react";

function ShipmentsBetweenTwoDates() {
  const [startDate, setStartDate] = useState("");
  const [endtDate, setEndtDate] = useState("");
  return (
    <div className="card">
      <h3>Shipments Between Two Dates</h3>
      <label>Start Date</label>
      <input type={Date} name="startDate"></input>
      <label>End Date</label>
      <input type={Date} name="endDate"></input>
      <button>Load Table</button>
    </div>
  );
}

export default ShipmentsBetweenTwoDates;
