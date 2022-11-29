import Axios from "axios";
import { useState, useEffect } from "react";
import Card from "./Card";

function ShipmentsTable() {
  const loadShipmentsJson = () => {
    Axios.get("http://localhost:3001/getShipments").then((response) => {
      alert("successful");
      console.log(response);
    });
  };

  return (
    <div>
      <h3>Shipments Table</h3>
      <button onClick={loadShipmentsJson}>Load Table</button>
      <h4>Table</h4>
    </div>
  );
}

export default ShipmentsTable;
