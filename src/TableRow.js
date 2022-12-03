function TableRow({ tuple }) {
  return (
    <tr>
      {tuple.map((item, index) => {
        <td>item</td>;
      })}
    </tr>
  );
}

export default TableRow;
