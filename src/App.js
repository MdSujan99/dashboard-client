import ShipmentsTable from "./ShipmentsTable.js";
import ShipmentsBetweenTwoDates from "./ShipmentsBetweenTwoDates";

import "./App.css";

import Card from "./Card.js";

function App() {
  return (
    <div className="App">
      <Card>
        <ShipmentsTable />
      </Card>
      {/* <Card>
        <ShipmentsBetweenTwoDates />
      </Card> */}
    </div>
  );
}

export default App;
