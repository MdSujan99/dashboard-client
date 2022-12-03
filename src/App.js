import ShipmentsTable from "./ShipmentsTable.js";
import ShipmentsBetweenTwoDates from "./ShipmentsBetweenTwoDates";

// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="m-3">
      <ShipmentsTable />
      <ShipmentsBetweenTwoDates />
    </div>
  );
}

export default App;
