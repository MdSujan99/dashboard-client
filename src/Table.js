import TableHeading from "./TableHeading";
import TableRow from "./TableRow";

function Table({ data, columns }) {
  console.log("data");
  console.log(data);
  console.log("columns");
  console.log(columns);
  return (
    <table>
      <thead>
        <tr>
          {columns.map((item, index) => (
            <th>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <TableRow tuple={item} />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
