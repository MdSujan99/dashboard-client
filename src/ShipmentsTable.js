import TableHeading from "./TableHeading";
import TableBody from "./TableBody";
// import Button from "react-bootstrap/Button";

function ShipmentsTable(props) {
  console.log("props.data");
  console.log(props.data);
  const columns = Object.keys(props.data[0]);
  const rows = props.data;
  console.log("columns", columns);
  console.log("rows", rows);
  return (
    <div>
      <h2>TrackingInfo</h2>
      <TableHeading columns={columns} />
      <TableBody rows={rows} />
    </div>
  );
}

export default ShipmentsTable;
