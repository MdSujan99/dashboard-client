import TableHeading from "./TableHeading";
import TableRow from "./TableRow";
import { Table } from "react-bootstrap";
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
      <Table striped bordered hover>
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <TableRow data={Object.values(row)} />
          ))}
        </tbody>
      </Table>
      {/* <TableHeading columns={columns} />
      <TableBody rows={rows} /> */}
    </div>
  );
}

export default ShipmentsTable;
