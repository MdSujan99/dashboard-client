import TableRow from "./TableRow";

function TableBody(props) {
  // console.log(props.rows);
  return (
    <div>
      {props.rows.map((item, index) => (
        <TableRow row={item} />
      ))}
    </div>
  );
}

export default TableBody;
