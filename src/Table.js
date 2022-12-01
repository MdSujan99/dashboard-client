import TableHeading from "./TableHeading";
import TableRow from "./TableRow";

function Table({ data, columns }) {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((item, index) => (
            <TableHeading item={item} />
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
